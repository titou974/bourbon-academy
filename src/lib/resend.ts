import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TEAM_EMAIL = "titouanhirsch@gmail.com";
const FROM_EMAIL = "Bourbon Academy <noreply@bourbon-academy.fr>";

const FILIERE_LABELS: Record<string, string> = {
  kine: "Kinésithérapie",
  dentaire: "Dentaire",
  veterinaire: "Vétérinaire",
  architecture: "Architecture",
  infirmier: "Infirmier",
};

export async function sendStudentConfirmation(
  to: string,
  prenom: string,
  filiere: string,
): Promise<void> {
  const filiereLabel = FILIERE_LABELS[filiere] ?? filiere;

  await resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: "Votre candidature a bien été reçue — Bourbon Academy",
    html: `
      <h2>Bonjour ${prenom},</h2>
      <p>Nous avons bien reçu votre candidature pour la filière <strong>${filiereLabel}</strong>.</p>
      <p>Notre équipe vous contactera sous <strong>24h</strong> pour la suite de votre dossier.</p>
      <br />
      <p>À très bientôt,<br />L'équipe Bourbon Academy</p>
    `,
  });
}

export async function sendTeamNotification(candidature: {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  filiere: string;
  message?: string | null;
  bulletinUrl?: string | null;
}): Promise<void> {
  const filiereLabel =
    FILIERE_LABELS[candidature.filiere] ?? candidature.filiere;

  await resend.emails.send({
    from: FROM_EMAIL,
    to: TEAM_EMAIL,
    subject: `Nouvelle candidature — ${candidature.prenom} ${candidature.nom} — ${filiereLabel}`,
    html: `
      <h2>Nouvelle candidature reçue</h2>
      <ul>
        <li><strong>Prénom :</strong> ${candidature.prenom}</li>
        <li><strong>Nom :</strong> ${candidature.nom}</li>
        <li><strong>Email :</strong> ${candidature.email}</li>
        <li><strong>Téléphone :</strong> ${candidature.telephone}</li>
        <li><strong>Filière :</strong> ${filiereLabel}</li>
        <li><strong>Message :</strong> ${candidature.message ?? "Aucun"}</li>
        <li><strong>Bulletin :</strong> ${candidature.bulletinUrl ? "Fourni" : "Non fourni"}</li>
      </ul>
    `,
  });
}
