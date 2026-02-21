import type { ReactNode } from "react";
import type { Language } from "./i18n";
import type { Skill, ExperienceItem, Project } from "./data";

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  activeSection: string;
}

export interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export interface GlowEffectProps {
  className?: string;
}

export interface SkillCardProps {
  skill: Skill;
  index: number;
}

export interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export interface PdfViewerProps {
  src: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  language: Language;
}
