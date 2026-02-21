import { useTranslation } from "react-i18next";
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "../ui/SkillCard";
import { skills } from "../../data/skills";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
