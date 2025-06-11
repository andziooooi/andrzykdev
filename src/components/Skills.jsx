import { useTranslation } from "react-i18next";
export const Skills = () => {
  const { t } = useTranslation("skills");
  var skillslist = t("softSkills.list", { returnObjects: true });
  return (
    <div id="1" className="section skills">
      <div className="skills-div">
        <h2>{t("title")}</h2>
        <ul>
          <li>C# / .NET</li>
          <li>ASP.NET Core MVC</li>
          <li>WinForms / WPF</li>
          <li>EntityFramework</li>
          <li>SQL / T-SQL </li>
          <li>MySQL/ MS SQL Server / SQLite</li>
          <li>PHP</li>
          <li>Python</li>
          <li>HTML / CSS / JavaScript</li>
          <li>React</li>
          <li>GIT</li>
          <li>Visual Studio</li>
        </ul>
      </div>

      <div className="skills-div">
        <h2>{t("softSkills.title")}</h2>
        <ul>
          {skillslist.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
