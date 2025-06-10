import { useTranslation } from "react-i18next";
import MyPhoto from "../assets/images/MyPhoto2.jpg";

import { Nav } from "./Nav";
export const Me = () => {
  const { t } = useTranslation("me");
  return (
    <header className="section header">
      <div className="Image-wrapper">
        <img src={MyPhoto} style={{ width: "20em", borderRadius: "50px" }} />
      </div>

      <h1>Michał Andrzyk</h1>

      <div>
        <span>📞 +48 694 174 533</span>
        <span>
          |✉️ <a href="mailto:andrzyk@gmail.com">andrzyk@gmail.com</a>
        </span>
        <br />
        <span>
          💻{" "}
          <a
            href="https://github.com/andziooooi"
            target="_blank"
            rel="noreferrer"
          >
            github.com/andziooooi
          </a>
        </span>
      </div>
      <Nav articles={t("list", { returnObjects: true })}></Nav>
    </header>
  );
};
