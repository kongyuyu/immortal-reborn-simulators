import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import cn from './resources/cn';
import en from './resources/en';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      cn,
      en,
    },
    fallbackLng: 'cn',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
    },

    react: {
      wait: true,
    },
  });

export default i18n;
