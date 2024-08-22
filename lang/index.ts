import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as en from './en.json';
import * as ar from './ar.json';
import enviroment from '@/Utils/enviroment';

const resources = {
  en: { translation: en },
  ar: { translation: ar },
} as const;

export default i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: enviroment.language,
    fallbackLng: enviroment.fallbackLng,
    supportedLngs: enviroment.supportedLanguages,
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
