import { useTranslation } from "react-i18next";
export const About = () => {
  const { t } = useTranslation("about");
  return (
    <section id="0" className="section">
      <h2>{t("title")}</h2>
      <div className="card about">{t("desc")}</div>
    </section>
  );
};
