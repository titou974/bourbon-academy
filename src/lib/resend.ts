import { Resend } from "resend";
import { COPY } from "@/constants/fr_strings";

const resend = new Resend(process.env.RESEND_API_KEY);

const TEAM_EMAIL = "titouanhirsch@gmail.com";
const FROM_EMAIL = "Bourbon Academy <noreply@bourbon-academy.fr>";

export async function sendStudentConfirmation(
  to: string,
  prenom: string,
  filiere: string,
): Promise<void> {
  const filiereLabel = COPY.filiereLabels[filiere] ?? filiere;

  await resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: COPY.emails.studentSubject,
    html: COPY.emails.studentBody(prenom, filiereLabel),
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
    COPY.filiereLabels[candidature.filiere] ?? candidature.filiere;

  await resend.emails.send({
    from: FROM_EMAIL,
    to: TEAM_EMAIL,
    subject: COPY.emails.teamSubject(candidature.prenom, candidature.nom, filiereLabel),
    html: COPY.emails.teamBody({
      ...candidature,
      filiereLabel,
    }),
  });
}
