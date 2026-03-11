"use server";

import { candidatureSchema } from "@/lib/validations";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import { sendStudentConfirmation, sendTeamNotification } from "@/lib/resend";

export type SubmitResult = {
  success: boolean;
  error?: string;
};

export async function submitCandidature(
  formData: FormData,
): Promise<SubmitResult> {
  // Extract fields
  const raw = {
    prenom: formData.get("prenom") as string,
    nom: formData.get("nom") as string,
    email: formData.get("email") as string,
    telephone: formData.get("telephone") as string,
    filiere: formData.get("filiere") as string,
    message: (formData.get("message") as string) || undefined,
  };

  // Server-side Zod validation
  const parsed = candidatureSchema.safeParse(raw);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return {
      success: false,
      error: firstIssue?.message ?? "Données invalides",
    };
  }

  const data = parsed.data;

  // Handle optional bulletin upload
  let bulletinUrl: string | undefined;
  const bulletin = formData.get("bulletin") as File | null;
  if (bulletin && bulletin.size > 0) {
    const ext = bulletin.name.split(".").pop();
    const path = `${Date.now()}-${data.prenom}-${data.nom}.${ext}`;

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

  // Create candidature in database
  try {
    await prisma.candidature.create({
      data: {
        ...data,
        message: data.message ?? null,
        bulletinUrl: bulletinUrl ?? null,
      },
    });
  } catch {
    return {
      success: false,
      error: "Erreur lors de l'enregistrement. Réessayez.",
    };
  }

  // Send confirmation emails (non-blocking — don't fail the submission if emails fail)
  try {
    await Promise.all([
      sendStudentConfirmation(data.email, data.prenom, data.filiere),
      sendTeamNotification({ ...data, bulletinUrl }),
    ]);
  } catch {
    // Log but don't fail — candidature is already saved
    console.error("Email sending failed, candidature saved successfully");
  }

  return { success: true };
}
