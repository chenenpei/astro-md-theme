/**
 * i18n Configuration
 * Centralized i18n setup and locale management
 */

import type { Locale, Translations } from './types';
import { zh } from './locales/zh';
import { en } from './locales/en';

/**
 * Translation dictionary
 */
export const translations: Record<Locale, Translations> = {
  zh,
  en,
};

/**
 * Supported locales list
 */
export const supportedLocales: Locale[] = ['zh', 'en'];

/**
 * Default locale (Chinese)
 */
export const defaultLocale: Locale = 'zh';

/**
 * Get translations for a specific locale
 */
export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

/**
 * Get locale display label
 */
export function getLocaleLabel(locale: Locale): string {
  const labels: Record<Locale, string> = {
    zh: '中文',
    en: 'English',
  };
  return labels[locale];
}
