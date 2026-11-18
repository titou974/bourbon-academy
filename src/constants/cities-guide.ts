import type { CityGuide } from "@/types";

export const citiesGuide: CityGuide[] = [
  // ─── MADRID ───────────────────────────────────────────────────────────
  {
    ville: "Madrid",
    villeBold: "Mad",
    villeItalic: "rid",
    surnom: "La Villa y Corte",
    region: "Communauté de Madrid",
    photo: "/images/localisations/madrid.jpeg",
    tagline:
      "Cosmopolite, ensoleillée et résolument tournée vers l'avenir — Madrid n'est pas juste une ville. C'est une expérience de vie.",
    stats: [
      { value: "300K", label: "Étudiants" },
      { value: "10€", label: "Transport illimité /mois (-26 ans)" },
    ],
    sousTitre: "La ville qui ne dort jamais",
    introTitreBold: "Là où chaque jour ",
    introTitreItalic: "est une aventure",
    introDescription:
      "Madrid accueille chaque année des milliers d'étudiants internationaux. Ses grandes universités, sa vie culturelle intense et son art de vivre unique en font l'une des destinations étudiantes les plus prisées d'Europe. Et son secret ? On s'y sent chez soi dès les premières semaines.",
    temoignage: {
      quote:
        "Madrid, c'est comme si la ville nous attendait pour nous permettre de vivre en son sein des aventures inoubliables.",
      auteur: "Témoignage d'une étudiante Erasmus",
    },
    anecdotes: [
      {
        emoji: "🍽️",
        categorie: "Gastronomie",
        titre: "Le plus vieux restaurant du monde",
        description:
          "Le Sobrino de Botín, fondé en 1725, est officiellement reconnu par le Guinness comme le restaurant en activité le plus ancien au monde. Hemingway y dînait. Vous aussi, vous pouvez.",
        accroche: "Depuis 1725",
      },
      {
        emoji: "🍺",
        categorie: "Vie sociale",
        titre: "La tapa, c'est offert",
        description:
          "Dans beaucoup de bars traditionnels de Madrid, une petite tapa accompagne encore la boisson. Entre amis, on dîne de tapas pour quelques euros — un art de vivre bien madrilène.",
        accroche: "Tapa souvent offerte",
      },
      {
        emoji: "🏛️",
        categorie: "Culture",
        titre: "Le Prado, gratuit avant 25 ans",
        description:
          "L'un des plus grands musées du monde — Goya, Vélasquez, Bosch — ouvre ses portes gratuitement aux étudiants de moins de 25 ans. La culture ne devrait jamais être un luxe.",
        accroche: "Entrée gratuite",
      },
      {
        emoji: "🌙",
        categorie: "Art de vivre",
        titre: "La ville qui vit décalée",
        description:
          "Dîner à 22h, sortir à minuit, rentrer à l'aube — à Madrid, les horaires sont inversés et c'est une philosophie. Pour un étudiant, c'est une promesse de vie sociale intense.",
        accroche: "La nuit vous appartient",
      },
      {
        emoji: "🗺️",
        categorie: "Histoire insolite",
        titre: "Tout part de Madrid",
        description:
          'La Puerta del Sol abrite le "kilomètre zéro" — le point exact depuis lequel sont mesurées toutes les distances du pays. Symboliquement, tout commence ici.',
        accroche: "Km 0 de l'Espagne",
      },
      {
        emoji: "🌍",
        categorie: "Cosmopolitisme",
        titre: "Lavapiés, le monde en un quartier",
        description:
          "Toutes les nationalités se retrouvent dans ce quartier bohème et multiculturel. Art alternatif, cuisines du monde, bars traditionnels — l'intégration y est naturelle et immédiate.",
        accroche: "Le quartier des étudiants",
      },
    ],
    budget: {
      description:
        "Madrid, grande capitale européenne, reste accessible. Voici ce que coûte concrètement la vie d'un étudiant.",
      lignes: [
        {
          emoji: "🏠",
          label: "Colocation",
          prix: "450–650€",
          unite: "/mois",
        },
        {
          emoji: "🥘",
          label: "Alimentation",
          prix: "~220€",
          unite: "/mois",
        },
        { emoji: "🚇", label: "Transport", prix: "10€", unite: "/mois" },
        {
          emoji: "✈️",
          label: "Vol Paris–Madrid",
          prix: "80–200€",
          unite: "A/R",
        },
      ],
    },
    rassuranceParents: {
      description:
        "Envoyer son enfant à l'étranger, c'est une décision importante. Voici pourquoi Madrid est aussi un choix sûr et sérieux.",
      items: [
        {
          emoji: "🏥",
          titre: "Santé couverte",
          description:
            "La carte européenne d'assurance maladie donne accès aux soins du système public espagnol, comme pour un assuré local. Le système de santé madrilène est réputé et accessible.",
        },
        {
          emoji: "🎓",
          titre: "Universités d'excellence",
          description:
            "L'Universidad Complutense, l'Autónoma et la Politécnica figurent parmi les plus reconnues d'Europe. Un diplôme madrilène, c'est un passeport international.",
        },
        {
          emoji: "🤝",
          titre: "Intégration rapide",
          description:
            "Madrid est une ville facile à apprivoiser. Sa convivialité légendaire fait qu'on s'y sent comme chez soi en quelques semaines à peine.",
        },
        {
          emoji: "🌐",
          titre: "Une langue, un atout",
          description:
            "Maîtriser l'espagnol après un séjour à Madrid, c'est ouvrir des portes sur près de 600 millions de locuteurs à travers le monde. Un vrai avantage carrière.",
        },
      ],
    },
    cta: {
      titre: "Votre aventure commence ici",
      description:
        "Madrid n'attend que vous. 300 000 étudiants ont déjà dit oui. Et beaucoup n'en sont jamais repartis.",
      bouton: "Candidater pour étudier à Madrid",
    },
    filieres: ["kine", "dentaire", "veterinaire", "infirmier"],
  },

  // ─── VALENCE ──────────────────────────────────────────────────────────
  {
    ville: "Valence",
    villeBold: "Val",
    villeItalic: "ence",
    surnom: "La Ciudad del Turia",
    region: "Communauté valencienne",
    photo: "/images/localisations/valence.jpeg",
    tagline:
      "Entre plage et futurisme, Valence est la ville où l'on étudie les pieds dans le sable et le regard tourné vers demain.",
    stats: [
      { value: "100K", label: "Étudiants" },
      { value: "N°1", label: "Ville pour expatriés (InterNations 2024)" },
    ],
    sousTitre: "La Méditerranée au quotidien",
    introTitreBold: "Là où les études ",
    introTitreItalic: "ont un goût de sel",
    introDescription:
      "Troisième ville d'Espagne, Valence séduit par son cadre de vie exceptionnel. Sa Cité des Arts et des Sciences côtoie les plages de sable fin. Le tout avec un coût de la vie nettement inférieur à Madrid ou Barcelone. Pour les étudiants, c'est le compromis parfait.",
    temoignage: {
      quote:
        "Valence, c'est se réveiller avec le bruit de la mer et finir la journée sur une terrasse. Le rythme de vie ici te transforme.",
      auteur: "Témoignage d'un étudiant en kinésithérapie",
    },
    anecdotes: [
      {
        emoji: "🥘",
        categorie: "Gastronomie",
        titre: "Le berceau de la paella",
        description:
          "La vraie paella est née ici. Chaque dimanche, les familles valenciennes perpétuent la tradition. Et non, la paella aux fruits de mer n'est pas l'originale — c'est celle au poulet, au lapin et aux haricots verts.",
        accroche: "La vraie recette",
      },
      {
        emoji: "🔥",
        categorie: "Traditions",
        titre: "Les Fallas, la fête de feu",
        description:
          "Chaque mars, Valence brûle des centaines de sculptures géantes dans les rues. Le bruit, la lumière, l'énergie — les Fallas sont inscrites au patrimoine immatériel de l'UNESCO.",
        accroche: "UNESCO depuis 2016",
      },
      {
        emoji: "🚴",
        categorie: "Mobilité",
        titre: "La ville du vélo",
        description:
          "Valence est plate, dotée d'un vaste réseau de pistes cyclables et du Jardín del Turia : un ancien lit de fleuve transformé en parc de 9 km qui traverse toute la ville. Ici, on se déplace à vélo.",
        accroche: "9 km de parc en ville",
      },
      {
        emoji: "🏗️",
        categorie: "Architecture",
        titre: "Calatrava, le génie local",
        description:
          "La Cité des Arts et des Sciences, chef-d'œuvre de Santiago Calatrava, est l'un des ensembles architecturaux les plus spectaculaires d'Europe. Et c'est votre futur décor quotidien.",
        accroche: "Architecture du futur",
      },
      {
        emoji: "🏖️",
        categorie: "Plages",
        titre: "La Malvarrosa, la plage en ville",
        description:
          "La plage de la Malvarrosa se rejoint en tram ou en bus depuis le centre, et elle est toute proche des campus de Blasco Ibáñez et de la Politècnica. Après les cours, le sable fin vous attend.",
        accroche: "Plage toute l'année",
      },
      {
        emoji: "🎨",
        categorie: "Quartier étudiant",
        titre: "El Carmen, l'âme de la ville",
        description:
          "Ruelles médiévales, street art, bars à tapas et terrasses ombragées — El Carmen est le quartier historique où toute la vie étudiante converge le soir venu.",
        accroche: "Le cœur bohème",
      },
    ],
    budget: {
      description:
        "Valence est l'une des villes les plus abordables du littoral méditerranéen. Voici le budget étudiant moyen.",
      lignes: [
        {
          emoji: "🏠",
          label: "Colocation",
          prix: "350–500€",
          unite: "/mois",
        },
        {
          emoji: "🥘",
          label: "Alimentation",
          prix: "~200€",
          unite: "/mois",
        },
        { emoji: "🚇", label: "Transport", prix: "~15€", unite: "/mois" },
        {
          emoji: "✈️",
          label: "Vol Paris–Valence",
          prix: "80–180€",
          unite: "A/R",
        },
      ],
    },
    rassuranceParents: {
      description:
        "Valence est régulièrement classée parmi les meilleures villes européennes pour la qualité de vie. Un cadre rassurant pour vos enfants.",
      items: [
        {
          emoji: "🏥",
          titre: "Santé accessible",
          description:
            "Le système de santé valencien est de qualité. La carte européenne d'assurance maladie donne accès aux soins du système public.",
        },
        {
          emoji: "🎓",
          titre: "Universités reconnues",
          description:
            "L'Universitat de València et la Politècnica figurent dans les classements internationaux. Des diplômes reconnus dans toute l'Europe.",
        },
        {
          emoji: "🚴",
          titre: "Ville sûre et douce",
          description:
            "Valence est une ville à taille humaine, très sûre et agréable à vivre. Tout se fait à vélo ou à pied dans le centre.",
        },
        {
          emoji: "☀️",
          titre: "Un cadre de vie idéal",
          description:
            "Soleil, mer, espaces verts — le cadre de vie valencien favorise le bien-être et l'équilibre entre études et détente.",
        },
      ],
    },
    cta: {
      titre: "Votre aventure commence ici",
      description:
        "Valence n'attend que vous. 100 000 étudiants ont déjà choisi la Méditerranée. Pourquoi pas vous ?",
      bouton: "Candidater pour étudier à Valence",
    },
    filieres: ["kine", "dentaire", "veterinaire", "infirmier"],
  },

  // ─── MALAGA ───────────────────────────────────────────────────────────
  {
    ville: "Malaga",
    villeBold: "Mal",
    villeItalic: "aga",
    surnom: "La Costa del Sol",
    region: "Andalousie",
    photo: "/images/localisations/malaga.jpeg",
    tagline:
      "Berceau de Picasso, hub tech en plein essor — Malaga est la surprise andalouse qui séduit les étudiants du monde entier.",
    stats: [
      { value: "40K", label: "Étudiants" },
      { value: "N°1", label: "Ville pour expatriés (InterNations 2025)" },
    ],
    sousTitre: "L'Andalousie qui regarde vers l'avenir",
    introTitreBold: "Là où le soleil ",
    introTitreItalic: "ne se couche jamais",
    introDescription:
      "Malaga a changé. Ville natale de Picasso, elle s'est réinventée en pôle culturel et technologique tout en gardant son âme andalouse. Pour les étudiants, c'est le meilleur des deux mondes : le charme du sud et l'énergie d'une ville en pleine transformation.",
    temoignage: {
      quote:
        "À Malaga, on étudie avec le soleil dans le dos et les pieds à 10 minutes de la plage. Difficile de trouver une meilleure motivation.",
      auteur: "Témoignage d'un étudiant en dentaire",
    },
    anecdotes: [
      {
        emoji: "🎨",
        categorie: "Culture",
        titre: "Picasso est né ici",
        description:
          "Pablo Picasso a vu le jour Plaza de la Merced, dans la maison qui porte aujourd'hui le n°15. Elle est devenue un musée, et la ville entière respire l'art à chaque coin de rue.",
        accroche: "Plaza de la Merced, 15",
      },
      {
        emoji: "🍷",
        categorie: "Art de vivre",
        titre: "L'espeto, tradition sacrée",
        description:
          "Les sardines grillées sur des brochettes de roseaux, plantées dans le sable face à la mer — l'espeto est l'emblème culinaire de Malaga. Un repas à 5 €, face au coucher de soleil.",
        accroche: "5€ face à la mer",
      },
      {
        emoji: "💻",
        categorie: "Innovation",
        titre: "Le Silicon Valley andalou",
        description:
          "Le Málaga TechPark réunit plus de 600 entreprises, et Google a ouvert en centre-ville son centre européen de cybersécurité. Un vivier d'opportunités pour les étudiants.",
        accroche: "600+ entreprises tech",
      },
      {
        emoji: "🏰",
        categorie: "Histoire",
        titre: "L'Alcazaba, 1 000 ans d'histoire",
        description:
          "Cette forteresse mauresque du XIe siècle surplombe la ville et offre une vue panoramique sur la Méditerranée. Entrée gratuite le dimanche après 14h.",
        accroche: "Gratuit le dimanche",
      },
      {
        emoji: "🌊",
        categorie: "Plages",
        titre: "Pedregalejo, le village dans la ville",
        description:
          "Cet ancien quartier de pêcheurs est devenu le spot préféré des étudiants. Chiringuitos, ambiance décontractée et couchers de soleil quotidiens inclus.",
        accroche: "Le spot étudiant",
      },
      {
        emoji: "🎶",
        categorie: "Fêtes",
        titre: "La Feria de Agosto",
        description:
          "Une semaine entière de fête en août — flamenco dans les rues, casetas, musique live. Malaga vit alors l'une des plus grandes fêtes d'Andalousie.",
        accroche: "1 semaine de fiesta",
      },
    ],
    budget: {
      description:
        "Malaga offre un excellent rapport qualité-prix sur la côte méditerranéenne. Le budget étudiant y est très maîtrisé.",
      lignes: [
        {
          emoji: "🏠",
          label: "Colocation",
          prix: "380–520€",
          unite: "/mois",
        },
        {
          emoji: "🥘",
          label: "Alimentation",
          prix: "~200€",
          unite: "/mois",
        },
        { emoji: "🚇", label: "Transport", prix: "13,50€", unite: "/mois" },
        {
          emoji: "✈️",
          label: "Vol Paris–Malaga",
          prix: "100–220€",
          unite: "A/R",
        },
      ],
    },
    rassuranceParents: {
      description:
        "Malaga combine douceur de vivre et sérieux académique. Un environnement rassurant pour étudier à l'étranger.",
      items: [
        {
          emoji: "🏥",
          titre: "Santé accessible",
          description:
            "L'Hôpital régional universitaire de Malaga (ex-Carlos Haya) est l'un des mieux équipés d'Andalousie. La carte européenne d'assurance maladie donne accès aux soins publics.",
        },
        {
          emoji: "🎓",
          titre: "Universidad de Málaga",
          description:
            "L'UMA est une université publique reconnue, avec un campus moderne à Teatinos et des partenariats internationaux solides.",
        },
        {
          emoji: "☀️",
          titre: "Climat et bien-être",
          description:
            "L'un des climats les plus doux d'Europe, avec environ 300 jours de soleil par an. La douceur de vivre andalouse favorise l'équilibre et le bien-être des étudiants.",
        },
        {
          emoji: "✈️",
          titre: "Facile d'accès",
          description:
            "L'aéroport international de Malaga est à 15 min du centre. Vols low-cost fréquents vers toute la France — facile de rentrer le week-end.",
        },
      ],
    },
    cta: {
      titre: "Votre aventure commence ici",
      description:
        "Malaga n'attend que vous. Le soleil, la culture et les études — tout est réuni sur la Costa del Sol.",
      bouton: "Candidater pour étudier à Malaga",
    },
    filieres: ["kine", "dentaire", "veterinaire"],
  },

  // ─── ALICANTE ─────────────────────────────────────────────────────────
  {
    ville: "Alicante",
    villeBold: "Ali",
    villeItalic: "cante",
    surnom: "La Ciudad de las Palomas",
    region: "Communauté valencienne",
    photo: "/images/localisations/alicante.jpeg",
    tagline:
      "Perle de la Costa Blanca, Alicante est la ville où chaque étudiant trouve son rythme — entre mer, soleil et convivialité.",
    stats: [
      { value: "30K", label: "Étudiants" },
      { value: "Top 3", label: "Ville pour expatriés (InterNations 2024)" },
    ],
    sousTitre: "La douceur de la Costa Blanca",
    introTitreBold: "Là où étudier rime avec ",
    introTitreItalic: "sérénité",
    introDescription:
      "Alicante est une ville à taille humaine qui a tout d'une grande. Son Explanada de España, son château Santa Bárbara et ses plages de sable fin en font un cadre d'études privilégié. Ici, tout est accessible à pied, le coût de la vie est parmi les plus bas d'Espagne, et la communauté étudiante est soudée.",
    temoignage: {
      quote:
        "Alicante m'a offert exactement ce que je cherchais : un cadre paisible pour étudier et une qualité de vie incroyable au quotidien.",
      auteur: "Témoignage d'une étudiante en soins infirmiers",
    },
    anecdotes: [
      {
        emoji: "🏰",
        categorie: "Panorama",
        titre: "Le château Santa Bárbara",
        description:
          "Perché à 166 mètres sur le mont Benacantil, ce château à l'entrée gratuite offre une vue imprenable sur la côte. On y monte à pied ou par un ascenseur creusé dans la roche (environ 2,70 €).",
        accroche: "166 m au-dessus de la mer",
      },
      {
        emoji: "🌴",
        categorie: "Promenade",
        titre: "L'Explanada, sol en mosaïque",
        description:
          "Cette promenade emblématique est pavée de 6,6 millions de tesselles de marbre tricolore. C'est ici que les étudiants se retrouvent le soir pour une balade face à la mer.",
        accroche: "6,6 millions de tesselles",
      },
      {
        emoji: "🏖️",
        categorie: "Plages",
        titre: "Le Postiguet, plage du centre",
        description:
          "Une plage de sable fin à 5 minutes à pied du centre-ville. Après les cours, il suffit de descendre la rue. Difficile de faire plus pratique.",
        accroche: "5 min à pied du centre",
      },
      {
        emoji: "🍚",
        categorie: "Gastronomie",
        titre: "Le riz sous toutes ses formes",
        description:
          "Arroz a banda, arroz negro, caldero — à Alicante, le riz est roi. Les restaurants du port servent des plats généreux à des prix défiant toute concurrence.",
        accroche: "Le royaume du riz",
      },
      {
        emoji: "🔥",
        categorie: "Traditions",
        titre: "Les Hogueras de San Juan",
        description:
          "Du 20 au 24 juin, Alicante s'embrase. Sculptures géantes, feux d'artifice et fête jusqu'à l'aube — la nuit de la Saint-Jean est un spectacle inoubliable.",
        accroche: "La nuit la plus courte",
      },
      {
        emoji: "🚂",
        categorie: "Escapades",
        titre: "Valence à moins de 2h en train",
        description:
          "Des trains directs relient Alicante à Valence en 1h30 à 2h, et Madrid est à environ 2h20 en grande vitesse. Idéal pour des week-ends d'évasion.",
        accroche: "Week-ends faciles",
      },
    ],
    budget: {
      description:
        "Alicante est l'une des villes les plus abordables de la côte espagnole. Le budget étudiant y est particulièrement doux.",
      lignes: [
        {
          emoji: "🏠",
          label: "Colocation",
          prix: "300–450€",
          unite: "/mois",
        },
        {
          emoji: "🥘",
          label: "Alimentation",
          prix: "~190€",
          unite: "/mois",
        },
        { emoji: "🚇", label: "Transport", prix: "10,60€", unite: "/30 trajets" },
        {
          emoji: "✈️",
          label: "Vol Paris–Alicante",
          prix: "80–180€",
          unite: "A/R",
        },
      ],
    },
    rassuranceParents: {
      description:
        "Alicante est une ville à taille humaine, calme et accueillante. Un environnement idéal pour des études sereines.",
      items: [
        {
          emoji: "🛡️",
          titre: "Ville calme et sûre",
          description:
            "L'Espagne est l'un des pays les plus sûrs d'Europe, et Alicante est réputée pour son calme. Les étudiants s'y sentent en sécurité au quotidien.",
        },
        {
          emoji: "🎓",
          titre: "Universidad de Alicante",
          description:
            "L'UA dispose d'un campus moderne et bien équipé. Ses formations en santé sont reconnues et attirent des étudiants de toute l'Europe.",
        },
        {
          emoji: "💰",
          titre: "Budget maîtrisé",
          description:
            "Avec le coût de la vie le plus bas de cette sélection, Alicante permet de se concentrer sur ses études sans stress financier.",
        },
        {
          emoji: "🤝",
          titre: "Communauté soudée",
          description:
            "La taille humaine de la ville favorise les liens. La communauté étudiante internationale est accueillante et solidaire.",
        },
      ],
    },
    cta: {
      titre: "Votre aventure commence ici",
      description:
        "Alicante n'attend que vous. Soleil, sécurité et sérénité — le trio gagnant pour vos études.",
      bouton: "Candidater pour étudier à Alicante",
    },
    filieres: ["kine", "dentaire", "infirmier"],
  },

  // ─── ILES CANARIES ────────────────────────────────────────────────────
  {
    ville: "Les Iles Canaries",
    villeBold: "Iles ",
    villeItalic: "Canaries",
    surnom: "Las Islas del Sol",
    region: "Iles Canaries",
    photo: "/images/localisations/iles_canaries.jpg",
    tagline:
      "Un printemps éternel au milieu de l'Atlantique — les Canaries offrent un cadre d'études unique, entre volcans et océan.",
    stats: [
      { value: "40K", label: "Étudiants" },
      { value: "365", label: "Jours doux" },
      { value: "7%", label: "TVA réduite" },
    ],
    sousTitre: "Le printemps éternel de l'Atlantique",
    introTitreBold: "Là où les saisons ",
    introTitreItalic: "n'existent plus",
    introDescription:
      "Les Îles Canaries ne ressemblent à rien d'autre. Un archipel volcanique au milieu de l'Atlantique, un climat printanier 365 jours par an, et des universités qui attirent des étudiants du monde entier. C'est un cadre d'études hors du commun, pour des souvenirs hors du commun.",
    temoignage: {
      quote:
        "Étudier aux Canaries, c'est se réveiller chaque matin en se demandant si on est en vacances. Sauf qu'on apprend vraiment, et bien.",
      auteur: "Témoignage d'un étudiant en vétérinaire",
    },
    anecdotes: [
      {
        emoji: "🌋",
        categorie: "Nature",
        titre: "Le Teide, toit de l'Espagne",
        description:
          "Avec ses 3 715 mètres, le volcan Teide à Tenerife est le point culminant de l'Espagne. Classé UNESCO, c'est le parc national le plus visité d'Espagne. Et il est à environ 1h de La Laguna.",
        accroche: "3 715 m d'altitude",
      },
      {
        emoji: "💰",
        categorie: "Économie",
        titre: "7 % de TVA seulement",
        description:
          "Les Canaries bénéficient d'un régime fiscal spécial (IGIC) avec une TVA à 7 % au lieu de 21 %. Tout est moins cher : courses, restaurants, vêtements, tech.",
        accroche: "IGIC 7 % vs 21 %",
      },
      {
        emoji: "🐢",
        categorie: "Biodiversité",
        titre: "Un labo naturel à ciel ouvert",
        description:
          "Forêts laurifères, déserts volcaniques, fonds marins tropicaux — les Canaries sont un laboratoire vivant pour les étudiants en sciences de la vie.",
        accroche: "Biodiversité unique",
      },
      {
        emoji: "🏄",
        categorie: "Sports",
        titre: "Surf toute l'année",
        description:
          "Les Canaries sont un spot de surf mondial. Les vagues de Fuerteventura et Tenerife attirent les surfeurs du monde entier, et les écoles de surf sont nombreuses.",
        accroche: "Spot mondial de surf",
      },
      {
        emoji: "🏛️",
        categorie: "Patrimoine",
        titre: "La Laguna, ville UNESCO",
        description:
          "San Cristóbal de La Laguna, la principale ville étudiante de Tenerife, est classée au patrimoine mondial. Ruelles colorées, cafés historiques et ambiance universitaire unique.",
        accroche: "Patrimoine mondial",
      },
      {
        emoji: "⭐",
        categorie: "Ciel étoilé",
        titre: "Les meilleurs ciels d'Europe",
        description:
          "Les observatoires astronomiques des Canaries sont parmi les plus importants au monde. À La Palma, le ciel nocturne est protégé par la loi. Spectacle garanti.",
        accroche: "Ciels protégés par la loi",
      },
    ],
    budget: {
      description:
        "Grâce à la TVA réduite (IGIC 7 %), le coût de la vie aux Canaries est inférieur à celui de la péninsule.",
      lignes: [
        {
          emoji: "🏠",
          label: "Colocation",
          prix: "320–450€",
          unite: "/mois",
        },
        {
          emoji: "🥘",
          label: "Alimentation",
          prix: "~190€",
          unite: "/mois",
        },
        { emoji: "🚌", label: "Transport", prix: "~15€", unite: "/mois" },
        {
          emoji: "✈️",
          label: "Vol Paris–Tenerife",
          prix: "150–350€",
          unite: "A/R",
        },
      ],
    },
    rassuranceParents: {
      description:
        "Les Canaries offrent un cadre insulaire sûr et un système éducatif solide. Un choix rassurant malgré la distance.",
      items: [
        {
          emoji: "🏥",
          titre: "Santé de qualité",
          description:
            "Les hôpitaux canariens sont bien équipés. La carte européenne d'assurance maladie donne accès aux soins du système public.",
        },
        {
          emoji: "🎓",
          titre: "Universidad de La Laguna",
          description:
            "Fondée en 1792, c'est l'une des plus anciennes universités d'Espagne. Reconnue internationalement, elle offre un cadre académique sérieux.",
        },
        {
          emoji: "🌡️",
          titre: "Climat idéal",
          description:
            "Entre 18 et 26 °C toute l'année. Pas d'hiver rude, pas de canicule. Un climat qui favorise la concentration et le bien-être au quotidien.",
        },
        {
          emoji: "✈️",
          titre: "Bien relié",
          description:
            "Vols directs quotidiens vers Madrid et liaisons directes vers la France. Les connexions aériennes permettent de rentrer facilement.",
        },
      ],
    },
    cta: {
      titre: "Votre aventure commence ici",
      description:
        "Les Canaries n'attendent que vous. Un printemps éternel, des volcans et des études d'exception vous y attendent.",
      bouton: "Candidater pour étudier aux Canaries",
    },
    filieres: ["kine", "dentaire", "veterinaire", "infirmier"],
  },
];

export function getCityGuide(ville: string): CityGuide | undefined {
  return citiesGuide.find((c) => c.ville.toLowerCase() === ville.toLowerCase());
}
