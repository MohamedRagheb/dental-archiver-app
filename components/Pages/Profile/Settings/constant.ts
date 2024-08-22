// Types
import { TLocales } from '@/types';

interface ILanguageData {
  text: string;
  flagUrl: string;
}

export const languagesData: Record<TLocales, ILanguageData> = {
  en: {
    text: 'languages.en',
    flagUrl: 'https://flagsapi.com/US/shiny/24.png',
  },
  ar: {
    text: 'languages.ar',
    flagUrl: 'https://flagsapi.com/EG/shiny/24.png',
  },
} as const;
