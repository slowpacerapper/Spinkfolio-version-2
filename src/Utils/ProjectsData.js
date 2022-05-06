let myId = 2 * (Math.random() * 6).toFixed(4);

export const projectsDb = [
  {
    id: ++myId,
    title: "Spink Ecommerce",
    description: "An ecommerce website that deals inn mobile gadgets",
    tech: "React + Styled Components",
    live: "live",
    gitlink: "https://github.com/slowpacerapper/Spink",
    weblink: "https://spink-ecommerce.netlify.app/",
  },
  {
    id: ++myId,
    title: "Spink Blog",
    description: "A blog site that offers information in various categories.",
    live: "live",
    tech: "Next + MUI",
    gitlink: "https://github.com/slowpacerapper/Spink-blog-app",
    weblink: "https://spink-blog.netlify.app/",
  },
  {
    id: ++myId,
    title: "GoldenLand",
    tech: "Html + Css + Javascript",
    description: "A real estate website",
    live: "preview",
    gitlink:
      "https://github.com/slowpacerapper/slowpacerapper.github.io/tree/GoldenLand-project",
    weblink: "https://slowpacerapper.github.io/",
  },
  {
    id: ++myId,
    tech: "React + Styled Components",
    title: "Spink-Learn",
    description: "A Learning Management System",
    live: "still in progress",
    gitlink: "https://github.com/slowpacerapper/Spink-Learning",
    weblink: "https://spink-learn.netlify.app",
  },
  {
    id: ++myId,
    tech: "React + MUI",
    title: "Portfolio",
    description:
      "My portfolio website which contains my projects and other information about me",
    gitlink: "https://github.com/slowpacerapper/Porfolio",
    weblink: "https://spink-portfolio.netlify.app",
  },
  {
    id: ++myId,
    tech: "React + MUI + Styled Components",
    title: "Portfolio V2",
    description:
      "My portfolio website which contains my projects and other information about me",
    gitlink: "https://github.com/slowpacerapper/Spinkfolio-version-2",
    weblink: "https://spinkfolio.netlify.app",
  },
];
