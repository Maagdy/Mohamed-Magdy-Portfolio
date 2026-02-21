import { useMemo, useEffect, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "./hooks/useTheme";
import { useLanguage } from "./hooks/useLanguage";
import { useActiveSection } from "./hooks/useActiveSection";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import Hero from "./components/sections/Hero";

const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Contact = lazy(() => import("./components/sections/Contact"));

const sectionIds = ["hero", "about", "skills", "projects", "experience", "contact"];

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const { t } = useTranslation();
  const activeSection = useActiveSection(useMemo(() => sectionIds, []));

  useEffect(() => {
    document.title = t("meta.title");
    document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"));
  }, [language, t]);

  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-950 text-surface-800 dark:text-surface-200 transition-colors duration-300">
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      <main>
        <Hero />
        <Suspense>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
