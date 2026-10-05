import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiBootstrap, 
  SiPhp,
  SiLaravel,
  SiMysql, 
  SiGit, 
  SiGithub,
  SiDotnet,
  SiNextdotjs,
  SiSupabase,
  SiPostgresql,
  SiFlask,
  SiWebflow, 
  SiGithubcopilot
} from 'react-icons/si';

import { FaJava, FaPython, FaCss3Alt } from 'react-icons/fa';

import vscodeImg from '../assets/icon/VScode.PNG';
import visualstudioImg from '../assets/icon/VisualStudio.PNG';
import cImg from '../assets/icon/C.PNG';
import canvaImg from '../assets/icon/Canva.PNG';
import chatgptImg from '../assets/icon/GPT.PNG';
import geminiImg from '../assets/icon/Gemini.PNG';

export const getPreferredSkills = (isBlack) => [
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Bootstrap 5", icon: SiBootstrap, color: "#7952b3" },
  { name: "PHP", icon: SiPhp, color: "#777bb4" },
  { name: "Laravel 12+", icon: SiLaravel, color: "#ff2d20" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "Java", icon: FaJava, color: "#ed1d24" },
  { name: "ASP.NET", icon: SiDotnet, color: "#512bd4" },
  { name: "C", icon: cImg, isImage: true },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "GitHub", icon: SiGithub, color: isBlack ? "#ffffff" : "#181717" },
  { name: "GitHub Copilot", icon: SiGithubcopilot, color: isBlack ? "#ffffff" : "#181717" },
  { name: "VS Code", icon: vscodeImg, isImage: true },
  { name: "Visual Studio", icon: visualstudioImg, isImage: true },
  { name: "Canva", icon: canvaImg, isImage: true },
  { name: "ChatGPT", icon: chatgptImg, isImage: true, invertInDark: true },
  { name: "Gemini", icon: geminiImg, isImage: true },
];

export const getLearningSkills = (isBlack) => [
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: isBlack ? "#ffffff" : "#000000" },
  { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#416591" },
  { name: "Python Flask", icon: SiFlask, color: isBlack ? "#ffffff" : "#000000" },
  { name: "Python", icon: FaPython, color: "#1572B6" },
  { name: "Webflow", icon: SiWebflow, color: "#4353ff" },
];