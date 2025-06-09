import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enAbout from "./locales/en/about.json";
import enProjects from "./locales/en/projects.json";
import enSkills from "./locales/en/skills.json";
import enLanguages from "./locales/en/languages.json";
import enMe from "./locales/en/me.json";
import enExperience from "./locales/en/experience.json";
import enEducation from "./locales/en/education.json";

import plAbout from "./locales/pl/about.json";
import plProjects from "./locales/pl/projects.json";
import plSkills from "./locales/pl/skills.json";
import plLanguages from "./locales/pl/languages.json";
import plMe from "./locales/pl/me.json";
import plExperience from "./locales/pl/experience.json";
import plEducation from "./locales/pl/education.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      about: enAbout,
      projects: enProjects,
      skills: enSkills,
      languages: enLanguages,
      me: enMe,
      experience: enExperience,
      education: enEducation,
    },
    pl: {
      about: plAbout,
      projects: plProjects,
      skills: plSkills,
      languages: plLanguages,
      me: plMe,
      experience: plExperience,
      education: plEducation,
    },
  },
  lng: "en",
  fallbackLng: "pl",
  ns: ["about", "projects", "skills", "languages", "experience", "education"],
  interpolation: { escapeValue: false },
});

export default i18n;
