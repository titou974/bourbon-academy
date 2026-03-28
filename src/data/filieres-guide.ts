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
        titre: "Pas de concours d'entrée",
        description:
          "L'admission en kinésithérapie en Espagne se fait sur dossier scolaire. Fini les années de PACES ou de prépa — vous commencez votre formation dès la première année.",
        accroche: "Accès direct sur dossier",
      },
      {
        emoji: "🏥",
        categorie: "Pratique",
        titre: "1 500+ heures de stages",
        description:
          "Les universités espagnoles misent sur la pratique clinique. Dès la 2e année, vous êtes en contact avec de vrais patients dans des centres de rééducation partenaires.",
        accroche: "Pratique dès l'année 2",
      },
      {
        emoji: "🇪🇺",
        categorie: "Reconnaissance",
        titre: "Diplôme reconnu dans toute l'UE",
        description:
          "Le Grado en Fisioterapia est automatiquement reconnu en France et dans les 27 pays de l'UE. Vous pourrez exercer où vous le souhaitez dès l'obtention du diplôme.",
        accroche: "Exercer en France ou ailleurs",
      },
      {
        emoji: "💪",
        categorie: "Spécialisation",
        titre: "Sport, neuro, pédiatrie…",
        description:
          "Le cursus espagnol offre des modules de spécialisation variés : kinésithérapie du sport, neurologie, pédiatrie, respiratoire. De quoi trouver votre voie.",
        accroche: "Trouvez votre spécialité",
      },
      {
        emoji: "🌍",
        categorie: "International",
        titre: "Un profil bilingue recherché",
        description:
          "Étudier en Espagne, c'est maîtriser l'espagnol en plus du français. Un atout considérable sur le marché du travail, avec 500 millions de locuteurs dans le monde.",
        accroche: "Espagnol + Français",
      },
      {
        emoji: "📈",
        categorie: "Emploi",
        titre: "100 % d'insertion professionnelle",
        description:
          "La kinésithérapie est l'un des métiers de santé les plus demandés en France. Le taux d'insertion professionnelle frôle les 100 % dans les 6 mois après le diplôme.",
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
        emoji: "🦷",
        categorie: "Pratique",
        titre: "De vrais patients dès l'année 3",
        description:
          "Les facultés espagnoles disposent de cliniques universitaires intégrées. Dès la 3e année, vous pratiquez des soins réels sous supervision — amalgames, détartrages, extractions.",
        accroche: "Clinique universitaire intégrée",
      },
      {
        emoji: "🎓",
        categorie: "Admission",
        titre: "Admission sur dossier",
        description:
          "Pas de PACES, pas de concours. L'admission se fait sur votre dossier scolaire et une lettre de motivation. Un bac S solide suffit pour candidater.",
        accroche: "Fini les concours",
      },
      {
        emoji: "🔬",
        categorie: "Équipements",
        titre: "Labo de simulation haute-fidélité",
        description:
          "Avant de toucher un vrai patient, vous vous entraînez sur des simulateurs de dernière génération. Fantômes dentaires, imagerie 3D, scanners intra-oraux — la technologie au service de l'apprentissage.",
        accroche: "Technologie de pointe",
      },
      {
        emoji: "🇪🇺",
        categorie: "Reconnaissance",
        titre: "Diplôme reconnu dans 27 pays",
        description:
          "Le Grado en Odontología est automatiquement reconnu en France. Vous pourrez vous inscrire à l'Ordre des chirurgiens-dentistes et exercer dès votre retour.",
        accroche: "Inscription à l'Ordre garantie",
      },
      {
        emoji: "💰",
        categorie: "Revenus",
        titre: "L'un des métiers les mieux rémunérés",
        description:
          "Un chirurgien-dentiste libéral gagne en moyenne 6 000 à 12 000 € nets par mois en France. Un investissement dans vos études qui se rentabilise rapidement.",
        accroche: "6 000–12 000 €/mois",
      },
      {
        emoji: "🌐",
        categorie: "Réseau",
        titre: "Un réseau alumni en pleine croissance",
        description:
          "Des centaines de dentistes formés en Espagne exercent aujourd'hui en France. Ce réseau grandissant est une ressource précieuse pour les stages, l'installation et les conseils.",
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
        emoji: "🐾",
        categorie: "Pratique",
        titre: "Hôpital vétérinaire sur campus",
        description:
          "Les universités espagnoles disposent d'hôpitaux vétérinaires intégrés. Chiens, chats, chevaux, animaux de ferme — vous pratiquez sur tous les types d'espèces dès la 3e année.",
        accroche: "Toutes les espèces",
      },
      {
        emoji: "🎓",
        categorie: "Admission",
        titre: "Sur dossier et motivation",
        description:
          "Pas de concours post-prépa. L'admission se fait sur votre dossier scolaire, un entretien de motivation et votre passion pour les animaux. Un bac S solide ouvre les portes.",
        accroche: "Votre passion compte",
      },
      {
        emoji: "🔬",
        categorie: "Recherche",
        titre: "Laboratoires de pointe",
        description:
          "Imagerie médicale, chirurgie mini-invasive, analyse génétique — les universités partenaires investissent massivement dans des équipements de dernière génération.",
        accroche: "Équipements dernière génération",
      },
      {
        emoji: "🇪🇺",
        categorie: "Reconnaissance",
        titre: "Diplôme reconnu dans toute l'UE",
        description:
          "Le Grado en Veterinaria (5 ans, 300 ECTS) est automatiquement reconnu en France. Vous pourrez vous inscrire à l'Ordre des vétérinaires et exercer partout en Europe.",
        accroche: "Inscription à l'Ordre garantie",
      },
      {
        emoji: "🌿",
        categorie: "Diversité",
        titre: "Animaux domestiques, ruraux ou exotiques",
        description:
          "Le cursus espagnol couvre un large spectre : médecine des carnivores, équine, bovine, faune sauvage, et même santé publique vétérinaire. Vous trouverez votre spécialité.",
        accroche: "Du chat au cheval",
      },
      {
        emoji: "🏡",
        categorie: "Emploi",
        titre: "Un métier en tension",
        description:
          "La France manque de vétérinaires, particulièrement en zones rurales. L'insertion professionnelle est excellente, avec des postes à pourvoir dans tout le territoire.",
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
      { value: "4 ans", label: "de formation" },
      { value: "240", label: "crédits ECTS" },
      { value: "5", label: "villes" },
    ],
    sousTitre: "Au cœur du soin",
    introTitreBold: "Soigner, accompagner, ",
    introTitreItalic: "transformer des vies",
    introDescription:
      "Les études médicales en Espagne offrent un accès direct sur dossier, sans les barrières du système français. En 4 ans, vous obtenez un diplôme reconnu dans toute l'UE, avec plus de 2 100 heures de stages cliniques. Les universités espagnoles forment des professionnels de santé complets, humains et compétents.",
    temoignage: {
      quote:
        "J'ai choisi l'Espagne pour éviter la sélection en IFSI. Aujourd'hui, je fais mes stages dans les meilleurs hôpitaux de Valence. Mon diplôme sera reconnu en France dès mon retour.",
      auteur: "Témoignage d'une étudiante en 2e année à Valence",
    },
    atouts: [
      {
        emoji: "🏥",
        categorie: "Stages",
        titre: "2 100+ heures de pratique clinique",
        description:
          "Le cursus espagnol impose un minimum de 2 100 heures de stages en milieu hospitalier. Urgences, chirurgie, maternité, pédiatrie — vous touchez à toutes les spécialités.",
        accroche: "La pratique avant tout",
      },
      {
        emoji: "🎓",
        categorie: "Admission",
        titre: "Accès direct sur dossier",
        description:
          "Pas de sélection Parcoursup, pas de concours IFSI. L'admission se fait sur votre dossier scolaire et votre lettre de motivation. Un bac S ou ST2S suffit pour candidater.",
        accroche: "Sans concours",
      },
      {
        emoji: "🫀",
        categorie: "Formation",
        titre: "Un cursus complet et progressif",
        description:
          "Des sciences fondamentales aux soins intensifs, le cursus construit vos compétences étape par étape. Chaque année apporte de nouvelles responsabilités et de nouveaux défis.",
        accroche: "De la théorie au bloc",
      },
      {
        emoji: "🇪🇺",
        categorie: "Reconnaissance",
        titre: "Diplôme reconnu dans 27 pays",
        description:
          "Le diplôme espagnol en sciences de la santé est reconnu dans toute l'UE. Vous pourrez exercer en France, en Belgique, en Suisse ou n'importe où en Europe.",
        accroche: "Carrière européenne",
      },
      {
        emoji: "💛",
        categorie: "Humain",
        titre: "La relation patient au cœur",
        description:
          "Le modèle espagnol accorde une place centrale à la relation d'aide, la communication et l'éthique. Vous ne serez pas juste un technicien, mais un soignant complet.",
        accroche: "Soigner, pas juste traiter",
      },
      {
        emoji: "📊",
        categorie: "Emploi",
        titre: "Le métier le plus demandé en France",
        description:
          "Les professions de santé sont en tension critique en France. Les hôpitaux recrutent activement, avec des salaires en hausse et des conditions d'exercice qui s'améliorent.",
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
            "Le diplôme espagnol (4 ans, 240 ECTS) est reconnu en France via la directive européenne. Votre enfant pourra exercer dans tout hôpital français dès son retour.",
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
