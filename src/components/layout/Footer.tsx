import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { personalInfo } from "../../data/personalInfo";
import { useLanguage } from "../../hooks/useLanguage";
import { localized } from "../../utils/i18nHelpers";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <footer className="relative border-t border-surface-200 dark:border-surface-800 bg-white/50 dark:bg-surface-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-surface-500 dark:text-surface-400">
            &copy; {year}{" "}
            <span className="font-medium text-surface-700 dark:text-surface-300">
              {localized(personalInfo.name, language)}
            </span>
            . {t("footer.rights")}
          </p>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-500 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400 transition-all hover:scale-115 hover:-translate-y-0.5 active:scale-95"
              aria-label={t("a11y.github")}
            >
              <FaGithub size={20} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-500 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400 transition-all hover:scale-115 hover:-translate-y-0.5 active:scale-95"
              aria-label={t("a11y.linkedin")}
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
