import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './assets/i18n/en.json';
import ua from './assets/i18n/ua.json';

const setHtmlLang = (lang?: string) => {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.lang = lang || 'us';
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      ua: { translation: ua },
    },
    interpolation: { escapeValue: false },
  })
  .then(() => {
    setHtmlLang(i18n.resolvedLanguage);
  });

i18n.on('languageChanged', (lang) => setHtmlLang(lang));

export default i18n;
