import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { FiMapPin, FiMail } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../common/ScrollReveal";
import { personalInfo } from "../../data/personalInfo";
import { stats } from "../../data/skills";
import { useLanguage } from "../../hooks/useLanguage";
import { localized, formatNumber } from "../../utils/i18nHelpers";
import type { AnimatedCounterProps } from "../../types";

function AnimatedCounter({ value, suffix = "", language }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-500">
      {formatNumber(count, language)}
      {suffix}
    </span>
  );
}

export default function About() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const bio = localized(personalInfo.bio, language);
  const location = localized(personalInfo.location, language);

  return (
    <section id="about" className="relative py-20 md:py-28 overflow-x-clip">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <ScrollReveal direction="left">
            <div className="space-y-4">
              {bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-surface-600 dark:text-surface-400 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center gap-3 text-sm text-surface-600 dark:text-surface-400">
                  <FiMapPin className="text-primary-500 shrink-0" size={16} />
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-surface-600 dark:text-surface-400">
                  <FiMail className="text-primary-500 shrink-0" size={16} />
                  <span>{personalInfo.email}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.labelKey}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] sm:flex-1 flex flex-col items-center text-center p-3 sm:p-5 rounded-2xl bg-white dark:bg-surface-800/60 border border-surface-200 dark:border-surface-700/50 shadow-sm"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} language={language} />
                  <span className="text-xs md:text-sm text-surface-500 dark:text-surface-400 mt-2">
                    {t(stat.labelKey)}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
