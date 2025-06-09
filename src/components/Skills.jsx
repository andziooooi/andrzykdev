import { useTranslation } from "react-i18next";
export const Skills = () => {
  const { t } = useTranslation("skills");
  var skillslist = t("softSkills.list", { returnObjects: true });
  return (
    <div>
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
        <h2>{t("softSkills.title")}</h2>
        <ul>
          {skillslist.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
