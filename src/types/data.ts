import type { IconType } from "react-icons";
import type { BilingualText, BilingualArray } from "./i18n";

export interface PersonalInfo {
  name: BilingualText;
  roles: BilingualArray;
  bio: BilingualArray;
  email: string;
  location: BilingualText;
  cvPath: string;
  social: {
    github: string;
    linkedin: string;
  };
}

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface Stat {
  labelKey: string;
  value: number;
  suffix: string;
}

export interface ExperienceItem {
  type: "experience" | "education";
  title: BilingualText;
  organization: BilingualText;
  period: BilingualText;
  description: BilingualText;
}

export interface Project {
  title: BilingualText;
  description: BilingualText;
  tags: string[];
  image: string | null;
  github: string | null;
  live: string | null;
}
