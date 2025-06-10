import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const switchTo = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => switchTo("pl")}>PL</button>
      <button onClick={() => switchTo("en")}>ENG</button>
    </div>
  );
}
