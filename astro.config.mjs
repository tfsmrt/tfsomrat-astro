import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tfsmrt.github.io',
  base: '/tfsomrat-astro',
  output: 'static',
  integrations: [mdx(), sitemap()],
});
