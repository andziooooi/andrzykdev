import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const switchTo = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => switchTo("pl")}>
        <img src="https://flagcdn.com/w40/pl.png" alt="PL" width="20" /> PL
      </button>
      |
      <button onClick={() => switchTo("en")}>
        <img src="https://flagcdn.com/w40/gb.png" alt="GB" width="25" /> ENG
      </button>
    </div>
  );
}
