import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

// Import translation files
import en from './locales/en.json';
import es from './locales/es.json';

// Define the structure of the translation files
interface TranslationResources {
  translation: {
    [key: string]: string;
  };
}

const resources: { [key: string]: TranslationResources } = {
  en: { translation: en },
  es: { translation: es },
};

// Configuration
i18n
  .use(RNLanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
