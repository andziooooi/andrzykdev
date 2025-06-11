import "./App.css";

import Projects from "./components/Projects";

import "./i18n";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Languages } from "./components/Languages";
import { About } from "./components/About";
import { Me } from "./components/Me";
import LanguageSwitcher from "./components/LanguageSwitcher";
function App() {
  return (
    <div className="container">
      <div className="language-section">
        <LanguageSwitcher />
      </div>
      <div className="content">
        <div className="me">
          <Me></Me>
        </div>
        <div className="right">
          <About></About>

          <Skills></Skills>

          <Experience></Experience>

          <Education></Education>

          <Projects></Projects>

          <Languages></Languages>
        </div>
      </div>
    </div>
  );
}

export default App;
