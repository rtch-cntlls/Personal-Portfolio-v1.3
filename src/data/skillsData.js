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
  SiGithubcopilot,
} from 'react-icons/si';

import { FaJava, FaPython, FaCss3Alt, FaNetworkWired, FaServer, FaTerminal } from 'react-icons/fa';

import vscodeImg from '../assets/icon/VScode.PNG';
import visualstudioImg from '../assets/icon/VisualStudio.PNG';
import cImg from '../assets/icon/C.PNG';
import canvaImg from '../assets/icon/Canva.PNG';
import chatgptImg from '../assets/icon/GPT.PNG';
import geminiImg from '../assets/icon/Gemini.PNG';

export const getPreferredSkills = (isBlack) => [
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", category: "frontend" },
  { name: "HTML5", icon: SiHtml5, color: "#e34f26", category: "frontend" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", category: "frontend" },
  { name: "Bootstrap 5", icon: SiBootstrap, color: "#7952b3", category: "frontend" },

  { name: "PHP", icon: SiPhp, color: "#777bb4", category: "backend" },
  { name: "Laravel 12+", icon: SiLaravel, color: "#ff2d20", category: "backend" },
  { name: "Java", icon: FaJava, color: "#ed1d24", category: "backend" },
  { name: "ASP.NET", icon: SiDotnet, color: "#512bd4", category: "backend" },
  { name: "C", icon: cImg, isImage: true, category: "backend" },

  { name: "MySQL", icon: SiMysql, color: "#4479a1", category: "database" },

  { name: "Git", icon: SiGit, color: "#f05032", category: "tools" },
  { name: "GitHub", icon: SiGithub, color: isBlack ? "#ffffff" : "#181717", category: "tools" },
  { name: "GitHub Copilot", icon: SiGithubcopilot, color: isBlack ? "#ffffff" : "#181717", category: "tools" },
  { name: "VS Code", icon: vscodeImg, isImage: true, category: "tools" },
  { name: "Visual Studio", icon: visualstudioImg, isImage: true, category: "tools" },
  { name: "Canva", icon: canvaImg, isImage: true, category: "tools" },
  { name: "ChatGPT", icon: chatgptImg, isImage: true, invertInDark: true, category: "tools" },
  { name: "Gemini", icon: geminiImg, isImage: true, category: "tools" },
];

export const getNetworkingSkills = (isBlack) => [
  { name: "LAN Setup & Cabling", icon: FaNetworkWired, color: "#009688", subCategory: "LAN" },
  { name: "Switch & Router Setup", icon: FaServer, color: "#3f51b5", subCategory: "Hardware" },
  { name: "IP Address & DHCP", icon: FaNetworkWired, color: "#00bcd4", subCategory: "Protocols & Addressing" },

  { name: "Ping & Traceroute", icon: FaTerminal, color: "#ff9800", subCategory: "Basic Networking Commands" },
  { name: "Ipconfig / Ifconfig", icon: FaTerminal, color: "#4caf50", subCategory: "Basic Networking Commands" },
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