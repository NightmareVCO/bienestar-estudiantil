import { Career } from '@data/career.data';
import { Faculty } from '@data/faculties.data';

export type GroupData = {
	title: string;
	group: string;
	label: string;
	shortDescription: string;
	description: string;
	campus: string;
	campusId: string;
	logo: string;
	mission?: string;
	vision?: string;
	values?: string;
	faculty?: Faculty;
	career?: Career;
	path: string;
	website?: string;
	formLink?: string;
	socialMedia?: {
		instagram?: string;
		facebook?: string;
		twitter?: string;
		tiktok?: string;
		youtube?: string;
		linkedin?: string;
	};
};

export const studentsGroups = [
	{
		title: 'Asociación de Estudiantes de Nutrición y Dietética',
		group: 'adenut-csd',
		label: 'ADENUT - CSD',
		shortDescription:
			'ADENUT es el enlace entre los estudiantes y la universidad, asegurando que sus voces sean escuchadas y sus preocupaciones atendidas.',
		description:
			'<strong>Asociación de Estudiantes de Nutrición y Dietética (ADENUT)</strong>, es el enlace entre los estudiantes y la universidad, asegurando que sus voces sean escuchadas y sus preocupaciones atendidas.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/adenut.webp',
		mission:
			'Promover un ambiente estudiantil inclusivo y participativo donde cada estudiante pueda desarrollar sus habilidades, expresar sus ideas y contribuir al bienestar de la comunidad. Educar al público sobre la importancia de la nutrición y destacar que PUCMM ofrece la carrera de Nutrición y Dietética tanto en Santiago como en Santo Domingo.',
		vision:
			'Ser líderes en la construcción de una comunidad educativa, dinámica y unida, donde la participación activa e innovación mejore continuamente la experiencia estudiantil. Aspiramos a ser una directiva ejemplar que inspire a estudiantes actuales y futuros de Nutrición, creando un legado de compromiso y excelencia.',
		values:
			'Educación: Promovemos el conocimiento y el aprendizaje continuo. Inclusión: Fomentamos un ambiente respetuoso y diverso. Participación: Valoramos la colaboración activa de todos. Compromiso: Buscamos la excelencia en todo lo que hacemos. Innovación: Impulsamos la creatividad y el cambio positivo. Bienestar: Priorizamos el equilibrio integral de los estudiantes. Excelencia: Nos esforzamos por ser un modelo a seguir.',
		faculty: Faculty.FCCS,
		career: Career.NDI,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/adenut-csd',
		socialMedia: { instagram: 'https://www.instagram.com/adenutcsd' },
	},
	{
		title: 'Asociación De Estudiantes de Diseño e Interiorismo',
		group: 'adedin-csti',
		label: 'ADEDIN - CSTI',
		shortDescription:
			'ADEDIN se dedica a promover el desarrollo académico, creativo, profesional y social de los estudiantes de diseño e interiorismo, facilitando el intercambio de ideas y el crecimiento comunitario dentro y fuera de la universidad.',
		description:
			'<strong>Asociación de Diseño e Interiorismo (ADEDIN)</strong>, se dedica a promover el desarrollo académico, creativo, profesional y social de los estudiantes de diseño e interiorismo, facilitando el intercambio de ideas y el crecimiento comunitario dentro y fuera de la universidad.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/adedin.webp',
		mission:
			'Proveer a los estudiantes de oportunidades de aprendizaje práctico y teórico a través de actividades, talleres, conferencias y eventos que promuevan el diseño interior como una disciplina integral.',
		vision:
			'Ser una plataforma líder para estudiantes de diseño interior que fomente la creatividad, el desarrollo profesional y la colaboración dentro de la universidad y con profesionales externos.',
		values:
			'Los valores del Comité ADEDIN se centran en el compromiso, la colaboración, la inclusión y la transparencia. Fomentamos la libre expresión de ideas y el desarrollo de soluciones originales en el diseño interior, buscando transformar espacios con un enfoque creativo. Valoramos el trabajo en equipo y la creación de una comunidad solidaria, donde el intercambio de conocimientos fortalece a cada miembro.',
		faculty: Faculty.FCSH,
		career: Career.DIN,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/adedin-csti',
		socialMedia: { instagram: 'https://www.instagram.com/adedin_pucmm' },
	},
	{
		title: 'Comité de Estudiantes de Economía',
		group: 'ceec-csd',
		label: 'CEEC - CSD',
		shortDescription:
			'CEEC, la incorporación e integración más activa de los estudiantes de Economía con la universidad, como una forma permanente de difusión de conocimientos y técnicas que tengan por objetivo el perfeccionamiento de los procesos de inscripciones, organización y realización de los horarios de clases, entre otros.',
		description:
			'<strong>Comité de Estudiantes de Economía (CEEC)</strong>, la incorporación e integración más activa de los estudiantes de Economía con la universidad, como una forma permanente de difusión de conocimientos y técnicas que tengan por objetivo el perfeccionamiento de los procesos de inscripciones, organización y realización de los horarios de clases, entre otros.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/ceec.webp',
		mission:
			'La misión del Comité de Estudiantes de Economía es fomentar una participación activa y consciente de los estudiantes de economía dentro de la comunidad universitaria, mejorando y facilitando los procesos académicos y administrativos, tales como inscripciones y organización de horarios. Asimismo, nos comprometemos a enriquecer la formación académica y profesional de nuestros estudiantes mediante la realización de eventos académicos, actividades comunitarias y sociales, y la promoción activa de nuestra carrera a través de diversas plataformas y colaboraciones interuniversitarias.',
		vision:
			'Ser reconocidos como un comité líder en la Universidad, que no solo mejora la experiencia académica de los estudiantes de economía, sino que también los integra activamente en la vida universitaria y profesional. Aspiramos a ser un pilar fundamental en el desarrollo de futuros economistas, comprometidos con la excelencia educativa y el impacto social, fomentando un ambiente de colaboración y apoyo mutuo entre estudiantes, profesores y la comunidad en general.',
		values:
			'Cooperación y trabajo en equipo Creatividad Iniciativa Apoyo y enlace',
		faculty: Faculty.FCEA,
		career: Career.ECO,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/ceec-csd',
		socialMedia: {
			instagram: 'https://www.instagram.com/ceecpucmm',
			facebook: 'https://www.facebook.com/share/1MZY1Vqezo/',
			twitter: 'https://x.com/CEEC_PUCMM',
			linkedin:
				'https://do.linkedin.com/in/ceec-pucmm-93a930214?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile',
		},
	},
	// {
	//   title: "Pastoral Juvenil Universitaria - PJU",
	//   group: "pjup-csti",
	//   label: "PJUP - CSTI",
	//   shortDescription: "La Pastoral Juvenil Universitaria (PJU), fundada en 1986, tiene como objetivo complementar la formación académica de los estudiantes de la PUCMM mediante actividades que fomentan el crecimiento espiritual y personal. Está compuesta por Grupos Fijos (Catequesis de Niños, COVC, Grupo Complemento, Evangelización, Ministerio Musical) y Actividades anuales (Campamentos, Retiros, Seminarios, entre otras). Su misión es ofrecer a los estudiantes y egresados la oportunidad de conocer y profundizar su fe, formando jóvenes comprometidos con Dios, la sociedad, la familia y ellos mismos.",
	//   description: "<strong>Pastoral Juvenil Universitaria - PJU</strong>, La Pastoral Juvenil Universitaria (PJU), fundada en 1986, tiene como objetivo complementar la formación académica de los estudiantes de la PUCMM mediante actividades que fomentan el crecimiento espiritual y personal. Está compuesta por Grupos Fijos (Catequesis de Niños, COVC, Grupo Complemento, Evangelización, Ministerio Musical) y Actividades anuales (Campamentos, Retiros, Seminarios, entre otras). Su misión es ofrecer a los estudiantes y egresados la oportunidad de conocer y profundizar su fe, formando jóvenes comprometidos con Dios, la sociedad, la familia y ellos mismos.",
	//   campus: "CSTI - Campus Santiago",
	//   campusId: "csti",
	//   logo: "/images/grupos/pjup-csti.webp",
	//   mission: "Brindar a los estudiantes y egresados de la PUCMM la oportunidad de conocer y/o profundizar la fe. Dando a conocer al Padre con la fuerza del Espíritu Santo, a través de Jesús, de una manera amena y jovial; buscando así, transmitir el humanismo cristiano en la formación de jóvenes comprometidos con Dios, con la sociedad, con la familia y con ellos mismos.",
	//   vision: "Ofrecer un ambiente atractivo que acompaña y contribuye a formar de manera integral –humano y espiritual- a los jóvenes vinculados a la PUCMM. Aportando personas comprometidas con el Evangelio de Jesús que transformen la sociedad por medio del servicio y amor a los demás.",
	//   values: "Amor    Integridad    Servicio    Responsabilidad",
	//   path: "/grupos-estudiantiles/asociaciones-clubes-y-comites/pjup-csti",
	//   socialMedia: { instagram: "https://www.instagram.com/pjupucmm/" },
	// },
	{
		title: 'Comité de Estudiantes de Arquitectura y Diseño de Interiores',
		group: 'cead-csd',
		label: 'CEAD - CSD',
		shortDescription:
			'El CEAD es un espacio dinámico que busca enriquecer la experiencia académica y profesional de los estudiantes. A través de iniciativas, eventos y proyectos, el CEAD promueve un ambiente de aprendizaje colaborativo donde la creatividad y la innovación son pilares fundamentales.  Nuestra labor se enfoca en generar oportunidades que potencien el desarrollo de habilidades, fortaleciendo el vínculo entre estudiantes, docentes y la comunidad. Desde la organización de actividades formativas hasta la gestión de espacios para la experimentación y el intercambio de ideas, trabajamos para inspirar y motivar a quienes forman parte de la Escuela de Arquitectura y Diseño.  El CEAD es más que un comité; es un punto de encuentro para aquellos que buscan trascender a través del diseño y dejar una huella en su entorno.',
		description:
			'<strong>Comite de estudiantes de arquitectura y diseño de interiores (CEAD)</strong>, El Comité de estudiantes de la Escuela de Arquitectura y Diseño (CEAD) es un espacio dinámico que busca enriquecer la experiencia académica y profesional de los estudiantes. A través de iniciativas, eventos y proyectos, el CEAD promueve un ambiente de aprendizaje colaborativo donde la creatividad y la innovación son pilares fundamentales.  Nuestra labor se enfoca en generar oportunidades que potencien el desarrollo de habilidades, fortaleciendo el vínculo entre estudiantes, docentes y la comunidad. Desde la organización de actividades formativas hasta la gestión de espacios para la experimentación y el intercambio de ideas, trabajamos para inspirar y motivar a quienes forman parte de la Escuela de Arquitectura y Diseño.  El CEAD es más que un comité; es un punto de encuentro para aquellos que buscan trascender a través del diseño y dejar una huella en su entorno.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/cead-csd.webp',
		mission:
			'Fomentar un ambiente colaborativo y enriquecedor para los estudiantes y docentes de la Escuela de Arquitectura y Diseño. Trabajamos para promover la creatividad, la excelencia académica y la participación activa en la comunidad, brindando recursos y oportunidades que empoderen a nuestros miembros en su crecimiento profesional y personal.',
		vision:
			'Nuestro objetivo es que el Comité Estudiantil de la Escuela de Arquitectura y Diseño (CEAD) sea reconocido como un referente de inspiración, innovación y excelencia en el campo del diseño arquitectónico. Nos esforzamos por forjar un futuro en el cual nuestros miembros se conviertan en profesionales altamente cualificados y ciudadanos comprometidos, capaces de contribuir de manera positiva a la sociedad a través del diseño y la creatividad.',
		values:
			'Colaboración: Fomentar un ambiente de trabajo en equipo donde se valore la diversidad de ideas, la comunicación abierta y el respeto mutuo entre estudiantes y docentes.  Creatividad: Incentivar la exploración de nuevas ideas, la innovación en el diseño y la búsqueda de soluciones creativas a los desafíos que enfrenta la comunidad. Respeto: Cultivar un ambiente de respeto mutuo, donde se valoren las diferentes perspectivas, opiniones y culturas, y se fomente la inclusión y la diversidad.  Empoderamiento: Brindar a los miembros del CEAD las herramientas, recursos y oportunidades necesarias para desarrollar su potencial profesional y personal, y convertirse en líderes en el campo del diseño arquitectónico.  Profesionalismo: Promover la ética profesional, la responsabilidad y el compromiso con la calidad en todo lo que se hace, tanto dentro como fuera del CEAD.  Participación Activa: Motivar a los estudiantes a involucrarse en la vida de la Escuela de Arquitectura y Diseño, la comunidad universitaria y la sociedad en general, a través de iniciativas y proyectos que generen un impacto positivo.',
		faculty: Faculty.FCSH,
		career: Career.ARQ,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/cead-csd',
		socialMedia: { instagram: 'https://www.instagram.com/cead.pucmm' },
	},
	{
		title: 'Asociación De Estudiantes De Medicina',
		group: 'ademed-csti',
		label: 'ADEMED - CSTI',
		shortDescription:
			'ADEMED busca fomentar la excelencia académica: Organizar eventos educativos, como conferencias, seminarios y talleres, que complementen la formación académica. Brindar apoyo a los estudiantes en sus estudios mediante tutorías, grupos de estudio y recursos educativos.  Promover el bienestar estudiantil: Apoyar la salud mental y el bienestar de los estudiantes mediante actividades recreativas, programas de apoyo psicológico y eventos de relajación. Crear un entorno de apoyo entre los estudiantes, favoreciendo la cooperación sobre la competencia.',
		description:
			'<strong>Asociación De Estudiantes De Medicina (ADEMED)</strong>, Fomentar la excelencia académica: Organizar eventos educativos, como conferencias, seminarios y talleres, que complementen la formación académica. Brindar apoyo a los estudiantes en sus estudios mediante tutorías, grupos de estudio y recursos educativos.  Promover el bienestar estudiantil: Apoyar la salud mental y el bienestar de los estudiantes mediante actividades recreativas, programas de apoyo psicológico y eventos de relajación. Crear un entorno de apoyo entre los estudiantes, favoreciendo la cooperación sobre la competencia.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/ademed.webp',
		mission:
			'Promover el desarrollo académico, profesional y personal de los estudiantes de medicina, ofreciendo espacios de aprendizaje, apoyo y crecimiento. Fomentamos el trabajo en equipo, la ética profesional, la responsabilidad social y el compromiso con la salud comunitaria, creando un ambiente inclusivo y colaborativo que prepare a nuestros miembros para enfrentar los retos del ámbito médico con competencia, empatía y liderazgo.',
		vision:
			'Ser una asociación estudiantil líder que impulse el desarrollo académico, profesional y ético de los futuros médicos, promoviendo la excelencia en la formación médica, el bienestar integral de sus miembros y el compromiso con la comunidad, con el fin de contribuir a la mejora de la salud global y la equidad en la atención sanitaria.',
		values:
			'Excelencia académica: Compromiso con el aprendizaje y la mejora continua. Trabajo en equipo: Fomento de la colaboración y el apoyo mutuo. Ética profesional: Integridad, responsabilidad y respeto en todas las acciones. Compromiso social: Responsabilidad hacia la comunidad y la mejora de la salud pública. Empatía: Cuidado y respeto por el bienestar de los demás. Liderazgo: Desarrollar habilidades de liderazgo para guiar y motivar a otros.',
		faculty: Faculty.FCCS,
		career: Career.MED,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/ademed-csti',
		socialMedia: { instagram: 'https://www.instagram.com/ademedpucmm_csti' },
	},
	{
		title: 'Asociación de Estudiantes de Nutrición',
		group: 'adenut-csti',
		label: 'ADENUT - CSTI',
		shortDescription:
			'ADENUT es una asociación que busca ser un ejemplo para todos los estudiantes y motivarlos a participar de actividades solidarias, crear profesionales éticos y fomentar el trabajo en equipo con una comunidad sana y unida.',
		description:
			'<strong>Asociación de Estudiantes de Nutrición (ADENUT)</strong>, es una asociación que busca ser un ejemplo para todos los estudiantes y motivarlos a participar de actividades solidarias, crear profesionales éticos y fomentar el trabajo en equipo con una comunidad sana y unida.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/adenut.webp',
		mission:
			'Promover el aprendizaje, la práctica ética y el impacto positivo en la comunidad mediante la formación integral de futuros profesionales en nutrición, fomentando la educación, la investigación y el compromiso social para mejorar la salud y el bienestar colectivo.',
		vision:
			'Ser una asociación estudiantil líder y referente en la formación de nutricionistas comprometidos con la excelencia académica, la innovación y el desarrollo de estrategias sostenibles que contribuyan a una mejor calidad de vida y un entorno más saludable.',
		career: Career.NDI,
		faculty: Faculty.FCCS,
		values:
			'Ética: Actuar con responsabilidad, respeto y honestidad en todas nuestras acciones y decisiones. Compromiso Social: Contribuir al bienestar de la comunidad a través de la educación y el servicio. Innovación: Promover nuevas ideas y enfoques en el campo de la nutrición. Trabajo en Equipo: Fomentar la colaboración, la solidaridad y el intercambio de conocimientos.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/adenut-csti',
		socialMedia: { instagram: 'https://www.instagram.com/adenutcsti' },
	},
	{
		title: 'Asociación de Estudiantes de Dirección Empresarial',
		group: 'aede-csti',
		label: 'AEDE - CSTI',
		shortDescription:
			'AEDE brinda al estudiante de Dirección Empresarial, oportunidades para desarrollar el liderazgo, por medio de la realización de diferentes actividades, tanto académicas como recreativas, que motiven a los estudiantes y a la vez promuevan nuestra carrera.  Nuestro objetivo es Promover, fomentar y ampliar los conocimientos del estudiantado de Dirección Empresarial, con la finalidad de desarrollar profesionales aptos y capaces de enfrentar al mundo cambiante de la Administración.  ● Desarrollar el liderazgo en los estudiantes de nuestra carrera.  ● Brindar oportunidades de crecimiento profesional.  ● Promover la carrera, tanto dentro como fuera de la PUCMM.  ● Desarrollar actividades recreativas y otras que fomenten el desarrollo académico de los estudiantes de la carrera de negocios.',
		description:
			'<strong>Asociación de Estudiantes de Dirección Empresarial (AEDE)</strong>, la finalidad de AEDE es brindar al estudiante de Dirección Empresarial, oportunidades para desarrollar el liderazgo, por medio de la realización de diferentes actividades, tanto académicas como recreativas, que motiven a los estudiantes y a la vez promuevan nuestra carrera.  Nuestro objetivo es Promover, fomentar y ampliar los conocimientos del estudiantado de Dirección Empresarial, con la finalidad de desarrollar profesionales aptos y capaces de enfrentar al mundo cambiante de la Administración.  ● Desarrollar el liderazgo en los estudiantes de nuestra carrera.  ● Brindar oportunidades de crecimiento profesional.  ● Promover la carrera, tanto dentro como fuera de la PUCMM.  ● Desarrollar actividades recreativas y otras que fomenten el desarrollo académico de los estudiantes de la carrera de negocios.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/aede.webp',
		mission:
			'Desarrollar las habilidades de liderazgo y a la vez promover la integración de los miembros para lograr el desarrollo académico, personal y profesional de los estudiantes de Dirección Empresarial y Administración de Empresa de la PUCMM STI.',
		vision:
			'Ser una asociación catalizadora que exalte la imagen de la carrera, como emprendedores, competitivos y socialmente responsables.',
		values: 'Equidad, Respeto, Responsabilidad, Excelencia, Liderazgo.',
		faculty: Faculty.FCEA,
		career: Career.DIR,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/aede-csti',
		website: 'linktr.ee/AEDEPUCMM',
		socialMedia: { instagram: 'https://www.instagram.com/aedepucmm' },
	},
	{
		title: 'Asociación de Estudiantes de Terapia Física',
		group: 'adetf-csti',
		label: 'ADETF - CSTI',
		shortDescription:
			'ADETF, ser una asociación de referencia, reconocida por el compromiso y empeño en velar por el avance de la carrera y estudiantes de terapia física, a través de actividades que integren a la comunidad estudiantil.',
		description:
			'<strong>Asociación de estudiantes de terapia física (ADETF)</strong>, ser una asociación de referencia, reconocida por el compromiso y empeño en velar por el avance de la carrera y estudiantes de terapia física, a través de actividades que integren a la comunidad estudiantil.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/adetf.webp',
		mission:
			'Impulsar el reconocimiento de la Terapia Física como una carrera de alto impacto en el ámbito de la salud, destacando su valor académico y profesional a través de la divulgación y una participación activa. Nuestro compromiso es promover el aporte significativo de la rehabilitación, consolidando su rol en el bienestar integral de las personas.',
		vision:
			'Ser una asociación que inspire a nuevas generaciones de terapeutas físicos, guiándolos en el descubrimiento de su vocación y el desarrollo de una pasión por la carrera. Buscamos fortalecer su impacto en la sociedad, demostrando cómo la Terapia Física puede transformar vidas.',
		values:
			'Nuestros valores fundamentales, los cuales guían nuestro accionar, son: Compromiso, Colaboración, Integridad y Responsabilidad.',
		faculty: Faculty.FCCS,
		career: Career.TER,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/adetf-csti',
		website: 'https://linktr.ee/adetf',
		socialMedia: { instagram: 'https://www.instagram.com/adetfpucmm' },
	},
	{
		title: 'Asociación de Estudiantes de Derecho - ADER',
		group: 'ader-csti',
		label: 'ADER - CSTI',
		shortDescription:
			'ADER es una organización estudiantil dedicada a representar, apoyar y fomentar el desarrollo académico, profesional y social de los estudiantes de la carrera de Derecho en la PUCMM. Nuestro enfoque es promover el pensamiento crítico, el liderazgo y la participación activa en temas jurídicos, a través de actividades formativas, debates, concursos y proyectos de impacto en la comunidad universitaria.',
		description:
			'<strong>Asociación de Estudiantes de Derecho (ADER)</strong>, La Asociación de Estudiantes de Derecho (ADER) es una organización estudiantil dedicada a representar, apoyar y fomentar el desarrollo académico, profesional y social de los estudiantes de la carrera de Derecho en la PUCMM. Nuestro enfoque es promover el pensamiento crítico, el liderazgo y la participación activa en temas jurídicos, a través de actividades formativas, debates, concursos y proyectos de impacto en la comunidad universitaria.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/ader.webp',
		mission:
			'Representar y fortalecer la comunidad estudiantil de Derecho en la PUCMM, brindando espacios de formación, debate y crecimiento profesional. Buscamos fomentar el liderazgo, la excelencia académica y el compromiso con la justicia, promoviendo iniciativas que contribuyan al desarrollo integral de nuestros miembros y al impacto positivo en la sociedad.  Además, trabajamos para integrar a todos los estudiantes de Derecho, sin importar su año de carrera, creando un ambiente de unidad y apoyo mutuo. Queremos que ADER sea más que una asociación: una verdadera familia donde cada miembro encuentre respaldo, oportunidades y un sentido de pertenencia dentro de nuestra comunidad universitaria.',
		vision:
			'Nuestra visión es consolidarnos como un referente de excelencia y liderazgo dentro de la comunidad estudiantil de la PUCMM y en el ámbito jurídico nacional. Aspiramos a ser una asociación que impulse el crecimiento académico y profesional de sus miembros, fortaleciendo su formación a través de actividades innovadoras, alianzas estratégicas y una participación activa en el debate jurídico.  Queremos que ADER sea un espacio inclusivo donde cada estudiante de Derecho, sin importar su año de carrera, se sienta parte de una gran familia, encontrando apoyo, inspiración y oportunidades para desarrollar su potencial. A largo plazo, buscamos dejar un legado de compromiso, unidad y transformación en la facultad y en la sociedad.',
		values: 'Unidad, Excelencia, Liderazgo, Compromiso, Inclusión, Ética.',
		faculty: Faculty.FCSH,
		career: Career.DER,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/ader-csti',
		website: 'https://www.aderpucmm.online/',
		socialMedia: { instagram: 'https://www.instagram.com/aderpucmm/' },
	},
	{
		title: 'Asociación de Estudiantes de Educación',
		group: 'aedu-csti',
		label: 'AEDU - CSTI',
		shortDescription:
			'AEDU tiene como propósito representar y apoyar a los futuros docentes, promoviendo su desarrollo académico, profesional y personal. Su enfoque está en la innovación educativa, el liderazgo estudiantil y la mejora de la enseñanza a través de iniciativas colaborativas y espacios de aprendizaje.',
		description:
			'<strong>Asociación de Estudiantes de Educación (AEDU)</strong>, el propósito de la asociación de estudiantes de educación es representar y apoyar a los futuros docentes, promoviendo su desarrollo académico, profesional y personal. Su enfoque está en la innovación educativa, el liderazgo estudiantil y la mejora de la enseñanza a través de iniciativas colaborativas y espacios de aprendizaje.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/aedu.webp',
		mission:
			'Nuestra misión es representar, apoyar y fortalecer la comunidad estudiantil de educación, fomentando el desarrollo académico, profesional y personal de sus miembros. Buscamos generar espacios de aprendizaje, colaboración y liderazgo, promoviendo la excelencia educativa y el compromiso con la sociedad.',
		vision:
			'Nuestra visión es ser una asociación estudiantil referente en la formación de futuros educadores, impulsando iniciativas innovadoras y transformadoras que contribuyan al mejoramiento de la educación y al crecimiento integral de nuestros estudiantes.',
		values: 'Compromiso, Colaboración, Liderazgo, Empatía, Creatividad.',
		faculty: Faculty.FCSH,
		career: Career.EDU,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/aedu-csti',
		website: 'https://linktr.ee/AEDU',
		socialMedia: { instagram: 'https://www.instagram.com/aedu.pucmm' },
	},
	{
		title: 'Comité Estudiantil de Ingeniería Mecatrónica',
		group: 'ceimec-csti',
		label: 'CEIMEC - CSTI',
		shortDescription:
			'CEIMEC es una organización que representa a los estudiantes de la carrera de Ingeniería Mecatrónica, promoviendo su desarrollo académico, profesional y personal; Mas que un comité somos un vinculo entre los alumnos, la facultad y el entorno profesional que nos espera.',
		description:
			'<strong>Comité Estudiantil de Ingeniería Mecatrónica (CEIMEC)</strong>, El Comité Estudiantil de Ingeniería Mecatrónica (CEIMEC) es una organización que representa a los estudiantes de la carrera de Ingeniería Mecatrónica, promoviendo su desarrollo académico, profesional y personal; Mas que un comité somos un vinculo entre los alumnos, la facultad y el entorno profesional que nos espera.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/ceimec.webp',
		mission:
			'Nuestra misión es impulsar el crecimiento de los estudiantes de Ingeniería Mecatrónica a través de iniciativas que promuevan la innovación, el liderazgo y la aplicación práctica del conocimiento en la industria. Buscamos fortalecer la formación académica con certificaciones internacionales, competencias tecnológicas, proyectos colaborativos y actividades que fomenten el desarrollo integral de nuestros miembros.',
		vision:
			'Ser un comité estudiantil reconocido por su impacto en la formación de ingenieros mecatrónicos altamente capacitados, innovadores y preparados para enfrentar los desafíos de la industria. Aspiramos a consolidarnos como un referente dentro y fuera de la universidad, fomentando una comunidad de estudiantes comprometidos con la excelencia, la creatividad y la mejora continua.',
		values: 'Innovación Compromiso, Trabajo en equipo Ética, Responsabilidad.',
		faculty: Faculty.FCEI,
		career: Career.IMA,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/ceimec-csti',
		socialMedia: { instagram: 'https://www.instagram.com/ceimecpucmm' },
	},
	{
		title: 'Club Construyendo Huellas',
		group: 'cch-csd',
		label: 'CCH - CSD',
		shortDescription:
			'CCH tiene como propósito principal de este grupo es marcar una diferencia positiva en la comunidad a través de la implementación de diversas iniciativas de ayuda y servicio. Unidos por el compromiso social, los estudiantes que conforman Construyendo Huellas se unen con el objetivo de brindar apoyo a aquellos sectores de la sociedad que más lo necesitan.',
		description:
			'<strong>Club Construyendo Huellas (CCH)</strong>, el propósito principal de este grupo es marcar una diferencia positiva en la comunidad a través de la implementación de diversas iniciativas de ayuda y servicio. Unidos por el compromiso social, los estudiantes que conforman Construyendo Huellas se unen con el objetivo de brindar apoyo a aquellos sectores de la sociedad que más lo necesitan.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/cch.webp',
		mission:
			'Brindar ayuda de calidad para la promoción y mantenimiento de salud en la población vulnerable y comunidad PUCMM para el mejoramiento de su calidad de vida.',
		vision:
			'Ser un equipo líder en salud y educación integral hacia la comunidad.',
		values: 'Formación integral, Equidad, Respeto, Solidaridad, Empatía.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/cch-csd',
		socialMedia: {
			instagram: 'https://www.instagram.com/construyendohuellascsd',
		},
	},
	{
		title: 'Club de Debate',
		group: 'debate-csd',
		label: 'DEBATE - CSD',
		shortDescription:
			'El Club de Debate, tiene como principal propósito expandir y fortalecer el debate educativo y competitivo en la universidad, siendo la via de preparación y practica de para representantes de la universidad en eventos fuera de ella concernientes al debate competitivo, ya sea en el país o en el exterior.',
		description:
			'<strong>Club de Debate - CSD</strong>, tiene como principal propósito expandir y fortalecer el debate educativo y competitivo en la universidad, siendo la via de preparación y practica de para representantes de la universidad en eventos fuera de ella concernientes al debate competitivo, ya sea en el país o en el exterior.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/debate-csd.webp',
		mission:
			'Tiene como misión servir de ente difusor de ideas y conocimiento, a través de la promoción activa del Debate, sus técnicas y sus diferentes métodos, siendo una plataforma de crecimiento para todos los estudiantes que conformen la matrícula activa de la Pontificia Universidad Católica Madre y Maestra, en su campus Santo Domingo.',
		vision:
			'Ser el principal referente del debate universitario en la República Dominicana, destacándose por la formación de oradores críticos, analíticos y éticamente responsables. Aspiramos a fomentar una cultura de diálogo y argumentación rigurosa que impacte positivamente en la sociedad, preparando a nuestros miembros para liderar y participar en debates a nivel nacional e internacional.',
		values:
			'Excelencia: Nos esforzamos por alcanzar el más alto nivel de argumentación y desarrollo intelectual en cada debate. Pensamiento crítico: Fomentamos el análisis profundo y la capacidad de cuestionar de manera fundamentada. 3. Ética y respeto: Creemos en la importancia del debate como una herramienta de diálogo respetuoso y honesto. Inclusión y diversidad: Valoramos la diversidad de ideas, perspectivas y experiencias como pilares fundamentales del aprendizaje. Trabajo en equipo: Promovemos la colaboración y el apoyo mutuo dentro de nuestra comunidad de debatientes. 6. Liderazgo: Formamos oradores capaces de influir y generar cambios positivos en su entorno.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/debate-csd',
		socialMedia: { instagram: 'https://www.instagram.com/pucmmdebatecsd' },
	},
	{
		title: 'Asosiación de estudiantes de psicología',
		group: 'aepsi-csti',
		label: 'AEPSI - CSTI',
		shortDescription:
			'AEPSI tiene como enfoque es incluir a todo el estudiantado de psicología a formar parte directa o indirectamente de AEPSI.',
		description:
			'<strong>Asosiación de estudiantes de psicología (AEPSI)</strong>, nuestro enfoque es incluir a todo el estudiantado de psicología a formar parte directa o indirectamente de AEPSI.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/aepsi-csti.webp',
		mission:
			'Fomentamos un entorno único, seguro y enriquecedor, diseñado para impulsar el aprendizaje constante, la participación activa y el desarrollo personal de todo el estudiantado, a través de la colaboración, la educación y el compromiso con el servicio.',
		vision:
			'Ser referentes, proactivos y creativos, proporcionando recursos clave para el avance y fortalecimiento del alumnado y la asociación.',
		values: 'Responsabilidad, respeto, empatía, amor, puntualidad.',
		faculty: Faculty.FCSH,
		career: Career.PSI,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/aepsi-csti',
		socialMedia: { instagram: 'https://www.instagram.com/aepsipucmm' },
	},
	{
		title: 'Comité de Ingeniería en Ciencias de la Computación',
		group: 'cicc-csti',
		label: 'CICC - CSTI',
		shortDescription:
			'CICC tiene como proposito fomentar el Desarrollo Técnico: Proveer a los estudiantes oportunidades para participar en proyectos prácticos, hackathones y competencias que fortalezcan sus habilidades técnicas. Promover el Crecimiento Personal: Organizar talleres y charlas que fortalezcan habilidades blandas como la comunicación, el liderazgo y el trabajo en equipo. Crear Espacios de Recreación: Desarrollar actividades recreativas que fortalezcan el compañerismo y reduzcan el estrés académico. Fortalecer la Red de Contactos: Facilitar el contacto con profesionales del sector, egresados y empresas tecnológicas para fomentar la creación de conexiones valiosas. Incentivar el Emprendimiento: Impulsar iniciativas que permitan a los estudiantes crear sus propios proyectos y explorar ideas innovadoras. Apoyar la Inserción Laboral: Ofrecer talleres, mentorías y recursos que preparen a los estudiantes para el mundo profesional.',
		description:
			'<strong>Comité de Ingeniería en Ciencias de la Computación (CICC)</strong>, los propósitos del Comité de Ingeniería en Ciencias de la Computación Fomentar el Desarrollo Técnico: Proveer a los estudiantes oportunidades para participar en proyectos prácticos, hackathones y competencias que fortalezcan sus habilidades técnicas. Promover el Crecimiento Personal: Organizar talleres y charlas que fortalezcan habilidades blandas como la comunicación, el liderazgo y el trabajo en equipo. Crear Espacios de Recreación: Desarrollar actividades recreativas que fortalezcan el compañerismo y reduzcan el estrés académico. Fortalecer la Red de Contactos: Facilitar el contacto con profesionales del sector, egresados y empresas tecnológicas para fomentar la creación de conexiones valiosas. Incentivar el Emprendimiento: Impulsar iniciativas que permitan a los estudiantes crear sus propios proyectos y explorar ideas innovadoras. Apoyar la Inserción Laboral: Ofrecer talleres, mentorías y recursos que preparen a los estudiantes para el mundo profesional.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/cicc.webp',
		mission:
			'Nuestra misión es brindar a los estudiantes de la carrera de ingeniería en ciencias de la computación una plataforma para su crecimiento profesional y personal. Ofreciendo actividades recreativas, proyectos prácticos y talleres para mejorar sus habilidades técnicas y de liderazgo, desarrollando así una red sólida de compañeros de campo.',
		vision:
			'Nuestra misión es brindar a los estudiantes de la carrera de ingeniería en ciencias de la computación una plataforma para su crecimiento profesional y personal. Ofreciendo actividades recreativas, proyectos prácticos y talleres para mejorar sus habilidades técnicas y de liderazgo, desarrollando así una red sólida de compañeros de campo.',
		values:
			'Valores del Comité de Ingeniería en Ciencias de la Computación Innovación: Fomentamos la creatividad y la adopción de nuevas tecnologías para resolver problemas del mundo real. Colaboración: Promovemos el trabajo en equipo y la creación de una red sólida entre estudiantes, docentes y profesionales del sector. Responsabilidad: Actuamos con ética y compromiso en cada uno de nuestros proyectos y actividades. Liderazgo: Impulsamos el desarrollo de habilidades de liderazgo que permitan a nuestros miembros destacar en sus entornos profesionales y académicos. Inclusión y Diversidad: Valoramos y promovemos la participación activa de todos los estudiantes, independientemente de su origen, género o habilidades. Aprendizaje Continuo: Incentivamos la mejora constante mediante la formación académica, técnica y personal. Impacto Social: Buscamos que nuestras acciones contribuyan positivamente a la comunidad y al entorno tecnológico.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/cicc-csti',
		career: Career.ICC,
		faculty: Faculty.FCEI,
		website: 'http://ce-icc.pucmm.edu.do',
		formLink:
			'https://forms.office.com/pages/responsepage.aspx?id=CK8XQOGiqk2RgFs7yO6E-nE-CZA_qmBOsp8LCoWDRAZUODlMMTY2VjNaQzhBOTQyOThVT1g4T01HUi4u&origin=lprLink&route=shorturl',
		socialMedia: {
			instagram: 'https://www.instagram.com/ciccpucmm',
			facebook: 'https://web.facebook.com/ciscpucmm',
			twitter: 'https://x.com/ciccpucmm',
			linkedin: 'https://www.linkedin.com/in/ciccpucmm',
		},
	},
	{
		title: 'Comité de Ingeniería en Ciencias de la Computación',
		group: 'cicc-csd',
		label: 'CICC - CSD',
		shortDescription:
			'CICC tiene como proposito fomentar el Desarrollo Técnico: Proveer a los estudiantes oportunidades para participar en proyectos prácticos, hackathones y competencias que fortalezcan sus habilidades técnicas. Promover el Crecimiento Personal: Organizar talleres y charlas que fortalezcan habilidades blandas como la comunicación, el liderazgo y el trabajo en equipo. Crear Espacios de Recreación: Desarrollar actividades recreativas que fortalezcan el compañerismo y reduzcan el estrés académico. Fortalecer la Red de Contactos: Facilitar el contacto con profesionales del sector, egresados y empresas tecnológicas para fomentar la creación de conexiones valiosas. Incentivar el Emprendimiento: Impulsar iniciativas que permitan a los estudiantes crear sus propios proyectos y explorar ideas innovadoras. Apoyar la Inserción Laboral: Ofrecer talleres, mentorías y recursos que preparen a los estudiantes para el mundo profesional.',
		description:
			'<strong>Comité de Ingeniería en Ciencias de la Computación (CICC)</strong>, los propósitos del Comité de Ingeniería en Ciencias de la Computación Fomentar el Desarrollo Técnico: Proveer a los estudiantes oportunidades para participar en proyectos prácticos, hackathones y competencias que fortalezcan sus habilidades técnicas. Promover el Crecimiento Personal: Organizar talleres y charlas que fortalezcan habilidades blandas como la comunicación, el liderazgo y el trabajo en equipo. Crear Espacios de Recreación: Desarrollar actividades recreativas que fortalezcan el compañerismo y reduzcan el estrés académico. Fortalecer la Red de Contactos: Facilitar el contacto con profesionales del sector, egresados y empresas tecnológicas para fomentar la creación de conexiones valiosas. Incentivar el Emprendimiento: Impulsar iniciativas que permitan a los estudiantes crear sus propios proyectos y explorar ideas innovadoras. Apoyar la Inserción Laboral: Ofrecer talleres, mentorías y recursos que preparen a los estudiantes para el mundo profesional.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/cicc.webp',
		mission:
			'Nuestra misión es brindar a los estudiantes de la carrera de ingeniería en ciencias de la computación una plataforma para su crecimiento profesional y personal. Ofreciendo actividades recreativas, proyectos prácticos y talleres para mejorar sus habilidades técnicas y de liderazgo, desarrollando así una red sólida de compañeros de campo.',
		vision:
			'Nuestra misión es brindar a los estudiantes de la carrera de ingeniería en ciencias de la computación una plataforma para su crecimiento profesional y personal. Ofreciendo actividades recreativas, proyectos prácticos y talleres para mejorar sus habilidades técnicas y de liderazgo, desarrollando así una red sólida de compañeros de campo.',
		values:
			'Valores del Comité de Ingeniería en Ciencias de la Computación Innovación: Fomentamos la creatividad y la adopción de nuevas tecnologías para resolver problemas del mundo real. Colaboración: Promovemos el trabajo en equipo y la creación de una red sólida entre estudiantes, docentes y profesionales del sector. Responsabilidad: Actuamos con ética y compromiso en cada uno de nuestros proyectos y actividades. Liderazgo: Impulsamos el desarrollo de habilidades de liderazgo que permitan a nuestros miembros destacar en sus entornos profesionales y académicos. Inclusión y Diversidad: Valoramos y promovemos la participación activa de todos los estudiantes, independientemente de su origen, género o habilidades. Aprendizaje Continuo: Incentivamos la mejora constante mediante la formación académica, técnica y personal. Impacto Social: Buscamos que nuestras acciones contribuyan positivamente a la comunidad y al entorno tecnológico.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/cicc-csd',
		career: Career.ICC,
		faculty: Faculty.FCEI,
		socialMedia: {
			instagram: 'https://www.instagram.com/ciccsd',
		},
	},
	{
		title: 'Comité de estudiantes de Ingeniería Civil',
		group: 'cic-csti',
		label: 'CIC - CSTI',
		shortDescription:
			'CIC, constituido el 21 de marzo de 2012 en la PUCMM, representa y promueve el desarrollo académico y profesional de los estudiantes de Ingeniería Civil. Con sede en el Centro de Estudiantes en Santiago de los Caballeros, actúa ante las autoridades universitarias, fomenta la dignificación de la carrera y colabora con otras asociaciones para impulsar iniciativas conjuntas.',
		description:
			'<strong>Comité de estudiantes de Ingeniería Civil (CIC)</strong>, El Comité de Estudiantes de Ingeniería Civil (CIC), constituido el 21 de marzo de 2012 en la PUCMM, representa y promueve el desarrollo académico y profesional de los estudiantes de Ingeniería Civil. Con sede en el Centro de Estudiantes en Santiago de los Caballeros, actúa ante las autoridades universitarias, fomenta la dignificación de la carrera y colabora con otras asociaciones para impulsar iniciativas conjuntas.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/cic.webp',
		mission:
			'Aportar al desarrollo integral y personal de los estudiantes de Ingeniería Civil de la Pontificia Universidad Católica Madre y Maestra, concibiendo y realizando actividades que ofrezcan la posibilidad de fomentar y consolidar el conocimiento.',
		vision:
			'Ser una fuente de recursos que provea destrezas y habilidades de liderazgo estratégico de alcance fundamental en el proceso de formación de los estudiantes de Ingeniería Civil y sectores profesionales afines, alcanzando reconocimiento a nivel nacional e internacional como asociación de estudiantes líder, por el grado de excelencia de sus actividades y el compromiso de sus integrantes como constructores del porvenir.',
		values:
			'El Comité de Estudiantes de Ingeniería Civil (CIC) se rige por principios de ética, inclusión y respeto, actuando conforme a los reglamentos universitarios. Promueve un ambiente imparcial, libre de afiliaciones políticas y discriminación, garantizando igualdad de oportunidades para todos sus miembros.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/cic-csti',
		career: Career.IC,
		faculty: Faculty.FCEI,
		socialMedia: { instagram: 'https://www.instagram.com/cicpucmm' },
	},
	{
		title: 'Comité de Estudiantes de Ingeniería Telemática',
		group: 'ceit-csti',
		label: 'CEIT - CSTI',
		shortDescription:
			'El Comité de Estudiantes de Ingeniería Telemática (CEIT) de la Pontificia Universidad Católica Madre y Maestra (PUCMM) es una asociación estudiantil que busca fortalecer el desarrollo académico, profesional y social de los estudiantes de la carrera. Su enfoque principal es representar a la comunidad estudiantil ante las autoridades académicas, facilitar oportunidades de crecimiento y crear un espacio de integración donde los futuros ingenieros en telemática puedan explorar nuevas posibilidades dentro de su campo.',
		description:
			'<strong>Comité de Estudiantes de Ingeniería Telemática (CEIT)</strong>, es una asociación estudiantil que busca fortalecer el desarrollo académico, profesional y social de los estudiantes de la carrera. Su enfoque principal es representar a la comunidad estudiantil ante las autoridades académicas, facilitar oportunidades de crecimiento y crear un espacio de integración donde los futuros ingenieros en telemática puedan explorar nuevas posibilidades dentro de su campo.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/ceit.webp',
		mission:
			'El CEIT tiene como propósito fundamental impulsar el crecimiento integral de los estudiantes de Ingeniería Telemática, brindándoles apoyo en su formación académica, orientación sobre oportunidades en el ámbito profesional y fomentando su participación en eventos que fortalezcan su conocimiento y habilidades. Además, busca ser un puente entre los estudiantes y el sector académico, administrativo y empresarial, asegurando que los futuros ingenieros cuenten con herramientas y experiencias enriquecedoras para su desarrollo.',
		vision:
			'El CEIT aspira a consolidarse como un referente dentro y fuera de la universidad, impactando positivamente en la vida de los estudiantes y en la proyección de la carrera de Ingeniería Telemática. A través de iniciativas innovadoras, eventos de alto valor educativo y una comunidad activa y comprometida, el comité busca fortalecer el reconocimiento de la carrera, fomentando la excelencia académica y el liderazgo estudiantil.',
		values:
			'El CEIT se rige por los siguientes principios fundamentales:  Ética y Responsabilidad: Actuar con integridad, transparencia y compromiso en cada una de nuestras iniciativas.  Innovación y Desarrollo: Explorar nuevas oportunidades y fomentar el aprendizaje continuo en el campo de la Ingeniería Telemática.  Compromiso y Representación: Ser la voz de los estudiantes en los espacios donde se toman decisiones que impactan su vida académica y profesional.  Excelencia Académica: Promover actividades que fortalezcan los conocimientos técnicos y las habilidades prácticas de nuestros estudiantes.',
		faculty: Faculty.FCEI,
		career: Career.ITT,
		website: 'https://ce-itt.pucmm.edu.do/',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/ceit-csti',
		socialMedia: {
			instagram: 'https://www.instagram.com/ceit_pucmm/',
			linkedin:
				'https://www.linkedin.com/company/comit%C3%A9-de-estudiantes-de-ingenier%C3%ADa-telem%C3%A1tica-ceit/?trk=public_profile_experience-item_profile-section-card_subtitle-click&originalSubdomain=do',
		},
	},
	{
		title: 'Comité de Estudiantes de Ingeniería Industrial y de Sistemas',
		group: 'ceiis-csd',
		label: 'CEIIS - CSD',
		shortDescription:
			'El CEISS vela por los intereses estudiantiles, promoviendo su desarrollo académico y profesional mediante la representación ante las autoridades universitarias y la organización de actividades que impulsen su crecimiento.  Representación estudiantil, crecimiento académico, fortalecimiento profesional y vinculación con otras asociaciones y autoridades universitarias.',
		description:
			'<strong>Comité de Estudiantes de Ingeniería Industrial y de Sistemas (CEIIS)</strong>, vela por los intereses estudiantiles, promoviendo su desarrollo académico y profesional mediante la representación ante las autoridades universitarias y la organización de actividades que impulsen su crecimiento.  Representación estudiantil, crecimiento académico, fortalecimiento profesional y vinculación con otras asociaciones y autoridades universitarias.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/ceiis.webp',
		mission:
			'Representar y apoyar a los estudiantes de Ingeniería Industrial y de Sistemas, promoviendo su desarrollo académico, profesional e intelectual dentro del esquema universitario, asegurando su integración y participación en actividades que fortalezcan su formación.',
		vision:
			'Ser una asociación estudiantil reconocida por su compromiso con el crecimiento académico y profesional de sus miembros, fomentando un ambiente de disciplina, liderazgo y colaboración tanto dentro como fuera de la universidad.',
		values:
			'Compromiso: Representar y apoyar activamente a los estudiantes en su desarrollo académico y profesional.  Disciplina: Fomentar el respeto, la responsabilidad y el cumplimiento de las normas dentro de la comunidad estudiantil.  Liderazgo: Impulsar el crecimiento personal y profesional de los estudiantes a través de la toma de decisiones y la gestión de iniciativas.  Colaboración: Trabajar en equipo con estudiantes, facultades y otras asociaciones para fortalecer la comunidad académica.  Innovación: Promover nuevas ideas y estrategias que contribuyan a la mejora continua del aprendizaje y la vida universitaria.  Representatividad: Actuar en beneficio de los estudiantes, velando por sus intereses y necesidades ante las instancias correspondientes.  Excelencia: Fomentar el alto desempeño académico y profesional como base para el desarrollo de los futuros ingenieros industriales y de sistemas.',
		faculty: Faculty.FCEI,
		career: Career.IIS,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/ceeis-csd',
		socialMedia: { instagram: 'https://www.instagram.com/ceiispucmmcsd' },
	},
	{
		title: 'Comité de Estudiantes de Ingeniería Industrial y de Sistemas',
		group: 'ceiis-csti',
		label: 'CEIIS - CSTI',
		shortDescription:
			'El CEIIS es una organización sin fines de lucro que busca ser complemento de la experiencia universitaria de los estudiantes de la carrera. El enfoque es hacer actividades por y para los estudiantes, para que conozcan y se enamoren de su carrera.',
		description:
			'<strong>Comité de Estudiantes de Ingeniería Industrial y de Sistemas (CEIIS)</strong>, es una organización sin fines de lucro que busca ser complemento de la experiencia universitaria de los estudiantes de la carrera. El enfoque es hacer actividades por y para los estudiantes, para que conozcan y se enamoren de su carrera.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/ceiis.webp',
		mission:
			'Brindar al estudiantado una experiencia que apoye los conocimientos impartidos en las aulas y darles un espacio para networking. De igual manera, ser su apoyo y representación ante la escuela de la carrera.',
		vision:
			'Buscamos ser una organización que inspire y motive a nuestros estudiantes a pensar fuera de la caja y descubrir todas las posibles aplicaciones de su carrera, denotando que esta no tiene límites.',
		values: 'Responsabilidad, disciplina, compromiso, entrega, honestidad.',
		faculty: Faculty.FCEI,
		career: Career.IIS,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/ceiis-csti',
		socialMedia: { instagram: 'https://www.instagram.com/ceiispucmmsti/' },
	},
	{
		title: 'Club de Innovación y Emprendimiento',
		group: 'ciep-csd',
		label: 'CIEP - CSD',
		shortDescription:
			'CIE es un espacio donde estudiantes apasionados por la creatividad, la tecnología y los negocios se reúnen para desarrollar ideas innovadoras y fomentar el espíritu emprendedor. A través de eventos, talleres y proyectos colaborativos, el club busca brindar herramientas y oportunidades para que sus miembros conviertan sus ideas en soluciones reales y sostenibles.',
		description:
			'<strong>Club de Innovación y Emprendimiento (CIEP)</strong>, El Club de Innovación y Emprendimiento (CIE) es un espacio donde estudiantes apasionados por la creatividad, la tecnología y los negocios se reúnen para desarrollar ideas innovadoras y fomentar el espíritu emprendedor. A través de eventos, talleres y proyectos colaborativos, el club busca brindar herramientas y oportunidades para que sus miembros conviertan sus ideas en soluciones reales y sostenibles.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/ciep.webp',
		mission:
			'Impulsar el talento y la creatividad de los estudiantes mediante el desarrollo de proyectos innovadores y el fomento del emprendimiento, proporcionando conocimientos, redes de contacto y recursos que les permitan transformar ideas en iniciativas exitosas.',
		vision:
			'Ser el principal referente universitario en innovación y emprendimiento, creando un ecosistema dinámico donde los estudiantes puedan desarrollar soluciones de impacto, conectar con expertos y generar oportunidades que contribuyan al desarrollo económico y social.',
		values:
			'Creatividad: Fomentamos el pensamiento original y la generación de ideas innovadoras. Colaboración: Creemos en el trabajo en equipo y en la construcción de redes de apoyo. Liderazgo: Promovemos el desarrollo de habilidades de liderazgo para generar impacto. Resiliencia: Afrontamos desafíos con determinación y aprendemos del fracaso. Ética: Actuamos con responsabilidad, transparencia y compromiso social. Aprendizaje continuo: Nos adaptamos a los cambios y buscamos siempre mejorar.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/ciep-csd',
		socialMedia: { instagram: 'https://www.instagram.com/ciepucmm' },
	},
	{
		title: 'Asociación de Estudiantes de Medicina',
		group: 'ademed-csd',
		label: 'ADEMED - CSD',
		shortDescription:
			'ADEMED tiene como proposito colaborar en la formación médica continua de los futuros profesionales médicos, fundamentada en principios éticos, el desarrollo de habilidades de liderazgo, la investigación científica y el compromiso con el servicio a la comunidad. Su enfoque principal es promover el desarrollo integral de los estudiantes de la Escuela de Medicina a través de actividades extracurriculares, culturales, deportivas y de integración, así como fortalecer la comunicación y colaboración entre los estudiantes y la institución.',
		description:
			'<strong>Asociación de Estudiantes de Medicina - ADEMED</strong>, el propósito de la Asociación de Estudiantes de Medicina (ADEMED) es colaborar en la formación médica continua de los futuros profesionales médicos, fundamentada en principios éticos, el desarrollo de habilidades de liderazgo, la investigación científica y el compromiso con el servicio a la comunidad. Su enfoque principal es promover el desarrollo integral de los estudiantes de la Escuela de Medicina a través de actividades extracurriculares, culturales, deportivas y de integración, así como fortalecer la comunicación y colaboración entre los estudiantes y la institución.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/ademed.webp',
		mission:
			'Colaborar en la formación médica continua de profesionales médicos, fundamentada en sólidos principios éticos, el desarrollo de habilidades de liderazgo, la investigación científica en el ámbito de la salud y el compromiso con el servicio a la comunidad.',
		vision:
			'Ser referentes en la construcción de un entorno colaborativo y de respeto para los estudiantes, trabajando como enlace con la Escuela de Medicina para la formación de líderes éticos comprometidos con la investigación y la comunidad.',
		values:
			'Los valores de ADEMED están en consonancia con los valores de la Escuela de Medicina, la Facultad de Ciencias de la Salud y los de la Pontificia Universidad Católica Madre y Maestra. Los valores específicos mencionados son:  Servicio Innovación Trabajo en equipo Respeto Integridad',
		faculty: Faculty.FCCS,
		career: Career.MED,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/ademed-csd',
		socialMedia: {
			instagram: 'https://www.instagram.com/ademedpucmm_csd/',
		},
	},
	// {
	// 	title: 'Asociación de Estudiantes de Filosofía y Ciencias Sociales',
	// 	group: 'adefilcs-csti',
	// 	label: 'ADEFILCS - CSTI',
	// 	shortDescription:
	// 		'La Asociación de Estudiantes de Filosofía y Ciencias Sociales es una organización estudiantil nueva que promueve el desarrollo crítico, filosófico y social de sus miembros, así como también busca fomentar estas cualidades dentro de la comunidad en el Campus.  Esta asociación posee una estructura mixta integrada tanto por estudiantes de la carrera de Filosofía como de la carrera de Ciencias Sociales Orientada a la Educación Secundaria. En este sentido, somos la imagen y representación de sus ideales y proyectos.',
	// 	description:
	// 		'<strong>Asociación de Estudiantes de Filosofía y Ciencias Sociales (ADEFILCS)</strong>, La Asociación de Estudiantes de Filosofía y Ciencias Sociales es una organización estudiantil nueva que promueve el desarrollo crítico, filosófico y social de sus miembros, así como también busca fomentar estas cualidades dentro de la comunidad en el Campus.  Esta asociación posee una estructura mixta integrada tanto por estudiantes de la carrera de Filosofía como de la carrera de Ciencias Sociales Orientada a la Educación Secundaria. En este sentido, somos la imagen y representación de sus ideales y proyectos.',
	// 	campus: 'CSTI - Campus Santiago',
	// 	campusId: 'csti',
	// 	logo: '/images/grupos/adefilcs.webp',
	// 	mission:
	// 		'Representar los proyectos, situaciones e ideales de los estudiantes de las carreras de Filosofía y Ciencias Sociales con el fin de fomentar un espacio abierto al estudio, la discusión y el intercambio de ideas, creando un entorno de aprendizaje colaborativo y crítico que promueva el desarrollo intelectual, la responsabilidad social y la ciudadanía activa desde los principios éticos, humanísticos y cristianos propios de la universidad.',
	// 	vision:
	// 		'Ser una asociación reconocida por su vibrante dinamismo e innovación en su trabajo por fomentar el pensamiento crítico, la colaboración interdisciplinaria y el compromiso social entre los estudiantes.',
	// 	values:
	// 		'•\tÉtica humanística •\tLiderazgo •\tRespeto •\tComunicación •\tPensamiento crítico •\tServicio •\tResponsabilidad',
	// 	faculty: Faculty.FCSH,
	// 	career: Career.FIL,
	// 	path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/adefilcs-csti',
	// 	socialMedia: {},
	// },
	{
		title: 'Comité de Estudiantes de Dirección Empresarial y Administración',
		group: 'cedea-csd',
		label: 'CEDEA - CSD',
		shortDescription:
			'CEDEA tiene como propósito empoderar a los estudiantes de Dirección Empresarial y Administración de Empresas, proporcionándoles recursos y oportunidades de crecimiento profesional. Su enfoque está en la representación estudiantil, la organización de eventos con líderes del sector, la mentoría y la creación de un entorno de apoyo y colaboración que impulse su desarrollo académico y profesional.',
		description:
			'<strong>Comité de Estudiantes de Dirección Empresarial y Administración (CEDEA)</strong>, tiene como propósito empoderar a los estudiantes de Dirección Empresarial y Administración de Empresas, proporcionándoles recursos y oportunidades de crecimiento profesional. Su enfoque está en la representación estudiantil, la organización de eventos con líderes del sector, la mentoría y la creación de un entorno de apoyo y colaboración que impulse su desarrollo académico y profesional.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/cedea.webp',
		mission:
			'Nuestra misión es transformar la experiencia académica de los estudiantes de Dirección  Empresarial y Administración de Empresas, frente a la Pontificia Universidad Católica  Madre y Maestra, Campus Santo Domingo, al proporcionarles acceso a recursos  excepcionales y oportunidades de crecimiento profesional. Nos dedicamos a ser un canal  efectivo para expresar y resolver inquietudes y quejas estudiantiles, creando un entorno de  apoyo y colaboración. A través de la organización de eventos con líderes y profesionales  de renombre, y la implementación de programas de mentoría, capacitamos a nuestros  miembros para sobresalir en sus futuras carrera.',
		vision:
			'Nuestra visión es empoderar a los estudiantes para que se conviertan en líderes  comprometidos y conscientes, capaces de generar un impacto positivo en el mundo  empresarial y en la sociedad. Aspiramos a ser un comité estudiantil que inspire y  transforme. Queremos ser una presencia positiva y activa en la universidad, fomentando  una comunidad donde cada estudiante se sienta escuchado, apoyado y motivado a alcanzar  su máximo potencial.',
		values:
			'Valores del CEDEA: Liderazgo Transformador Promovemos el liderazgo basado en la ética, la innovación y el compromiso social, inspirando a los estudiantes a ser agentes de cambio en el mundo empresarial y en la sociedad.  Compromiso y Responsabilidad Nos dedicamos a representar y apoyar a los estudiantes con transparencia y responsabilidad, asegurando que sus necesidades e inquietudes sean escuchadas y atendidas.  Colaboración y Comunidad Fomentamos un ambiente de trabajo en equipo y apoyo mutuo, donde cada estudiante se sienta valorado y motivado a contribuir con sus ideas y talentos.  Excelencia y Desarrollo Profesional Buscamos proporcionar oportunidades de aprendizaje y crecimiento a través de eventos y experiencias que fortalezcan las habilidades y conocimientos de nuestros miembros.  Innovación y Adaptabilidad Promovemos una mentalidad abierta al cambio y a la mejora continua, explorando nuevas formas de enriquecer la experiencia académica y profesional de los estudiantes.  Inclusión y Escucha Activa Valoramos la diversidad de perspectivas y nos aseguramos de que cada estudiante tenga una voz dentro del comité, creando un espacio donde todos se sientan parte de la comunidad.  Impacto Positivo y Ética Empresarial Nos esforzamos por generar un impacto positivo en la universidad y en la sociedad, promoviendo prácticas empresariales responsables y sostenibles.',
		faculty: Faculty.FCEA,
		career: Career.DIR,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/cedea-csd',
		socialMedia: { instagram: 'https://www.instagram.com/cedeapucmm/' },
	},
	{
		title: 'Comité de Estudiantes de Gestión Financiera y Auditoría',
		group: 'cegfa-csti',
		label: 'CEGFA - CSTI',
		shortDescription:
			'CEGFA tiene como enfoque es impulsar nuestro comité a estar más presente en la comunidad universitaria',
		description:
			'<strong>Comité de Estudiantes de Gestión Financiera y Auditoría (CEGFA)</strong>, tiene como enfoque es impulsar nuestro comité a estar más presente en la comunidad universitaria',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/cegfa.webp',
		mission:
			'Potenciar el comité de Gestión Financiera y Auditoría como un espacio activo y relevante para los estudiantes, ofreciendo oportunidades de desarrollo académico, profesional y personal. A través de iniciativas innovadoras y un compromiso constante, buscamos transformar la experiencia estudiantil, fortalecer la comunidad de nuestra carrera y generar un impacto duradero dentro y fuera de la universidad.',
		vision:
			'Ser un comité reconocido por su transformación y legado, convirtiéndonos en un pilar clave para los estudiantes de gestión. Aspiramos a ser un equipo activo, influyente y comprometido con el desarrollo de nuestra carrera, impulsando iniciativas que marquen una diferencia y dejando una huella duradera en la universidad.',
		values:
			'Liderazgo, Compromiso, Visibilidad, Trabajo en equipo, Impacto positivo.',
		faculty: Faculty.FCEA,
		career: Career.GFA,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/cegfa-csti',
		socialMedia: { instagram: 'https://www.instagram.com/cegfapucmm' },
	},
	{
		title: 'Club de Ecología',
		group: 'ecopucmm-csti',
		label: 'ECOPUCMM - CSTI',
		shortDescription:
			'ECOPUCMM es un club estudiantil de la Pontificia Universidad Católica Madre y Maestra (PUCMM) dedicado a la promoción de la conciencia ambiental y la sostenibilidad. A través de actividades educativas, talleres y proyectos ecológicos, el club busca fomentar el respeto por el medio ambiente y la implementación de prácticas sostenibles dentro y fuera de la universidad. Además, proporciona un espacio de socialización y aprendizaje para estudiantes interesados en la ecología y el cambio climático.',
		description:
			'<strong>Club de Ecología (ECOPUCMM)</strong>, ECOPUCMM es un club estudiantil de la Pontificia Universidad Católica Madre y Maestra (PUCMM) dedicado a la promoción de la conciencia ambiental y la sostenibilidad. A través de actividades educativas, talleres y proyectos ecológicos, el club busca fomentar el respeto por el medio ambiente y la implementación de prácticas sostenibles dentro y fuera de la universidad. Además, proporciona un espacio de socialización y aprendizaje para estudiantes interesados en la ecología y el cambio climático.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/ecopucmm.webp',
		mission:
			'Promover ideas y actividades sobre la protección y cuidado del medio ambiente, fomentando prácticas sostenibles y formando individuos conscientes y críticos respecto a los desafíos ambientales.',
		vision:
			'Ser un referente dentro de la PUCMM y en la comunidad universitaria como un club comprometido con la sostenibilidad y la educación ambiental, impulsando acciones que generen un impacto positivo en el entorno.',
		values:
			'Sostenibilidad Responsabilidad ambiental Educación y concienciación Inclusión y participación Compromiso con la comunidad Ética y respeto',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/ecopucmm-csti',
		website: 'https://linktr.ee/ecopucmm',
		socialMedia: {
			instagram: 'https://www.instagram.com/ecopucmm',
			twitter: 'https://x.com/ecopucmmsti',
		},
	},
	{
		title: 'American Medical Student Association',
		group: 'amsa-csd',
		label: 'AMSA - CSD',
		shortDescription:
			'AMSa tiene como principal objetivo es impulsar el liderazgo, la equidad en salud y la acción social, formando líderes capaces de generar cambios y eliminar las barreras que dificultan el acceso equitativo a la atención médica. Además, buscamos complementar la formación académica más allá del currículo de las escuelas de medicina, fomentando el desarrollo en áreas como investigación, crecimiento personal, empatía y compromiso con los pacientes, entre otras.',
		description:
			'<strong>American Medical Student Association (AMSA)</strong>, nuestro principal objetivo es impulsar el liderazgo, la equidad en salud y la acción social, formando líderes capaces de generar cambios y eliminar las barreras que dificultan el acceso equitativo a la atención médica. Además, buscamos complementar la formación académica más allá del currículo de las escuelas de medicina, fomentando el desarrollo en áreas como investigación, crecimiento personal, empatía y compromiso con los pacientes, entre otras.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/amsa.webp',
		mission:
			'Empoderar a los estudiantes de medicina de la PUCMM para que se conviertan en líderes que impulsen la equidad en salud y el cambio social. Buscamos complementar su formación con experiencias en liderazgo, investigación y compromiso con la comunidad.',
		vision:
			'Ser un capítulo líder en la formación de médicos comprometidos con la transformación del sistema de salud a nivel local, promoviendo un acceso más justo y equitativo a la atención médica.',
		values: 'Servicio, Innovación, Trabajo en equipo, Respeto, Integridad.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/amsapcap-csd',
		socialMedia: { instagram: 'https://www.instagram.com/amsapucmm' },
	},
	{
		title: 'PUCMM Muners Association',
		group: 'pucmunar-csti',
		label: 'PUCMUNAR - CSTI',
		shortDescription:
			'PUCMUNAR es una asociación estudiantil que crea y gestiona simulaciones de organismos internacionales en el entorno universitario y promueve los Objetivos de Desarrollo Sostenible.',
		description:
			'<strong>PUCMM Muners Association (PUCMUNAR)</strong>, somos una asociación estudiantil que crea y gestiona simulaciones de organismos internacionales en el entorno universitario y promueve los Objetivos de Desarrollo Sostenible.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/pucmunar.webp',
		mission:
			'Fomentar una visión global en la juventud a través de la organización y gestión de Modelos de Naciones Unidas. Promovemos el liderazgo, el diálogo, la negociación y la cultura de paz, impulsando el aprendizaje sobre relaciones internacionales y los Objetivos de Desarrollo Sostenible.   Nuestro compromiso es brindar a los estudiantes herramientas y experiencias que potencien sus habilidades diplomáticas, oratorias y de resolución de conflictos, contribuyendo a la formación de ciudadanos comprometidos con la sociedad y el mundo.',
		vision:
			'Ser la asociación universitaria líder en Modelos de Naciones Unidas a nivel nacional e internacional, reconocida por su excelencia en la organización de simulaciones, la formación de jóvenes líderes y la promoción de los valores de tolerancia, cooperación y sostenibilidad.   Aspiramos a consolidarnos como un espacio de referencia para el desarrollo académico y profesional de los estudiantes, fortaleciendo vínculos con instituciones globales y fomentando una comunidad universitaria comprometida con el cambio positivo en el mundo.',
		values:
			'Liderazgo, Compromiso, Excelencia académica, Compromiso social, Tolerancia, Respeto.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/pucmunar-csti',
		website: 'https://linktr.ee/pucmunar',
		socialMedia: { instagram: 'https://www.instagram.com/pucmunar' },
	},
	{
		title: 'Asociación de Estudiantes de Marketing',
		group: 'asem-csti',
		label: 'ASEM - CSTI',
		shortDescription:
			'ASEM es una organización estudiantil de la PUCMM que busca fomentar el desarrollo académico, profesional y personal de los estudiantes de Marketing. A través de actividades, talleres y eventos, promueve la innovación, el liderazgo y el networking, conectando a sus miembros con el mundo empresarial y fortaleciendo su formación en el área. Además, trabaja en la creación de oportunidades que permitan a los estudiantes potenciar sus habilidades y prepararse para el mercado laboral, siempre alineándose con los valores de la universidad y el compromiso con la excelencia.',
		description:
			'<strong>Asociación de Estudiantes de Marketing - ASEM</strong>, ASEM (Asociación de Estudiantes de Marketing) es una organización estudiantil de la PUCMM que busca fomentar el desarrollo académico, profesional y personal de los estudiantes de Marketing. A través de actividades, talleres y eventos, promueve la innovación, el liderazgo y el networking, conectando a sus miembros con el mundo empresarial y fortaleciendo su formación en el área. Además, trabaja en la creación de oportunidades que permitan a los estudiantes potenciar sus habilidades y prepararse para el mercado laboral, siempre alineándose con los valores de la universidad y el compromiso con la excelencia.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/asem.webp',
		mission:
			'Fomentar la unión estudiantil y el desarrollo académico, profesional y personal de los estudiantes de Marketing de la PUCMM Santiago, conectando la innovación con los valores católicos de la Universidad.',
		vision:
			'Ser la asociación de estudiantes líder para la PUCMM, reconocida por su impacto en la formación de profesionales entusiastas, creativos, innovadores y responsables',
		values:
			'Innovación: Nos mantenemos a la vanguardia buscando nuevas ideas y estrategias para el crecimiento de nuestros miembros y la comunidad. Compromiso: Actuamos con el corazón destacando siempre nuestra responsabilidad y pasión por el Marketing. Liderazgo: Generamos motivación en los estudiantes para ser agentes de cambio. Creatividad: Diseñamos experiencias atractivas, con enfoques originales, generando contenido que conecte con los estudiantes. Solidaridad: Nos caracterizamos por la empatía, el apoyo mutuo y nuestro compromiso con el bienestar de cada miembro y estudiante.',
		faculty: Faculty.FCEA,
		career: Career.MKT,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/asem-csti',
		socialMedia: { instagram: 'https://www.instagram.com/asempucmm' },
	},
	{
		title: 'Comité de Estudiantes de Lengua & Literatura',
		group: 'celyl-csd',
		label: 'CELYL - CSD',
		shortDescription:
			'CELYL Procura el desarrollo académico, emocional y social de los estudiantes relacionados tanto con los contenidos curriculares como con las actividades extracurriculares, atendiendo en igual manera, al bienestar estudiantil con relación a las necesidades de infraestructura y servicios brindados por la universidad por medio de la Escuela de Lenguas.',
		description:
			'<strong>Comité de Estudiantes de Lengua y Literatura (CELYL)</strong>, CELYL Procurar el desarrollo académico, emocional y social de los estudiantes relacionados tanto con los contenidos curriculares como con las actividades extracurriculares, atendiendo en igual manera, al bienestar estudiantil con relación a las necesidades de infraestructura y servicios brindados por la universidad por medio de la Escuela de Lenguas.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/celyl.webp',
		mission:
			'La misión del Comité de Estudiantes de Lengua y Literatura, es motivar a través de la Escuela de Lenguas, actividades universitarias que impulsen el desarrollo académico y profesional de los estudiantes de la carrera de Lengua Española y Literatura, fomentando así la excelencia académica.',
		vision:
			'La visión del Comité de Estudiantes de Lengua y Literatura, es ser el ente mediador entre los estudiantes y la Escuela de Lenguas, siendo un recurso integral que fomente, oriente y accione el bienestar del estudiantado en su experiencia universitaria.',
		values:
			'Los valores que sustentan el labor del Comité de Estudiantes de Lengua y Literatura, son: la verdad, la ética, la honestidad, la equidad, la responsabilidad, el servicio, la solidaridad, la perseverancia y el optimismo.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/celyl-csd',
		socialMedia: { instagram: 'https://www.instagram.com/celylpucmm' },
	},
	{
		title: 'Medlife',
		group: 'medlife-csti',
		label: 'Medlife - CSTI',
		shortDescription:
			'MedLife es empoderar a comunidades de bajos recursos mediante el acceso equitativo a la salud, la educación y una vivienda segura. Su enfoque se basa en un modelo sostenible que combina atención médica, desarrollo comunitario y educación, con la participación activa de voluntarios y profesionales de la salud junto a líderes comunitarios para garantizar un impacto sostenible y adaptado a las necesidades locales.',
		description:
			'<strong>Medlife</strong>, tiene como propósito empoderar a comunidades de bajos recursos mediante el acceso equitativo a la salud, la educación y una vivienda segura. Su enfoque se basa en un modelo sostenible que combina atención médica, desarrollo comunitario y educación, con la participación activa de voluntarios y profesionales de la salud junto a líderes comunitarios para garantizar un impacto sostenible y adaptado a las necesidades locales.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/medlife.webp',
		mission:
			'Nuestra misión es construir un movimiento global que empodere a los más vulnerables en su lucha por el acceso equitativo a la salud, la educación y un hogar seguro.',
		vision:
			'Nuestras visión es un mundo libre de las restricciones de la pobreza logrado a través del desarrollo sostenible.',
		values: 'Equidad Compromiso Colaboración Servicio Unidad',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/medlife-csti',
		socialMedia: { instagram: 'https://www.instagram.com/medlife_pucmmsti' },
	},
	{
		title: 'Club de Ideas Políticas',
		group: 'cip-csd',
		label: 'CIP - CSD',
		shortDescription:
			'CIP tiene como propósito principal fomentar el análisis y debate sobre temas políticos y sociales actuales, promoviendo la participación activa de los estudiantes en la discusión de políticas públicas, el liderazgo y la toma de decisiones.',
		description:
			'<strong>Club de Ideas Políticas (CIP)</strong>, tiene como propósito principal fomentar el análisis y debate sobre temas políticos y sociales actuales, promoviendo la participación activa de los estudiantes en la discusión de políticas públicas, el liderazgo y la toma de decisiones.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/cip-csd.webp',
		mission:
			'A través de actividades, conferencias y encuentros con expertos, el CIP busca desarrollar una cultura de pensamiento crítico y democrático entre los estudiantes, preparándolos para enfrentar los desafíos políticos del futuro con una visión informada y responsable.',
		vision: 'Como un espacio de pensamiento politico reconocido a todo nivel.',
		values:
			'Compromiso con la democracia: Fomentar el respeto y la promoción de los valores democráticos, el pluralismo y la participación ciudadana activa.  Pensamiento crítico: Desarrollar la capacidad de analizar, reflexionar y cuestionar de manera constructiva sobre los temas políticos y sociales, promoviendo el debate informado.  Responsabilidad social: Impulsar el compromiso con la mejora de la sociedad, considerando el bienestar colectivo en la toma de decisiones políticas.  Inclusión y respeto: Fomentar la diversidad de ideas, perspectivas y creencias, creando un ambiente de respeto y equidad entre los miembros del grupo.  Ética y transparencia: Promover la honestidad, integridad y transparencia en todas las actividades y discusiones dentro del grupo.  Liderazgo comprometido: Formar futuros líderes responsables, comprometidos con el desarrollo sostenible y la justicia social, a través de la educación política y el activismo.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/cip-csd',
		website: 'https://linktr.ee/cippucmm',
		socialMedia: { instagram: 'https://www.instagram.com/cippucmm/' },
	},
	{
		title: 'Club de Donantes de Sangre',
		group: 'donates-csd',
		label: 'Donantes - CSD',
		shortDescription:
			'Club de Donantes de Sangre tiene como enfoque es organizar y llevar a cabo las jornadas de sangre. Igualmente, nos encargamos de concientizar la población universitaria respecto a nuestro misión.',
		description:
			'<strong>Club de Donantes de Sangre</strong>, Nuestro enfoque es organizar y llevar a cabo las jornadas de sangre. Igualmente, nos encargamos de concientizar la población universitaria respecto a nuestro misión.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/donantes.webp',
		mission:
			'Ayudar a agilizar la escasez de sangre en nuestro país, brindándole una mejor oportunidad a los pacientes.',
		vision:
			'Que la comunidad universitaria siempre contribuya a su pueblo y done sangre donde vea la necesidad, entendiendo que donar sangre es donar vida.',
		values: 'Altruismo, integridad y empatía.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/donates-csd',
		socialMedia: {
			instagram: 'https://www.instagram.com/clubdedonantescsd',
			facebook: 'https://www.facebook.com/clubdedonantescsd',
		},
	},
	{
		title: 'Club de Innovación y Emprendimiento',
		group: 'ciep-csd',
		label: 'CIEP - CSD',
		shortDescription:
			'CIEP es un espacio donde estudiantes apasionados por la creatividad, la tecnología y los negocios se reúnen para desarrollar ideas innovadoras y fomentar el espíritu emprendedor. A través de eventos, talleres y proyectos colaborativos, el club busca brindar herramientas y oportunidades para que sus miembros conviertan sus ideas en soluciones reales y sostenibles.',
		description:
			'<strong>Club de Innovación y Emprendimiento PUCMM (CIEP)</strong>, es un espacio donde estudiantes apasionados por la creatividad, la tecnología y los negocios se reúnen para desarrollar ideas innovadoras y fomentar el espíritu emprendedor. A través de eventos, talleres y proyectos colaborativos, el club busca brindar herramientas y oportunidades para que sus miembros conviertan sus ideas en soluciones reales y sostenibles.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/ciep.webp',
		mission:
			'Impulsar el talento y la creatividad de los estudiantes mediante el desarrollo de proyectos innovadores y el fomento del emprendimiento, proporcionando conocimientos, redes de contacto y recursos que les permitan transformar ideas en iniciativas exitosas.',
		vision:
			'Ser el principal referente universitario en innovación y emprendimiento, creando un ecosistema dinámico donde los estudiantes puedan desarrollar soluciones de impacto, conectar con expertos y generar oportunidades que contribuyan al desarrollo económico y social.',
		values:
			'Creatividad: Fomentamos el pensamiento original y la generación de ideas innovadoras. Colaboración: Creemos en el trabajo en equipo y en la construcción de redes de apoyo. Liderazgo: Promovemos el desarrollo de habilidades de liderazgo para generar impacto. Resiliencia: Afrontamos desafíos con determinación y aprendemos del fracaso. Ética: Actuamos con responsabilidad, transparencia y compromiso social. Aprendizaje continuo: Nos adaptamos a los cambios y buscamos siempre mejorar.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/ciep-csd',
		socialMedia: { instagram: 'https://www.instagram.com/ciepucmm' },
	},
	{
		title: 'Comité de Estudiantes de Derecho',
		group: 'ced-csd',
		label: 'CED - CSD',
		shortDescription:
			'CED tiene como proposito estrechar las relaciones entre profesores y estudiantes; sirviendo de instrumento para incentivar la participación y comunicar las necesidades estudiantiles relacionadas con la carrera. El CED representó la segunda asociación de nuestra universidad, y el primer comité de estudiantes de la carrera.',
		description:
			'<strong>Comité de Estudiantes de Derecho (CED)</strong>, estrechar las relaciones entre profesores y estudiantes; sirviendo de instrumento para incentivar la participación y comunicar las necesidades estudiantiles relacionadas con la carrera. El CED representó la segunda asociación de nuestra universidad, y el primer comité de estudiantes de la carrera.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/ced-csd.webp',
		mission:
			'El propósito fundamental del Comité de Estudiantes de Derecho es **representar a la comunidad estudiantil, comunicar sus necesidades académicas y fomentar la confraternidad**, promoviendo el desarrollo profesional y la vinculación con el sector jurídico.',
		vision:
			'Continuar siendo el referente en la representación estudiantil, incentivando mejoras académicas, fortaleciendo la vinculación con el sector jurídico y creando oportunidades profesionales. Su impacto se refleja en una comunidad unida, con liderazgo y compromiso, donde cada generación de estudiantes contribuye al desarrollo de la carrera de Derecho y al fortalecimiento del gremio jurídico.',
		values:
			'Representación Activa: Defender los intereses y derechos de los estudiantes de derecho ante las autoridades universitarias. Formación juridica: Organizar seminarios, talleres y competencias para fortalecer el aprendizaje y la preparación profesional.  Confraternidad y Compañerismo: Fomentar un ambiente de unidad, respeto y apoyo mutuo entre los estudiantes de derecho, fortaleciendo los lazos de amistad y colaboración.  Liderazgo y Desarrollo: Impulsar habilidades de liderazgo, argumentación y oratoria en la comunidad estudiantil  Vinculación con el Sector Jurídico: Crear espacios de interacción con profesionales del derecho, instituciones y firmas legales para acercar a los estudiantes al ejercicio de la profesión.',
		faculty: Faculty.FCSH,
		career: Career.DER,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/ced-csd',
		socialMedia: { instagram: 'https://www.instagram.com/cedpucmm/' },
	},
	{
		title: 'Comité de Estudiantes de Ciencias Sociales',
		group: 'cecis-csd',
		label: 'CECIS - CSD',
		shortDescription:
			'CECIS tiene como propósito brindar un espacio educativo,, que promueva el aprendizaje dinámico y significativo dentro de esta disciplina.',
		description:
			'<strong>Comité de Estudiantes de Ciencias Sociales (CECIS)</strong>, tiene como propósito brindar un espacio educativo,, que promueva el aprendizaje dinámico y significativo dentro de esta disciplina.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/cecis.webp',
		mission:
			'Brindar apoyo a los estudiantes cursantes de la carrera de Ciencias Sociales, facilitando su relación con otros estudiantes, las instalaciones y diferentes servicios de nuestra Pontificia Universidad Católica Madre y Maestra. Logrando de esa manera el conocimiento de todos los beneficios que se pueden obtener como miembros de la universidad.',
		vision:
			'Servir como espacio educativo, cultural e innovador. Buscando integrar todo lo correspondiente a las Ciencias Sociales y sus estudiantes.',
		values:
			'Excelencia, colaboración, accesibilidad, respeto, ética, integración y sostenibilidad.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/cecis-csd',
		career: Career.EDU,
		faculty: Faculty.FCSH,
		socialMedia: { instagram: 'https://www.instagram.com/cecispucmm' },
	},
	{
		title: 'Comité de Estudiantes de Psicología',
		group: 'coepsi-csd',
		label: 'CEOPSI - CSD',
		shortDescription:
			'CEOPSI tiene como propósito, es mediante el trabajo en equipo, aportar a la comunidad de Psicología en universidad, manifestando aspectos innovadores que motiven a los estudiantes a mejorar y tener pasión por su carrera.',
		description:
			'<strong>Comité de Estudiantes de Psicología (COEPSI)</strong>, Nuestro propósito, es mediante el trabajo en equipo, aportar a la comunidad de Psicología en universidad, manifestando aspectos innovadores que motiven a los estudiantes a mejorar y tener pasión por su carrera.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/coepsi-csd.webp',
		mission:
			'Buscamos promover el desarrollo académico, profesional y humano de los estudiantes de psicología, fomentando la colaboración y el compromiso a través de actividades, proyectos y espacios que fortalezcan la formación integral y la conexión, no solo junto a la comunidad de Psicología, sino con los demás estudiantes, personal académico y docente de la institución.',
		vision:
			'Ser una directiva reconocida por su liderazgo y capacidad de transformar la experiencia estudiantil, destacándose como un modelo de disciplina, compañerismo y principalmente, que promueva la innovación dentro de la Universidad.',
		values: 'El respeto mutuo. La responsabilidad. La humildad. La disciplina.',
		faculty: Faculty.FCSH,
		career: Career.PSI,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/coepsi-csd',
		socialMedia: { instagram: 'https://www.instagram.com/coepsipucmmcsd' },
	},
	{
		title: 'Asociación de Estudiantes de Turismo y Gastronomía',
		group: 'aetg-csd',
		label: 'AETG - CSD',
		shortDescription:
			'AETG es un organismo estudiantil que representa a los alumnos de las carreras de Hospitalidad y Turismo, Gastronomía y Artes Culinarias y Administración Hotelera ante la universidad y la comunidad académica. Su propósito es fomentar el desarrollo profesional, académico y social de sus miembros, promoviendo actividades que fortalezcan la identidad y el sentido de pertenencia a la industria del turismo y la gastronomía.',
		description:
			'<strong>Asociación de Estudiantes de Turismo y Gastronomía (AETG)</strong>, La Asociación de Estudiantes de la Escuela de Turismo y Gastronomía de PUCMM es un organismo estudiantil que representa a los alumnos de las carreras de Hospitalidad y Turismo, Gastronomía y Artes Culinarias y Administración Hotelera ante la universidad y la comunidad académica. Su propósito es fomentar el desarrollo profesional, académico y social de sus miembros, promoviendo actividades que fortalezcan la identidad y el sentido de pertenencia a la industria del turismo y la gastronomía.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/aetg.webp',
		mission:
			'Ser un puente entre los estudiantes, la facultad y el sector turístico-gastronómico, impulsando iniciativas que contribuyan al crecimiento académico, profesional y personal de los alumnos y futuros líderes de la industria de la hospitalidad.',
		vision:
			'Ser un comité reconocido por su liderazgo, innovación y compromiso con la excelencia en la formación de profesionales del turismo y la gastronomía, generando oportunidades que potencien la preparación y el éxito de los estudiantes dentro y fuera de la universidad.',
		values:
			'Liderazgo: Impulsamos el desarrollo de habilidades de liderazgo en nuestros miembros. Excelencia: Promovemos la mejora continua en el ámbito académico y profesional. Innovación: Buscamos nuevas formas de aprendizaje y crecimiento en la industria. Compromiso: Nos dedicamos a fortalecer la comunidad estudiantil y profesional. Trabajo en equipo: Creemos en la colaboración como clave del éxito. Pasión: Amamos el turismo y la gastronomía y queremos transmitirlo a los demás.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/aetg-csd',
		career: Career.GAS,
		faculty: Faculty.FCEA,
		socialMedia: { instagram: 'https://www.instagram.com/aetg_csd' },
	},
	{
		title: 'Comité de Estudiantes de Educación',
		group: ' ceep-csd',
		label: 'CEEP - CSD',
		shortDescription:
			'CEEP es un comité dispuesto para representar a los estudiantes de educación organizando actividades académicas, culturales y de integración, y a su vez servir como un enlace entre los estudiantes y las autoridades universitarias.',
		description:
			'<strong>Comité de Estudiantes de Educación de PUCMM (CEEP)</strong>, es un comité dispuesto para representar a los estudiantes de educación organizando actividades académicas, culturales y de integración, y a su vez servir como un enlace entre los estudiantes y las autoridades universitarias.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/ceep.webp',
		mission:
			'Formar y representar una comunidad estudiantil enfocada en el continuo crecimiento profesional docente, promocionando e incentivando valores, habilidades y aptitudes que aporten a la mejora educativa de nuestro país.',
		vision:
			'Ser un equipo líder que, en su proceso de formación académica, impulse profesionales íntegros con una mirada holística de la sociedad, capaces de aportar mejoría al sistema educativo.',
		values:
			'Responsabilidad  Trabajo en equipo  Honestidad  Compromiso  Solidaridad  Equidad',
		faculty: Faculty.FCSH,
		career: Career.EDU,
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/ceep-csd',
		socialMedia: { instagram: 'https://www.instagram.com/ceep_pucmm' },
	},
	{
		title: 'Asociación de Estudiantes Haitianos',
		group: 'aehp-csd',
		label: 'AEHP - CSD',
		shortDescription:
			'AEHP, esta asociación esta aqui para representar a la comunidad haitiana y nuestro país de origen, Haïti,dentro de la universidad. Presentamos nuestra cultura y valores de una forma distinta: como una fuente de inspiración, esfuerzo y diversidad.',
		description:
			'<strong>Asociación de Estudiantes Haitianos de la PUCMM (AEHP)</strong>, esta asociación esta aqui para representar a la comunidad haitiana y nuestro país de origen, Haïti,dentro de la universidad. Presentamos nuestra cultura y valores de una forma distinta: como una fuente de inspiración, esfuerzo y diversidad.',
		campus: 'CSD - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/aehp.webp',
		mission:
			'Proveer asistencia y orientación a los estudiantes Haitianos en la PUCMM, especialmente a los de nuevo ingreso, y fomentar un intercambio cultural enriquecedor entre nosotros y los demás estudiantes de la universidad.',
		vision:
			'Ser reconocida como la organización que brinde un servicio para ayudar a los estudiantes de la PUCMM a conocer más acerca la cultura Haitiana.',
		values:
			'Respecto, unidad y determinación. Como lo dice nuestro lema: “l`union fait la force”, trabajamos para construir un legado enriquecedor y dejar huellas positivas, tanto en nuestra universidad como más allá.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/aehp-csd',
		socialMedia: {
			instagram: 'https://www.instagram.com/p/DHMJwCxvl0e/',
			facebook: 'https://www.facebook.com/share/1A9y9JoUap/',
		},
	},
	{
		title:
			'Comité de Estudiante del Centro de Tecnología y Educación Permanente',
		group: 'comitep-csti',
		label: 'COMITEP - CSTI',
		shortDescription:
			'El ComiTEP es el encargado de representar y atender las necesidades de los estudiantes. Facilita la comunicación con la administración, orienta sobre procesos académicos y administrativos, y organiza actividades que fomentan la participación estudiantil. Además, promueve un entorno inclusivo y de crecimiento, actuando como canal para mejorar la experiencia universitaria.',
		description:
			'<strong>Comité de Estudiante del Centro de Tecnología y Educación Permanente (COMITEP)</strong>, El ComiTEP es el comité estudiantil del Centro de Tecnología y Educación Permanente (TEP), encargado de representar y atender las necesidades de los estudiantes. Facilita la comunicación con la administración, orienta sobre procesos académicos y administrativos, y organiza actividades que fomentan la participación estudiantil. Además, promueve un entorno inclusivo y de crecimiento, actuando como canal para mejorar la experiencia universitaria.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/comitep.webp',
		mission:
			'Ser voceros efectivos efectivos de las necesidades e intereses de la comunidad estudiantil TEP y ser agentes de cambio positivo dentro de nuestro recinto, promoviendo un entorno enriquecedor que ofrezca un espacio de crecimiento y desarrollo personal para los estudiantes de nuestra institución. Todo esto tomando en cuenta las necesidades específicas que puedan tener grupos y/o individuos para asegurar una experiencia educativa inclusiva y participativa para todos.',
		vision:
			'Ser un referente de excelencia en el ámbito estudiantil, comprometidos con el bienestar y el desarrollo académico de los estudiantes en nuestra institución. Buscamos inspirar y motivar a los estudiantes a participar activamente en las diversas actividades y proyectos, creando un ambiente propicio para su crecimiento personal, profesional y social. Aspiramos a ser reconocidos como un comité que promueve el espíritu de colaboración, liderazgo y compromiso, contribuyendo así al fortalecimiento de la comunidad estudiantil en el Centro de Tecnología y Educación Permanente (TEP)',
		values:
			'Transparencia Honestidad Respeto Integridad Responsabilidad Disciplina Comprensión Empatía Igualdad Trabajo en equipo',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/comitep-csti',
		socialMedia: { instagram: 'https://www.instagram.com/comiteppucmm' },
	},
	{
		title:
			'Comité de Estudiante del Centro de Tecnología y Educación Permanente',
		group: 'comitep-csd',
		label: 'COMITEP - CSD',
		shortDescription:
			'El ComiTEP es el encargado de representar y atender las necesidades de los estudiantes. Facilita la comunicación con la administración, orienta sobre procesos académicos y administrativos, y organiza actividades que fomentan la participación estudiantil. Además, promueve un entorno inclusivo y de crecimiento, actuando como canal para mejorar la experiencia universitaria.',
		description:
			'<strong>Comité de Estudiante del Centro de Tecnología y Educación Permanente (COMITEP)</strong>, El ComiTEP es el comité estudiantil del Centro de Tecnología y Educación Permanente (TEP), encargado de representar y atender las necesidades de los estudiantes. Facilita la comunicación con la administración, orienta sobre procesos académicos y administrativos, y organiza actividades que fomentan la participación estudiantil. Además, promueve un entorno inclusivo y de crecimiento, actuando como canal para mejorar la experiencia universitaria.',
		campus: 'CSTI - Campus Santo Domingo',
		campusId: 'csd',
		logo: '/images/grupos/comitep.webp',
		mission:
			'Ser voceros efectivos efectivos de las necesidades e intereses de la comunidad estudiantil TEP y ser agentes de cambio positivo dentro de nuestro recinto, promoviendo un entorno enriquecedor que ofrezca un espacio de crecimiento y desarrollo personal para los estudiantes de nuestra institución. Todo esto tomando en cuenta las necesidades específicas que puedan tener grupos y/o individuos para asegurar una experiencia educativa inclusiva y participativa para todos.',
		vision:
			'Ser un referente de excelencia en el ámbito estudiantil, comprometidos con el bienestar y el desarrollo académico de los estudiantes en nuestra institución. Buscamos inspirar y motivar a los estudiantes a participar activamente en las diversas actividades y proyectos, creando un ambiente propicio para su crecimiento personal, profesional y social. Aspiramos a ser reconocidos como un comité que promueve el espíritu de colaboración, liderazgo y compromiso, contribuyendo así al fortalecimiento de la comunidad estudiantil en el Centro de Tecnología y Educación Permanente (TEP)',
		values:
			'Transparencia Honestidad Respeto Integridad Responsabilidad Disciplina Comprensión Empatía Igualdad Trabajo en equipo',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/comitep-csd',
		socialMedia: { instagram: 'https://www.instagram.com/comiteppucmm' },
	},
	{
		title: 'Asociación De Estudiantes de Ideas Políticas',
		group: 'aip-csti',
		label: 'AIP - CSTI',
		shortDescription:
			'AIP es asociación estudiantil que fomenta el estudio de la política como ciencia, representan y defiende los intereses de los estudiantes frente a la comunidad política y ofrecen una manera de que los estudiantes obtengan una formación integral sobre las ideas políticas a lo largo de la historia.',
		description:
			'<strong>Asociación de Ideas Políticas - AIP</strong>, somos una asociación estudiantil que fomentamos el estudio de la política como ciencia, representamos y defendemos los intereses de los estudiantes frente a la comunidad política y ofrecemos una manera de que los estudiantes obtengan una formación integral sobre las ideas políticas a lo largo de la historia. Además organizamos eventos de interés académico y estudiantil que incentivan la reflexión y el debate sobre la política como los Café Políticos, Charlas y Visitas a eventos o instituciones oficiales.',
		campus: 'CSTI - Campus Santiago',
		campusId: 'csti',
		logo: '/images/grupos/aip-csti.webp',
		mission:
			'Tenemos como misión proporcionar un espacio de formación académica e intelectual donde los estudiantes puedan estudiar, analizar y debatir sobre las ideas políticas, promoviendo el pensamiento crítico y el conocimiento de la política como ciencia. Además, buscamos representar a nuestors miembros en actividades académicas y contribuir a la profesionalización de los estudiantes universitarios.',
		vision:
			'Ser una asociación reconocida dentro y fuera de la universidad por su capacidad de generar análisis político de calidad, promover el estudio riguroso de la política y contribuir activamente a la formación de futuros profesionales con un conocimiento sólido en ciencia política. AIP aspira a consolidarse como un referente en el ámbito académico estudiantil en temas políticos.',
		values:
			'Nuestros principios fundamentales son el pluralismo, la integridad y el compromiso.',
		path: '/grupos-estudiantiles/asociaciones-clubes-y-comites/aip-csti',
		socialMedia: {
			instagram: 'https://www.instagram.com/aippucmm/',
			facebook: 'https://x.com/aippucmm',
		},
	},
];

