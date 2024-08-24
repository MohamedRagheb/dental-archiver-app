import { TLocales } from '@/types';

export default {
  // Api
  Api_Base_Url: process.env.EXPO_PUBLIC_API_URL,

  // Keys
  Token_Key: 'auth-token',

  // Routes
  Auth_Routes: ['/login', '/signup', 'forget-password'],

  // Mode
  App_Mode: process.env.EXPO_PUBLIC_MODE,

  // Localization
  Locale_key: 'locale',
  language: 'en',
  supportedLanguages: ['ar', 'en'] as TLocales[],
  fallbackLng: 'en',
};
