import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//import enTranslation from "./locales/en/translation.json";
import enProjects from "./locales/en/projects.json";

//import plTranslation from "./locales/pl/translation.json";
import plProjects from "./locales/pl/projects.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      //translation: enTranslation,
      projects: enProjects,
    },
    pl: {
      //translation: plTranslation,
      projects: plProjects,
    },
  },
  lng: "pl",
  fallbackLng: "en",
  ns: ["projects"], // <-- lista namespace'ów
  //defaultNS: "translation",
  interpolation: { escapeValue: false },
});

export default i18n;
