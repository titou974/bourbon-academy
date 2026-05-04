import type { Filiere, Condition, FiliereGuide } from "@/types";

const CONDITIONS_COMMUNES: Condition[] = [
  {
    etape: 1,
    titre: "Présentation du dossier scolaire",
    description:
      "Analyse de vos bulletins et de votre profil académique par les établissements.",
  },
  {
    etape: 2,
    titre: "Test de langue (si dossier approuvé)",
    description:
      "Évaluation de votre niveau linguistique selon la formation choisie.",
  },
  {
    etape: 3,
    titre: "Validation du baccalauréat",
    description:
      "Fourniture du diplôme en fin d'année pour confirmer définitivement votre admission.",
  },
];

const guides: Record<string, FiliereGuide> = {
  // ─── KINÉSITHÉRAPIE ───────────────────────────────────────────────────
  kine: {
    id: "kine",
    nomBold: "Kinésithé",
    nomItalic: "rapie",
    tagline:
      "Former les kinés de demain dans les meilleures universités espagnoles — avec un diplôme reconnu dans toute l'Europe, sans concours d'entrée.",
    stats: [
      { value: "4 ans", label: "de formation" },
      { value: "240", label: "crédits ECTS" },
      { value: "5", label: "villes" },
    ],
    sousTitre: "Le soin par le mouvement",
    introTitreBold: "Une formation complète, ",
    introTitreItalic: "sans concours",
    introDescription:
      "En Espagne, l'accès aux études de kinésithérapie se fait sur dossier — pas de PACES, pas de concours, pas d'année blanche. Vous intégrez directement un cursus de 4 ans, reconnu dans toute l'Union Européenne. Les universités espagnoles combinent théorie solide et pratique clinique dès la 2e année, avec plus de 1 500 heures de stages.",
    temoignage: {
      quote:
        "En France, j'aurais fait 2 ans de fac avant d'espérer entrer en kiné. En Espagne, j'ai commencé directement. Et le diplôme est reconnu en France, c'est le même métier.",
      auteur: "Témoignage d'un étudiant en 3e année à Madrid",
    },
    atouts: [
      {
        emoji: "🎓",
        categorie: "Admission",
        titre: "Admission sur dossier",
        description:
          "L'accès aux études de kinésithérapie en Espagne se fait sur dossier académique, sans PASS ni concours comme en France.",
        accroche: "Pas de concours d'entrée",
      },
      {
        emoji: "🏥",
        categorie: "Pratique",
        titre: "Formation très pratique",
        description:
          "Plus de 1 200 heures de stage, réalisées dans différents environnements de pratique, pour une vision concrète du métier.",
        accroche: "Stages en clinique tout au long du cursus",
      },
      {
        emoji: "🤲",
        categorie: "Immersion",
        titre: "Cours de pratique dès la première année",
        description:
          "Dès la première année, les étudiants suivent des cours de pratique et découvrent les réalités du métier pour mieux se projeter.",
        accroche: "Une immersion concrète dès le début du cursus",
      },
      {
        emoji: "🇪🇺",
        categorie: "Reconnaissance",
        titre: "Diplôme reconnu en France",
        description:
          "Le Grado en Fisioterapia (4 ans, 240 ECTS) permet une reconnaissance en France via la directive européenne, avec possibilité d'exercice après démarches.",
        accroche: "Diplôme conforme aux normes européennes",
      },
      {
        emoji: "💪",
        categorie: "Spécialisation",
        titre: "Découverte des spécialités",
        description:
          "Sport, neurologie, cardio-respiratoire, pédiatrie, uro-gynécologie : les principaux domaines sont abordés au cours du cursus.",
        accroche: "Une vision complète de la kinésithérapie",
      },
      {
        emoji: "📈",
        categorie: "Emploi",
        titre: "Débouchés solides",
        description:
          "La kinésithérapie offre de nombreuses opportunités d'exercice en libéral, en centre de rééducation ou en milieu hospitalier.",
        accroche: "Une profession très demandée",
      },
    ],
    rassuranceParents: {
      description:
        "Votre enfant veut devenir kiné ? L'Espagne offre une voie d'excellence, reconnue et encadrée. Voici ce qu'il faut savoir.",
      items: [
        {
          emoji: "🇪🇺",
          titre: "Diplôme européen reconnu",
          description:
            "Le Grado en Fisioterapia (4 ans, 240 ECTS) est reconnu automatiquement en France via la directive européenne 2005/36/CE. Votre enfant pourra exercer en France sans démarche supplémentaire.",
        },
        {
          emoji: "🤝",
          titre: "Accompagnement complet",
          description:
            "Bourbon Academy accompagne votre enfant de A à Z : inscription, logement, intégration, suivi académique. Vous n'êtes jamais seuls dans cette aventure.",
        },
        {
          emoji: "💼",
          titre: "Insertion professionnelle",
          description:
            "Avec un taux d'emploi proche de 100 %, la kinésithérapie est l'un des métiers de santé les plus porteurs. En libéral ou en hôpital, les débouchés sont nombreux.",
        },
        {
          emoji: "🏫",
          titre: "Universités de qualité",
          description:
            "Nos universités partenaires sont accréditées et reconnues internationalement. Elles disposent de cliniques universitaires et d'équipements de pointe pour la formation pratique.",
        },
      ],
    },
    cta: {
      description:
        "La kinésithérapie n'attend que vous. Des milliers d'étudiants français ont déjà fait le choix de l'Espagne. Et si c'était votre tour ?",
    },
  },

  // ─── DENTAIRE ─────────────────────────────────────────────────────────
  dentaire: {
    id: "dentaire",
    nomBold: "Den",
    nomItalic: "taire",
    tagline:
      "Accédez aux facultés de médecine dentaire espagnoles sans PACES — un diplôme d'excellence reconnu dans toute l'Europe.",
    stats: [
      { value: "5 ans", label: "de formation" },
      { value: "300", label: "crédits ECTS" },
      { value: "5", label: "villes" },
    ],
    sousTitre: "L'art du sourire, la science de la santé",
    introTitreBold: "Devenir dentiste, ",
    introTitreItalic: "sans passer par la PACES",
    introDescription:
      "En France, les études dentaires passent par le très sélectif parcours PASS/LAS avec un taux de réussite inférieur à 20 %. En Espagne, l'accès se fait sur dossier. Vous intégrez directement un cursus complet de 5 ans, avec de la pratique clinique réelle dès la 3e année. Le diplôme est reconnu dans toute l'UE.",
    temoignage: {
      quote:
        "J'ai échoué deux fois en PACES. En Espagne, j'ai été admise sur dossier et je suis aujourd'hui en 4e année. Je soigne de vrais patients chaque semaine. C'est concret et passionnant.",
      auteur: "Témoignage d'une étudiante en dentaire à Valence",
    },
    atouts: [
      {
        emoji: "🎓",
        categorie: "Admission",
        titre: "Admission simplifiée",
        description:
          "La sélection se fait à partir de votre dossier scolaire et, selon les universités, d’un entretien. La soumission du bulletin de première est suffisante pour candidater.",
        accroche: "Admission sur dossier, sans concours ni PASS",
      },
      {
        emoji: "🇪🇺",
        categorie: "Reconnaissance",
        titre: "Diplôme reconnu en France",
        description:
          "Le Grado en Odontología (5 ans, 300 ECTS) permet une reconnaissance en France via la directive européenne, avec inscription à l’Ordre sans reprise d’études.",
        accroche: "Diplôme conforme aux normes européennes",
      },
      {
        emoji: "🦷",
        categorie: "Pratique",
        titre: "Pratique dès la 3e année",
        description:
          "À partir de la 3e année, les étudiants réalisent des actes encadrés (détartrage, soins conservateurs...), sous supervision de praticiens expérimentés.",
        accroche: "Premiers soins sur patients en clinique universitaire",
      },
      {
        emoji: "🔬",
        categorie: "Équipements",
        titre: "Équipements de pointe",
        description:
          "Avant la pratique réelle, les étudiants s'entraînent sur simulateurs (fantômes dentaires), imagerie 3D et scanners intra-oraux utilisés en cabinet.",
        accroche: "Apprentissage sur technologies modernes",
      },
      {
        emoji: "📈",
        categorie: "Emploi",
        titre: "Débouchés assurés",
        description:
          "Le nombre important de départs à la retraite et le manque de praticiens facilitent l'installation ou l'emploi dès l'obtention du diplôme.",
        accroche: "Forte demande de dentistes en France",
      },
      {
        emoji: "🌐",
        categorie: "Réseau",
        titre: "Réseau professionnel",
        description:
          "De nombreux diplômés exercent aujourd'hui en France, facilitant les stages, les premiers contacts professionnels et l'installation.",
        accroche: "Des étudiants déjà formés et installés",
      },
    ],
    rassuranceParents: {
      description:
        "Les études dentaires en Espagne sont une voie d'excellence reconnue. Voici les garanties qui font la différence.",
      items: [
        {
          emoji: "🇪🇺",
          titre: "Reconnaissance automatique",
          description:
            "Le diplôme espagnol d'odontologie (5 ans, 300 ECTS) est reconnu en France via la directive européenne. Inscription à l'Ordre sans examen complémentaire.",
        },
        {
          emoji: "🏥",
          titre: "Formation clinique encadrée",
          description:
            "Les cliniques universitaires sont encadrées par des professeurs et praticiens expérimentés. La sécurité des patients et la qualité de l'enseignement sont prioritaires.",
        },
        {
          emoji: "📊",
          titre: "Taux de réussite élevé",
          description:
            "Le taux de réussite des étudiants français en dentaire en Espagne dépasse 90 %. Un accompagnement sérieux et un cursus progressif favorisent la réussite.",
        },
        {
          emoji: "💼",
          titre: "Débouchés exceptionnels",
          description:
            "La France manque de dentistes. Avec plus de 4 000 départs en retraite par an, l'insertion professionnelle est quasi immédiate après le diplôme.",
        },
      ],
    },
    cta: {
      description:
        "Le dentaire en Espagne, c'est un diplôme reconnu, une pratique clinique réelle et un avenir assuré. Et si vous commenciez dès maintenant ?",
    },
  },

  // ─── VÉTÉRINAIRE ──────────────────────────────────────────────────────
  veterinaire: {
    id: "veterinaire",
    nomBold: "Vétéri",
    nomItalic: "naire",
    tagline:
      "Soigner les animaux est une vocation. Les universités espagnoles vous offrent une formation d'excellence pour en faire votre métier.",
    stats: [
      { value: "5 ans", label: "de formation" },
      { value: "300", label: "crédits ECTS" },
      { value: "4", label: "villes" },
    ],
    sousTitre: "La passion au service du vivant",
    introTitreBold: "Devenir vétérinaire, ",
    introTitreItalic: "une vocation accessible",
    introDescription:
      "En France, le concours vétérinaire est l'un des plus sélectifs (moins de 15 % de réussite après 2 ans de prépa). En Espagne, l'accès se fait sur dossier et motivation. Vous intégrez un cursus complet de 5 ans mêlant sciences fondamentales, clinique et stages en hôpital vétérinaire. Le diplôme est reconnu dans toute l'UE.",
    temoignage: {
      quote:
        "Depuis toujours, je voulais être vétérinaire. En Espagne, j'ai pu réaliser ce rêve sans passer par deux ans de prépa. En 3e année, j'opère déjà des animaux en clinique.",
      auteur: "Témoignage d'une étudiante en vétérinaire à Madrid",
    },
    atouts: [
      {
        emoji: "🎓",
        categorie: "Admission",
        titre: "Admission sur dossier",
        description:
          "L'admission aux études vétérinaires en Espagne se fait sur dossier scolaire. Les étudiants peuvent intégrer directement après le bac.",
        accroche: "Sur dossier académique",
      },
      {
        emoji: "🐾",
        categorie: "Pratique",
        titre: "Formation clinique encadrée",
        description:
          "Les études incluent une formation pratique avec mise en situation sur des cas réels, sous la supervision de professionnels.",
        accroche: "Une immersion progressive en pratique",
      },
      {
        emoji: "🔬",
        categorie: "Équipements",
        titre: "Équipements à la pointe de la technologie",
        description:
          "Les étudiants sont formés avec des équipements modernes utilisés en pratique vétérinaire : imagerie médicale, blocs de soins, laboratoires d'analyse et outils de diagnostic.",
        accroche: "Formation sur matériel professionnel",
      },
      {
        emoji: "🇪🇺",
        categorie: "Reconnaissance",
        titre: "Diplôme reconnu en Europe",
        description:
          "Le diplôme vétérinaire espagnol (5 ans, 300 ECTS) est reconnu dans l'Union européenne via la directive 2005/36/CE.",
        accroche: "Diplôme conforme aux normes européennes",
      },
      {
        emoji: "🌿",
        categorie: "Formation",
        titre: "Formation complète",
        description:
          "Le cursus couvre l'ensemble des champs de la médecine vétérinaire : animaux domestiques, ruraux, équins, santé publique et prévention.",
        accroche: "Tous les domaines abordés",
      },
      {
        emoji: "📈",
        categorie: "Emploi",
        titre: "Débouchés solides",
        description:
          "La profession vétérinaire offre de nombreuses opportunités d'exercice en clinique, en industrie, en recherche ou en santé publique.",
        accroche: "Un secteur avec des besoins réels",
      },
    ],
    rassuranceParents: {
      description:
        "Votre enfant rêve de devenir vétérinaire ? L'Espagne offre une formation rigoureuse et reconnue. Voici l'essentiel.",
      items: [
        {
          emoji: "🇪🇺",
          titre: "Diplôme européen reconnu",
          description:
            "Le diplôme vétérinaire espagnol (5 ans, 300 ECTS) est reconnu en France par la directive européenne 2005/36/CE. Inscription à l'Ordre sans examen complémentaire.",
        },
        {
          emoji: "🐴",
          titre: "Formation pratique complète",
          description:
            "Les hôpitaux vétérinaires universitaires accueillent plus de 10 000 cas par an. Votre enfant sera confronté à des situations cliniques réelles et variées.",
        },
        {
          emoji: "📈",
          titre: "Métier porteur",
          description:
            "La France manque de vétérinaires. Que ce soit en clientèle urbaine, rurale ou en industrie pharmaceutique, les débouchés sont nombreux et bien rémunérés.",
        },
        {
          emoji: "🤝",
          titre: "Suivi personnalisé",
          description:
            "Bourbon Academy assure un accompagnement continu : inscription, logement, intégration, suivi des résultats. Votre enfant n'est jamais seul dans son parcours.",
        },
      ],
    },
    cta: {
      description:
        "Le vétérinaire est un métier de passion. En Espagne, cette passion devient accessible. Et si vous faisiez le premier pas ?",
    },
  },

  // ─── MÉDECINE (INFIRMIER) ─────────────────────────────────────────────
  infirmier: {
    id: "infirmier",
    nomBold: "Méde",
    nomItalic: "cine",
    tagline:
      "Intégrez les formations médicales espagnoles reconnues dans toute l'Europe — un parcours d'excellence accessible et concret.",
    stats: [
      { value: "6 ans", label: "de formation" },
      { value: "360", label: "crédits ECTS" },
      { value: "5", label: "villes" },
    ],
    sousTitre: "Au cœur du soin",
    introTitreBold: "Soigner, accompagner, ",
    introTitreItalic: "transformer des vies",
    introDescription:
      "Les études de médecine en Espagne offrent un accès direct sur dossier, sans les barrières du système français. En 6 ans, vous obtenez un diplôme reconnu dans toute l'UE (360 ECTS), avec plus de 1 800 heures de stages cliniques. Les universités espagnoles forment des médecins complets, humains et compétents.",
    temoignage: {
      quote:
        "J'ai choisi l'Espagne pour éviter la sélection en IFSI. Aujourd'hui, je fais mes stages dans les meilleurs hôpitaux de Valence. Mon diplôme sera reconnu en France dès mon retour.",
      auteur: "Témoignage d'une étudiante en 2e année à Valence",
    },
    atouts: [
      {
        emoji: "🎓",
        categorie: "Admission",
        titre: "Admission sur dossier",
        description:
          "L'admission en médecine en Espagne se fait sur dossier scolaire. Les étudiants peuvent intégrer directement après le bac.",
        accroche: "Accès sur dossier académique",
      },
      {
        emoji: "🏥",
        categorie: "Stages",
        titre: "Stages hospitaliers",
        description:
          "Le cursus inclut une formation clinique progressive dès la 3e année, avec immersion dans différents services : urgences, chirurgie, médecine interne, pédiatrie.",
        accroche: "Plus de 1 800 heures de stages",
      },
      {
        emoji: "🫀",
        categorie: "Formation",
        titre: "Formation",
        description:
          "De la théorie aux pratiques hospitalières, la formation médicale se construit étape par étape avec une montée en responsabilité.",
        accroche: "Un cursus structuré et progressif",
      },
      {
        emoji: "🇪🇺",
        categorie: "Reconnaissance",
        titre: "Reconnaissance",
        description:
          "Le diplôme de médecine espagnol (6 ans, 360 ECTS) est reconnu dans l'Union européenne via la directive 2005/36/CE.",
        accroche: "Diplôme reconnu en Europe",
      },
      {
        emoji: "💛",
        categorie: "Humain",
        titre: "Approche humaine",
        description:
          "La formation met l'accent sur la communication, l'éthique et la prise en charge globale du patient.",
        accroche: "La relation patient au cœur de la formation",
      },
      {
        emoji: "📊",
        categorie: "Emploi",
        titre: "Débouchés",
        description:
          "Les besoins en médecins restent élevés, offrant de nombreuses opportunités de carrière en milieu hospitalier ou libéral.",
        accroche: "Un secteur en forte demande",
      },
    ],
    rassuranceParents: {
      description:
        "Les études médicales en Espagne sont encadrées et reconnues. Voici ce que vous devez savoir en tant que parent.",
      items: [
        {
          emoji: "🇪🇺",
          titre: "Reconnaissance automatique",
          description:
            "Le diplôme de médecine espagnol (6 ans, 360 ECTS) est reconnu en France via la directive européenne 2005/36/CE. Votre enfant pourra exercer en France après les démarches de reconnaissance.",
        },
        {
          emoji: "🏥",
          titre: "Stages hospitaliers encadrés",
          description:
            "Plus de 2 100 heures de stages dans des hôpitaux partenaires. Votre enfant est encadré par des professionnels de santé expérimentés à chaque étape.",
        },
        {
          emoji: "🛡️",
          titre: "Un secteur qui recrute",
          description:
            "La France fait face à une pénurie de professionnels de santé. L'insertion professionnelle est quasi immédiate, avec des perspectives de carrière variées et stables.",
        },
        {
          emoji: "🤝",
          titre: "Bourbon Academy à vos côtés",
          description:
            "De l'inscription à l'installation, nous accompagnons votre enfant. Logement, intégration, suivi scolaire — nous sommes là à chaque étape du parcours.",
        },
      ],
    },
    cta: {
      description:
        "Les métiers de la santé ont besoin de vous. En Espagne, la porte est ouverte. Et si vous faisiez le premier pas ?",
    },
  },
};

