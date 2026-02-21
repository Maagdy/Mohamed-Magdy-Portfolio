import type { NavLink, SocialLink } from "../types";

export const navLinks: NavLink[] = [
  { labelKey: "nav.home", to: "hero" },
  { labelKey: "nav.about", to: "about" },
  { labelKey: "nav.skills", to: "skills" },
  { labelKey: "nav.projects", to: "projects" },
  { labelKey: "nav.experience", to: "experience" },
  { labelKey: "nav.contact", to: "contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Maagdy",
    icon: "FaGithub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/mohamedmagdy",
    icon: "FaLinkedin",
  },
];
