import { z } from "zod"

export const VALID_FILIERES = [
  "kine",
  "dentaire",
  "veterinaire",
  "architecture",
  "infirmier",
] as const

export const VALID_LANGUES = ["francais", "espagnol", "anglais"] as const

// Step 1 — Coordonnées
export const step1Schema = z.object({
  prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
})

// Step 2 — Filière & Langue
export const step2Schema = z.object({
  filiere: z
    .string()
    .refine(
      (val) => (VALID_FILIERES as readonly string[]).includes(val),
      { message: "Filière invalide" }
    ),
  langue: z
    .string()
    .refine(
      (val) => (VALID_LANGUES as readonly string[]).includes(val),
      { message: "Langue invalide" }
    ),
  message: z.string().optional(),
})

// Full schema (used for client-side form)
export const candidatureSchema = step1Schema.merge(step2Schema).extend({
  bulletinUrl: z.string().optional(),
})

export type CandidatureInput = z.infer<typeof candidatureSchema>
export type Step1Input = z.infer<typeof step1Schema>
export type Step2Input = z.infer<typeof step2Schema>
