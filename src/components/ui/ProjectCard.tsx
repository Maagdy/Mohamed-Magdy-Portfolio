import { motion } from "motion/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";
import { localized } from "../../utils/i18nHelpers";
import type { ProjectCardProps } from "../../types";

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const title = localized(project.title, language);
  const description = localized(project.description, language);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative rounded-2xl overflow-hidden bg-white dark:bg-surface-800/60 border border-surface-200 dark:border-surface-700/50 hover:border-primary-400 dark:hover:border-primary-500/50 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500"
    >
      <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden bg-gradient-to-br from-primary-500/20 to-primary-700/20">
        {project.image ? (
          <img
            src={project.image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            width={600}
            height={340}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl font-bold text-primary-500/30">
              {title[0]}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-surface-900/90 via-surface-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
              aria-label={t("a11y.viewSource")}
            >
              <FiGithub size={20} />
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              {...(project.live.startsWith("#") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
              aria-label={t("a11y.viewLive")}
            >
              <FiExternalLink size={20} />
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-bold text-surface-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-surface-600 dark:text-surface-400 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-4 pt-4 border-t border-surface-200 dark:border-surface-700/50">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700/50 transition-colors"
            >
              <FiGithub size={16} />
              {t("projects.repo")}
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              {...(project.live.startsWith("#") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            >
              <FiExternalLink size={16} />
              {project.live.startsWith("#") ? t("projects.youreHere") : t("projects.liveDemo")}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
