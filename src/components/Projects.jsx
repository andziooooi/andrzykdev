import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
  const { t } = useTranslation("projects");

  return (
    <section>
      <h2>Projects</h2>

      <ProjectCard title={t("myFinances.title")} link={t("myFinances.link")} />
    </section>
  );
};
export default Projects;
