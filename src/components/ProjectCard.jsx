import { TechStack } from "./TechStack";

var link = "https://github.com/andziooooi/";
export const ProjectCard = (props) => (
  <div>
    <div className="projectname">
      <strong>
        <a href={link + props.title} target="_blank" rel="noreferrer">
          {props.title}
        </a>
      </strong>
    </div>
    <div className="desc">
      <span>{props.desc}</span>
    </div>
    {props.tech.map((item, index) => (
      <TechStack key={index} tech={item} />
    ))}
  </div>
);
export default ProjectCard;
