import "./App.css";
import { NavBar } from "./components/NavBar";
import Projects from "./components/Projects";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./i18n";

function App() {
  return (
    <div className="container">
      <LanguageSwitcher />
      <NavBar></NavBar>
      <header className="section header">
        <h1>Michał Andrzyk</h1>
        <p>Computer Science Student @ Warsaw University of Life Sciences</p>
        <div>
          📞 +48 694 174 533 | ✉️{" "}
          <a href="mailto:andrzyk@gmail.com">andrzyk@gmail.com</a>
          <br />
          💻{" "}
          <a
            href="https://github.com/andziooooi"
            target="_blank"
            rel="noreferrer"
          >
            github.com/andziooooi
          </a>
        </div>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a Computer Science student in my third year, eager to develop my
          skills and gain experience in the IT industry. I have foundational
          skills in software engineering and web development and I’m always open
          to new challenges and learning.
        </p>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <ul>
          <li>C# / .NET / ASP.NET Core MVC</li>
          <li>WinForms / WPF / EntityFramework</li>
          <li>SQL / T-SQL / MySQL / SQLite</li>
          <li>PHP / Python</li>
          <li>HTML / CSS / JavaScript</li>
          <li>GIT / Visual Studio</li>
        </ul>
      </section>

      <section className="section">
        <h2>Soft Skills</h2>
        <ul>
          <li>Fast learner</li>
          <li>Strong willingness to learn</li>
          <li>Adaptability</li>
          <li>Problem-solving</li>
          <li>Critical thinking</li>
          <li>Teamwork</li>
          <li>Good interpersonal skills</li>
        </ul>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <h3>SVZ Tomaszów Sp. z o.o. – ICT employee</h3>
        <p>
          <i>Aug 2024 – Sep 2024</i>
        </p>
        <ul>
          <li>Managed rollout process and technical support</li>
          <li>Integrated systems and resolved infrastructure issues</li>
          <li>Issued and repaired equipment, supported users</li>
        </ul>
      </section>

      <Projects></Projects>

      <section className="section">
        <h2>Education</h2>
        <p>
          <strong>Warsaw University of Life Sciences</strong>
          <br />
          Engineer's degree in Computer Science, specialization in Information
          Systems Engineering
          <br />
          <i>2022 – present</i>
        </p>
      </section>

      <section className="section">
        <h2>Languages</h2>
        <ul>
          <li>Polish – Native</li>
          <li>English – B2</li>
        </ul>
      </section>

      <footer className="section footer">
        <p>
          I hereby give consent to the processing of my personal data for the
          purposes necessary for the recruitment process in accordance with
          GDPR.
        </p>
      </footer>
    </div>
  );
}

export default App;