export const onlyCSTIGroups = studentsGroups.filter(
	(group) => group.campusId === 'csti',
);

export const onlyCSDGroups = studentsGroups.filter(
	(group) => group.campusId === 'csd',
);

// Faculty and Career
export const onlyFCEIGroupsCSTI = studentsGroups.filter(
	(group) => group.campusId === 'csti' && group.faculty === Faculty.FCEI,
);
export const onlyFCEIGroupsCSD = studentsGroups.filter(
	(group) => group.campusId === 'csd' && group.faculty === Faculty.FCEI,
);

export const onlyFCEAGroupsCSTI = studentsGroups.filter(
	(group) => group.campusId === 'csti' && group.faculty === Faculty.FCEA,
);
export const onlyFCEAGroupsCSD = studentsGroups.filter(
	(group) => group.campusId === 'csd' && group.faculty === Faculty.FCEA,
);

export const onlyFCSHGroupsCSTI = studentsGroups.filter(
	(group) => group.campusId === 'csti' && group.faculty === Faculty.FCSH,
);
export const onlyFCSHGroupsCSD = studentsGroups.filter(
	(group) => group.campusId === 'csd' && group.faculty === Faculty.FCSH,
);

export const onlyFCCSGroupsCSTI = studentsGroups.filter(
	(group) => group.campusId === 'csti' && group.faculty === Faculty.FCCS,
);
export const onlyFCCSGroupsCSD = studentsGroups.filter(
	(group) => group.campusId === 'csd' && group.faculty === Faculty.FCCS,
);
