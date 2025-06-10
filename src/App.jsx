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
    <div className="container">
      <LanguageSwitcher />
      <div className="content">
        <div className="left"></div>
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
