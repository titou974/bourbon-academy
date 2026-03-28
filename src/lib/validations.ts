import { z } from "zod"
import { COPY } from "@/constants/fr_strings"

export const VALID_FILIERES = [
  "kine",
  "dentaire",
  "veterinaire",
  "architecture",
  "infirmier",
] as const

export const VALID_DOMAINES = [
  "pharmacie",
  "psychologie",
  "architecture",
  "nutrition",
  "podologie",
  "ergotherapie",
  "biologie",
  "sciences_infirmieres",
  "sport",
  "ingenierie_biomedicale",
] as const

export const VALID_LANGUES = ["francais", "espagnol", "anglais"] as const

export const VALID_STATUTS = ["lyceen", "etudiant", "travailleur", "autre"] as const

// Step 1 — Coordonnées
export const step1Schema = z.object({
  prenom: z.string().trim().min(2, COPY.validation.prenomMin),
  nom: z.string().trim().min(2, COPY.validation.nomMin),
  email: z.string().trim().email(COPY.validation.emailInvalid),
  telephone: z
    .string()
    .refine(
      (v) => /^\+\d{1,4}\d{6,14}$/.test(v.replace(/\s/g, "")),
      { message: COPY.validation.telephoneInvalid },
    ),
})

// Step 2 — Filières, Statut & Langues
export const step2Schema = z.object({
  filieres: z
    .array(z.string())
    .min(1, COPY.validation.filiereInvalid)
    .max(3, COPY.validation.filiereTooMany),
  statut: z
    .string()
    .min(1, COPY.validation.statutInvalid)
    .refine(
      (val) => (VALID_STATUTS as readonly string[]).includes(val),
      { message: COPY.validation.statutInvalid }
    ),
  langues: z
    .array(z.string().min(1))
    .min(1, COPY.validation.langueInvalid),
  message: z.string().optional(),
})

// Full schema (used for client-side form)
export const candidatureSchema = step1Schema.merge(step2Schema).extend({
  bulletinUrl: z.string().optional(),
})

export type CandidatureInput = z.infer<typeof candidatureSchema>
export type Step1Input = z.infer<typeof step1Schema>
export type Step2Input = z.infer<typeof step2Schema>
