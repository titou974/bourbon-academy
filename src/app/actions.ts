"use server";

import { step1Schema, step2Schema } from "@/lib/validations";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import { sendStudentConfirmation, sendTeamNotification } from "@/lib/resend";
import { COPY } from "@/constants/fr_strings";

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
      error: parsed.error.issues[0]?.message ?? COPY.validation.invalidData,
    };
  }

  try {
    const candidature = await prisma.candidature.create({
      data: parsed.data,
    });
    console.log("dandiature", candidature);
    return { success: true, id: candidature.id };
  } catch (error) {
    console.log("error", error);
    return {
      success: false,
      error: COPY.errors.createFailed,
    };
  }
}

// Step 2 — Update with filières, statut, langues, message
export async function updateCandidature(
  id: string,
  formData: FormData,
): Promise<ActionResult> {
  const raw = {
    filieres: JSON.parse((formData.get("filieres") as string) || "[]"),
    statut: formData.get("statut") as string,
    langues: JSON.parse((formData.get("langues") as string) || "[]"),
    message: (formData.get("message") as string) || undefined,
  };

  const parsed = step2Schema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? COPY.validation.invalidData,
    };
  }

  try {
    await prisma.candidature.update({
      where: { id },
      data: {
        filiere: JSON.stringify(parsed.data.filieres),
        langue: JSON.stringify(parsed.data.langues),
        statut: parsed.data.statut,
        message: parsed.data.message ?? null,
      },
    });
    return { success: true, id };
  } catch (error) {
    console.log("error", error);
    return {
      success: false,
      error: COPY.errors.updateFailed,
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
    return { success: false, error: COPY.errors.notFound };
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
        error: COPY.errors.uploadFailed,
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
      error: COPY.errors.finalizeFailed,
    };
  }

  // Send confirmation emails (non-blocking)
  try {
    if (candidature.filiere) {
      // filiere is stored as JSON array string, use first one for email
      let filiereForEmail = candidature.filiere;
      try {
        const parsed = JSON.parse(candidature.filiere);
        if (Array.isArray(parsed) && parsed.length > 0) {
          filiereForEmail = parsed[0];
        }
      } catch {
        // Legacy single string format, use as-is
      }

      await Promise.all([
        sendStudentConfirmation(
          candidature.email,
          candidature.prenom,
          filiereForEmail,
        ),
        sendTeamNotification({
          prenom: candidature.prenom,
          nom: candidature.nom,
          email: candidature.email,
          telephone: candidature.telephone,
          filiere: filiereForEmail,
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
