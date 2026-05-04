export interface Localisation {
  city: string;
  surnom: string;
  "ping-position-x": number;
  "ping-position-y": number;
  "mobile-ping-position-x": number;
  "mobile-ping-position-y": number;
  photo: string;
}

export type FiliereDetail =
  | { type: "diplome"; label: string }
  | { type: "credits"; value: number };

export interface Condition {
  etape: number;
  titre: string;
  description: string;
}

export interface Filiere {
  id: string;
  nom: string;
  couleur: string;
  // Carte
  nomBold: string;
  nomItalic: string;
  description: string;
  photo: string;
  ctaLabel: string;
  dureEtudesAnnees: number;
  dureEtudesDetail: string;
  details?: FiliereDetail[];
  // Hero modal
  tagline: string;
  stats: { value: string; label: string }[];
  // Section intro
  sousTitre: string;
  introTitreBold: string;
  introTitreItalic: string;
  introDescription: string;
  // Données
  conditions: Condition[];
  debouches: string[];
  programme: { phase: string; label: string; matieres: string[] }[];
  localisations: Localisation[];
  // CTA
  cta: { description: string };
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
  mobileCoordinates: { x: number; y: number };
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

export interface CityGuide {
  ville: string;
  villeBold: string;
  villeItalic: string;
  surnom: string;
  region: string;
  photo: string;
  tagline: string;
  stats: { value: string; label: string }[];
  sousTitre: string;
  introTitreBold: string;
  introTitreItalic: string;
  introDescription: string;
  temoignage: { quote: string; auteur: string };
  anecdotes: {
    emoji: string;
    categorie: string;
    titre: string;
    description: string;
    accroche: string;
  }[];
  budget: {
    description: string;
    lignes: { emoji: string; label: string; prix: string; unite: string }[];
  };
  rassuranceParents: {
    description: string;
    items: { emoji: string; titre: string; description: string }[];
  };
  cta: { titre: string; description: string; bouton: string };
  filieres: string[];
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

export interface FiliereGuide {
  id: string;
  nomBold: string;
  nomItalic: string;
  tagline: string;
  stats: { value: string; label: string }[];
  sousTitre: string;
  introTitreBold: string;
  introTitreItalic: string;
  introDescription: string;
  temoignage: { quote: string; auteur: string };
  atouts: {
    emoji: string;
    categorie: string;
    titre: string;
    description: string;
    accroche: string;
  }[];
  rassuranceParents: {
    description: string;
    items: { emoji: string; titre: string; description: string }[];
  };
  cta: { description: string };
}
