import { useTranslation } from "react-i18next";
export const Experience = () => {
  const { t } = useTranslation("experience");
  return (
    <section className="section">
      <h2>{t("title")}</h2>
      <h3>{t("company")}</h3>
      <p>
        <i>{t("time")}</i>
      </p>
      <p>{t("desc")}</p>
    </section>
  );
};
