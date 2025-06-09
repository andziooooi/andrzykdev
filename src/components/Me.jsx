import { Nav } from "./Nav";
export const Me = () => (
  <header className="section header">
    <h1>Michał Andrzyk</h1>
    <p>Computer Science Student @ Warsaw University of Life Sciences</p>
    <div>
      📞 +48 694 174 533 | ✉️{" "}
      <a href="mailto:andrzyk@gmail.com">andrzyk@gmail.com</a>
      <br />
      💻{" "}
      <a href="https://github.com/andziooooi" target="_blank" rel="noreferrer">
        github.com/andziooooi
      </a>
    </div>
    <Nav></Nav>
  </header>
);