export function getFiliereGuide(id: string): FiliereGuide | undefined {
  return guides[id];
}

const filieres: Filiere[] = [
  // ─── KINÉSITHÉRAPIE ───────────────────────────────────────────────────
  {
    id: "kine",
    nom: "Kinésithérapie",
    couleur: "var(--color-filiere-kine)",
    nomBold: "Kinésithé",
    nomItalic: "rapie",
    tagline:
      "Former les kinés de demain dans les meilleures universités espagnoles — avec un diplôme reconnu dans toute l'Europe, sans concours d'entrée.",
    description:
      "Formation en kinésithérapie reconnue dans les meilleures universités espagnoles.",
    photo: "/images/filieres/kine.jpg",
    ctaLabel: "Candidater en Kinésithérapie",
    dureEtudesAnnees: 4,
    dureEtudesDetail: "240 crédits ECTS · Diplôme reconnu dans toute l'UE 🇪🇺",
    details: [
      { type: "diplome", label: "Diplôme reconnu dans toute l'Europe" },
      { type: "credits", value: 240 },
    ],
    stats: [
      { value: "4 ans", label: "de formation" },
      { value: "240", label: "crédits ECTS" },
      { value: "5", label: "villes" },
    ],
    sousTitre: "Le soin par le mouvement",
    introTitreBold: "Une formation complète, ",
    introTitreItalic: "sans concours",
    introDescription: `La filière de kinésithérapie en Espagne propose un enseignement de qualité au sein d'universités modernes équipées des dernières technologies. Accessible sur dossier, sans concours d'entrée, cette formation met l'accent sur la pratique dès le début du cursus. Les étudiants suivent des cours de thérapie manuelle dès la première année et débutent leurs stages en clinique dès la deuxième année, avec une immersion progressive dans le milieu professionnel. Ils évoluent dans un environnement bienveillant, centré sur la progression individuelle, et sont encadrés par des enseignants qualifiés, souvent en activité en clinique. La formation allie ainsi théorie, pratique et expérience terrain, avec plus de 1 200 heures de stages au cours du cursus.`,
    conditions: CONDITIONS_COMMUNES,
    debouches: [
      "Kinésithérapeute en cabinet libéral",
      "Kinésithérapeute du sport",
      "Kinésithérapeute hospitalier",
      "Rééducation cardio-respiratoire",
      "Kinésithérapie neurologique",
      "Kinésithérapie pédiatrique",
      "Rééducation uro-gynécologique & périnéale",
      "Rééducation fonctionnelle avancée",
      "Préparation physique & réathlétisation",
      "Enseignement et recherche",
    ],
    programme: [
      {
        phase: "Année 1-2",
        label: "Sciences fondamentales",
        matieres: [
          "Anatomie & biomécanique",
          "Physiologie humaine",
          "Neurologie",
          "Pathologies de l'appareil locomoteur",
          "Biophysique & électrophysiologie",
          "Psychologie du patient",
        ],
      },
      {
        phase: "Année 3-4",
        label: "Clinique & stages",
        matieres: [
          "Thérapies manuelles",
          "Électrothérapie & ultrasons",
          "Rééducation post-opératoire",
          "Kinésithérapie respiratoire",
          "Stages en centre de rééducation",
          "Mémoire de fin d'études (TFG)",
        ],
      },
    ],
    localisations: [
      {
        city: "Madrid",
        "ping-position-x": 49,
        "ping-position-y": 43,
        "mobile-ping-position-x": 49,
        "mobile-ping-position-y": 45,
        surnom: "La Villa y Corte",
        photo: "/images/localisations/madrid.jpeg",
      },
      {
        city: "Valence",
        "ping-position-x": 68,
        "ping-position-y": 52,
        "mobile-ping-position-x": 75,
        "mobile-ping-position-y": 52,
        surnom: "La Ciudad del Turia",
        photo: "/images/localisations/valence.jpeg",
      },
      {
        city: "Malaga",
        "ping-position-x": 45,
        "ping-position-y": 71,
        "mobile-ping-position-x": 43,
        "mobile-ping-position-y": 72,
        surnom: "La Costa del Sol",
        photo: "/images/localisations/malaga.jpeg",
      },
      {
        city: "Alicante",
        "ping-position-x": 59,
        "ping-position-y": 64,
        "mobile-ping-position-x": 63,
        "mobile-ping-position-y": 60,
        surnom: "La Ciudad de las Palomas",
        photo: "/images/localisations/alicante.jpeg",
      },
      {
        city: "Iles Canaries",
        "ping-position-x": 18,
        "ping-position-y": 92,
        "mobile-ping-position-x": 16,
        "mobile-ping-position-y": 90,
        surnom: "Las Islas del Sol",
        photo: "/images/localisations/iles_canaries.jpg",
      },
    ],
    cta: {
      description:
        "La kinésithérapie n'attend que vous. Des milliers d'étudiants français ont déjà fait le choix de l'Espagne. Et si c'était votre tour ?",
    },
  },

  // ─── DENTAIRE ─────────────────────────────────────────────────────────
  {
    id: "dentaire",
    nom: "Dentaire",
    couleur: "var(--color-filiere-dentaire)",
    nomBold: "Den",
    nomItalic: "taire",
    tagline:
      "Accédez aux facultés de médecine dentaire espagnoles sans PACES — un diplôme d'excellence reconnu dans toute l'Europe.",
    description:
      "Bénéficiez d'un enseignement d'excellence en médecine dentaire, reconnu en Europe.",
    photo: "/images/filieres/dentaire.jpg",
    ctaLabel: "Candidater en Dentaire",
    dureEtudesAnnees: 5,
    dureEtudesDetail: "300 crédits ECTS · Diplôme reconnu dans toute l'UE 🇪🇺",
    details: [
      { type: "diplome", label: "Diplôme reconnu dans toute l'Europe" },
      { type: "credits", value: 300 },
    ],
    stats: [
      { value: "5 ans", label: "de formation" },
      { value: "300", label: "crédits ECTS" },
      { value: "5", label: "villes" },
    ],
    sousTitre: "L'art du sourire, la science de la santé",
    introTitreBold: "Devenir dentiste, ",
    introTitreItalic: "sans passer par la PACES",
    introDescription: `La filière de médecine dentaire en Espagne offre un enseignement de qualité, dispensé au sein d'universités à la pointe de la technologie, disposant de cliniques dentaires modernes. Accessible sur dossier, sans concours d'entrée, elle permet un accès plus direct aux études. La formation intègre rapidement une dimension pratique, avec des travaux précliniques puis une prise en charge progressive de patients. Les étudiants évoluent dans un environnement d'apprentissage bienveillant, centré sur la progression individuelle, sans mise en compétition. Encadrés par des enseignants qualifiés, souvent docteurs et praticiens, ils développent des compétences solides, à la fois théoriques et cliniques.`,
    conditions: CONDITIONS_COMMUNES,
    debouches: [
      "Chirurgien-dentiste en cabinet (libéral)",
      "Dentiste en clinique ou centre de santé",
      "Exercice en milieu hospitalier",
      "Orthodontie (correction de l'alignement dentaire)",
      "Implantologie (pose d'implants dentaires)",
      "Chirurgie orale",
      "Dentisterie pédiatrique (soins chez l'enfant)",
      "Soins parodontaux et traitements spécialisés",
      "Recherche & enseignement",
    ],
    programme: [
      {
        phase: "Année 1-2",
        label: "Sciences fondamentales",
        matieres: [
          "Anatomie générale & dentaire",
          "Biologie cellulaire & biochimie",
          "Histologie & embryologie",
          "Physiologie humaine",
          "Microbiologie & immunologie",
          "Matériaux dentaires",
        ],
      },
      {
        phase: "Année 3-4",
        label: "Clinique",
        matieres: [
          "Dentisterie conservatrice",
          "Parodontologie",
          "Endodontie",
          "Prothèse fixe & amovible",
          "Orthodontie",
          "Pédodontie",
          "Radiologie & imagerie",
          "Premiers patients réels",
        ],
      },
      {
        phase: "Année 5",
        label: "Clinique avancée",
        matieres: [
          "Chirurgie buccale & implantologie",
          "Médecine buccale",
          "Stage en cabinet partenaire",
          "Mémoire de fin d'études (TFG)",
        ],
      },
    ],
    localisations: [
      {
        city: "Madrid",
        "ping-position-x": 49,
        "ping-position-y": 43,
        "mobile-ping-position-x": 49,
        "mobile-ping-position-y": 45,
        surnom: "La Villa y Corte",
        photo: "/images/localisations/madrid.jpeg",
      },
      {
        city: "Valence",
        "ping-position-x": 68,
        "ping-position-y": 52,
        "mobile-ping-position-x": 75,
        "mobile-ping-position-y": 52,
        surnom: "La Ciudad del Turia",
        photo: "/images/localisations/valence.jpeg",
      },
      {
        city: "Malaga",
        "ping-position-x": 45,
        "ping-position-y": 71,
        "mobile-ping-position-x": 43,
        "mobile-ping-position-y": 72,
        surnom: "La Costa del Sol",
        photo: "/images/localisations/malaga.jpeg",
      },
      {
        city: "Alicante",
        "ping-position-x": 59,
        "ping-position-y": 64,
        "mobile-ping-position-x": 63,
        "mobile-ping-position-y": 60,
        surnom: "La Ciudad de las Palomas",
        photo: "/images/localisations/alicante.jpeg",
      },
      {
        city: "Iles Canaries",
        "ping-position-x": 18,
        "ping-position-y": 92,
        "mobile-ping-position-x": 16,
        "mobile-ping-position-y": 90,
        surnom: "Las Islas del Sol",
        photo: "/images/localisations/iles_canaries.jpg",
      },
    ],
    cta: {
      description:
        "Le dentaire en Espagne, c'est un diplôme reconnu, une pratique clinique réelle et un avenir assuré. Et si vous commenciez dès maintenant ?",
    },
  },

  // ─── VÉTÉRINAIRE ──────────────────────────────────────────────────────
  {
    id: "veterinaire",
    nom: "Vétérinaire",
    couleur: "var(--color-filiere-veterinaire)",
    nomBold: "Vétéri",
    nomItalic: "naire",
    tagline:
      "Soigner les animaux est une vocation. Les universités espagnoles vous offrent une formation d'excellence pour en faire votre métier.",
    description:
      "Les écoles vétérinaires espagnoles sont parmi les meilleures d'Europe.",
    photo: "/images/filieres/veterinaire.jpg",
    ctaLabel: "Candidater en Vétérinaire",
    dureEtudesAnnees: 5,
    dureEtudesDetail: "300 crédits ECTS · Diplôme reconnu dans toute l'UE 🇪🇺",
    details: [
      { type: "diplome", label: "Diplôme reconnu dans toute l'Europe" },
      { type: "credits", value: 300 },
    ],
    stats: [
      { value: "5 ans", label: "de formation" },
      { value: "300", label: "crédits ECTS" },
      { value: "4", label: "villes" },
    ],
    sousTitre: "La passion au service du vivant",
    introTitreBold: "Devenir vétérinaire, ",
    introTitreItalic: "une vocation accessible",
    introDescription: `La filière vétérinaire en Espagne propose un enseignement de qualité au sein d'universités à la pointe de la technologie, disposant d'hôpitaux et de centres cliniques intégrés. Accessible sur dossier, sans concours d'entrée, cette formation accorde une place centrale à la pratique. Les étudiants sont amenés à manipuler et à intervenir dès les premières années, notamment au contact des animaux. Les stages cliniques se développent progressivement tout au long du cursus, permettant une immersion concrète dans le métier. Encadrés par des enseignants qualifiés et des professionnels en activité, les étudiants évoluent dans un environnement bienveillant, centré sur la progression individuelle.`,
    conditions: CONDITIONS_COMMUNES,
    debouches: [
      "Vétérinaire canin & félin — clinique généraliste ou spécialisée",
      "Vétérinaire équin — chevaux de sport, de course ou d'élevage",
      "Vétérinaire des animaux de rente — bovins, ovins, élevages agricoles",
      "Vétérinaire faune sauvage & zoo",
      "Vétérinaire chercheur — laboratoires, industrie pharmaceutique vétérinaire",
      "Vétérinaire urgentiste",
      "Spécialiste NAC — nouveaux animaux de compagnie (reptiles, oiseaux, rongeurs)",
      "Spécialiste en imagerie médicale",
      "Chirurgien vétérinaire",
    ],
    programme: [
      {
        phase: "Année 1-2",
        label: "Sciences fondamentales",
        matieres: [
          "Anatomie animale comparée",
          "Biologie & génétique",
          "Biochimie & physiologie",
          "Microbiologie & parasitologie",
          "Éthologie animale",
          "Zootechnie & productions animales",
        ],
      },
      {
        phase: "Année 3-4",
        label: "Clinique",
        matieres: [
          "Médecine interne (carnivores, équins, bovins)",
          "Chirurgie & anesthésie",
          "Pharmacologie & toxicologie",
          "Reproduction & obstétrique",
          "Pathologie infectieuse",
          "Imagerie médicale vétérinaire",
        ],
      },
      {
        phase: "Année 5",
        label: "Stages & spécialisation",
        matieres: [
          "Clinique hospitalière vétérinaire",
          "Santé publique & hygiène alimentaire",
          "Stage en structure partenaire",
          "Mémoire de fin d'études (TFG)",
        ],
      },
    ],
    localisations: [
      {
        city: "Madrid",
        "ping-position-x": 49,
        "ping-position-y": 43,
        "mobile-ping-position-x": 49,
        "mobile-ping-position-y": 45,
        surnom: "La Villa y Corte",
        photo: "/images/localisations/madrid.jpeg",
      },
      {
        city: "Valence",
        "ping-position-x": 68,
        "ping-position-y": 52,
        "mobile-ping-position-x": 75,
        "mobile-ping-position-y": 52,
        surnom: "La Ciudad del Turia",
        photo: "/images/localisations/valence.jpeg",
      },
      {
        city: "Malaga",
        "ping-position-x": 45,
        "ping-position-y": 71,
        "mobile-ping-position-x": 43,
        "mobile-ping-position-y": 72,
        surnom: "La Costa del Sol",
        photo: "/images/localisations/malaga.jpeg",
      },
      {
        city: "Alicante",
        "ping-position-x": 59,
        "ping-position-y": 64,
        "mobile-ping-position-x": 63,
        "mobile-ping-position-y": 60,
        surnom: "La Ciudad de las Palomas",
        photo: "/images/localisations/alicante.jpeg",
      },
      {
        city: "Iles Canaries",
        "ping-position-x": 18,
        "ping-position-y": 92,
        "mobile-ping-position-x": 16,
        "mobile-ping-position-y": 90,
        surnom: "Las Islas del Sol",
        photo: "/images/localisations/iles_canaries.jpg",
      },
    ],
    cta: {
      description:
        "Le vétérinaire est un métier de passion. En Espagne, cette passion devient accessible. Et si vous faisiez le premier pas ?",
    },
  },

  // ─── MÉDECINE ─────────────────────────────────────────────────────────
  {
    id: "infirmier",
    nom: "Médecine",
    couleur: "var(--color-filiere-infirmier)",
    nomBold: "Méde",
    nomItalic: "cine",
    tagline:
      "Intégrez les formations médicales espagnoles reconnues dans toute l'Europe — un parcours d'excellence accessible et concret.",
    description:
      "Formation médicale espagnole reconnue dans toute l'Union Européenne.",
    photo: "/images/filieres/medecine.jpeg",
    ctaLabel: "Candidater en Médecine",
    dureEtudesAnnees: 6,
    dureEtudesDetail: "360 crédits ECTS · Diplôme reconnu dans toute l'UE 🇪🇺",
    details: [
      { type: "diplome", label: "Diplôme reconnu dans toute l'Europe" },
      { type: "credits", value: 360 },
    ],
    stats: [
      { value: "6 ans", label: "de formation" },
      { value: "360", label: "crédits ECTS" },
      { value: "5", label: "villes" },
    ],
    sousTitre: "Au cœur du soin",
    introTitreBold: "Soigner, accompagner, ",
    introTitreItalic: "transformer des vies",
    introDescription: `La filière de médecine en Espagne propose un enseignement de qualité au sein d'universités à la pointe de la technologie, reconnues pour la qualité de leurs infrastructures. Accessible sur dossier, sans concours d'entrée, elle offre un accès plus direct aux études médicales. La formation se distingue par une intégration progressive de la pratique, avec des travaux dirigés, des simulations cliniques et des stages hospitaliers dès les premières années. Les étudiants évoluent dans un environnement bienveillant, centré sur la progression individuelle, et bénéficient d'un encadrement par des enseignants qualifiés et des professionnels de santé.`,
    conditions: CONDITIONS_COMMUNES,
    debouches: [
      "Médecin généraliste",
      "Médecin hospitalier",
      "Médecin urgentiste",
      "Médecin du sport",
      "Médecin en clinique privée",
      "Chirurgie (orthopédique, digestive...)",
      "Cardiologie",
      "Dermatologie",
      "Radiologie & imagerie médicale",
      "Anesthésie-réanimation",
    ],
    programme: [
      {
        phase: "Année 1-2",
        label: "Sciences & soins fondamentaux",
        matieres: [
          "Anatomie & physiologie",
          "Biologie & microbiologie",
          "Pharmacologie de base",
          "Soins infirmiers fondamentaux",
          "Éthique & déontologie",
          "Communication & relation d'aide",
        ],
      },
      {
        phase: "Année 3-4",
        label: "Clinique & stages",
        matieres: [
          "Soins en médecine & chirurgie",
          "Urgences & soins intensifs",
          "Pédiatrie & maternité",
          "Santé mentale & psychiatrie",
          "Gérontologie",
          "Stages hospitaliers (2 100 h minimum)",
        ],
      },
    ],
    localisations: [
      {
        city: "Madrid",
        "ping-position-x": 49,
        "ping-position-y": 43,
        "mobile-ping-position-x": 49,
        "mobile-ping-position-y": 45,
        surnom: "La Villa y Corte",
        photo: "/images/localisations/madrid.jpeg",
      },
      {
        city: "Valence",
        "ping-position-x": 68,
        "ping-position-y": 52,
        "mobile-ping-position-x": 75,
        "mobile-ping-position-y": 52,
        surnom: "La Ciudad del Turia",
        photo: "/images/localisations/valence.jpeg",
      },
      {
        city: "Malaga",
        "ping-position-x": 45,
        "ping-position-y": 71,
        "mobile-ping-position-x": 43,
        "mobile-ping-position-y": 72,
        surnom: "La Costa del Sol",
        photo: "/images/localisations/malaga.jpeg",
      },
      {
        city: "Alicante",
        "ping-position-x": 59,
        "ping-position-y": 64,
        "mobile-ping-position-x": 63,
        "mobile-ping-position-y": 60,
        surnom: "La Ciudad de las Palomas",
        photo: "/images/localisations/alicante.jpeg",
      },
      {
        city: "Iles Canaries",
        "ping-position-x": 18,
        "ping-position-y": 92,
        "mobile-ping-position-x": 16,
        "mobile-ping-position-y": 90,
        surnom: "Las Islas del Sol",
        photo: "/images/localisations/iles_canaries.jpg",
      },
    ],
    cta: {
      description:
        "Les métiers de la santé ont besoin de vous. En Espagne, la porte est ouverte. Et si vous faisiez le premier pas ?",
    },
  },
];

export default filieres;
