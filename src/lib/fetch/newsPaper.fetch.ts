const PUBLIC_PRENSA_API_URL = import.meta.env.PUBLIC_PRENSA_API_URL;
const PUBLIC_PRENSA_API_USERNAME = import.meta.env.PUBLIC_PRENSA_API_USERNAME;
const PUBLIC_PRENSA_API_PASSWORD = import.meta.env.PUBLIC_PRENSA_API_PASSWORD;
const TOKEN = btoa(
	`${PUBLIC_PRENSA_API_USERNAME}:${PUBLIC_PRENSA_API_PASSWORD}`,
);

export type NewsPaperPost = {
	title: string;
	link: string;
	pubDate: string;
	image: string;
};

export const getNewsPaper = async (): Promise<
	[NewsPaperPost[], Error | null]
> => {
	try {
		const response = await fetch(
			`${PUBLIC_PRENSA_API_URL}posts?per_page=6&_embed`,
			{
				method: 'GET',
				headers: {
					Authorization: `Basic ${TOKEN}`,
					'Content-Type': 'application/json',
				},
			},
		);

		// console.log({ response });
		// const xmlString = await response.text();
		// const xmlParser = new XMLParser({ ignoreAttributes: false });
		// const data = xmlParser.parse(xmlString);

		// const papersData = Array.isArray(data.rss.channel.item)
		// 	? data.rss.channel.item
		// 	: [data.rss.channel.item];

		// const formattedNewsPapers = newsPapers.map((newsPaper) => {
		// 	const date = new Date(newsPaper.pubDate);
		// 	const formattedDate = date.toLocaleDateString('es-DO', {
		// 		day: '2-digit',
		// 		month: '2-digit',
		// 		year: '2-digit',
		// 	});

		// 	const formattedTitle = truncateText({
		// 		text: newsPaper.title,
		// 		maxLength: MAX_LENGTH,
		// 	});

		// 	return {
		// 		...newsPaper,
		// 		title: formattedTitle,
		// 		date: formattedDate,
		// 	};
		// });

		// const papers: NewsPaperPost[] = papersData
		// 	.slice(0, 6)
		// 	.map((paper: NewsPaperResponse) => {
		// 		const title = paper.title ?? '';
		// 		const link = paper.link ?? '';
		// 		const pubDate = paper.pubDate ?? '';
		// 		const media: { '@_url'?: string } = paper['media:content'] ?? {};
		// 		const image = media['@_url'] ?? '';
		// 		return { title, link, pubDate, image };
		// 	});

		return [[], null];
	} catch (error) {
		const newError = new Error(
			error instanceof Error ? error.message : String(error),
		);
		return [[], newError];
	}
};

// Versión para evitar CORS, pero no tiene imagen.
// import { XMLParser } from 'fast-xml-parser';

// export type NewsPaperPost = {
// 	title: string;
// 	link: string;
// 	pubDate: string;
// 	image: string;
// };

// type NewsPaperResponse = {
// 	title?: string;
// 	link?: string;
// 	category: string[];
// 	pubDate?: string;
// 	'media:content'?: { '@_url': string };
// 	image?: string;
// };

// const BASE64_PREFIX = 'data:application/rss+xml; charset=UTF-8;base64,';

// async function decodeXml(raw: string): Promise<string> {
// 	if (raw.startsWith(BASE64_PREFIX)) {
// 		const b64 = raw.slice(BASE64_PREFIX.length);
// 		if (typeof atob === 'function') {
// 			return atob(b64);
// 		}
// 		const { Buffer } = await import('node:buffer');
// 		return Buffer.from(b64, 'base64').toString('utf-8');
// 	}
// 	return raw;
// }

// export const getNewsPaper = async (): Promise<
// 	[NewsPaperPost[] | null, Error | null]
// > => {
// 	try {
// 		const res = await fetch(
// 			`https://api.allorigins.win/get?url=${encodeURIComponent(
// 				'https://prensa.pucmm.edu.do/vida-estudiantil/feed/',
// 			)}`,
// 		);
// 		const data = await res.json();
// 		const raw = data.contents as string;
// 		const xml = await decodeXml(raw);

// 		const parser = new XMLParser();
// 		const json = parser.parse(xml);

// 		const entries = json.rss.channel.item.slice(0, 6) ?? [];

// 		// biome-ignore lint/suspicious/noExplicitAny: Retorno desconocido
// 		const papers: NewsPaperPost[] = entries.map((paper: any) => {
// 			const title = paper.title ?? '';
// 			const link = paper.link ?? '';
// 			const pubDate = paper.pubDate ?? '';
// 			const media = paper['media:content'] ?? {};
// 			const image = media['@_url'] ?? '';
// 			return { title, link, pubDate, image };
// 		});

// 		return [papers, null];
// 	} catch (error: unknown) {
// 		if (error instanceof Error) {
// 			return [null, error];
// 		}

// 		const newError = new Error(
// 			error instanceof Error ? error.message : String(error),
// 		);
// 		return [null, newError];
// 	}
// };
