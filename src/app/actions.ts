"use server";

import { step1Schema, step2Schema } from "@/lib/validations";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import { sendStudentConfirmation, sendTeamNotification } from "@/lib/resend";

export type ActionResult = {
  success: boolean;
  id?: string;
  error?: string;
};

// Step 1 — Create candidature with coordonnées
export async function createCandidature(
  formData: FormData,
): Promise<ActionResult> {
  const raw = {
    prenom: formData.get("prenom") as string,
    nom: formData.get("nom") as string,
    email: formData.get("email") as string,
    telephone: formData.get("telephone") as string,
  };

  const parsed = step1Schema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Données invalides",
    };
  }

  try {
    const candidature = await prisma.candidature.create({
      data: parsed.data,
    });
    return { success: true, id: candidature.id };
  } catch (error) {
    console.log("error", error);
    return {
      success: false,
      error: "Erreur lors de l'enregistrement. Réessayez.",
    };
  }
}

// Step 2 — Update with filière, langue, message
export async function updateCandidature(
  id: string,
  formData: FormData,
): Promise<ActionResult> {
  const raw = {
    filiere: formData.get("filiere") as string,
    langue: formData.get("langue") as string,
    message: (formData.get("message") as string) || undefined,
  };

  const parsed = step2Schema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Données invalides",
    };
  }

  try {
    await prisma.candidature.update({
      where: { id },
      data: {
        ...parsed.data,
        message: parsed.data.message ?? null,
      },
    });
    return { success: true, id };
  } catch (error) {
    console.log("error", error);
    return {
      success: false,
      error: "Erreur lors de la mise à jour. Réessayez.",
    };
  }
}

// Step 3 — Upload bulletin + send emails
export async function finalizeCandidature(
  id: string,
  formData: FormData,
): Promise<ActionResult> {
  const candidature = await prisma.candidature.findUnique({ where: { id } });
  if (!candidature) {
    return { success: false, error: "Candidature introuvable." };
  }

  // Handle optional bulletin upload
  let bulletinUrl: string | undefined;
  const bulletin = formData.get("bulletin") as File | null;
  if (bulletin && bulletin.size > 0) {
    const ext = bulletin.name.split(".").pop();
    const path = `${Date.now()}-${candidature.prenom}-${candidature.nom}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("bulletins")
      .upload(path, bulletin, {
        contentType: bulletin.type,
        upsert: false,
      });

    if (uploadError) {
      console.log("uploadError", uploadError);
      return {
        success: false,
        error: "Erreur lors de l'upload du bulletin. Réessayez.",
      };
    }
    bulletinUrl = path;
  }

  try {
    await prisma.candidature.update({
      where: { id },
      data: {
        bulletinUrl: bulletinUrl ?? null,
        status: "submitted",
      },
    });
  } catch (error) {
    console.log("error", error);
    return {
      success: false,
      error: "Erreur lors de la finalisation. Réessayez.",
    };
  }

  // Send confirmation emails (non-blocking)
  try {
    if (candidature.filiere) {
      await Promise.all([
        sendStudentConfirmation(candidature.email, candidature.prenom, candidature.filiere),
        sendTeamNotification({
          prenom: candidature.prenom,
          nom: candidature.nom,
          email: candidature.email,
          telephone: candidature.telephone,
          filiere: candidature.filiere,
          message: candidature.message,
          bulletinUrl,
        }),
      ]);
    }
  } catch {
    console.error("Email sending failed, candidature saved successfully");
  }

  return { success: true, id };
}
