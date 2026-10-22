// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// Switch to https://mfaour.is-a.dev once the is-a.dev domain is approved.
export default defineConfig({
	site: 'https://mfaour34.github.io',
	integrations: [sitemap()],
	markdown: {
		shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
	},
});
