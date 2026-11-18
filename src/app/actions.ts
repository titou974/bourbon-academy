"use server";

import { step1Schema, step2Schema } from "@/lib/validations";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import { sendStudentConfirmation, sendTeamNotification } from "@/lib/resend";
import { COPY } from "@/constants/fr_strings";

// Signed links in the team email stay valid for one year
const BULLETIN_LINK_EXPIRY_SECONDS = 60 * 60 * 24 * 365;

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

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

// Step 3 — Upload bulletins + send emails
export async function finalizeCandidature(
  id: string,
  formData: FormData,
): Promise<ActionResult> {
  const candidature = await prisma.candidature.findUnique({ where: { id } });
  if (!candidature) {
    return { success: false, error: COPY.errors.notFound };
  }

  // Handle optional multi-bulletin upload
  // The "bulletins" bucket is private: store the file path and share
  // signed links (plus the files as email attachments) with the team.
  const bulletinPaths: string[] = [];
  const bulletinUrls: string[] = [];
  const bulletinAttachments: { filename: string; content: Buffer }[] = [];
  const bulletins = formData.getAll("bulletins") as File[];

  for (const bulletin of bulletins) {
    if (!bulletin || bulletin.size === 0) continue;
    const ext = (bulletin.name.split(".").pop() ?? "pdf").toLowerCase();
    const index = bulletinPaths.length + 1;
    // Storage keys reject accents and spaces, so keep the path ASCII-only
    const path = `${id}/${Date.now()}-bulletin-${index}.${ext}`;
    const content = Buffer.from(await bulletin.arrayBuffer());

    const { error: uploadError } = await supabase.storage
      .from("bulletins")
      .upload(path, content, {
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

    const { data: signedData, error: signedError } = await supabase.storage
      .from("bulletins")
      .createSignedUrl(path, BULLETIN_LINK_EXPIRY_SECONDS);

    if (signedError) console.log("signedUrlError", signedError);

    bulletinPaths.push(path);
    if (signedData?.signedUrl) bulletinUrls.push(signedData.signedUrl);
    bulletinAttachments.push({
      filename: `${slugify(`${candidature.prenom}-${candidature.nom}`)}-bulletin-${index}.${ext}`,
      content,
    });
  }

  try {
    await prisma.candidature.update({
      where: { id },
      data: {
        bulletinUrls: bulletinPaths,
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

  // Parse stored filières and langues
  let filieres: string[] = [];
  let langues: string[] = [];
  try {
    if (candidature.filiere) filieres = JSON.parse(candidature.filiere);
  } catch {
    if (candidature.filiere) filieres = [candidature.filiere];
  }
  try {
    if (candidature.langue) langues = JSON.parse(candidature.langue);
  } catch {
    if (candidature.langue) langues = [candidature.langue];
  }

  // Send confirmation emails (non-blocking)
  try {
    await Promise.all([
      sendStudentConfirmation({
        to: candidature.email,
        prenom: candidature.prenom,
        filieres,
        langues,
      }),
      sendTeamNotification({
        prenom: candidature.prenom,
        nom: candidature.nom,
        email: candidature.email,
        telephone: candidature.telephone,
        filieres,
        langues,
        statut: candidature.statut,
        message: candidature.message,
        bulletinUrls,
        bulletinAttachments,
      }),
    ]);
  } catch {
    console.error("Email sending failed, candidature saved successfully");
  }

  return { success: true, id };
}
