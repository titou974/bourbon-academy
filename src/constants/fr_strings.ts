// Centralise tout le contenu textuel du site (labels, titres, sous-titres, CTAs…).
// Toujours importer depuis ce fichier — ne jamais écrire le copy en dur dans les composants.

export const COPY = {
  brand: {
    name: "Bourbon Academy",
    tagline: "Étudier en Espagne",
    description: "Accédez aux meilleures écoles d'Espagne",
    contact: "Des questions ou un problème ?",
  },

  nav: {
    links: [
      { label: "Filières", href: "#filieres" },
      { label: "Villes", href: "#carte" },
      { label: "Contact", href: "#process" },
      {
        label: "Études dentaires en Espagne",
        href: "/etudes-dentaires-en-espagne",
      },
    ] as const,
    cta: "Commencer votre dossier",
    ctaMobile: "Candidature",
    badge: "Chez toi → Espagne",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
  },

  hero: {
    titlePartOne: "Bourbon",
    titlePartTwo: "Academy",
    titleSuffix: ", études de kinésithérapie en Espagne",
    subtitle: "Accédez aux meilleures écoles d'Espagne",
    ctaPrimary: "Commencer mon projet d'étude",
    ctaSecondary: "En savoir plus",
    franceLabel: "DROM et France",
    spainLabel: "Espagne",
    badgeFrance: "DROM et France",
    badgeSpain: "Espagne",
  },
  stats: [
    { value: 10, suffix: "+", label: "Villes étudiantes en Espagne" },
    {
      value: 10000,
      suffix: "+",
      label: "Étudiants accompagnés au sein de notre réseau",
    },
    { value: 100, suffix: "+", label: "Filières d'études accessibles" },
  ] as const,
  sections: {
    about: {
      title: "Qui sommes-nous ?",
      subtitle:
        "Bourbon Academy accompagne les études de kinésithérapie en Espagne en ligne. L'équipe est composée d'étudiants qui guident la candidature, du choix de la filière aux bulletins scolaires. Le réseau compte plus de 10 000 étudiants accompagnés et plus de 100 filières accessibles.",
      descriptionBefore: "Bourbon Academy, c'est une",
      descriptionReunionnais: "équipe d'étudiants",
      descriptionMiddle: "qui vous accompagne dans votre projet d'études en",
      descriptionEspagne: "Espagne.",
      descriptionSuite:
        "Une passerelle gratuite vers des universités reconnues, pensée par des jeunes qui sont passés par là. Jusqu'à votre candidature en Espagne, avancez avec clarté et simplicité, guidés par notre expérience. Structurer votre dossier et vous ouvrir les bonnes portes, au bon moment : c'est notre promesse, d'étudiant à étudiant.",
      descriptionAccent:
        "Échangez directement avec celles et ceux qui vivent, ou ont vécu, leurs études en Espagne.",
      cta: "Découvrir les filières",
      inlineText:
        "étudiants français vers plus de villes en Espagne, pour toutes les filières. De la Réunion à Madrid, des formations d'excellence dans des universités reconnues pour créer",
      inlineHighlight:
        "l'environnement idéal pour réussir vos études et construire votre avenir",
      founderName: "Ilyes Magoutier",
      founderRole: "Fondateur de Bourbon Academy",
      communityText:
        "Rejoignez une communauté grandissante d'étudiants qui ont concrétisé leur projet d'études en Espagne.",
      communityHighlight: "étudiants",
      joinLabel: "Rejoindre",
      scrollDown: "Scroll Down",
      sectionLabel: "About",
      sectionNumber: "01",
      learnMore: "En savoir plus",
    },
    filieres: {
      title: "Les filières les plus demandées",
      subtitle: "Explorez l'ensemble des formations disponibles",
    },
    carte: {
      title: "Dans quelles villes étudier ?",
      subtitle: "Les 5 villes les plus demandées, et bien d'autres encore",
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
      title: "Choisissez votre filière",
      description:
        "Sélectionnez la formation qui correspond à votre projet d'études",
    },
    {
      step: "Etape 2",
      title: "Renseignez vos coordonnées",
      description:
        "Transmettez vos informations afin que nous puissions vous recontacter rapidement.",
    },
    {
      step: "Etape 3",
      title: "Transmettez vos bulletins scolaires",
      description:
        "Envoyez vos bulletins pour permettre l'étude de votre dossier",
    },
  ] as const,

  form: {
    steps: ["Filière", "Coordonnées", "Bulletin"] as const,
    submitStep1: "Valider mes choix",
    submitStep2: "Continuer",
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
      langueHint: "Dans quelle langue voulez-vous étudier ?",
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
      image: "/images/filieres/medecine.jpeg",
      color: "var(--color-primary)",
    },
  ] as const,

  domaineOptions: [
    // Sport
    { value: "sport", label: "Activité physique et sciences du sport" },
    // Sciences sociales et communication
    { value: "communication", label: "Communication" },
    { value: "marketing", label: "Marketing" },
    { value: "business_analytics", label: "Business Analytics" },
    { value: "economie", label: "Économie" },
    { value: "entrepreneuriat", label: "Entrepreneuriat" },
    { value: "relations_internationales", label: "Relations internationales" },
    { value: "criminologie", label: "Criminologie" },
    { value: "etudes_droit", label: "Études de Droit" },
    {
      value: "negociations_internationales",
      label: "Négociations internationales",
    },
    { value: "education", label: "Éducation" },
    // Architecture, Ingénierie et Conception
    { value: "architecture", label: "Architecture" },
    { value: "ingenieurs", label: "Ingénieurs" },
    { value: "sciences", label: "Sciences" },
    // Santé
    { value: "psychologie", label: "Psychologie" },
    { value: "pharmacie", label: "Pharmacie" },
    { value: "infirmier_infirmiere", label: "Infirmier / infirmière" },
    { value: "biosciences", label: "Biosciences" },
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
      "Ajoutez vos bulletins scolaires de première (PDF, JPG ou PNG — 2 minimum, 6 max)",
    ariaLabel: "Zone d'upload de fichiers",
    dragText: "Glissez vos fichiers ici ou",
    browse: "parcourir",
    acceptedFormats: "PDF, JPG, PNG acceptés — 2 min, 6 max",
    removeFile: "Supprimer",
    maxReached: "Nombre maximum de fichiers atteint (6)",
    minRequired: "Veuillez fournir au moins 2 bulletins de première",
  },

  filiereModal: {
    localisation: "Localisation",
    localisationDesc:
      "Des villes reconnues pour la qualité de leurs établissements d’enseignement supérieur.",
    conditions: "Conditions d'admission",
    conditionsBold: "Conditions",
    conditionsItalic: "d'admission",
    prerequis: "Prérequis",
    duree: "Durée des études",
    anneesFormation: "ans de formation",
    parcours: "Le parcours en détail",
    ansPourDevenir: (annees: number) => `${annees} ans pour devenir`,
    professionnelSante: "professionnel de santé",
    pourquoiChoisir: "Pourquoi choisir cette filière",
    ceFaitDifference: "Ce qui fait la",
    difference: "différence",
    ouEtudierPrefix: "Où étudier la",
    ouEtudierSuffix: "?",
    apresEtudes: "Après vos études",
    vosDebouches: "Vos",
    debouchesItalic: "débouchés et spécialisations",
    badge: "Formation santé",
    subtitleLine: (annees: number) =>
      `Espagne · Diplôme européen · ${annees} ans`,
    ctaFallback: (filiere: string) =>
      `La ${filiere} en Espagne vous attend. Lancez votre candidature dès maintenant.`,
    debouches: "Débouchés professionnels",
    debouchesDesc:
      "Les métiers accessibles après l'obtention de votre diplôme.",
    contenu: "Contenu de la formation",
    contenuDesc: "Les grandes matières enseignées tout au long du cursus.",
    europeFlagAlt: "Drapeau européen",
    creditsEcts: "crédits ECTS",
  },

  cityModal: {
    badge: "Destination étudiante",
    subtitleLine: (region: string) => `Espagne · ${region}`,
    anecdotesLabel: "Anecdotes & pépites",
    anecdotesTitrePre: "Ce que vous ne saviez pas sur",
    budgetLabel: "Pour les parents",
    budgetTitre: "Un budget maîtrisé, une expérience inestimable",
    budgetTitreBold: "Un budget",
    budgetTitreItalic: "maîtrisé",
    budgetTitreSuffix: ", une expérience inestimable",
    rassuranceLabel: "Rassurance parents",
    rassuranceTitre: "Ce qui compte pour vous",
    rassuranceTitreBold: "Ce qui compte",
    rassuranceTitreItalic: "vous",
    rassuranceTitrePreposition: "pour",
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
    title: "Bourbon Academy | Études de kinésithérapie en Espagne",
    titleTemplate: "%s | Bourbon Academy",
    description:
      "Bourbon Academy accompagne les études de kinésithérapie en Espagne. L'équipe guide la candidature, du choix de la filière aux bulletins scolaires.",
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
      "Accédez aux meilleures écoles d'Espagne, avec un accompagnement personnalisé.",
    ogImageAlt: "Bourbon Academy — Étudier en Espagne",
    twitterDescription:
      "Accédez aux meilleures écoles d'Espagne, avec un accompagnement personnalisé.",
  },

  dentaire: {
    path: "/etudes-dentaires-en-espagne",
    title: "Études dentaires en Espagne | Bourbon Academy",
    description:
      "Bourbon Academy accompagne les études dentaires en Espagne avec un dossier en trois étapes : filière, coordonnées, bulletins scolaires. Candidature gratuite pour démarrer.",
    breadcrumbHome: "Accueil",
    breadcrumbLabel: "études dentaires en espagne",
    h1: "Études dentaires en Espagne",
    hero: {
      title: "Dentaire en Espagne, simplement",
      before:
        "Bourbon Academy accompagne les études dentaires en Espagne pour les étudiants qui veulent faire leurs ",
      linkLabel: "études en Espagne",
      after:
        " avec un dossier clair. L'équipe aide jusqu'à la candidature, avec une passerelle gratuite vers des universités reconnues et un échange direct avec des étudiants passés par là.",
    },
    steps: {
      title: "Un accompagnement par étapes",
      text: "Bourbon Academy structure le dossier en trois étapes : choisir la filière, renseigner ses coordonnées, puis transmettre ses bulletins scolaires. Le parcours reste simple et gratuit pour démarrer un projet d'études, avec des filières comme dentaire, médecine, kinésithérapie et vétérinaire. Le suivi se fait avec des jeunes qui ont déjà vécu ces études en Espagne.",
    },
    cards: {
      title: "Ce que l'équipe apporte",
      items: [
        {
          title: "Écoute du projet",
          text: "Un premier échange pour comprendre la filière visée et le parcours à construire.",
        },
        {
          title: "Conseil direct",
          text: "Des réponses données par des étudiants qui vivent ou ont vécu leurs études en Espagne.",
        },
        {
          title: "Dossier validé",
          text: "Les bulletins scolaires servent à l'étude du dossier avant la candidature en Espagne.",
        },
      ],
    },
    filiere: {
      title: "La filière dentaire",
      text: "La médecine dentaire est présentée comme un enseignement d'excellence, reconnu en Europe. Bourbon Academy la place parmi les filières les plus demandées, au même titre que la médecine et la kinésithérapie. Pour ceux qui comparent les études de médecine en espagne pour les étrangers et le dentaire, l'équipe oriente vers la bonne filière et le bon dossier.",
    },
    faq: {
      title: "Questions sur le dossier",
      items: [
        {
          q: "Comment commencer le dossier ?",
          a: "Le parcours démarre en choisissant la filière, puis en renseignant les coordonnées. Les bulletins scolaires sont transmis ensuite pour l'étude du dossier.",
        },
        {
          q: "Qui accompagne la candidature ?",
          a: "Bourbon Academy est une équipe d'étudiants qui accompagne le projet d'études en Espagne. L'échange se fait avec des personnes qui vivent ou ont vécu leurs études en Espagne.",
        },
        {
          q: "Où trouver le prix dentaire ?",
          a: "La page dédiée aux études dentaire en espagne prix traite ce point. Cette page-ci présente surtout l'accompagnement et le chemin de candidature.",
        },
      ],
    },
    cta: {
      title: "Commencer son projet",
      text: "Pour avancer sur un dossier de dentaire, le plus utile est de passer par la page de contact et de lancer la candidature. Le suivi reste gratuit et le dossier se construit étape par étape.",
    },
  },

  heroAnimation: {
    franceDromLabel: "France et DROM-COM",
    espagneLabel: "Espagne",
  },

  mapContainer: {
    alt: "Carte interactive",
  },

  modalSections: {
    ctaTitreBold: "Votre aventure commence",
    ctaTitreItalic: "ici",
  },

  phonePresets: [
    { code: "+262", label: "Réunion (+262)" },
    { code: "+33", label: "France (+33)" },
    { code: "+34", label: "Espagne (+34)" },
  ] as const,

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
  },
} as const;
