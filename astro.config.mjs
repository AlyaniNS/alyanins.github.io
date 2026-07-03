import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://alyanins.github.io',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => page === 'https://alyanins.github.io/',
    }),
    mdx(),
  ],
});
