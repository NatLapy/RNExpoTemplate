import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./languages/fr.json";
import en from "./languages/en.json";
const initI18next = (defaultLng) => {
    i18next.use(initReactI18next).init({
        compatibilityJSON: "v4",
        resources: { en: { translation: en }, fr: { translation: fr } },
        lng: defaultLng,
        fallbackLng: "fr",
        interpolation: { escapeValue: false },
    });
};
export default initI18next;
