/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly PUBLIC_BACK_OFFICE_URL: string;
	readonly PUBLIC_API_URL: string;
	readonly PUBLIC_API_USERNAME: string;
	readonly PUBLIC_API_PASSWORD: string;
	readonly PUBLIC_PRENSA_API_URL: string;
	readonly PUBLIC_PRENSA_API_USERNAME: string;
	readonly PUBLIC_PRENSA_API_PASSWORD: string;
	readonly PUBLIC_YOUTUBE_RSS_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
