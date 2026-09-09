// @ts-check

import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  outDir: './build',
  integrations: [svelte()],
  server: { host: true, allowedHosts: ['beta.kathund.dev', 'kathund.dev'], port: 44461 },
  vite: { plugins: [tailwindcss()] },
  redirects: { '/button/people/kath.png': '/button/people/Amber_dark.png' },
  site: 'https://kathund.dev',
  adapter: cloudflare()
});
