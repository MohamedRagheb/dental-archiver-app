import { formatWithOptions } from 'date-fns/fp';
import { ar, enUS } from 'date-fns/locale';
import { getI18n } from 'react-i18next';

export function dateToString(date: string) {
  const locale = getI18n().language as 'en' | 'ar';
  const createdDate = new Date(date);
  return formatWithOptions(
    { locale: locale === 'en' ? enUS : ar },
    'd MMMM yyy'
  )(createdDate);
}
