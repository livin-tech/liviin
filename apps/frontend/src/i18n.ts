import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
import EN from './locales/en.json';
import ES from './locales/es.json';

const LANGS = {
  ENGLISH: 'en',
  SPANISH: 'es',
};

const { ENGLISH, SPANISH } = LANGS;

i18n.use(initReactI18next).init({
  resources: {
    [ENGLISH]: {
      translation: EN,
    },
    [SPANISH]: {
      translation: ES,
    },
  },
  lng: localStorage.getItem('language') || ENGLISH, // Default language
  fallbackLng: ENGLISH,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
