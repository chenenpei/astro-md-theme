import themeConfig from '@chenenpei/astro-md-theme/tailwind.config';

/** @type {import('tailwindcss').Config} */
export default {
  ...themeConfig,
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '../../packages/theme/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
};

