export const Nav = (props) => {
  return (
    <nav className="navigation-section">
      <ul>
        {props.articles.map((item, index) => (
          <li key={index}>
            <a href={"#" + index}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
