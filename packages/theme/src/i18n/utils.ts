/**
 * i18n Utility Functions
 * Helper functions for locale handling and path manipulation
 */

import type { Locale } from './config';

/**
 * Extract locale from URL pathname
 * Examples:
 *   /en/blog/post -> 'en'
 *   /blog/post -> 'zh'
 */
export function extractLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] === 'en') {
    return 'en';
  }

  return 'zh'; // Default to Chinese
}

/**
 * Remove locale prefix from pathname
 * Examples:
 *   (/en/blog/post, 'en') -> /blog/post
 *   (/blog/post, 'zh') -> /blog/post
 */
export function stripLocaleFromPath(pathname: string, locale: Locale): string {
  if (locale === 'en' && pathname.startsWith('/en')) {
    return pathname.slice(3);
  }
  return pathname;
}

/**
 * Add locale prefix to path
 * Examples:
 *   ('/blog/post', 'en') -> /en/blog/post
 *   ('/blog/post', 'zh') -> /blog/post
 */
export function addLocaleToPath(path: string, locale: Locale): string {
  const prefix = locale === 'zh' ? '' : `/${locale}`;

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${prefix}${normalizedPath}`;
}

/**
 * Get target path for switching locale
 * Maintains current path structure, only changes locale prefix
 */
export function getSwitchLocalePath(currentPathname: string, newLocale: Locale): string {
  const currentLocale = extractLocaleFromPath(currentPathname);
  const pathWithoutLocale = stripLocaleFromPath(currentPathname, currentLocale);
  return addLocaleToPath(pathWithoutLocale, newLocale);
}

/**
 * Format date according to locale
 */
export function formatDate(
  date: Date | string,
  locale: Locale,
  format: 'long' | 'short' = 'long'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const options: Intl.DateTimeFormatOptions =
    format === 'long'
      ? { year: 'numeric', month: 'long', day: 'numeric' }
      : { month: 'short', day: 'numeric' };

  return dateObj.toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', options);
}

/**
 * Format reading time
 */
export function formatReadingTime(minutes: number, locale: Locale): string {
  if (locale === 'zh') {
    return `${minutes} 分钟`;
  }
  return `${minutes} min read`;
}

/**
 * Build post metadata text
 * Combines date and reading time with proper separator
 */
export function buildPostMeta(
  date: Date | string | undefined,
  readingTime: string | undefined,
  locale: Locale
): string {
  const parts: string[] = [];

  if (date) {
    parts.push(formatDate(date, locale));
  }

  if (readingTime) {
    parts.push(readingTime);
  }

  return parts.join(' · ');
}
