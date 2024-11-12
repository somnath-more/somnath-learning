import { SkillComponent } from "../Types";

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