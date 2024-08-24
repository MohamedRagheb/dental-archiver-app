import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as en from './en.json';
import * as ar from './ar.json';
import enviroment from '@/Utils/enviroment';
import { I18nManager } from 'react-native';
import { getItem } from 'expo-secure-store';

const resources = {
  en: { translation: en },
  ar: { translation: ar },
} as const;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getItem(enviroment.Locale_key) ?? enviroment.fallbackLng,
    fallbackLng: enviroment.fallbackLng,
    supportedLngs: enviroment.supportedLanguages,
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

I18nManager.forceRTL(getItem(enviroment.Locale_key) === 'ar');
I18nManager.allowRTL(getItem(enviroment.Locale_key) === 'ar');

export default i18n;
