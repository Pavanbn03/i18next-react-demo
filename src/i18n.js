import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import de from "./de";
import en from "./en";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    resources: {
      en: en,
      de: de
    },
    lng: "en",
    fallbackLng: "en",
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
