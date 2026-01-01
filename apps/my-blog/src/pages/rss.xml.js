import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const parser = new MarkdownIt({
  html: true,     // Allow HTML tags
  linkify: true,  // Automatically convert URLs to links
  typographer: true,  // Enable typographic replacements and quote beautification
});

export async function GET(context) {
  const posts = await getCollection('blog');

  const rssItems = posts
    .filter(post => {
      // Only include Chinese posts (langs defaults to ['zh'])
      return post.data.langs?.includes('zh') ?? true;
    })
    .map((post) => {
      const item = {
        title: post.data.title,
        link: `/blog/${post.slug}/`,
        description: post.data.excerpt || post.data.description || post.data.title,
        pubDate: post.data.pubDate,
      };

      // For .md files, render Markdown to HTML
      // For .mdx files, only include excerpt (MDX cannot be rendered with markdown-it)
      if (post.id.endsWith('.md')) {
        const htmlContent = parser.render(post.body);
        const sanitizedContent = sanitizeHtml(htmlContent, {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat([
            'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
          ]),
          allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            img: ['src', 'alt', 'title', 'width', 'height'],
          },
        });
        item.content = sanitizedContent;
      }

      return item;
    });

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site || SITE.url,
    items: rssItems,
  });
}
