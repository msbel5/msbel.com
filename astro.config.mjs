// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://msbel.com',
  devToolbar: {
    enabled: false,
  },

  integrations: [
    mdx(),
    sitemap(),
  ],

  build: {
    inlineStylesheets: 'auto',
  },

  vite: {
    build: {
      cssCodeSplit: true,
    },
  },

  adapter: cloudflare()
});
