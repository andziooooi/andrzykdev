import { useTranslation } from "react-i18next";
import MyPhoto from "../assets/images/MyPhoto2.jpg";
import { Nav } from "./Nav";

export const Me = () => {
  const { t } = useTranslation("me");
  return (
    <div className="me-container">
      <div>
        <img src={MyPhoto} className="profile-image" alt="Michał Andrzyk" />
      </div>

      <header className="name-header">
        <h1 className="name">Michał Andrzyk</h1>
      </header>

      <div className="contact-section">
        <div className="contact-item">
          <span className="contact-icon">📞</span>
          <a href="tel:+48694174533" className="contact-link">
            +48 694174533
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-icon">✉️</span>
          <a href="mailto:andrzyk@gmail.com" className="contact-link">
            andrzyk@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-icon">💻</span>
          <a
            href="https://github.com/andziooooi"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            github.com/andziooooi
          </a>
        </div>
      </div>

      <Nav articles={t("list", { returnObjects: true })} />
    </div>
  );
};
