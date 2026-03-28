import { Resend } from "resend";
import { COPY } from "@/constants/fr_strings";

const resend = new Resend(process.env.RESEND_API_KEY);

const TEAM_EMAIL = "bourbonacademy974@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev";

function resolveLabels(keys: string[]): string[] {
  return keys.map(
    (k) =>
      COPY.filiereLabels[k] ??
      COPY.domaineOptions.find((o) => o.value === k)?.label ??
      k,
  );
}

function resolveLangueLabels(keys: string[]): string[] {
  return keys.map(
    (k) => COPY.langueOptions.find((o) => o.value === k)?.label ?? k,
  );
}

function resolveStatutLabel(key: string | null | undefined): string {
  if (!key) return "Non renseigné";
  return COPY.statutOptions.find((o) => o.value === key)?.label ?? key;
}

// ─── Student confirmation ─────────────────────────────────────────────────

export async function sendStudentConfirmation(params: {
  to: string;
  prenom: string;
  filieres: string[];
  langues: string[];
}): Promise<void> {
  const filiereLabels = resolveLabels(params.filieres);
  const langueLabels = resolveLangueLabels(params.langues);

  await resend.emails.send({
    from: FROM_EMAIL,
    to: params.to,
    subject: COPY.emails.studentSubject,
    html: `
      <h2>Bonjour ${params.prenom},</h2>
      <p>Nous avons bien reçu votre candidature.</p>
      <p><strong>Filière(s) choisie(s) :</strong> ${filiereLabels.join(", ")}</p>
      <p><strong>Langue(s) d'enseignement :</strong> ${langueLabels.join(", ")}</p>
      <p>Notre équipe vous contactera sous <strong>24h</strong> pour la suite de votre dossier.</p>
      <br />
      <p>À très bientôt,<br />L'équipe Bourbon Academy</p>
    `,
  });
}

// ─── Team notification ────────────────────────────────────────────────────

export async function sendTeamNotification(candidature: {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  filieres: string[];
  langues: string[];
  statut?: string | null;
  message?: string | null;
  bulletinUrls: string[];
}): Promise<void> {
  const filiereLabels = resolveLabels(candidature.filieres);
  const langueLabels = resolveLangueLabels(candidature.langues);
  const statutLabel = resolveStatutLabel(candidature.statut);

  const bulletinsHtml =
    candidature.bulletinUrls.length > 0
      ? candidature.bulletinUrls
          .map(
            (url, i) =>
              `<li><a href="${url}">Bulletin ${i + 1}</a></li>`,
          )
          .join("")
      : "<li>Aucun bulletin fourni</li>";

  await resend.emails.send({
    from: FROM_EMAIL,
    to: TEAM_EMAIL,
    subject: `Nouvelle candidature — ${candidature.prenom} ${candidature.nom} — ${filiereLabels.join(", ")}`,
    html: `
      <h2>Nouvelle candidature reçue</h2>

      <h3>📋 Coordonnées</h3>
      <ul>
        <li><strong>Prénom :</strong> ${candidature.prenom}</li>
        <li><strong>Nom :</strong> ${candidature.nom}</li>
        <li><strong>Email :</strong> ${candidature.email}</li>
        <li><strong>Téléphone :</strong> ${candidature.telephone}</li>
        <li><strong>Statut :</strong> ${statutLabel}</li>
      </ul>

      <h3>🎓 Filière & Langues</h3>
      <ul>
        <li><strong>Filière(s) :</strong> ${filiereLabels.join(", ")}</li>
        <li><strong>Langue(s) :</strong> ${langueLabels.join(", ")}</li>
        <li><strong>Message :</strong> ${candidature.message ?? "Aucun"}</li>
      </ul>

      <h3>📄 Bulletins scolaires</h3>
      <ul>
        ${bulletinsHtml}
      </ul>
    `,
  });
}
