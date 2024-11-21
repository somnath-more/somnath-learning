



export interface SkillComponent {
    id: number;
    name: string;
    proficiency: number;
    skillType: string;
  }
  
 export  interface CustomSkillCompProps {
    skillList: SkillComponent[];
  }
  export interface NavBarElementType {
    label: string;
    path: string;
  }