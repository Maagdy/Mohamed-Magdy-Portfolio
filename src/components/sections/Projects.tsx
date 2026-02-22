import { useTranslation } from "react-i18next";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
