import rss from '@astrojs/rss';

export interface BlogPostData {
  title: string;
  pubDate: Date;
  excerpt?: string;
  description?: string;
  langs?: string[];
  [key: string]: unknown;
}

export interface BlogPost {
  slug: string;
  data: BlogPostData;
}

export interface RSSFeedConfig {
  title: string;
  description: string;
  site: string | URL;
  items: RSSItem[];
  customData?: string;
  stylesheet?: string;
  trailingSlash?: boolean;
}

export interface RSSItem {
  title: string;
  link: string;
  description?: string;
  pubDate: Date;
  content?: string;
  customData?: string;
}

/**
 * Generate RSS feed with default settings
 */
export async function generateRSSFeed(config: RSSFeedConfig) {
  return rss({
    ...config,
    // Default settings
    trailingSlash: config.trailingSlash ?? false,
  });
}

/**
 * Convert blog collection entries to RSS items
 * @param posts - Array of blog posts (CollectionEntry<'blog'>[] or BlogPost[])
 * @param options - Optional configuration
 */
export function blogToRSSItems(
  posts: BlogPost[],
  options?: {
    limit?: number;
    locale?: string;
    basePath?: string;
  }
): RSSItem[] {
  let filteredPosts = posts;

  // Filter by locale if specified
  if (options?.locale) {
    filteredPosts = posts.filter(post => {
      const langs = post.data.langs;
      return langs?.includes(options.locale!) ?? false;
    });
  }

  // Sort by date (newest first)
  filteredPosts.sort((a, b) =>
    b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  // Limit if specified
  if (options?.limit) {
    filteredPosts = filteredPosts.slice(0, options.limit);
  }

  const basePath = options?.basePath || '/blog';

  return filteredPosts.map(post => {
    const data = post.data;
    return {
      title: data.title,
      link: `${basePath}/${post.slug}/`,
      description: data.excerpt || data.description,
      pubDate: data.pubDate,
    };
  });
}

/**
 * Generate RSS auto-discovery link tag
 */
export function getRSSLinkTag(
  rssPath: string,
  siteTitle: string
): string {
  return `<link rel="alternate" type="application/rss+xml" title="${siteTitle}" href="${rssPath}" />`;
}
