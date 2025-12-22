import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkDefinitionList from 'remark-definition-list';

export default defineConfig({
  integrations: [
    tailwind({
      // Extend the theme's Tailwind config
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkDefinitionList],
    rehypePlugins: [rehypeKatex],
  },
});

