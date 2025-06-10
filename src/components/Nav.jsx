export const Nav = (props) => {
  return (
    <nav className="nav">
      <ul>
        {props.articles.map((item, index) => (
          <li key={index}>
            <a href={"#" + item}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
