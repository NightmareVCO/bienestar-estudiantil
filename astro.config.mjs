// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';
const PUBLIC_BACK_OFFICE_URL = import.meta.env.PUBLIC_BACK_OFFICE_URL;

// https://astro.build/config
export default defineConfig({
	site: 'https://bienestar-estudiantil.pucmm.edu.do/',
	integrations: [
		react(),
		sitemap({
			filter: (page) =>
				page !== `${PUBLIC_BACK_OFFICE_URL}wp-admin/` &&
				page !== `${PUBLIC_BACK_OFFICE_URL}wp-json/wp/v2/` &&
				page !== `${PUBLIC_BACK_OFFICE_URL}?rest_route=/wp/v2/`,
		}),
	],
	env: {
		schema: {
			PUBLIC_BACK_OFFICE_URL: envField.string({
				context: 'client',
				access: 'public',
			}),
			PUBLIC_API_URL: envField.string({
				context: 'client',
				access: 'public',
			}),
			PUBLIC_API_USERNAME: envField.string({
				context: 'client',
				access: 'public',
			}),
			PUBLIC_API_PASSWORD: envField.string({
				context: 'client',
				access: 'public',
			}),
			PUBLIC_PRENSA_API_URL: envField.string({
				context: 'client',
				access: 'public',
			}),
			PUBLIC_PRENSA_API_USERNAME: envField.string({
				context: 'client',
				access: 'public',
			}),
			PUBLIC_PRENSA_API_PASSWORD: envField.string({
				context: 'client',
				access: 'public',
			}),
			PUBLIC_YOUTUBE_RSS_URL: envField.string({
				context: 'client',
				access: 'public',
			}),
		},
	},
});
