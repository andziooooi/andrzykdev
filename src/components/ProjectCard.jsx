import { TechStack } from "./TechStack";

var link = "https://github.com/andziooooi/";
export const ProjectCard = (props) => {
  const handleClick = () => {
    window.open(link + props.title, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="card project-card" onClick={handleClick}>
      <div>
        <h3>
          <strong>{props.title} 🔗</strong>
        </h3>
      </div>
      <div className="desc">
        <span>{props.desc}</span>
      </div>
      <div className="tech">
        {props.tech.map((item, index) => (
          <TechStack key={index} tech={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
