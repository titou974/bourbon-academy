export interface Filiere {
  id: string
  nom: string
  couleur: string
  description: string
  ecoles: School[]
  conditions: string
  ctaLabel: string
}

export interface School {
  nom: string
  ville: string
  photo: string
  etudiantsPlaces: number
  filiere?: string
}

export interface City {
  ville: string
  region: string
  coordinates: { x: number; y: number }
  filieres: string[]
  ecoles: School[]
}

export interface Testimonial {
  prenom: string
  filiere: string
  ecole: string
  ville: string
  citation: string
  photo: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
  duration: number
}

export interface CandidatureFormData {
  prenom: string
  nom: string
  email: string
  telephone: string
  filiere: string
  message?: string
  bulletinUrl?: string
}
