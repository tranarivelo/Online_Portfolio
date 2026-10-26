// Liste des projets, dans l'ordre d'affichage.
//
// Ajouter un projet : copier un bloc, choisir un `id` unique, puis déposer les images dans
// assets/img/projects/<id>/ (cover.webp pour la vignette, 01.webp, 02.webp… pour la galerie).
//
// category : "apps" | "games" | "mods"
// cover    : nom du fichier de vignette, ou "" pour afficher un placeholder typographique
// images   : fichiers de la galerie, dans l'ordre
// video    : URL d'intégration YouTube/Vimeo (ex. https://www.youtube.com/embed/XXXX), ou ""
// links    : liste de { label, url } (dépôt GitHub, démo…), vide si aucun
// Les champs texte sont bilingues : { fr: "…", en: "…" }. Un champ vide est masqué.
window.PROJECTS = [
  // ── Outils & applications ────────────────────────────────────────────
  {
    id: "joja",
    category: "apps",
    title: { fr: "JOJA - Analyse e-commerce & prédiction de réachat", en: "JOJA - E-commerce analysis & reorder prediction" },
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy", "scikit-learn", "Jupyter"],
    context: { fr: "Projet Epitech, équipe de 3", en: "Epitech project, team of 3" },
    year: "2026",
    summary: {
      fr: "Analyse de 3,4 millions de commandes d'un site de courses en ligne, puis modèle de machine learning qui prédit les produits qu'un client va racheter.",
      en: "Analysis of 3.4 million orders from an online grocery store, followed by a machine learning model that predicts which products a customer will buy again.",
    },
    description: {
      fr: [
        "À partir du jeu de données Instacart (3,4 millions de commandes, 206 209 clients, 32,4 millions de lignes de panier), l'objectif était de tirer des constats concrets pour le magasin, et pas seulement des statistiques. Chaque question suit le même déroulé : objectif, calcul, graphique, lecture des résultats, puis piste d'action.",
        "L'analyse exploratoire couvre trois axes : la clientèle (taille des paniers, jours et heures de commande, rythme de réachat), l'assortiment (offre face à la demande, produits qui tournent peu, rayons achetés ensemble, mesurés par le lift) et les performances (meilleures ventes, part du bio, taux de réachat, concentration des ventes). Le typage des données a fait passer la table des paniers de 1 Go à 357 Mo, et le contrôle qualité a révélé que la dernière commande de chaque client avait un contenu masqué.",
        "La partie machine learning prédit, pour chaque couple client × produit, si le produit sera repris à la prochaine commande. Elle s'appuie sur 12 variables construites sur l'historique, un découpage par client pour éviter les fuites de données, et une comparaison entre régression logistique, Random Forest et HistGradientBoosting dans des pipelines scikit-learn, avec un contrôle des performances par segment de clients.",
      ],
      en: [
        "Starting from the Instacart dataset (3.4 million orders, 206,209 customers, 32.4 million basket rows), the goal was to draw concrete findings for the store, not just statistics. Each question follows the same flow: objective, computation, chart, interpretation, then a business action.",
        "The exploratory analysis covers three areas: customers (basket size, order days and hours, reorder rhythm), assortment (supply versus demand, slow-moving products, aisles bought together, measured with lift) and performance (best sellers, share of organic products, reorder rate, sales concentration). Data typing shrank the basket table from 1 GB to 357 MB, and quality checks revealed that each customer's last order had its contents hidden.",
        "The machine learning part predicts, for each customer × product pair, whether the product will be reordered in the next order. It relies on 12 features built from purchase history, a customer-level split to avoid data leakage, and a comparison of logistic regression, Random Forest and HistGradientBoosting in scikit-learn pipelines, with a performance check per customer segment.",
      ],
    },
    highlights: {
      fr: [
        "9 % des produits génèrent 80 % des ventes ; le bio représente 10 % du catalogue mais 32 % des achats",
        "Idées reçues testées : « chien + chat » confirmé (×5 vs hasard), « fromage + vin » non confirmé",
        "Modèle de réachat HistGradientBoosting : ROC-AUC de 0,83 sur des clients jamais vus",
      ],
      en: [
        "9% of products drive 80% of sales; organic is 10% of the catalogue but 32% of purchases",
        "Common beliefs tested: \"dog + cat\" confirmed (×5 vs chance), \"cheese + wine\" not confirmed",
        "HistGradientBoosting reorder model: 0.83 ROC-AUC on unseen customers",
      ],
    },
    cover: "cover.webp",
    images: ["01.webp", "02.webp", "03.webp", "04.webp"],
    video: "",
    links: [],
  },
  {
    id: "citiz-annecy",
    category: "apps",
    title: { fr: "Hackathon - Citiz X Microsoft", en: "Hackathon - Citiz X Microsofts" },
    stack: ["Python", "Pandas", "GeoPandas", "scikit-learn", "Streamlit"],
    context: { fr: "Hackathon Epitech × Citiz × Microsoft", en: "Epitech × Citiz × Microsoft hackathon" },
    year: "2026",
    summary: {
      fr: "Outil d'aide à la décision qui identifie où implanter de nouvelles stations d'autopartage à Annecy.",
      en: "Decision-support tool that identifies where new car-sharing stations should open in Annecy.",
    },
    description: {
      fr: [
        "Pour chaque carreau de 200 m habité de la commune, l'outil compte les options de mobilité (bus, train, vélos, autopartage) atteignables en cinq minutes de marche réelle sur le réseau piéton, et non à vol d'oiseau, puis les rapporte au nombre d'habitants.",
        "Un modèle entraîné sur les 412 stations Citiz de la région prédit le potentiel de chaque emplacement candidat. Un algorithme glouton propose ensuite la liste priorisée des stations pour un budget donné, avec l'impact estimé et un curseur d'équité qui favorise les quartiers sans alternative.",
        "Le tout est présenté dans une application Streamlit avec cartes interactives, tableau des recommandations et sources documentées.",
      ],
      en: [
        "For every inhabited 200 m grid cell in the city, the tool counts the mobility options (bus, train, bikes, car sharing) reachable within a real five-minute walk on the pedestrian network, not as the crow flies, and relates them to the number of residents.",
        "A model trained on the 412 Citiz stations in the region predicts the potential of each candidate location. A greedy algorithm then ranks stations for a given budget, with estimated impact and a fairness slider that favours neighbourhoods with no alternative.",
        "Everything is presented in a Streamlit app with interactive maps, a recommendation table and documented sources.",
      ],
    },
    highlights: {
      fr: [
        "16,2 % des habitants n'ont aucune option de mobilité à 5 minutes à pied",
        "Avec 250 000 € : 10 stations proposées, 21 841 habitants nouvellement desservis",
        "Impact estimé : 50 à 80 voitures remplacées et 14 à 41 t de CO₂ évitées par an",
      ],
      en: [
        "16.2% of residents have no mobility option within a 5-minute walk",
        "With €250,000: 10 proposed stations, 21,841 newly served residents",
        "Estimated impact: 50 to 80 cars replaced and 14 to 41 t of CO₂ avoided per year",
      ],
    },
    cover: "cover.webp",
    images: ["01.webp", "02.webp", "03.webp", "04.webp"],
    video: "",
    links: [], // TODO: lien vers le dépôt si public
  },
  {
    id: "time-manager",
    category: "apps",
    title: { fr: "Time Manager", en: "Time Manager" },
    stack: ["React", "FastAPI", "PostgreSQL", "Docker", "Kubernetes", "Terraform"],
    context: { fr: "Projet Epitech", en: "Epitech project" },
    year: "2026",
    summary: {
      fr: "Application de gestion du temps de travail découpée en six microservices et déployée sur AWS.",
      en: "Working-time management app split into six microservices and deployed on AWS.",
    },
    description: {
      fr: [
        "Une plateforme de gestion du temps pour les équipes : pointages, plannings, gestion des équipes, rapports et préparation de la paie.",
        "Le back-end est découpé en six services FastAPI indépendants (authentification et utilisateurs, équipes, planning, pointages, rapports, paie) qui partagent une base PostgreSQL et une authentification JWT. Le front-end est écrit en React avec Vite et Tailwind.",
        "L'infrastructure est entièrement décrite en code : images Docker, déploiement Kubernetes via Helm, environnements AWS provisionnés avec Terraform et configurés avec Ansible, et pipelines GitHub Actions pour publier les images et démarrer ou arrêter les environnements.",
      ],
      en: [
        "A time-management platform for teams: clock-ins, schedules, team management, reports and payroll preparation.",
        "The back end is split into six independent FastAPI services (authentication and users, teams, planning, clocks, reports, payroll) sharing a PostgreSQL database and JWT authentication. The front end is built with React, Vite and Tailwind.",
        "The infrastructure is fully described as code: Docker images, Kubernetes deployment with Helm, AWS environments provisioned with Terraform and configured with Ansible, and GitHub Actions pipelines to publish images and start or stop environments.",
      ],
    },
    highlights: {
      fr: [
        "Architecture microservices comparée à un monolithe modulaire (diagrammes UML)",
        "Infrastructure as code : Terraform, Ansible, Helm",
        "CI/CD GitHub Actions avec arrêt programmé des environnements",
      ],
      en: [
        "Microservice architecture compared with a modular monolith (UML diagrams)",
        "Infrastructure as code: Terraform, Ansible, Helm",
        "GitHub Actions CI/CD with scheduled environment shutdown",
      ],
    },
    cover: "", // TODO: ajouter des captures dans assets/img/projects/time-manager/
    images: ["TM1.png"],
    video: "",
    links: [],
  },
  {
    id: "mintzberg",
    category: "apps",
    title: { fr: "Diagnostic Mintzberg", en: "Mintzberg diagnostic" },
    stack: ["Power BI", "JavaScript", "SQL"],
    context: { fr: "", en: "" }, // TODO
    year: "2026",
    summary: {
      fr: "Tableau de bord Power BI alimenté en temps réel par un sondage, pour analyser les flux de communication d'une entreprise.",
      en: "Power BI dashboard fed in real time by a survey, to analyse communication flows within a company.",
    },
    description: {
      fr: [
        "L'objectif était d'analyser et de comparer les flux de communication au sein de l'entreprise dans laquelle nous travaillions, à travers le modèle organisationnel de Mintzberg.",
        "Collecter des données fiables étant une étape décisive de toute analyse, nous avons construit un sondage en ligne avec des données persistantes, relié à un tableau de bord Power BI. Les retours des collaborateurs y sont visibles en temps réel, ce qui fait le lien entre des données comportementales brutes et des enseignements utiles à l'organisation.",
      ],
      en: [
        "The goal was to analyse and compare communication flows within the company we worked in, through Mintzberg's organisational model.",
        "Since collecting reliable data is a decisive step in any analysis, we built an online survey with persistent data connected to a Power BI dashboard. Employee feedback is visible in real time, bridging the gap between raw behavioural data and actionable organisational insights.",
      ],
    },
    highlights: { fr: [], en: [] },
    cover: "cover.webp",
    images: ["01.webp", "02.webp", "03.webp"],
    video: "",
    links: [],
  },
  {
    id: "job-board",
    category: "apps",
    title: { fr: "Job Board", en: "Job Board" },
    stack: ["Laravel 12", "PHP 8.2", "Blade", "JavaScript"],
    context: { fr: "", en: "" }, // TODO
    year: "2025",
    summary: {
      fr: "Plateforme de recrutement développée pour apprendre le développement back-end.",
      en: "Recruitment platform built to learn back-end development.",
    },
    description: {
      fr: [
        "Un job board réalisé pour apprendre le développement back-end : modélisation de la base de données, routes, contrôleurs, authentification et gestion des offres et des candidatures.",
        "La plateforme est construite avec Laravel 12 et PHP 8.2, avec des vues Blade et du JavaScript côté client.",
      ],
      en: [
        "A job board built to learn back-end development: database modelling, routes, controllers, authentication and management of job offers and applications.",
        "The platform is built with Laravel 12 and PHP 8.2, with Blade views and client-side JavaScript.",
      ],
    },
    highlights: { fr: [], en: [] },
    cover: "3.png",
    images: ["2.png", "02.webp", "03.webp", "04.webp"],
    video: "",
    links: [],
  },
  {
    id: "bookworm",
    category: "apps",
    title: { fr: "Bookworm - Moteur NLP pour Project Gutenberg", en: "Bookworm - NLP engine for Project Gutenberg" },
    stack: ["Python", "NLTK", "scikit-learn", "Flask", "WeasyPrint", "Docker"],
    context: { fr: "Projet Epitech, équipe de 2", en: "Epitech project, team of 2" },
    year: "2026",
    summary: {
      fr: "Outil de traitement du langage naturel qui analyse un livre du Project Gutenberg et génère une fiche complète : résumé, thèmes, personnages, lieux et livres similaires.",
      en: "Natural language processing tool that analyses a Project Gutenberg book and generates a full book card: summary, topics, characters, places and similar books.",
    },
    description: {
      fr: [
        "À partir du simple identifiant d'un livre, Bookworm télécharge le texte depuis Project Gutenberg, retire les mentions légales et les métadonnées, puis enchaîne plusieurs analyses NLP pour produire une fiche de lecture structurée avec sa couverture.",
        "Chaque analyse repose sur une technique différente : résumé extractif par score TF-IDF des phrases, thèmes principaux par modélisation LDA, reconnaissance d'entités nommées avec NLTK pour extraire personnages et lieux, mesures de diversité lexicale (TTR, hapax, longueur moyenne des mots) et recherche des livres les plus proches par similarité cosinus TF-IDF.",
        "L'outil s'utilise en ligne de commande ou via une interface web Flask, avec export de la fiche en PDF et affichage du JSON brut. Les résultats sont mis en cache pour ne jamais être recalculés, et l'ensemble tourne en local dans un conteneur Docker.",
      ],
      en: [
        "From a single book ID, Bookworm downloads the text from Project Gutenberg, strips the legal notices and metadata, then chains several NLP analyses to produce a structured book card with its cover.",
        "Each analysis uses a different technique: extractive summarisation by TF-IDF sentence scoring, main topics with LDA topic modelling, named entity recognition with NLTK to extract characters and places, lexical diversity metrics (TTR, hapax, mean word length) and nearest-book search with TF-IDF cosine similarity.",
        "The tool runs from the command line or through a Flask web interface, with PDF export of the card and a raw JSON view. Results are cached so they are never recomputed, and everything runs locally in a Docker container.",
      ],
    },
    highlights: {
      fr: [
        "Cinq techniques NLP réunies dans une même fiche : résumé, LDA, NER, diversité lexicale, similarité",
        "Deux interfaces sur la même logique : CLI et application web Flask",
        "Export PDF avec texte sélectionnable, cache JSON et déploiement Docker",
      ],
      en: [
        "Five NLP techniques combined in a single card: summary, LDA, NER, lexical diversity, similarity",
        "Two interfaces on the same logic: CLI and Flask web app",
        "PDF export with selectable text, JSON cache and Docker deployment",
      ],
    },
    cover: "cover.webp",
    images: ["01.webp", "02.webp", "03.webp"],
    video: "",
    links: [],
  },
  {
    id: "moteur-3d",
    category: "apps",
    title: { fr: "Moteur 3D", en: "3D Engine" },
    stack: ["C++", "OpenGL"],
    context: { fr: "", en: "" }, // TODO
    year: "2023",
    summary: {
      fr: "Moteur de rendu 3D écrit en C++ sur l'API graphique OpenGL.",
      en: "3D rendering engine written in C++ on top of the OpenGL graphics API.",
    },
    description: {
      fr: ["Conception d'un moteur 3D complet sur OpenGL, du rendu à la gestion des ressources et des entrées utilisateur, mené comme un projet d'équipe de grande envergure."],
      en: ["Design of a complete 3D engine on OpenGL, from rendering to resource and input management, run as a large-scale team project."],
    },
    highlights: {
      fr: [
        "Rendu 3D avancé",
        "Gestion des ressources externes : meshes, textures, shaders",
        "Optimisation des performances",
        "Gestion des entrées utilisateur",
        "Support multiplateforme et documentation complète",
      ],
      en: [
        "Advanced 3D rendering",
        "External resource management: meshes, textures, shaders",
        "Performance optimisation",
        "User input handling",
        "Cross-platform support and full documentation",
      ],
    },
    cover: "cover.webp",
    images: ["01.webp", "02.webp", "03.webp", "04.webp"],
    video: "",
    links: [],
  },
  {
    id: "level-tool",
    category: "apps",
    title: { fr: "Level Tool", en: "Level Tool" },
    stack: ["Unity", "C#"],
    context: { fr: "", en: "" }, // TODO
    year: "2022",
    summary: {
      fr: "Suite d'outils pour Unity qui simplifie et accélère la conception de niveaux.",
      en: "Unity tool suite that simplifies and speeds up level design.",
    },
    description: {
      fr: ["Une suite d'outils pour l'éditeur Unity : éditeurs visuels, générateurs de terrain modulaires et placement intelligent d'objets. En automatisant les tâches répétitives, elle laisse les créateurs se concentrer sur l'artistique et la narration, et améliore la productivité de l'équipe."],
      en: ["A tool suite for the Unity editor: visual editors, modular terrain generators and smart object placement. By automating repetitive tasks, it lets creators focus on art and narrative, and improves team productivity."],
    },
    highlights: { fr: [], en: [] },
    cover: "cover.webp",
    images: ["01.webp", "02.webp", "03.webp", "04.webp"],
    video: "",
    links: [],
  },
  {
    id: "cv-editor",
    category: "apps",
    title: { fr: "CV Editor", en: "CV Editor" },
    stack: ["HTML", "CSS", "JavaScript"],
    context: { fr: "", en: "" }, // TODO
    year: "2026",
    summary: {
      fr: "Éditeur de CV simple qui garantit la compatibilité avec les logiciels de recrutement (ATS).",
      en: "Simple résumé editor that ensures compatibility with applicant tracking systems (ATS).",
    },
    description: {
      fr: ["Un outil d'édition de CV dans le navigateur, pensé pour produire des documents lisibles par les ATS utilisés par les recruteurs."],
      en: ["A browser-based résumé editor designed to produce documents that the ATS used by recruiters can read."],
    },
    highlights: { fr: [], en: [] },
    cover: "cover.webp",
    images: ["01.webp"],
    video: "",
    links: [],
  },

  // ── Jeux & XR ────────────────────────────────────────────────────────
  {
    id: "wefly",
    category: "games",
    title: { fr: "WeFly", en: "WeFly" },
    stack: ["Unreal Engine"],
    context: { fr: "Projet personnel", en: "Personal project" },
    year: "2024",
    summary: {
      fr: "Simulateur de vol bac à sable fondé sur une physique aérodynamique avancée.",
      en: "Sandbox flight simulator built on advanced aerodynamic physics.",
    },
    description: {
      fr: ["Un simulateur de vol bac à sable développé sous Unreal Engine. Portance vectorielle, décrochage, angle d'attaque et densité de l'air reproduisent fidèlement le comportement des appareils et les conditions de vol réelles."],
      en: ["A sandbox flight simulator developed in Unreal Engine. Vector lift, stall behaviour, angle of attack and air density faithfully reproduce aircraft behaviour and real flight conditions."],
    },
    highlights: { fr: [], en: [] },
    cover: "cover.webp",
    images: ["01.webp", "02.webp", "03.webp"],
    video: "", // TODO: URL d'intégration de la vidéo de démo (ancien Wefly.mp4)
    links: [],
  },
  {
    id: "artemis",
    category: "games",
    title: { fr: "Projet Artemis", en: "Project Artemis" },
    stack: ["Unreal Engine 5"],
    context: { fr: "Projet personnel en duo", en: "Personal project, duo" },
    year: "2023",
    summary: {
      fr: "FPS solo narratif sous Unreal Engine 5, avec balistique physique et level design ouvert.",
      en: "Narrative single-player FPS in Unreal Engine 5, with physical ballistics and open level design.",
    },
    description: {
      fr: [
        "Un FPS solo découpé en plusieurs niveaux, qui suit une narration linéaire. Le joueur se déplace et interagit avec son environnement grâce à des mécaniques de mouvement poussées et un système de couverture.",
        "Chaque balle est un projectile physique qui réagit dynamiquement à l'environnement et aux ennemis. Le level design permet d'aborder chaque situation à sa manière : de front, en éliminant les ennemis discrètement, ou en les évitant entièrement.",
      ],
      en: [
        "A single-player FPS split into several levels following a linear narrative. The player moves and interacts with the environment through advanced movement mechanics and a cover system.",
        "Every bullet is a physical projectile that reacts dynamically to the environment and enemies. The level design lets players approach each situation their own way: head-on, stealthily, or by avoiding enemies entirely.",
      ],
    },
    highlights: {
      fr: ["Ricochets", "Pénétration des matériaux", "Balancement de l'arme (sway)"],
      en: ["Ricochets", "Material penetration", "Weapon sway"],
    },
    cover: "cover.webp",
    images: ["01.webp", "02.webp", "03.webp", "04.webp"],
    video: "", // TODO: URL d'intégration de la vidéo de démo (ancien Artemis3.mp4)
    links: [],
  },
  {
    id: "goldberg-vr",
    category: "games",
    title: { fr: "Goldberg Machine VR", en: "Goldberg Machine VR" },
    stack: ["Unity", "VR"],
    context: { fr: "", en: "" }, // TODO
    year: "2022",
    summary: {
      fr: "Machine de Rube Goldberg en réalité virtuelle, à manipuler en temps réel.",
      en: "Rube Goldberg machine in virtual reality, manipulated in real time.",
    },
    description: {
      fr: ["Une machine de Rube Goldberg en réalité virtuelle : un dispositif volontairement complexe pour accomplir une tâche simple. Rampes, engrenages, poulies et déclencheurs se manipulent en temps réel pour observer ou concevoir ses propres réactions en chaîne, et explorer la physique de manière ludique."],
      en: ["A Rube Goldberg machine in virtual reality: a deliberately complex device that performs a simple task. Ramps, gears, pulleys and triggers can be manipulated in real time to observe or design chain reactions and explore physics playfully."],
    },
    highlights: { fr: [], en: [] },
    cover: "cover.webp",
    images: ["01.webp"],
    video: "",
    links: [],
  },
  {
    id: "legend-of-warcraft",
    category: "games",
    title: { fr: "Legend of Warcraft", en: "Legend of Warcraft" },
    stack: ["Java 8", "LibGDX", "Tiled"],
    context: { fr: "", en: "" }, // TODO
    year: "",
    summary: {
      fr: "RPG 2D en Java mêlant exploration en monde ouvert, combats en temps réel et au tour par tour.",
      en: "2D RPG in Java combining open-world exploration, real-time and turn-based combat.",
    },
    description: {
      fr: ["Un RPG 2D développé en Java avec LibGDX. Le joueur explore une grande carte conçue avec Tiled, affronte des monstres en temps réel et des boss au tour par tour. Niveaux, expérience et inventaire structurent la progression : il faut récupérer des clés et accomplir des quêtes pour débloquer les combats décisifs."],
      en: ["A 2D RPG developed in Java with LibGDX. The player explores a large map built with Tiled, fights monsters in real time and bosses in turn-based battles. Levels, experience and inventory drive progression: keys and quests unlock the decisive boss fights."],
    },
    highlights: { fr: [], en: [] },
    cover: "cover.webp",
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"],
    video: "",
    links: [],
  },
  {
    id: "internship-nightmare",
    category: "games",
    title: { fr: "Internship Nightmare", en: "Internship Nightmare" },
    stack: ["Unity", "C#"],
    context: { fr: "", en: "" }, // TODO
    year: "2022",
    summary: {
      fr: "Top-down shooter sous Unity, conçu pour maîtriser les IA à base d'arbres de comportement.",
      en: "Top-down shooter in Unity, built to master behaviour-tree AI.",
    },
    description: {
      fr: ["Un petit top-down shooter réalisé sous Unity. Au-delà du jeu, l'objectif était de maîtriser des concepts d'IA avancés : arbres de comportement et machines à états pilotent les ennemis."],
      en: ["A small top-down shooter made in Unity. Beyond the game itself, the goal was to master advanced AI concepts: behaviour trees and state machines drive the enemies."],
    },
    highlights: { fr: [], en: [] },
    cover: "cover.webp",
    images: ["01.webp", "02.webp"],
    video: "",
    links: [],
  },
  {
    id: "league-of-rocket",
    category: "games",
    title: { fr: "League of Rocket", en: "League of Rocket" },
    stack: ["Unity", "C#"],
    context: { fr: "", en: "" }, // TODO
    year: "2021",
    summary: {
      fr: "Exploration de la génération procédurale et de la physique de jeu sous Unity.",
      en: "Exploration of procedural generation and game physics in Unity.",
    },
    description: {
      fr: ["Un projet Unity consacré à la génération procédurale et à la physique. À travers une série de défis, nous avons créé des environnements dynamiques à l'aide d'algorithmes procéduraux, et appliqué des principes physiques réalistes pour rendre les interactions aussi crédibles que possible."],
      en: ["A Unity project dedicated to procedural generation and physics. Through a series of challenges, we created dynamic environments with procedural algorithms and applied realistic physics so that interactions feel as authentic as possible."],
    },
    highlights: { fr: [], en: [] },
    cover: "cover.webp",
    images: ["01.webp", "02.webp"],
    video: "",
    links: [],
  },
  {
    id: "mikar",
    category: "games",
    title: { fr: "Mikar RPG", en: "Mikar RPG" },
    stack: ["C++", "SFML"],
    context: { fr: "", en: "" }, // TODO
    year: "2021",
    summary: {
      fr: "RPG 2D en C++ pour prendre en main la bibliothèque SFML.",
      en: "2D RPG in C++ to get familiar with the SFML library.",
    },
    description: {
      fr: ["Un RPG 2D écrit en C++, réalisé pour prendre en main la bibliothèque multimédia SFML."],
      en: ["A 2D RPG written in C++, made to get familiar with the SFML multimedia library."],
    },
    highlights: { fr: [], en: [] },
    cover: "cover.webp",
    images: ["01.webp", "02.webp"],
    video: "",
    links: [],
  },

  // ── Mods de simulation ───────────────────────────────────────────────
  {
    id: "xplane-madagascar",
    category: "mods",
    title: { fr: "Madagascar pour X-Plane 11", en: "Madagascar for X-Plane 11" },
    stack: ["X-Plane 11", "WED", "Ortho4XP"],
    context: { fr: "Projet personnel", en: "Personal project" },
    year: "2019",
    summary: {
      fr: "Remodélisation des aérodromes malgaches que j'ai visités, pour X-Plane 11.",
      en: "Remodelling of the Malagasy airfields I have visited, for X-Plane 11.",
    },
    description: {
      fr: ["Les paysages malgaches sont très peu représentés dans les simulateurs de vol, et les aéroports générés automatiquement manquent de détails et d'authenticité. J'ai donc remodélisé les aérodromes que j'ai visités, à l'aide des outils développés par la communauté."],
      en: ["Malagasy landscapes are barely represented in flight simulators, and automatically generated airports lack detail and authenticity. I remodelled the airfields I have visited, using community-built tools."],
    },
    highlights: {
      fr: ["FMMI - Ivato", "FMNM - Majunga", "FMAJ - Anjajavy", "FMAM - Ambila (fictif)", "FMME - Antsirabe", "FMFE - Moramanga", "FMNN - Fascene"],
      en: ["FMMI - Ivato", "FMNM - Majunga", "FMAJ - Anjajavy", "FMAM - Ambila (fictional)", "FMME - Antsirabe", "FMFE - Moramanga", "FMNN - Fascene"],
    },
    cover: "cover.webp",
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp", "06.webp", "07.webp"],
    video: "",
    links: [],
  },
  {
    id: "beamng-johnson-valley",
    category: "mods",
    title: { fr: "Johnson Valley Raceway", en: "Johnson Valley Raceway" },
    stack: ["BeamNG.drive", "World Editor"],
    context: { fr: "Projet personnel", en: "Personal project" },
    year: "2022",
    summary: {
      fr: "Circuit fictif intégré à la carte Johnson Valley de BeamNG.drive.",
      en: "Fictional race track built into BeamNG.drive's Johnson Valley map.",
    },
    description: {
      fr: ["Un circuit fictif intégré à la nouvelle carte Johnson Valley de BeamNG.drive, entièrement réalisé avec le World Editor du jeu."],
      en: ["A fictional race track built into BeamNG.drive's new Johnson Valley map, made entirely with the game's World Editor."],
    },
    highlights: { fr: [], en: [] },
    cover: "cover.webp",
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"],
    video: "",
    links: [],
  },
];
