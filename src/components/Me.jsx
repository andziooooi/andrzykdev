import { useTranslation } from "react-i18next";
import { Nav } from "./Nav";
export const Me = () => {
  const { t } = useTranslation("me");
  return (
    <header className="section header">
      <h1>Michał Andrzyk</h1>
      <p>{t("desc")}</p>
      <div>
        📞 +48 694 174 533 | ✉️{" "}
        <a href="mailto:andrzyk@gmail.com">andrzyk@gmail.com</a>
        <br />
        💻{" "}
        <a
          href="https://github.com/andziooooi"
          target="_blank"
          rel="noreferrer"
        >
          github.com/andziooooi
        </a>
      </div>
      <Nav articles={t("list", { returnObjects: true })}></Nav>
    </header>
  );
};
