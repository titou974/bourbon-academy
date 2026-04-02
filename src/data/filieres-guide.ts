import type { FiliereGuide } from "@/types";

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
          "Pas de concours d'entrée. L'accès aux études de kinésithérapie en Espagne se fait sur dossier académique, sans PASS ni concours comme en France.",
        accroche: "Accès direct sur dossier",
      },
      {
        emoji: "🏥",
        categorie: "Pratique",
        titre: "Formation très pratique",
        description:
          "Stages en clinique tout au long du cursus. Plus de 1 200 heures de stage, réalisées dans différents environnements de pratique, pour une vision concrète du métier.",
        accroche: "Pratique dès l'année 1",
      },
      {
        emoji: "🤲",
        categorie: "Immersion",
        titre: "Cours de pratique dès la première année",
        description:
          "Une immersion concrète dès le début du cursus. Dès la première année, les étudiants suivent des cours de pratique et découvrent les réalités du métier pour mieux se projeter.",
        accroche: "Pratique dès le jour 1",
      },
      {
        emoji: "🇪🇺",
        categorie: "Reconnaissance",
        titre: "Diplôme reconnu en France",
        description:
          "Diplôme conforme aux normes européennes. Le Grado en Fisioterapia (4 ans, 240 ECTS) permet une reconnaissance en France via la directive européenne, avec possibilité d'exercice après démarches.",
        accroche: "Exercer en France",
      },
      {
        emoji: "💪",
        categorie: "Spécialisation",
        titre: "Découverte des spécialités",
        description:
          "Une vision complète de la kinésithérapie. Sport, neurologie, cardio-respiratoire, pédiatrie, uro-gynécologie : les principaux domaines sont abordés au cours du cursus.",
        accroche: "Trouvez votre spécialité",
      },
      {
        emoji: "📈",
        categorie: "Emploi",
        titre: "Débouchés solides",
        description:
          "Une profession très demandée. La kinésithérapie offre de nombreuses opportunités d'exercice en libéral, en hôpital, en centre de rééducation ou dans le sport.",
        accroche: "Emploi quasi garanti",
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
          "Admission sur dossier, sans concours ni PASS. La sélection se fait à partir de votre dossier scolaire et, selon les universités, d'un entretien. La soumission du bulletin de première est suffisante pour candidater.",
        accroche: "Accès direct sur dossier",
      },
      {
        emoji: "🇪🇺",
        categorie: "Reconnaissance",
        titre: "Diplôme reconnu en France",
        description:
          "Diplôme conforme aux normes européennes. Le Grado en Odontología (5 ans, 300 ECTS) permet une reconnaissance en France via la directive européenne, avec inscription à l'Ordre sans reprise d'études.",
        accroche: "Inscription à l'Ordre garantie",
      },
      {
        emoji: "🦷",
        categorie: "Pratique",
        titre: "Pratique dès la 3e année",
        description:
          "Premiers soins sur patients en clinique universitaire. À partir de la 3e année, les étudiants réalisent des actes encadrés (détartrage, soins conservateurs...), sous supervision de praticiens expérimentés.",
        accroche: "Clinique universitaire intégrée",
      },
      {
        emoji: "🔬",
        categorie: "Équipements",
        titre: "Équipements de pointe",
        description:
          "Apprentissage sur technologies modernes. Avant la pratique réelle, les étudiants s'entraînent sur simulateurs (fantômes dentaires), imagerie 3D et scanners intra-oraux utilisés en cabinet.",
        accroche: "Technologie de pointe",
      },
      {
        emoji: "📈",
        categorie: "Emploi",
        titre: "Débouchés assurés",
        description:
          "Forte demande de dentistes en France. Le nombre important de départs à la retraite et le manque de praticiens facilitent l'installation ou l'emploi dès l'obtention du diplôme.",
        accroche: "Emploi quasi garanti",
      },
      {
        emoji: "🌐",
        categorie: "Réseau",
        titre: "Réseau professionnel",
        description:
          "Des étudiants déjà formés et installés. De nombreux diplômés exercent aujourd'hui en France, facilitant les stages, les premiers contacts professionnels et l'installation.",
        accroche: "Communauté francophone",
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
          "Sur dossier académique. L'admission aux études vétérinaires en Espagne se fait sur dossier scolaire. Les étudiants peuvent intégrer directement après le bac.",
        accroche: "Accès direct après le bac",
      },
      {
        emoji: "🐾",
        categorie: "Pratique",
        titre: "Formation clinique encadrée",
        description:
          "Une immersion progressive en pratique. Les études incluent une formation pratique avec mise en situation sur des cas réels, sous la supervision de professionnels.",
        accroche: "Pratique sur cas réels",
      },
      {
        emoji: "🔬",
        categorie: "Équipements",
        titre: "Équipements à la pointe de la technologie",
        description:
          "Formation sur matériel professionnel. Les étudiants sont formés avec des équipements modernes utilisés en pratique vétérinaire : imagerie médicale, blocs de soins, laboratoires d'analyse et outils de diagnostic.",
        accroche: "Équipements dernière génération",
      },
      {
        emoji: "🇪🇺",
        categorie: "Reconnaissance",
        titre: "Diplôme reconnu en Europe",
        description:
          "Diplôme conforme aux normes européennes. Le diplôme vétérinaire espagnol (5 ans, 300 ECTS) est reconnu dans l'Union européenne via la directive 2005/36/CE.",
        accroche: "Inscription à l'Ordre garantie",
      },
      {
        emoji: "🌿",
        categorie: "Formation",
        titre: "Formation complète",
        description:
          "Tous les domaines abordés. Le cursus couvre l'ensemble des champs de la médecine vétérinaire : animaux domestiques, ruraux, équins, santé publique et prévention.",
        accroche: "Du chat au cheval",
      },
      {
        emoji: "📈",
        categorie: "Emploi",
        titre: "Débouchés solides",
        description:
          "Un secteur avec des besoins réels. La profession vétérinaire offre de nombreuses opportunités d'exercice en clinique, en industrie, en recherche ou en santé publique.",
        accroche: "Forte demande en France",
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
          "Accès sur dossier académique. L'admission en médecine en Espagne se fait sur dossier scolaire. Les étudiants peuvent intégrer directement après le bac.",
        accroche: "Sans concours",
      },
      {
        emoji: "🏥",
        categorie: "Stages",
        titre: "Stages hospitaliers",
        description:
          "Plus de 1 800 heures de stages. Le cursus inclut une formation clinique progressive dès la 3e année, avec immersion dans différents services : urgences, chirurgie, médecine interne, pédiatrie.",
        accroche: "La pratique avant tout",
      },
      {
        emoji: "🫀",
        categorie: "Formation",
        titre: "Formation",
        description:
          "Un cursus structuré et progressif. De la théorie aux pratiques hospitalières, la formation médicale se construit étape par étape avec une montée en responsabilité.",
        accroche: "De la théorie au bloc",
      },
      {
        emoji: "🇪🇺",
        categorie: "Reconnaissance",
        titre: "Reconnaissance",
        description:
          "Diplôme reconnu en Europe. Le diplôme de médecine espagnol (6 ans, 360 ECTS) est reconnu dans l'Union européenne via la directive 2005/36/CE.",
        accroche: "Carrière européenne",
      },
      {
        emoji: "💛",
        categorie: "Humain",
        titre: "Approche humaine",
        description:
          "La relation patient au cœur de la formation. La formation met l'accent sur la communication, l'éthique et la prise en charge globale du patient.",
        accroche: "Soigner, pas juste traiter",
      },
      {
        emoji: "📊",
        categorie: "Emploi",
        titre: "Débouchés",
        description:
          "Un secteur en forte demande. Les besoins en médecins restent élevés, offrant de nombreuses opportunités de carrière en milieu hospitalier ou libéral.",
        accroche: "Emploi immédiat",
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
