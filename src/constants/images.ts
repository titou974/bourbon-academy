// Centralise tous les chemins d'images du projet.
// Toujours importer depuis ce fichier — ne jamais écrire les chemins en dur dans les composants.

import { COPY } from "./fr_strings";

export const IMAGES = {
  logo: {
    src: "/bourbon-academy-logo.png",
    alt: COPY.images.logo,
    width: 40,
    height: 40,
  },

  hero: {
    fallback: {
      src: "/images/hero-fallback.png",
      alt: COPY.images.heroFallback,
      width: 400,
      height: 300,
    },
    francemap: {
      src: "/images/france-map.png",
      alt: COPY.images.franceMap,
    },
    spainmap: {
      src: "/images/spain-map.png",
      alt: COPY.images.spainMap,
    },
  },

  filieres: {
    kine: {
      src: "/images/filieres/kinesitherapie.jpg",
      alt: COPY.images.filieres.kine,
    },
    dentaire: {
      src: "/images/filieres/dentaire.jpg",
      alt: COPY.images.filieres.dentaire,
    },
    veterinaire: {
      src: "/images/filieres/veterinaire.jpg",
      alt: COPY.images.filieres.veterinaire,
    },
    architecture: {
      src: "/images/filieres/architecture.jpg",
      alt: COPY.images.filieres.architecture,
    },
    infirmier: {
      src: "/images/filieres/infirmier.jpg",
      alt: COPY.images.filieres.infirmier,
    },
  },

  steps: {
    step1: {
      src: "/images/steps/etape-1-dossier.jpg",
      alt: COPY.images.steps.step1,
    },
    step2: {
      src: "/images/steps/etape-2-filiere.jpg",
      alt: COPY.images.steps.step2,
    },
    step3: {
      src: "/images/steps/etape-3-reponse.jpg",
      alt: COPY.images.steps.step3,
    },
  },
} as const;
