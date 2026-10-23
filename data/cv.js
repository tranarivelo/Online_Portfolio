// Contenu de la section CV. Champs bilingues : { fr: "…", en: "…" }.
window.CV = {
  profile: {
    fr: "Software engineer et game developer, avec une expérience concrète en XR, en développement de jeux et en systèmes interactifs. J'aime construire des choses que les gens utilisent vraiment, qu'il s'agisse d'une application de formation VR multijoueur, d'un FPS ou d'un outil qui simplifie le travail de quelqu'un. Je suis actuellement une formation Data & IA à Epitech Paris.",
    en: "Software engineer and game developer with hands-on experience in XR, game development and interactive systems. I like building things people actually use, whether it is a multiplayer VR training app, a first-person shooter or a tool that makes someone's job easier. I am currently studying Data & AI at Epitech Paris.",
  },

  experience: [
    {
      period: "2024 - 2026",
      title: { fr: "VR Engineer", en: "VR Engineer" },
      org: "5Discovery",
      place: "Paris",
      type: { fr: "Alternance", en: "Work-study" },
      points: {
        fr: [
          "Développement d'applications VR pour Meta Quest 3",
          "Optimisation des performances",
          "Conception d'interfaces (UI design)",
          "Démonstrations auprès d'entreprises et de clients",
          "Déploiement et maintenance",
          "Animation de stands sur des salons tech",
          "Formation des clients",
        ],
        en: [
          "VR application development for Meta Quest 3",
          "Performance optimisation",
          "UI design",
          "Demos for companies and clients",
          "Deployment and maintenance",
          "Booth hosting at tech trade shows",
          "Client training",
        ],
      },
    },
  ],

  education: [
    {
      period: "2025 - 2028",
      title: { fr: "Pré-MSc, préparation au Master of Science - Data & IA", en: "Pre-MSc, Master of Science preparation - Data & AI" },
      org: "Epitech",
      place: "Paris",
      points: {
        fr: [
          "Pédagogie par projets",
          "Développement web, mobile et logiciel",
          "IA, UX, sécurité, DevOps et transformation digitale",
          "Professionnalisation et soft skills",
        ],
        en: [
          "Project-based learning",
          "Web, mobile and software development",
          "AI, UX, security, DevOps and digital transformation",
          "Professional and soft skills",
        ],
      },
    },
    {
      period: "2024 - 2025",
      title: { fr: "Mastère Européen Expert IT, Applications intelligentes et Big Data", en: "European Master's, IT Expert in Intelligent Applications and Big Data" },
      org: "Quest Education Group",
      place: "Paris",
      points: {
        fr: [
          "Pilotage de la stratégie d'un système d'information",
          "Management de projets informatiques",
          "Développement, mise en production et maintenance de solutions",
          "Intégration de l'IA dans le processus de développement",
        ],
        en: [
          "Information system strategy",
          "IT project management",
          "Development, release and maintenance of solutions",
          "Integrating AI into the development process",
        ],
      },
    },
    {
      period: "2021 - 2024",
      title: { fr: "Bachelor Développeur informatique, option jeu vidéo", en: "Bachelor in Software Development, video game track" },
      org: "Quest Education Group",
      place: "Paris",
      points: {
        fr: [
          "Langages C, C++ et C#",
          "Moteurs de jeu : Unity, Unreal Engine",
          "Mathématiques appliquées à la physique 2D et 3D",
          "Shaders et effets graphiques",
          "Game design et gestion de projet",
        ],
        en: [
          "C, C++ and C# languages",
          "Game engines: Unity, Unreal Engine",
          "Applied mathematics for 2D and 3D physics",
          "Shaders and graphic effects",
          "Game design and project management",
        ],
      },
    },
  ],

  skills: [
    { group: { fr: "Langages", en: "Languages" }, items: ["Python", "C++", "C#", "Java", "JavaScript", "PHP", "SQL", "Bash"] },
    { group: { fr: "Data & IA", en: "Data & AI" }, items: ["Pandas", "GeoPandas", "scikit-learn", "Streamlit", "Power BI"] },
    { group: { fr: "Web & back-end", en: "Web & back end" }, items: ["FastAPI", "React", "Laravel", "PostgreSQL", "HTML / CSS"] },
    { group: { fr: "DevOps & cloud", en: "DevOps & cloud" }, items: ["Docker", "Kubernetes", "Helm", "Terraform", "Ansible", "GitHub Actions", "Git", "Linux"] },
    { group: { fr: "Jeu & XR", en: "Games & XR" }, items: ["Unreal Engine", "Unity", "OpenGL", "SFML", "LibGDX", "Meta Quest"] },
    // TODO: préciser le niveau d'anglais
    { group: { fr: "Langues", en: "Spoken languages" }, items: { fr: ["Français", "Anglais (niveau à préciser)"], en: ["French", "English (level TBD)"] } },
  ],
};
