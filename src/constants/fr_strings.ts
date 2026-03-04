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
    title: "Étudier en Espagne",
    subtitle:
      "La plateforme qui connecte les étudiants avec les meilleures écoles d'Espagne",
    ctaPrimary: "Commencer mon projet d'étude",
    ctaSecondary: "En savoir plus",
    franceLabel: "France et DROM-TOM",
    spainLabel: "Espagne",
  },

  stats: [
    { value: 50, suffix: "+", label: "Écoles partenaires" },
    { value: 24, suffix: "h", label: "Temps d'attente moyen pour traiter votre dossier" },
    { value: 1000, suffix: "+", label: "Étudiants accompagnés" },
  ] as const,

  sections: {
    filieres: {
      title: "Découvrez nos 5 Filières",
      subtitle: "Nous proposons 5 filières dans le médical",
    },
    carte: {
      title: "Où sont les universités",
      subtitle:
        "Nous avons des partenariats avec +50 universités à travers l'Espagne",
    },
    process: {
      title: "Comment m'inscrire en 3 étapes ?",
      subtitle: "Vous pouvez candidater en 3 étapes",
    },
    candidature: {
      title: "Inscrivez-vous",
      subtitle: "Munissez vous de votre bulletin de notes au lycée",
    },
  },

  steps: [
    {
      step: "Etape 1",
      title: "Remplis tes coordonnées et fournis nous ton bulletin",
      description:
        "Munissez vous de vos bulletins de notes des première et terminale",
    },
    {
      step: "Etape 2",
      title: "Choisis ta filière et la/les écoles où tu veux candidater",
      description: "Choisis une parmi les 5 filières et sélectionne tes vœux",
    },
    {
      step: "Etape 3",
      title: "Attend ta réponse sous 48h",
      description:
        "Nous traitons les dossiers le plus rapidement possible pour que tu puisses intégrer ton école rapidement",
    },
  ] as const,

  form: {
    steps: ["Cursus", "Bulletins", "Coordonnées"] as const,
    submit: "Suivant",
  },
} as const
