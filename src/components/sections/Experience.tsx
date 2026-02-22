import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import SectionHeading from "../ui/SectionHeading";
import TimelineItem from "../ui/TimelineItem";
import { experience } from "../../data/experience";

export default function Experience() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-x-clip">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
        />

        <div ref={containerRef} className="relative">
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-700 -translate-x-1/2"
          />

          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-surface-200 dark:bg-surface-800 -translate-x-1/2" />

          <div className="md:hidden absolute start-5 top-0 bottom-0 w-0.5 bg-surface-200 dark:bg-surface-800" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="md:hidden absolute start-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-700"
          />

          <div className="space-y-8 md:space-y-12 ps-10 md:ps-0">
            {experience.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
