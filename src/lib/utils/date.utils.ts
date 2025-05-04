export const parseDate = (date: string) => {
	const d = new Date(date);
	return d.toLocaleDateString('es-ES', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};
