import { useTranslation } from "react-i18next";
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "../ui/SkillCard";
import { skills } from "../../data/skills";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-x-clip">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div key={skill.name} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(20%-1.2rem)]">
              <SkillCard skill={skill} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
