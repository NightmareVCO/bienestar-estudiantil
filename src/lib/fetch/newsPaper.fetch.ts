import { truncateText } from '@utils/text.utils';

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
		const response = await fetch(PUBLIC_PRENSA_API_URL, {
			method: 'GET',
			headers: {
				Authorization: `Basic ${TOKEN}`,
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			console.error('Error fetching news paper:', response.statusText);
			return [[], new Error('Activity not found')];
		}

		const data = await response.json();

		// @ts-expect-error
		const newsPapers = data.map((newsPaper) => {
			const date = new Date(newsPaper.date);
			const formattedDate = date.toLocaleDateString('es-DO', {
				day: '2-digit',
				month: '2-digit',
				year: '2-digit',
			});

			const formattedTitle = truncateText({
				text: newsPaper.title.rendered,
				maxLength: 50,
			});

			return {
				title: formattedTitle,
				link: newsPaper.link,
				pubDate: formattedDate,
				image: newsPaper._embedded['wp:featuredmedia'][0].source_url,
			};
		});

		return [newsPapers, null];
	} catch (error) {
		const newError = new Error(
			error instanceof Error ? error.message : String(error),
		);
		return [[], newError];
	}
};
