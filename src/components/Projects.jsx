import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
  const { t } = useTranslation("projects");

  return (
    <section>
      <h2>Projects</h2>
      <ProjectCard
        title="MyFinances"
        desc={t("MyFinances.desc")}
        tech={["ASP .NET MVC", "EntityFramework", "SQLite"]}
      />
      <ProjectCard
        title="WordZone"
        desc={t("WordZone.desc")}
        tech={["WPF", "EntityFramework", "SQLite"]}
      />
    </section>
  );
};
export default Projects;
