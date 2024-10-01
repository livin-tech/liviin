import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enTranslation from './locale/en/translation.json';
import esTranslation from './locale/es/translation.json';

i18n.use(initReactI18next).init({
   resources: {
      en: {
        translation: enTranslation,
      },
      es: {
         translation: esTranslation
      }
    },
    lng: localStorage.getItem('language') || 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
});

export default i18n;