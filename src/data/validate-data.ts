/**
 * Validation des données statiques — Story 3.1
 * Ce fichier sert de "test" TypeScript pour valider la conformité
 * des JSON avec les interfaces Filiere et City.
 * À exécuter avec: npx tsx src/data/validate-data.ts
 */

import type { Filiere, City } from "@/types/index"
import filieres from "./filieres.json"
import schools from "./schools.json"

// ── Validation filieres.json ──────────────────────────────────────────────────

const filieresData = filieres as Filiere[]

const EXPECTED_IDS = ["kine", "dentaire", "veterinaire", "architecture", "infirmier"]
const REQUIRED_FILIERE_FIELDS: (keyof Filiere)[] = [
  "id", "nom", "couleur", "description", "conditions", "ctaLabel"
]

function assertFilieresValid(data: Filiere[]): void {
  if (data.length !== 5) {
    throw new Error(`filieres.json: expected 5 filières, got ${data.length}`)
  }

  const ids = data.map(f => f.id)
  for (const expectedId of EXPECTED_IDS) {
    if (!ids.includes(expectedId)) {
      throw new Error(`filieres.json: missing filière with id "${expectedId}"`)
    }
  }

  for (const filiere of data) {
    for (const field of REQUIRED_FILIERE_FIELDS) {
      if (!filiere[field]) {
        throw new Error(`filieres.json: filière "${filiere.id}" is missing field "${field}"`)
      }
    }

    if (!filiere.couleur.startsWith("var(--color-filiere-")) {
      throw new Error(`filieres.json: filière "${filiere.id}" couleur must use CSS var, got "${filiere.couleur}"`)
    }
  }

  console.log("✅ filieres.json: valid (5 filières, all fields present)")
}

// ── Validation schools.json ───────────────────────────────────────────────────

const schoolsData = schools as City[]

function assertSchoolsValid(data: City[]): void {
  if (data.length === 0) {
    throw new Error("schools.json: must contain at least one city")
  }

  for (const city of data) {
    if (!city.ville || !city.region) {
      throw new Error(`schools.json: city is missing "ville" or "region"`)
    }

    if (typeof city.coordinates.x !== "number" || typeof city.coordinates.y !== "number") {
      throw new Error(`schools.json: city "${city.ville}" coordinates must be numbers`)
    }
    if (city.coordinates.x < 0 || city.coordinates.x > 100) {
      throw new Error(`schools.json: city "${city.ville}" x coordinate must be 0-100`)
    }
    if (city.coordinates.y < 0 || city.coordinates.y > 100) {
      throw new Error(`schools.json: city "${city.ville}" y coordinate must be 0-100`)
    }

    if (!Array.isArray(city.filieres) || city.filieres.length === 0) {
      throw new Error(`schools.json: city "${city.ville}" must list at least one filière`)
    }

    for (const filiereId of city.filieres) {
      if (!EXPECTED_IDS.includes(filiereId)) {
        throw new Error(`schools.json: city "${city.ville}" has unknown filière id "${filiereId}"`)
      }
    }
  }

  console.log(`✅ schools.json: valid (${data.length} cities, all fields present)`)
}

// ── Run validations ───────────────────────────────────────────────────────────

try {
  assertFilieresValid(filieresData)
  assertSchoolsValid(schoolsData)
  console.log("✅ All data validations passed")
  process.exit(0)
} catch (err) {
  console.error("❌", err instanceof Error ? err.message : err)
  process.exit(1)
}
