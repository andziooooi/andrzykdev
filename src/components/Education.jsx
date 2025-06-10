import { useTranslation } from "react-i18next";
export const Education = () => {
  const { t } = useTranslation("education");
  return (
    <div>
      <section className="section">
        <h2>{t("title")}</h2>
        <p>
          <h3>{t("school")}</h3>
          <span>{t("major")}</span>
          <br />
          <i>{t("time")}</i>
          <br />
          <br />
          {t("desc")}
        </p>
      </section>
    </div>
  );
};
