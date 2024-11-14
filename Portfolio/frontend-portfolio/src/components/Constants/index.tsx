import { NavBarElementType, SkillComponent } from "../Types";

// Skill Data
export const SKILL_DATA: SkillComponent[] = [
    { id: 1, name: "JavaScript", proficiency: 80, skillType: "Database" },
    { id: 2, name: "React", proficiency: 90, skillType: "Frontend" },
    { id: 3, name: "Node.js", proficiency: 75, skillType: "Backend" },
    { id: 4, name: "Redux", proficiency: 85, skillType: "Frontend" },
    { id: 5, name: "CSS", proficiency: 95, skillType: "Frontend" },
    { id: 6, name: "HTML", proficiency: 90, skillType: "Frontend" },
    { id: 7, name: "MongoDB", proficiency: 80, skillType: "Database" },
    { id: 8, name: "Express.js", proficiency: 70, skillType: "Backend" },
    { id: 9, name: "Spring Boot", proficiency: 90, skillType: "Backend" },
    { id: 10, name: "MySQL", proficiency: 85, skillType: "Database" },
    { id: 11, name: "AWS", proficiency: 75, skillType: "Devops" },
    { id: 12, name: "Docker", proficiency: 80, skillType: "Devops" },
    { id: 13, name: "Kubernetes", proficiency: 70, skillType: "Devops" },
    { id: 14, name: "CICD", proficiency: 60, skillType: "Devops" },
  ];



  export const NOTES_DATA = [
    {
      title: 'First Note',
      noteType: 'React',
      content: 'This is my first note.'
    },
    {
      title: 'Second Note',
      noteType: 'SpringBoot',
      content: 'This is my second note.'
    },
    {
      title: 'Third Note',
      noteType: 'Mysql',
      content: 'This is my third note.'
    }
  ];
  
  export const fadeIn = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const PROJECT_DATA = [
  {
    id: 1,
    name: "My PortFolio",
    link: "https://somnath-portfolio.codemaya.in",
    githubLink: "https://github.com/somnath-more/somnath-learning",
    tools: ["React", "TypeScript", "Bootstrap", "AWS", "Docker", "EC2"],
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc id facilisis ullamcorper, felis ligula facilisis nunc, et efficitur arcu nisi et velit.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Travel adventure",
    link: "https://traveladventure.codemaya.in",
    githubLink: "https://github.com/somnath-more/somnath-learning",
    tools: [
      "React",
      "TypeScript",
      "NodeJS",
      "ExpressJS",
      "Jest",
      "Bootstrap",
      "AWS",
      "Docker",
      "EC2",
    ],
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc id facilisis ullamcorper, felis ligula facilisis nunc, et efficitur arcu nisi et velit.",
    image: "https://images.unsplash.com/photo-1490077476659-095159692ab5?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "CryptoHub",
    link: "https://minet-portfolio.codemaya.in",
    githubLink: "https://github.com/somnath-more/somnath-learning",
    tools: [
      "React",
      "TypeScript",
      "SpringBoot",
      "Swagger",
      "Rest",
      "Mockito",
      "NodeJS",
      "ExpressJS",
      "Bootstrap",
      "AWS",
      "Docker",
      "EC2",
    ],
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc id facilisis ullamcorper, felis ligula facilisis nunc, et efficitur arcu nisi et velit.",
    image: "https://media.istockphoto.com/id/1317452510/photo/bitcoin-gold-stock-photo.jpg?s=2048x2048&w=is&k=20&c=Wi7KTmz6YF8GbpGryhM6KlsF0Fwia3ffxVwkI-nmJwU=",
  },{
    id: 4,
    name: "Javascript Questioner",
    link: "https://warm-gingersnap-8f5e3c.netlify.app/",
    githubLink: "https://github.com/somnath-more/somnath-learning",
    tools: [
      "Javascript",
      "Html",
      "CSS",
      "Bootstrap",
    ],
    details:
      "Here you can Add Question and then you execute Question by one with console output ",
    image : 'https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },{
    id: 5,
    name: "CryptoCurrencyHub",
    link: "https://minet-portfolio.codemaya.in",
    githubLink: "https://github.com/somnath-more/somnath-learning",
    tools: ["CSS"],
    details:
      "CSS is a style sheet language used for describing the presentation of a document written in HTML or XML. CSS allows you to apply styles to HTML elements.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
]


export const NAVBARELEMENTS: NavBarElementType[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skill", path: "/skills" },
  { label: "Contact", path: "/contact" },
  { label: "Projects", path: "/projects" },
  { label: "Notes", path: "/notes" },
];