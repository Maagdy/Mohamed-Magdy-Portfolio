import { motion } from "motion/react";
import type { SkillCardProps } from "../../types";

export default function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative flex flex-col items-center gap-1.5 sm:gap-2 md:gap-3 p-3 sm:p-4 md:p-6 rounded-2xl bg-white dark:bg-surface-800/60 border border-surface-200 dark:border-surface-700/50 hover:border-primary-400 dark:hover:border-primary-500/50 shadow-sm hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
    >
      <div
        className="text-2xl sm:text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110"
        style={{ color: skill.color }}
      >
        <Icon />
      </div>
      <span className="text-xs sm:text-sm font-medium text-surface-700 dark:text-surface-300 text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
}
