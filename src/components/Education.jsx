import { useTranslation } from "react-i18next";
export const Education = () => {
  const { t } = useTranslation("education");
  return (
    <div>
      <section id="3" className="section">
        <h2>{t("title")}</h2>
        <div className="card">
          <div className="eduexp-header">
            <h3>
              <strong>{t("school")}</strong>
            </h3>
            <i className="time">{t("time")}</i>
          </div>
          <span>{t("major")}</span>
          <br />
          <i>{t("spec")}</i>
          <p>{t("desc")}</p>
        </div>
      </section>
    </div>
  );
};
