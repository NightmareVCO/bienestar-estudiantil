import {
	type Activity,
	getActivities,
	getActivityById,
	getCategoryIdBySlug,
} from '@fetch/activites.fetch';
import { type NewsPaperPost, getNewsPaper } from '@fetch/newsPaper.fetch';
import { type VideoPost, getYouTubeVideos } from '@fetch/videos.fetch';
import {
	Campus,
	getActivityIdFromUrl,
	getCampusIdAndPageBySlug,
	getGroupSlugFromUrl,
} from '@utils/query.utils';
import { useEffect, useState } from 'react';

declare global {
	interface Window {
		// biome-ignore lint/suspicious/noExplicitAny: Se necesita para el magnificPopup
		jQuery?: any;
		__ACTIVITY_GROUP_ID__?: number;
	}
}

export function usePucmmTV() {
	const [videos, setVideos] = useState<VideoPost[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchVideos = async () => {
			setLoading(true);
			const [videos, _] = await getYouTubeVideos();

			setVideos(videos);
			setLoading(false);
		};

		fetchVideos();
	}, []);

	// Permite que el magnificPopup funcione (la modal de YouTube)
	useEffect(() => {
		if (videos.length > 0) {
			if (window.jQuery?.fn.magnificPopup) {
				window.jQuery('.popup-youtube').magnificPopup({
					type: 'iframe',
				});
			}
		}
	}, [videos]);
	return { videos, loading };
}

export function useNewsPapers() {
	const [newsPapers, setNewsPapers] = useState<NewsPaperPost[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchNewsPapers = async () => {
			setLoading(true);
			const [newsPapers, _] = await getNewsPaper();

			setNewsPapers(newsPapers);
			setLoading(false);
		};

		fetchNewsPapers();
	}, []);

	return { newsPapers, loading };
}

export function useActivitiesForHome({ amount }: { amount: number }) {
	const [activities, setActivities] = useState<Activity[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchActivities = async () => {
			setLoading(true);
			const [activities, _] = await getActivities({
				currentPage: 1,
				amountOfActivitiesToFetch: amount,
			});

			setActivities(activities);
			setLoading(false);
		};

		fetchActivities();
	}, [amount]);

	return { activities, loading };
}

export function useActivities({ amount }: { amount: number }) {
	const { campusId, campus, currentPage } = getCampusIdAndPageBySlug();

	const [activities, setActivities] = useState<Activity[]>([]);
	const [hasMoreActivities, setHasMoreActivities] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchActivities = async () => {
			setLoading(true);
			const [activities, _] = await getActivities({
				categoryId: campusId,
				currentPage,
				amountOfActivitiesToFetch: amount,
			});

			setActivities(activities);
			setHasMoreActivities(activities.length === amount);
			setLoading(false);
		};

		fetchActivities();
	}, [campusId, currentPage, amount]);

	return { activities, loading, campus, currentPage, hasMoreActivities };
}

export function useActivity() {
	const { id } = getActivityIdFromUrl();
	if (!id) {
		window.location.href =
			'/grupos-estudiantiles/calendario-de-actividades/csti?pagina=1';
	}

	const [activity, setActivity] = useState<Activity>({} as Activity);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchActivity = async () => {
			setLoading(true);
			const [activity, _] = await getActivityById({
				// biome-ignore lint/style/noNonNullAssertion: Previamente se verifica que el id existe, pero como no hay return, el lint no lo detecta
				id: id!,
			});

			if (!activity) {
				window.location.href =
					'/grupos-estudiantiles/calendario-de-actividades/csti?pagina=1';
				return;
			}

			// Lo agregamos a nivel global para poder usarlo en el sidebar fuera del componente.
			window.__ACTIVITY_GROUP_ID__ = activity.groupId;
			window.dispatchEvent(
				new CustomEvent('activity-group-ready', {
					detail: { groupId: activity.groupId },
				}),
			);

			setActivity(activity);
			setLoading(false);
		};

		fetchActivity();
	}, [id]);

	return { activity, loading };
}

// globalGroupId va a permitir usar este componente en la página de una actividad especifica y poder mostrar el sidebar con las actividades de ese grupo
export function useActivitiesSideBar({ amount }: { amount: number }) {
	const { groupSlug } = getGroupSlugFromUrl();
	const [groupId, setGroupId] = useState<number | undefined>(
		window.__ACTIVITY_GROUP_ID__,
	);

	const [activities, setActivities] = useState<Activity[]>([]);
	const [loading, setLoading] = useState(true);

	// si hay slug de grupo, obtenemos el ID desde la API
	useEffect(() => {
		if (!groupSlug) return;

		(async () => {
			setLoading(true);
			const [fetchedGroupId] = await getCategoryIdBySlug({ slug: groupSlug });
			if (fetchedGroupId) {
				setGroupId(fetchedGroupId);
			}
			setLoading(false);
		})();
	}, [groupSlug]);

	// escuchamos el evento si no tenemos aún un groupId y provenimos de actividad
	useEffect(() => {
		if (groupId) return;
		const handler = (e: Event) => {
			const { groupId: id } = (e as CustomEvent).detail;
			setGroupId(id);
		};
		window.addEventListener('activity-group-ready', handler);
		return () => window.removeEventListener('activity-group-ready', handler);
	}, [groupId]);

	useEffect(() => {
		if (!groupId) return;
		const fetchActivities = async () => {
			setLoading(true);
			const [acts] = await getActivities({
				categoryId: groupId,
				currentPage: 1,
				amountOfActivitiesToFetch: amount,
			});
			setActivities(acts);
			setLoading(false);
		};
		fetchActivities();
	}, [groupId, amount]);

	return { activities, loading };
}
