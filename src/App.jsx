import "./App.css";

import Projects from "./components/Projects";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./i18n";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Languages } from "./components/Languages";
import { About } from "./components/About";
import { Me } from "./components/Me";
function App() {
  return (
    // <LanguageSwitcher />
    <div className="container">
      <div className="content">
        <div className="left">
          <Me></Me>
        </div>
        <div className="right">
          <About></About>

          <Skills></Skills>

          <Experience></Experience>

          <Projects></Projects>

          <Education></Education>

          <Languages></Languages>
        </div>
      </div>

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
