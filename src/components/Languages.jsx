import { useTranslation } from "react-i18next";
export const Languages = () => {
  const { t } = useTranslation("languages");
  var languagelist = t("list", { returnObjects: true });
  return (
    <section className="section">
      <h2>{t("title")}</h2>
      <ul>
        {languagelist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};
