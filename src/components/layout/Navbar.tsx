import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageToggle from "../ui/LanguageToggle";
import { useLanguage } from "../../hooks/useLanguage";
import { navLinks } from "../../utils/constants";
import type { NavbarProps } from "../../types";

export default function Navbar({ isDark, toggleTheme, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav
      role="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-[nav-slide_0.6s_ease-out_both] ${
        scrolled
          ? "bg-white/80 dark:bg-surface-950/80 backdrop-blur-xl shadow-lg shadow-surface-900/5 dark:shadow-surface-950/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            to="hero"
            smooth
            duration={500}
            className="cursor-pointer"
          >
            <span
              className="text-xl sm:text-2xl font-bold transition-transform hover:scale-105 inline-block"
              style={{ fontFamily: isRTL ? "'Cairo', sans-serif" : "'Sacramento', cursive" }}
            >
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                {isRTL ? "محمد" : "Mohamed"}
              </span>
              <span className="text-surface-800 dark:text-white">
                {" "}{isRTL ? "مجدي" : "Magdy"}
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                spy
                className={`relative px-4 py-2 text-sm font-medium cursor-pointer transition-colors rounded-lg ${
                  activeSection === link.to
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white"
                }`}
              >
                {t(link.labelKey)}
                {activeSection === link.to && (
                  <div
                    className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-lg -z-10 transition-all duration-300"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-surface-700 dark:text-surface-300 hover:bg-surface-200 dark:hover:bg-surface-800 transition-all active:scale-90"
              aria-label={t("a11y.toggleMenu")}
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-white/95 dark:bg-surface-950/95 backdrop-blur-xl border-t border-surface-200 dark:border-surface-800 transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                activeSection === link.to
                  ? "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                  : "text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800"
              }`}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
