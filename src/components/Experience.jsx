import { useTranslation } from "react-i18next";
export const Experience = () => {
  const { t } = useTranslation("experience");
  return (
    <section className="section">
      <h2>{t("title")}</h2>
      <div className="card">
        <div className="eduexp-header">
          <h3>
            <strong>{t("position")}</strong>
          </h3>
          <i className="time">{t("time")}</i>
        </div>
        <span>{t("company")}</span>
        <p>{t("desc")}</p>
      </div>
    </section>
  );
};
