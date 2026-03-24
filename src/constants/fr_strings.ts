// Centralise tout le contenu textuel du site (labels, titres, sous-titres, CTAs…).
// Toujours importer depuis ce fichier — ne jamais écrire le copy en dur dans les composants.

export const COPY = {
  brand: {
    name: "Bourbon Academy",
    tagline: "Étudier en Espagne",
    description: "Accédez aux meilleurs écoles d'Espagne",
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
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
  },

  hero: {
    title: "Bourbon Academy",
    subtitle: "Accédez aux meilleurs écoles d'Espagne",
    ctaPrimary: "Commencer mon projet d'étude",
    ctaSecondary: "En savoir plus",
    franceLabel: "DROM et France",
    spainLabel: "Espagne",
    badgeFrance: "DROM et France",
    badgeSpain: "Espagne",
  },
  stats: [
    { value: 10, suffix: "+", label: "Villes partenaires" },
    {
      value: 10000,
      suffix: "+",
      label: "Étudiants accompagnés au sein de notre réseau",
    },
    { value: 100, suffix: "+", label: "Filières d'études accessibles" },
  ] as const,
  sections: {
    filieres: {
      title: "Les filières les plus demandées",
      subtitle: "Explorez l'ensemble des formations disponibles",
    },
    carte: {
      title: "Dans quelles villes étudier ?",
      subtitle: "5 grandes villes étudiantes s'offrent à vous",
    },
    process: {
      title: "Votre inscription en 3 étapes",
      subtitle:
        "Un processus simple et gratuit pour démarrer votre projet d'études",
    },
    candidature: {
      title: "Commencez votre projet",
      subtitle: "Votre candidature en quelques minutes, gratuitement",
    },
  },

  steps: [
    {
      step: "Etape 1",
      title: "Renseignez vos coordonnées",
      description:
        "Transmettez vos informations afin que nous puissions vous recontacter rapidement.",
    },
    {
      step: "Etape 2",
      title: "Choisissez votre filière",
      description:
        "Sélectionnez la formation qui correspond à votre projet d'études",
    },
    {
      step: "Etape 3",
      title: "Transmettez vos bulletins scolaires",
      description:
        "Envoyez vos bulletins pour permettre l'étude de votre dossier",
    },
  ] as const,

  form: {
    steps: ["Coordonnées", "Filière", "Bulletin"] as const,
    submitStep1: "Continuer",
    submitStep2: "Valider mes choix",
    submitStep3: "Lancer ma candidature",
    submitStep3Hint: "Réponse sous 24h — Accompagnement gratuit",
    saving: "Enregistrement...",
    sending: "Envoi en cours...",
    back: "Retour",
    labels: {
      prenom: "Prénom",
      nom: "Nom",
      email: "Email",
      telephone: "Téléphone",
      filiere: "Filière(s) souhaitée(s)",
      filiereHint: "Sélectionnez jusqu'à 3 filières ou domaines",
      domaines: "Autres domaines d'études",
      statut: "Votre situation actuelle",
      langue: "Langue(s) d'enseignement",
      message: "Parle-nous de ton projet (optionnel)",
    },
    placeholders: {
      filiere: "Choisir une filière...",
      domaines: "Ajouter d'autres domaines...",
      langue: "Choisir une langue...",
      message: "Précise ton projet, tes objectifs ou tes questions...",
    },
    success: {
      title: "Candidature envoyée !",
      message: "Nous vous répondons sous 24h à l'adresse",
    },
    defaultError: "Une erreur est survenue",
  },

  filiereOptions: [
    {
      value: "kine",
      label: "Kinésithérapie",
      image: "/images/filieres/kine.jpg",
      color: "var(--color-primary)",
    },
    {
      value: "dentaire",
      label: "Dentaire",
      image: "/images/filieres/dentaire.jpg",
      color: "var(--color-primary)",
    },
    {
      value: "veterinaire",
      label: "Vétérinaire",
      image: "/images/filieres/veterinaire.jpg",
      color: "var(--color-primary)",
    },
    {
      value: "infirmier",
      label: "Médecine",
      image: "/images/filieres/infirmier.jpg",
      color: "var(--color-primary)",
    },
  ] as const,

  domaineOptions: [
    { value: "pharmacie", label: "Pharmacie" },
    { value: "psychologie", label: "Psychologie" },
    { value: "architecture", label: "Architecture" },
    { value: "nutrition", label: "Nutrition & Diététique" },
    { value: "podologie", label: "Podologie" },
    { value: "ergotherapie", label: "Ergothérapie" },
    { value: "biologie", label: "Biologie" },
    { value: "sciences_infirmieres", label: "Sciences Infirmières" },
    { value: "sport", label: "Sciences du Sport (STAPS)" },
    { value: "ingenierie_biomedicale", label: "Ingénierie Biomédicale" },
  ] as const,

  statutOptions: [
    { value: "lyceen", label: "Lycéen(ne)" },
    { value: "etudiant", label: "Étudiant(e)" },
    { value: "travailleur", label: "Travailleur(se)" },
    { value: "autre", label: "Autre" },
  ] as const,

  langueOptions: [
    { value: "francais", label: "Français" },
    { value: "espagnol", label: "Espagnol" },
    { value: "anglais", label: "Anglais" },
  ] as const,

  filiereLabels: {
    kine: "Kinésithérapie",
    dentaire: "Dentaire",
    veterinaire: "Vétérinaire",
    architecture: "Architecture",
    infirmier: "Médecine",
  } as Record<string, string>,

  filiereLabelsShort: {
    kine: "Kiné",
    dentaire: "Dentaire",
    veterinaire: "Vétérinaire",
    architecture: "Architecture",
    infirmier: "Médecine",
  } as Record<string, string>,

  fileUpload: {
    invalidFormat: "Format non accepté. Utilisez PDF, JPG ou PNG.",
    description:
      "Ajoutez vos bulletins scolaires (optionnel — PDF, JPG ou PNG)",
    ariaLabel: "Zone d'upload de fichier",
    dragText: "Glissez votre fichier ici ou",
    browse: "parcourir",
    acceptedFormats: "PDF, JPG, PNG acceptés",
    removeFile: "Supprimer le fichier",
  },

  filiereModal: {
    localisation: "Localisation",
    localisationDesc: "Nous avons des écoles présente sur",
    conditions: "Conditions d'entrée",
    duree: "Durée des études",
    anneesFormation: "ans de formation",
    debouches: "Débouchés professionnels",
    debouchesDesc:
      "Les métiers accessibles après l'obtention de votre diplôme.",
    contenu: "Contenu de la formation",
    contenuDesc: "Les grandes matières enseignées tout au long du cursus.",
    europeFlagAlt: "Drapeau européen",
    creditsEcts: "crédits ECTS",
  },

  filiereCard: {
    ariaLabel: (nom: string) => `En savoir plus sur ${nom}`,
    discover: "Découvrir",
  },

  mobileBottomBar: {
    contact: "Contactez-nous",
    candidature: "Envoyer ma candidature",
  },

  spainMap: {
    alt: "Carte de l'Espagne avec les villes partenaires",
    ariaLabel: (ville: string) => `Voir les écoles à ${ville}`,
    studentsLabel: "étudiants accompagnés",
  },

  footer: {
    writeToUs: "Nous écrire",
    madeBy: "Créé par des Réunionnais 🇷🇪 —",
    copyright: (year: number) =>
      `© ${year} Bourbon Academy. Tous droits réservés.`,
  },

  metadata: {
    title: "Bourbon Academy — Étudier en Espagne",
    titleTemplate: "%s | Bourbon Academy",
    description:
      "Bourbon Academy accompagne les étudiants français et des DROM-TOM dans leurs études en Espagne : médecine, kinésithérapie, dentaire, vétérinaire et plus. +50 écoles partenaires, +1000 étudiants accompagnés.",
    keywords: [
      "études en Espagne",
      "étudier en Espagne",
      "médecine Espagne",
      "kinésithérapie Espagne",
      "dentaire Espagne",
      "vétérinaire Espagne",
      "université Espagne",
      "école Espagne",
      "Bourbon Academy",
      "accompagnement études",
      "inscription université Espagne",
    ],
    ogDescription:
      "Accédez aux meilleurs écoles d'Espagne. +50 universités partenaires, accompagnement personnalisé.",
    ogImageAlt: "Bourbon Academy — Étudier en Espagne",
    twitterDescription:
      "Accédez aux meilleurs écoles d'Espagne. +50 universités partenaires.",
  },

  images: {
    logo: "Logo Bourbon Academy",
    heroFallback: "France vers Espagne — Bourbon Academy",
    franceMap: "Carte de France",
    spainMap: "Carte d'Espagne",
    filieres: {
      kine: "Kinésithérapie en Espagne",
      dentaire: "Dentaire en Espagne",
      veterinaire: "Vétérinaire en Espagne",
      architecture: "Architecture en Espagne",
      infirmier: "Médecine en Espagne",
    },
    steps: {
      step1: "Remplir son dossier",
      step2: "Choisir sa filière",
      step3: "Attendre la réponse",
    },
  },

  validation: {
    prenomMin: "Le prénom doit contenir au moins 2 caractères",
    nomMin: "Le nom doit contenir au moins 2 caractères",
    emailInvalid: "Email invalide",
    telephoneInvalid: "Numéro de téléphone invalide",
    filiereInvalid: "Sélectionnez au moins une filière ou un domaine",
    filiereTooMany: "Vous pouvez sélectionner 3 filières/domaines maximum",
    langueInvalid: "Sélectionnez au moins une langue",
    statutInvalid: "Veuillez indiquer votre situation",
    invalidData: "Données invalides",
  },

  errors: {
    createFailed: "Erreur lors de l'enregistrement. Réessayez.",
    updateFailed: "Erreur lors de la mise à jour. Réessayez.",
    notFound: "Candidature introuvable.",
    uploadFailed: "Erreur lors de l'upload du bulletin. Réessayez.",
    finalizeFailed: "Erreur lors de la finalisation. Réessayez.",
  },

  emails: {
    studentSubject: "Votre candidature a bien été reçue — Bourbon Academy",
    studentBody: (prenom: string, filiereLabel: string) => `
      <h2>Bonjour ${prenom},</h2>
      <p>Nous avons bien reçu votre candidature pour la filière <strong>${filiereLabel}</strong>.</p>
      <p>Notre équipe vous contactera sous <strong>24h</strong> pour la suite de votre dossier.</p>
      <br />
      <p>À très bientôt,<br />L'équipe Bourbon Academy</p>
    `,
    teamSubject: (prenom: string, nom: string, filiereLabel: string) =>
      `Nouvelle candidature — ${prenom} ${nom} — ${filiereLabel}`,
    teamBody: (candidature: {
      prenom: string;
      nom: string;
      email: string;
      telephone: string;
      filiereLabel: string;
      message?: string | null;
      bulletinUrl?: string | null;
    }) => `
      <h2>Nouvelle candidature reçue</h2>
      <ul>
        <li><strong>Prénom :</strong> ${candidature.prenom}</li>
        <li><strong>Nom :</strong> ${candidature.nom}</li>
        <li><strong>Email :</strong> ${candidature.email}</li>
        <li><strong>Téléphone :</strong> ${candidature.telephone}</li>
        <li><strong>Filière :</strong> ${candidature.filiereLabel}</li>
        <li><strong>Message :</strong> ${candidature.message ?? "Aucun"}</li>
        <li><strong>Bulletin :</strong> ${candidature.bulletinUrl ? "Fourni" : "Non fourni"}</li>
      </ul>
    `,
  },
} as const;
