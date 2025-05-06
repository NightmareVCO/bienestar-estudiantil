export enum Campus {
	CSTI_CAMPUS_TAG = 6,
	CSD_CAMPUS_TAG = 7,
}

export const getCampusIdAndPageBySlug = (): {
	campusId: number;
	campus: string;
	currentPage: number;
} => {
	let campusId: number;

	const urlParams = new URLSearchParams(window.location.search);
	const currentPage = +(urlParams.get('pagina') ?? '1');

	const cleanPath = window.location.pathname.replace(/\/$/, '');
	const campus = cleanPath.split('/').pop() ?? '';
	const isCampusValid = campus === 'csti' || campus === 'csd';

	if (!isCampusValid) {
		campusId = Campus.CSTI_CAMPUS_TAG;
	} else {
		campusId =
			campus === 'csti' ? Campus.CSTI_CAMPUS_TAG : Campus.CSD_CAMPUS_TAG;
	}

	return {
		campusId,
		campus,
		currentPage,
	};
};

export const getActivityIdFromUrl = (): {
	id: string | null;
} => {
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get('id');

	return {
		id,
	};
};

export const getGroupSlugFromUrl = (): {
	groupSlug: string | undefined;
} => {
	// Limpiamos la url para evitar problemas con la barra al final
	const cleanPath = window.location.pathname.replace(/\/$/, '');
	const segments = cleanPath.split('/').filter(Boolean);
	const groupSlug = segments.pop();

	return { groupSlug };
};
