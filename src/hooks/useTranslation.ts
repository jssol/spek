import { useRouter } from 'next/router';
import enCommon from '../../locales/en/common.json';
import frCommon from '../../locales/fr/common.json';
import swCommon from '../../locales/sw/common.json';

const translations: Record<string, unknown> = {
  en: enCommon,
  fr: frCommon,
  sw: swCommon,
};

export const useTranslation = () => {
  const { locale } = useRouter();
  return translations[locale || 'fr'];
};
