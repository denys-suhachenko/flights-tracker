import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './assets/i18n/en.json';
import uk from './assets/i18n/uk.json';

const setHtmlLang = (lang?: string) => {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.lang = lang || 'en';
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      uk: { translation: uk },
    },
    interpolation: { escapeValue: false },
  })
  .then(() => {
    setHtmlLang(i18n.resolvedLanguage);
  });

i18n.on('languageChanged', (lang) => setHtmlLang(lang));

export default i18n;
