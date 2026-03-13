// Centralise tous les chemins d'images du projet.
// Toujours importer depuis ce fichier — ne jamais écrire les chemins en dur dans les composants.

export const IMAGES = {
  logo: {
    src: "/bourbon-academy-logo.png",
    alt: "Logo Bourbon Academy",
    width: 40,
    height: 40,
  },

  hero: {
    fallback: {
      src: "/images/hero-fallback.png",
      alt: "France vers Espagne — Bourbon Academy",
      width: 400,
      height: 300,
    },
    francemap: {
      src: "/images/france-map.png",
      alt: "Carte de France",
    },
    spainmap: {
      src: "/images/spain-map.png",
      alt: "Carte d'Espagne",
    },
  },

  filieres: {
    kine: {
      src: "/images/filieres/kinesitherapie.jpg",
      alt: "Kinésithérapie en Espagne",
    },
    dentaire: {
      src: "/images/filieres/dentaire.jpg",
      alt: "Dentaire en Espagne",
    },
    veterinaire: {
      src: "/images/filieres/veterinaire.jpg",
      alt: "Vétérinaire en Espagne",
    },
    architecture: {
      src: "/images/filieres/architecture.jpg",
      alt: "Architecture en Espagne",
    },
    infirmier: {
      src: "/images/filieres/infirmier.jpg",
      alt: "Infirmier en Espagne",
    },
  },

  steps: {
    step1: {
      src: "/images/steps/etape-1-dossier.jpg",
      alt: "Remplir son dossier",
    },
    step2: {
      src: "/images/steps/etape-2-filiere.jpg",
      alt: "Choisir sa filière",
    },
    step3: {
      src: "/images/steps/etape-3-reponse.jpg",
      alt: "Attendre la réponse",
    },
  },
} as const;
