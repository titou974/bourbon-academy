import { z } from "zod"

export const VALID_FILIERES = [
  "kine",
  "dentaire",
  "veterinaire",
  "architecture",
  "infirmier",
] as const

export const candidatureSchema = z.object({
  prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
  filiere: z
    .string()
    .refine(
      (val) => (VALID_FILIERES as readonly string[]).includes(val),
      { message: "Filière invalide" }
    ),
  message: z.string().optional(),
  bulletinUrl: z.string().optional(),
})

export type CandidatureInput = z.infer<typeof candidatureSchema>
