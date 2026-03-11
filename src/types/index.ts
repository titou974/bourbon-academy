export interface Localisation {
  city: string;
  surnom: string;
  "ping-position-x": number;
  "ping-position-y": number;
  photo: string;
}

export type FiliereDetail =
  | { type: "diplome"; label: string }
  | { type: "credits"; value: number };

export interface Filiere {
  id: string;
  nom: string;
  couleur: string;
  description: string;
  conditions: string[];
  ctaLabel: string;
  photo: string;
  localisations: Localisation[];
  dureEtudesAnnees: number;
  dureEtudesDetail: string;
  debouches: string[];
  programme: {
    phase: string;
    label: string;
    matieres: string[];
  }[];
  details?: FiliereDetail[];
}

export interface School {
  nom: string;
  ville: string;
  photo: string;
  etudiantsPlaces: number;
  filiere?: string;
}

export interface City {
  ville: string;
  surnom: string;
  region: string;
  coordinates: { x: number; y: number };
  filieres: string[];
  photo: string;
  etudiantsPlaces: number;
}

export interface Testimonial {
  prenom: string;
  filiere: string;
  ecole: string;
  ville: string;
  citation: string;
  photo: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  duration: number;
}

export interface CandidatureFormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  filiere: string;
  message?: string;
  bulletinUrl?: string;
}
