var link = "https://github.com/andziooooi/";
export const ProjectCard = (props) => {
  return (
    <div>
      <div>
        <strong>
          <a href={link + props.link}>{props.title}</a>
        </strong>
      </div>
      <div className="desc">
        <span>{props.desc}</span>
      </div>
      <div className="footer">
        <div className="tech"></div>
      </div>
    </div>
  );
};
export default ProjectCard;
