// Centralise tout le contenu textuel du site (labels, titres, sous-titres, CTAs…).
// Toujours importer depuis ce fichier — ne jamais écrire le copy en dur dans les composants.

export const COPY = {
  brand: {
    name: "Bourbon Academy",
    tagline: "Étudier en Espagne",
    description:
      "La plateforme qui connecte les étudiants avec les meilleures écoles d'Espagne",
    contact: "Des questions ou un problème ?",
  },

  nav: {
    links: [
      { label: "Filières", href: "#filieres" },
      { label: "Villes", href: "#carte" },
      { label: "Contact", href: "#process" },
    ] as const,
    cta: "Commencer votre dossier",
    ctaMobile: "Candidature",
    badge: "Chez toi → Espagne",
  },

  hero: {
    title: "Bourbon Academy",
    subtitle:
      "La plateforme qui connecte les étudiants avec les meilleures écoles d'Espagne",
    ctaPrimary: "Commencer mon projet d'étude",
    ctaSecondary: "En savoir plus",
    franceLabel: "France et DROM-TOM",
    spainLabel: "Espagne",
  },

  stats: [
    { value: 50, suffix: "+", label: "Écoles partenaires" },
    {
      value: 24,
      suffix: "h",
      label: "Temps d'attente moyen pour traiter votre dossier",
    },
    { value: 1000, suffix: "+", label: "Étudiants accompagnés" },
  ] as const,

  sections: {
    filieres: {
      title: "Découvrez nos 4 Filières d'Exception",
      subtitle:
        "Nous proposons l'accès aux meilleurs écoles d'Espagne dans le médical",
    },
    carte: {
      title: "Où sont les universités",
      subtitle:
        "Nous accompagnons les étudiants dans 5 villes étudiantes majeures d'Espagne",
    },
    process: {
      title: "Comment m'inscrire en 3 étapes ?",
      subtitle: "Vous pouvez candidater en 3 étapes",
    },
    candidature: {
      title: "Envoyer votre candidature",
      subtitle: "Munissez vous de votre bulletin de notes au lycée",
    },
  },

  steps: [
    {
      step: "Etape 1",
      title: "Remplis tes coordonnées",
      description:
        "Transmets-nous tes informations personnelles pour qu'on puisse te recontacter rapidement.",
    },
    {
      step: "Etape 2",
      title: "Choisis ta filière et ta langue",
      description:
        "Sélectionne la filière qui te plaît et la langue dans laquelle tu souhaites étudier.",
    },
    {
      step: "Etape 3",
      title: "Envoie ton bulletin scolaire",
      description:
        "Télécharge ton bulletin de première (et de terminale si tu l'as déjà) puis envoie ta candidature.",
    },
  ] as const,

  form: {
    steps: ["Coordonnées", "Filière", "Bulletin"] as const,
    submit: "Suivant",
  },
} as const;
