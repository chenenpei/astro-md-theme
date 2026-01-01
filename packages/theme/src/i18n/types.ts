/**
 * i18n Type Definitions
 */

export type Locale = 'zh' | 'en';

/**
 * Translation structure interface
 * Defines all translatable strings in the application
 */
export interface Translations {
  // Navigation
  nav: {
    home: string;
    articles: string;
    about: string;
  };

  // Buttons and actions
  buttons: {
    back: string;
    readMore: string;
    viewAllArchives: string;
  };

  // Theme toggle
  theme: {
    darkMode: string;
    lightMode: string;
    toggle: string;
  };

  // Language switcher
  language: {
    switchTo: string;
    current: string;
  };

  // Page titles
  pageTitles: {
    home: string;
    archive: string;
    about: string;
  };

  // List and archive views
  list: {
    latestPosts: string;
    allPosts: string;
    postsByYear: string;
    noPosts: string;
    emptyState: string;
  };

  // Post metadata
  post: {
    publishedOn: string;
    readingTime: string;
    minRead: string;
  };

  // Social links
  social: {
    followMe: string;
    email: string;
  };
}
