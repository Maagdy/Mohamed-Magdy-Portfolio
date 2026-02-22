import { motion } from "motion/react";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import { useLanguage } from "../../hooks/useLanguage";
import { localized } from "../../utils/i18nHelpers";
import type { TimelineItemProps } from "../../types";

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const { language, isRTL } = useLanguage();
  const isLeft = index % 2 === 0;
  const Icon = item.type === "experience" ? FiBriefcase : FiBookOpen;

  const slideX = isRTL
    ? isLeft ? 30 : -30
    : isLeft ? -30 : 30;

  return (
    <div
      className={`flex items-start gap-4 md:gap-0 relative ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: slideX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`flex-1 ${isLeft ? "md:pe-12 md:text-end" : "md:ps-12"}`}
      >
        <div className="p-3 sm:p-4 md:p-5 rounded-2xl bg-white dark:bg-surface-800/60 border border-surface-200 dark:border-surface-700/50 hover:border-primary-400 dark:hover:border-primary-500/50 shadow-sm hover:shadow-lg transition-all duration-300">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-3">
            {localized(item.period, language)}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-surface-900 dark:text-white mb-1">
            {localized(item.title, language)}
          </h3>
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">
            {localized(item.organization, language)}
          </p>
          <p className="text-sm text-surface-600 dark:text-surface-400">
            {localized(item.description, language)}
          </p>
        </div>
      </motion.div>

      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/30 z-10"
        >
          <Icon size={18} />
        </motion.div>
      </div>

      <div className="md:hidden absolute -start-8 top-5">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="w-7 h-7 rounded-full bg-primary-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/30 z-10"
        >
          <Icon size={12} />
        </motion.div>
      </div>

      <div className="hidden md:block flex-1" />
    </div>
  );
}
