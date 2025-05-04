export type ArtGroupData = {
	title: string;
	group: string;
	description: string;
	images: string[];
	formLink?: string;
};

export const artsGroups: ArtGroupData[] = [
	{
		title: 'Grupos de Bailes',
		group: 'bailes',
		description:
			'Los Grupos de Bailes de la PUCMM son una plataforma para que los estudiantes expresen su creatividad a través de la danza. Con una variedad de estilos y géneros, estos grupos ofrecen ensayos regulares y presentaciones en eventos universitarios, fomentando la camaradería y el trabajo en equipo entre sus miembros. Los estudiantes tienen la oportunidad de aprender y perfeccionar sus habilidades de baile, mientras disfrutan de la música y la cultura.',
		images: [
			'/images/csti/arte_cultura/bailes/bailes-1.webp',
			'/images/csti/arte_cultura/bailes/bailes-2.webp',
			'/images/csd/arte_cultura/bailes/bailes-2.webp',
			'/images/csd/arte_cultura/bailes/bailes-1.webp',
			'/images/csd/arte_cultura/bailes/bailes-3.webp',
		],
	},
	{
		title: 'Grupo de Teatro',
		group: 'teatro',
		description:
			'El Grupo de Teatro de la PUCMM es un espacio donde los estudiantes pueden explorar su creatividad y desarrollar habilidades en actuación, dirección y producción teatral. A través de ensayos, presentaciones y talleres, los miembros del grupo trabajan juntos para crear obras que reflejan la diversidad cultural y social de la comunidad universitaria.',
		images: [
			'/images/csti/arte_cultura/teatro/teatro-1.webp',
			'/images/csti/arte_cultura/teatro/teatro-2.webp',
			'/images/csd/arte_cultura/teatro/teatro-1.webp',
			'/images/csd/arte_cultura/teatro/teatro-2.webp',
		],
	},
	{
		title: 'Grupo Melody',
		group: 'melody',
		description:
			'El Grupo Melody es un conjunto musical que reúne a estudiantes con pasión por la música. A través de ensayos regulares y presentaciones en eventos universitarios, los miembros del grupo desarrollan sus habilidades musicales y disfrutan de la camaradería que surge al compartir su amor por la música.',
		images: [
			'/images/csti/arte_cultura/melody/melody-1.webp',
			'/images/csti/arte_cultura/melody/melody-3.webp',
			'/images/csti/arte_cultura/melody/melody-4.webp',
			'/images/csti/arte_cultura/melody/melody-5.webp',
			'/images/csti/arte_cultura/melody/melody-6.webp',
			'/images/csti/arte_cultura/melody/melody-7.webp',
		],
	},
	{
		title: 'Grupo Coral',
		group: 'coral',
		description:
			'El Grupo Coral de la PUCMM es un espacio donde los estudiantes pueden unirse para cantar y disfrutar de la música coral. A través de ensayos regulares y presentaciones en eventos universitarios, los miembros del grupo desarrollan sus habilidades vocales y disfrutan de la camaradería que surge al compartir su amor por la música.',
		images: [
			'/images/templates/template-1.jpg',
			'/images/templates/template-1.jpg',
			'/images/templates/template-1.jpg',
		],
	},
	{
		title: 'Tuna Universitaria',
		group: 'tuna',
		description:
			'La Tuna Universitaria es una agrupación musical tradicional que representa a la PUCMM en eventos culturales y festivales. Con su vestimenta característica y su repertorio variado, la Tuna promueve el folclore y la cultura universitaria, brindando a sus miembros una experiencia única de camaradería y diversión.',
		images: ['/images/csti/arte_cultura/tuna/tuna-1.webp'],
	},
	{
		title: 'Danza Contemporánea',
		group: 'danza-contemporanea',
		description:
			'El Grupo de Danza Contemporánea de la PUCMM es un espacio donde los estudiantes pueden explorar su creatividad y desarrollar habilidades en danza contemporánea. A través de ensayos, presentaciones y talleres, los miembros del grupo trabajan juntos para crear coreografías que reflejan la diversidad cultural y social de la comunidad universitaria.',
		images: [
			'/images/templates/template-1.jpg',
			'/images/templates/template-1.jpg',
			'/images/templates/template-1.jpg',
		],
	},
];
