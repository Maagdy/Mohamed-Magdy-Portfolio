import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../common/ScrollReveal";
import Button from "../ui/Button";
import { personalInfo } from "../../data/personalInfo";
import { useLanguage } from "../../hooks/useLanguage";
import { localized } from "../../utils/i18nHelpers";

export default function Contact() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-surface-800/60 border border-surface-200 dark:border-surface-700/50 hover:border-primary-400 dark:hover:border-primary-500/50 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <FiMail size={22} />
                  </div>
                  <div className="text-start min-w-0">
                    <p className="text-xs text-surface-500 dark:text-surface-400">
                      {t("contact.email")}
                    </p>
                    <p className="text-sm font-medium text-surface-800 dark:text-surface-200 break-all">
                      {personalInfo.email}
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-surface-800/60 border border-surface-200 dark:border-surface-700/50 shadow-sm"
                >
                  <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <FiMapPin size={22} />
                  </div>
                  <div className="text-start">
                    <p className="text-xs text-surface-500 dark:text-surface-400">
                      {t("contact.location")}
                    </p>
                    <p className="text-sm font-medium text-surface-800 dark:text-surface-200">
                      {localized(personalInfo.location, language)}
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <motion.a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-2xl bg-white dark:bg-surface-800/60 border border-surface-200 dark:border-surface-700/50 hover:border-primary-400 dark:hover:border-primary-500/50 text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400 shadow-sm hover:shadow-lg transition-all duration-300"
                  aria-label={t("a11y.github")}
                >
                  <FiGithub size={24} />
                </motion.a>
                <motion.a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-2xl bg-white dark:bg-surface-800/60 border border-surface-200 dark:border-surface-700/50 hover:border-primary-400 dark:hover:border-primary-500/50 text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400 shadow-sm hover:shadow-lg transition-all duration-300"
                  aria-label={t("a11y.linkedin")}
                >
                  <FiLinkedin size={24} />
                </motion.a>
              </div>

              <div className="pt-4">
                <p className="text-surface-500 dark:text-surface-400 mb-6">
                  {t("contact.cta")}
                </p>
                <Button href={`mailto:${personalInfo.email}`}>
                  <FiSend size={18} />
                  {t("contact.sendEmail")}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
