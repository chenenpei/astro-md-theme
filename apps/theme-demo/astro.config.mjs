import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      // Extend the theme's Tailwind config
      applyBaseStyles: false,
    }),
  ],
});

