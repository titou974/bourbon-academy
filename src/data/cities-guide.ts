import type { CityGuide } from "@/types";

export const citiesGuide: CityGuide[] = [
  // ─── MADRID ───────────────────────────────────────────────────────────
  {
    ville: "Madrid",
    villeBold: "Mad",
    villeItalic: "rid",
    surnom: "La Villa y Corte",
    region: "Communauté de Madrid",
    photo: "/images/localisations/madrid.jpg",
    tagline:
      "Cosmopolite, ensoleillée et résolument tournée vers l'avenir — Madrid n'est pas juste une ville. C'est une expérience de vie.",
    stats: [
      { value: "300K", label: "Étudiants" },
      { value: "Top 3", label: "des villes étudiantes d'UE" },
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
          "Dans de nombreux bars de Madrid, commander une bière vous vaut une assiette de tapas gratuite. Pour 5 euros, on mange très bien. Le meilleur rapport qualité-vie d'Europe, sans discussion.",
        accroche: "5€ le repas complet",
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
          prix: "200–400€",
          unite: "/mois",
        },
        {
          emoji: "🥘",
          label: "Alimentation",
          prix: "~150€",
          unite: "/mois",
        },
        { emoji: "🚇", label: "Transport", prix: "46€", unite: "/mois" },
        {
          emoji: "✈️",
          label: "Vol Paris–Madrid",
          prix: "~200€",
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
            "La carte d'assurance maladie européenne donne accès aux soins publics d'urgence. Le système de santé madrilène fonctionne bien et est accessible.",
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
            "Maîtriser l'espagnol après un séjour à Madrid, c'est ouvrir des portes sur 500 millions de locuteurs à travers le monde. Un vrai avantage carrière.",
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
    photo: "/images/localisations/valence.jpg",
    tagline:
      "Entre plage et futurisme, Valence est la ville où l'on étudie les pieds dans le sable et le regard tourné vers demain.",
    stats: [
      { value: "100K", label: "Étudiants" },
      { value: "N°1", label: "Qualité de vie" },
    ],
    sousTitre: "La Méditerranée au quotidien",
    introTitreBold: "Là où les études ",
    introTitreItalic: "ont un goût de sel",
    introDescription:
      "Troisième ville d'Espagne, Valence séduit par son cadre de vie exceptionnel. Sa Cité des Arts et des Sciences côtoie les plages de sable fin. Le tout avec un coût de la vie 30 % inférieur à Madrid ou Barcelone. Pour les étudiants, c'est le compromis parfait.",
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
          "La vraie paella est née ici. Chaque dimanche, les familles valenciennes perpétuent la tradition. Et non, la paella aux fruits de mer n'est pas l'originale — c'est celle au poulet et haricots verts.",
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
          "Valence dispose de plus de 160 km de pistes cyclables et du Jardín del Turia, un ancien lit de fleuve transformé en parc traversant toute la ville. Ici, on pédale plus qu'on ne conduit.",
        accroche: "160 km de pistes",
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
        titre: "La Malvarrosa, à 20 min",
        description:
          "La plage de la Malvarrosa est accessible en 20 minutes de bus depuis n'importe quel campus. Après les cours, le sable fin vous attend. Toute l'année.",
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
          prix: "200–350€",
          unite: "/mois",
        },
        {
          emoji: "🥘",
          label: "Alimentation",
          prix: "~140€",
          unite: "/mois",
        },
        { emoji: "🚇", label: "Transport", prix: "40€", unite: "/mois" },
        {
          emoji: "✈️",
          label: "Vol Paris–Valence",
          prix: "~150€",
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
            "Le système de santé valencien est de qualité. La carte européenne d'assurance maladie couvre les urgences et les soins de base.",
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
    photo: "/images/localisations/malaga.jpg",
    tagline:
      "Berceau de Picasso, hub tech en plein essor — Malaga est la surprise andalouse qui séduit les étudiants du monde entier.",
    stats: [
      { value: "40K", label: "Étudiants" },
      { value: "N°1", label: "Climat d'Espagne" },
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
          "Pablo Picasso a vu le jour au 36 Plaza de la Merced. Sa maison natale est aujourd'hui un musée, et la ville entière respire l'art à chaque coin de rue.",
        accroche: "Plaza de la Merced, 36",
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
          "Le Málaga Tech Park accueille plus de 600 entreprises tech. Google, Vodafone et Oracle y ont des bureaux. Les stages et opportunités pleuvent pour les étudiants.",
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
          "Une semaine entière de fête en août — flamenco dans les rues, casetas, musique live. Malaga se transforme en la plus grande fête d'Andalousie.",
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
          prix: "200–350€",
          unite: "/mois",
        },
        {
          emoji: "🥘",
          label: "Alimentation",
          prix: "~130€",
          unite: "/mois",
        },
        { emoji: "🚇", label: "Transport", prix: "35€", unite: "/mois" },
        {
          emoji: "✈️",
          label: "Vol Paris–Malaga",
          prix: "~120€",
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
            "L'hôpital régional Carlos Haya est l'un des mieux équipés d'Andalousie. La couverture santé européenne fonctionne parfaitement.",
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
            "Le meilleur climat d'Europe continentale. Le soleil et la douceur de vivre andalouse favorisent l'équilibre et le bien-être des étudiants.",
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
      { value: "N°1", label: "Sécurité" },
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
          "Perché à 166 mètres sur le mont Benacantil, ce château offre la plus belle vue de la côte. L'ascenseur creusé dans la roche y mène gratuitement. Spot de révision ultime.",
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
          "Chaque 24 juin, Alicante s'embrase. Sculptures géantes, feux d'artifice et fête jusqu'à l'aube — la nuit de la Saint-Jean est un spectacle inoubliable.",
        accroche: "La nuit la plus courte",
      },
      {
        emoji: "🚂",
        categorie: "Escapades",
        titre: "Valence à 1h30 en train",
        description:
          "Le train côtier relie Alicante à Valence en longeant la Méditerranée. Week-ends d'évasion à prix doux, avec l'une des plus belles lignes ferroviaires d'Espagne.",
        accroche: "Vue mer garantie",
      },
    ],
    budget: {
      description:
        "Alicante est l'une des villes les plus abordables de la côte espagnole. Le budget étudiant y est particulièrement doux.",
      lignes: [
        {
          emoji: "🏠",
          label: "Colocation",
          prix: "180–320€",
          unite: "/mois",
        },
        {
          emoji: "🥘",
          label: "Alimentation",
          prix: "~130€",
          unite: "/mois",
        },
        { emoji: "🚇", label: "Transport", prix: "30€", unite: "/mois" },
        {
          emoji: "✈️",
          label: "Vol Paris–Alicante",
          prix: "~100€",
          unite: "A/R",
        },
      ],
    },
    rassuranceParents: {
      description:
        "Alicante est l'une des villes les plus sûres d'Espagne. Un environnement idéal pour des études sereines.",
      items: [
        {
          emoji: "🛡️",
          titre: "Ville très sûre",
          description:
            "Alicante affiche l'un des taux de criminalité les plus bas d'Espagne. Les étudiants s'y sentent en sécurité, de jour comme de nuit.",
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
      { value: "50K", label: "Étudiants" },
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
          "Avec ses 3 718 mètres, le volcan Teide à Tenerife est le point culminant de l'Espagne. Classé UNESCO, c'est l'un des sites les plus visités au monde. Et il est à 1h de votre campus.",
        accroche: "3 718 m d'altitude",
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
          "Les Canaries sont un spot de surf mondial. Les vagues de Fuerteventura et Tenerife attirent les surfeurs du monde entier. Cours à 15 €, le week-end est assuré.",
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
          prix: "200–350€",
          unite: "/mois",
        },
        {
          emoji: "🥘",
          label: "Alimentation",
          prix: "~140€",
          unite: "/mois",
        },
        { emoji: "🚌", label: "Transport", prix: "40€", unite: "/mois" },
        {
          emoji: "✈️",
          label: "Vol Paris–Tenerife",
          prix: "~180€",
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
            "Les hôpitaux canarienes sont bien équipés. La carte européenne d'assurance maladie couvre les soins d'urgence sans difficulté.",
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
            "20-25 °C toute l'année. Pas d'hiver rude, pas de canicule. Un climat qui favorise la concentration et le bien-être au quotidien.",
        },
        {
          emoji: "✈️",
          titre: "Bien relié",
          description:
            "Vols directs quotidiens vers Madrid et fréquents vers la France. Les connexions aériennes permettent de rentrer facilement.",
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
