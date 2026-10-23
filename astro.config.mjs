// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://mfaour.is-a.dev',
	integrations: [sitemap()],
	markdown: {
		shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
	},
});
