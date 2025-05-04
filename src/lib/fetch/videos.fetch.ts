const YOUTUBE_URL = import.meta.env.PUBLIC_YOUTUBE_RSS_URL;
import { truncateText } from '@utils/text.utils';
import { XMLParser } from 'fast-xml-parser';

export type VideoPost = {
	title: string;
	link: string;
	published: string;
	image: string;
};

export type VideoResponse = {
	title: string;
	link: { '@_href': string };
	published: string;
	'media:group': { 'media:thumbnail': { '@_url': string } };
};

const MAX_LENGTH = 45;

export const getYouTubeVideos = async (): Promise<
	[VideoPost[], Error | null]
> => {
	try {
		const response = await fetch(
			`https://api.allorigins.win/get?url=${encodeURIComponent(YOUTUBE_URL)}`,
		);

		const data = await response.json();
		const parser = new XMLParser();
		const json = parser.parse(data.contents);

		const entries = json.feed?.entry?.slice(0, 6) ?? [];

		// @ts-ignore
		const videos = entries.map((entry) => {
			const date = new Date(entry.published);
			const formattedDate = date.toLocaleDateString('es-DO', {
				day: '2-digit',
				month: '2-digit',
				year: '2-digit',
			});

			const formattedTitle = truncateText({
				text: entry.title,
				maxLength: MAX_LENGTH,
			});

			return {
				title: formattedTitle,
				published: formattedDate,
				link: `https://www.youtube.com/watch?v=${entry['yt:videoId']}`,
				image: `https://i.ytimg.com/vi/${entry['yt:videoId']}/hqdefault.jpg`,
			};
		});

		return [videos, null];
	} catch (error) {
		const newError = new Error(
			error instanceof Error ? error.message : String(error),
		);
		return [[], newError];
	}
};
