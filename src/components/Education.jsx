import { useTranslation } from "react-i18next";
export const Education = () => {
  const { t } = useTranslation("education");
  return (
    <div>
      <section className="section">
        <h2>{t("title")}</h2>
        <p>
          <strong>{t("school")}</strong>
          <br />
          <i>{t("time")}</i>
          <br />
          <br />
          {t("desc")}

          <br />
        </p>
      </section>
    </div>
  );
};
