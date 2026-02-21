import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiVite,
  SiFirebase,
  SiReactquery,
  SiSupabase,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import type { Skill, Stat } from "../types";

export const skills: Skill[] = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "React Query", icon: SiReactquery, color: "#FF4154" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express.js", icon: SiExpress, color: "currentColor" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "currentColor" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
];

export const stats: Stat[] = [
  { labelKey: "stats.projectsCompleted", value: 6, suffix: "+" },
  { labelKey: "stats.technologies", value: 18, suffix: "+" },
  { labelKey: "stats.githubRepos", value: 10, suffix: "+" },
];
