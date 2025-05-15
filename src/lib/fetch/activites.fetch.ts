import { truncateText } from '@utils/text.utils';
const PUBLIC_API_URL = import.meta.env.PUBLIC_API_URL;
const PUBLIC_API_USERNAME = import.meta.env.PUBLIC_API_USERNAME;
const PUBLIC_API_PASSWORD = import.meta.env.PUBLIC_API_PASSWORD;
const TOKEN = btoa(`${PUBLIC_API_USERNAME}:${PUBLIC_API_PASSWORD}`);

export type Activity = {
	id: number;
	title: string;
	content: string;
	date: string;
	imageUrl: string | null;
	groupSlugForImage?: string;
	groupSlugForPage?: string;
	groupName?: string;
	groupId?: number;
	slug?: string;
};

export const getActivities = async ({
	categoryId,
	currentPage,
	amountOfActivitiesToFetch,
}: {
	categoryId?: number;
	currentPage: number;
	amountOfActivitiesToFetch: number;
}): Promise<[Activity[], Error | null]> => {
	try {
		const response = await fetch(
			`${PUBLIC_API_URL}posts${categoryId ? `&categories=${categoryId}` : ''}&per_page=${amountOfActivitiesToFetch}&page=${currentPage}&_embed`,
			{
				headers: {
					Authorization: `Basic ${TOKEN}`,
					'Content-Type': 'application/json',
				},
			},
		);

		if (!response.ok) {
			return [[], new Error('Activity not found')];
		}

		const data = await response.json();

		// @ts-expect-error
		const activities = data.map((activity) => {
			const date = new Date(activity.date);
			const formattedDate = date.toLocaleDateString('es-DO', {
				day: '2-digit',
				month: '2-digit',
				year: '2-digit',
			});

			const formattedTitle = truncateText({
				text: activity.title.rendered,
				maxLength: 50,
			});

			return {
				id: activity.id,
				title: formattedTitle,
				content: activity.content.rendered,
				imageUrl: activity._embedded['wp:featuredmedia'][0].source_url,
				groupSlugForImage:
					activity._embedded['wp:term'][0][1].slug.split('-')[0],
				groupSlugForPage: activity._embedded['wp:term'][0][1].slug,
				groupName: activity._embedded['wp:term'][0][1].name,
				slug: activity.slug,
				date: formattedDate,
			};
		});

		return [activities, null];
	} catch (error) {
		const newError = new Error(
			error instanceof Error ? error.message : String(error),
		);
		return [[], newError];
	}
};

export const getActivityById = async ({
	id,
}: { id: string }): Promise<[Activity | null, Error | null]> => {
	try {
		const response = await fetch(`${PUBLIC_API_URL}posts/${id}&_embed`, {
			headers: {
				Authorization: `Basic ${TOKEN}`,
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			return [null, new Error('Activity not found')];
		}

		const rawActivity = await response.json();

		const formattedDate = new Date(rawActivity.date).toLocaleDateString(
			'es-DO',
			{
				day: '2-digit',
				month: '2-digit',
				year: '2-digit',
			},
		);

		const activity: Activity = {
			id: rawActivity.id,
			title: rawActivity.title.rendered,
			content: rawActivity.content.rendered,
			date: formattedDate,
			imageUrl:
				rawActivity?._embedded['wp:featuredmedia'][0]?.source_url ?? null,
			groupId: rawActivity?.categories[rawActivity.categories.length - 1],
			groupSlugForPage: rawActivity._embedded['wp:term'][0][1].slug,
			groupName: rawActivity._embedded['wp:term'][0][1].name,
		};

		return [activity, null];
	} catch (error) {
		const newError = new Error(
			error instanceof Error ? error.message : String(error),
		);
		return [null, newError];
	}
};

export const getCategoryIdBySlug = async ({
	slug,
}: {
	slug: string;
}): Promise<[number | null, Error | null]> => {
	try {
		const response = await fetch(`${PUBLIC_API_URL}categories&slug=${slug}`, {
			headers: {
				Authorization: `Basic ${TOKEN}`,
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			return [null, new Error('Category not found')];
		}

		const data = await response.json();

		if (data.length === 0) {
			return [null, new Error('Category not found')];
		}

		return [data[0].id, null];
	} catch (error) {
		const newError = new Error(
			error instanceof Error ? error.message : String(error),
		);
		return [null, newError];
	}
};
