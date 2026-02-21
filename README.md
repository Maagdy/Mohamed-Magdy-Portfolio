# Mohamed Magdy | Portfolio

Personal portfolio website showcasing my projects, skills, and experience as a Full Stack & Mobile Developer.

**Live:** [mohamed-magdy.site](https://mohamed-magdy.site)

## Tech Stack

- **React 19** + **Vite 7** — Fast modern frontend
- **Tailwind CSS 4** — Utility-first styling
- **Motion** — Smooth animations
- **react-i18next** — Bilingual support (English & Arabic)
- **PWA** — Installable progressive web app

## Features

- Responsive design across all devices
- Dark / Light theme toggle
- English / Arabic language switch with full RTL support
- Inline CV viewer with PDF reader
- Smooth scroll navigation & animated sections
- Progressive Web App (installable)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── common/       # Shared components
│   ├── layout/       # Navbar, Footer, ScrollToTop
│   ├── sections/     # Hero, About, Skills, Projects, Experience, Contact
│   └── ui/           # Button, Card, Toggle, PdfViewer
├── data/             # Static data (personalInfo, projects, skills, experiences)
├── hooks/            # useTheme, useLanguage, useActiveSection
├── locales/          # i18n translations (en.json, ar.json)
├── utils/            # Helper utilities
└── assets/           # Images and static assets
```
