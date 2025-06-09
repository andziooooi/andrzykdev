import { useTranslation } from "react-i18next";
export const About = () => {
  const { t } = useTranslation("about");
  return (
    <section className="section">
      <h2>{t("title")}</h2>
      <p>{t("desc")}</p>
    </section>
  );
};
