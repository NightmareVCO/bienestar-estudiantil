# Bienestar Estudiantil

Bienestar Estudiantil es una pagina web del Decanato de Estudiantes de la Pontificia Universidad Madre y Maestra (PUCMM) que tiene como objetivo mostrar todos los servicios, beneficios y actividades que ofrece la universidad a sus estudiantes. La pagina web es una herramienta para que los estudiantes puedan acceder a toda la información de manera rápida y sencilla.

## Instalación

Para futuros desarrollo o mantenimiento de la pagina web, se recomienda tener instalado [Node.js](https://nodejs.org/en/) (*v22.12.0*) y [pnpm](https://pnpm.io/).

Para instalar las dependencias del proyecto, se debe ejecutar el siguiente comando en la raíz del proyecto:

```bash
pnpm install
```

Para iniciar el servidor de desarrollo, se debe ejecutar el siguiente comando:

```bash
pnpm run dev
```
Esto iniciará el servidor de desarrollo y abrirá la pagina web en el navegador. La pagina web estará disponible en la siguiente URL: [http://localhost:4321](http://localhost:4321).

Para realizar el build de la pagina web, se debe ejecutar el siguiente comando:

```bash
pnpm run build
```

Para iniciar el servidor de producción, se debe ejecutar el siguiente comando:

```bash
pnpm run preview
```
Esto iniciará el servidor de producción y abrirá la pagina web en el navegador. La pagina web estará disponible en la siguiente URL: [http://localhost:4321](http://localhost:4321).


## Tecnologías utilizadas

La pagina web fue desarrollada con el framework [**Astro**](https://astro.build/) con lenguajes de la web como HTML, CSS y JavaScript. Como herramienta de CSS se cuenta con SCSS para la pre-compilación de estilos. Para la peticiones en el cliente, se utiliza lo mínimo necesario (**useState** y **useEffect**) de la librería de [React](https://reactjs.org/).

El backend de la pagina es [WordPress](https://wordpress.org/) y se utiliza la API REST de WordPress para obtener los datos de las publicaciones. La misma se encuentra protegida con plugins personalizados en PHP para evitar ataques de fuerza bruta y proteger los datos de los usuarios.

## Justificación de las tecnologías

Astro es un framework de desarrollo web que permite crear aplicaciones web rápidas y optimizadas. Utiliza un enfoque basado en  HTML, lo que facilita la creación de interfaces de usuario reutilizables y escalables. Además, Astro permite la integración con otras tecnologías y frameworks, lo que lo hace muy versátil.

WordPress es un sistema de gestión de contenido (CMS) muy popular que permite crear y administrar sitios web de manera sencilla. Su API REST permite acceder a los datos de las publicaciones y utilizarlos en aplicaciones web, lo que facilita la creación de aplicaciones dinámicas y personalizadas.

## Usos de Astro

La pagina web cuenta con el uso de diversos features de Astro, entre los cuales se encuentran:

#### Principales
- **Componentes de Astro**: Se utilizan componentes de Astro para crear componentes reutilizables y escalables. Esto permite una mejor organización del código y una mayor facilidad de mantenimiento.

- **Rutas dinámicas**: Se utilizan rutas dinámicas para crear paginas personalizadas para cada grupo estudiantil. Esto permite crear muchas paginas de manera sencilla y rápida.

- **Integración con React**: Se utiliza React para la petición de datos de las actividades de los grupos estudiantiles.

#### Secundarios
- **Pre-carga de paginas**: Al momento de enfocarse en un link (*hover*) se pre-carga la pagina a la que se va a navegar. Esto permite una navegación más rápida y fluida.

- **Optimización de imágenes**: Se utilizan imágenes optimizadas (con el componente custom de Astro **Image**) para mejorar el rendimiento de la pagina. Esto permite una carga más rápida y una mejor experiencia de usuario.


### Componentes de Astro y Rutas Dinámicas

Como fue mencionado anteriormente en los usos principales, se utilizan las *rutas dinámicas* de Astro para poder genera muchas paginas en base a una pagina base. Esto se logra utilizando la función [**getStaticPaths**](https://docs.astro.build/en/guides/routing/#static-ssg-mode) de Astro, la cual permite iterar un arreglo de objetos y a partir de la pagina base generar todas las paginas.

#### Implementación de la función getStaticPaths

En el proyecto existe paginas el nombre de **[group].astro**. Estas paginas utilizan la función **getStaticPaths** para poder generar las rutas dinámicas. Esto funciona de la siguiente manera:

Se tiene un arreglo de objetos como fue mencionado anteriormente. Est puede ser:

```ts
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
  ...
]
```

Y en la pagina **[group].astro** se tiene la siguiente implementación:

```ts
export async function getStaticPaths() {
	return studentsGroups.map((groupData) => ({
		params: { group: groupData.group },
		props: { groupData },
	}));
}
```

Lo que va a recorrer el arreglo de objetos y va a generar una pagina con la información colocada en la pagina base:

```html
<Layout
  title=`${groupData?.title} - Grupos Estudiantiles`
  description={groupData?.description}
>
  <Banner
    title={groupData?.title}
    path={groupData?.label}
    origin=`Grupos Estudiantiles / Asociaciones, Clubes y Comités - ${groupData?.campus.split('-')[1]}`
    originLink=`/grupos-estudiantiles/asociaciones-clubes-y-comites/${groupData.campusId}`
  />

  <div class="news-details-area pt-5 pb-70">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="news-details">
            <div class="news-simple-card">
              <div class="text-center">
                <Image
                  src={groupData?.logo}
                  alt={groupData?.title}
                  width={450}
                  height={450}
                />
                <h2>
                  {groupData?.title}
                </h2>
              </div>
              <div set:html={groupData?.description} />

              <div class="theory pt-4">
                {
                  groupData?.mission && (
                    <div class="theory-box">
                      <h4>Misión</h4>
                      <p>{groupData.mission}</p>
                    </div>
                  )
                }
                {
                  groupData?.vision && (
                    <div class="theory-box">
                      <h4>Visión</h4>
                      <p>{groupData.vision}</p>
                    </div>
                  )
                }
                {
                  groupData?.values && (
                    <div class="theory-box">
                      <h4>Valores</h4>
                      <p>{groupData.values}</p>
                    </div>
                  )
                }
              </div>
              <div
                class="d-flex justify-content-evenly flex-column flex-lg-row gap-1 gap-lg-0"
              >
                {
                  groupData?.website && (
                    <div class="text-center pb-4">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={groupData.website}
                        class="default-btn-one"
                      >
                        <i class="flaticon-right-arrow" />
                        Visitar pagina web
                      </a>
                    </div>
                  )
                }
                {
                  groupData?.formLink && (
                    <div class="text-center pb-4">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={groupData.formLink}
                        class="default-btn-one"
                      >
                        <i class="flaticon-bookmark" />
                        Llenar solicitud de ingreso
                      </a>
                    </div>
                  )
                }
              </div>
              <SocialMediaList
                facebook={groupData.socialMedia?.facebook}
                instagram={groupData.socialMedia?.instagram}
                twitter={groupData.socialMedia?.twitter}
                linkedin={groupData.socialMedia?.linkedin}
              />
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <ActivitiesSideBar client:only="react" />
          <AsideNav />
        </div>
      </div>
    </div>
  </div>
</Layout>
```
Del mismo modo, podemos ver el uso de componentes como **Layout**, **Banner**, **ActivitiesSideBar**, **AsideNav** y **SocialMediaList**. Estos componentes son reutilizables y permiten una mejor organización del código. Además, se utilizan propiedades para pasar la información a los componentes, lo que permite una mayor flexibilidad y personalización.

Con esto conseguimos generar muchas paginas y cada una con su información personalizada. Esto se logra de manera sencilla y rápida, lo que permite una mejor organización del código y una mayor facilidad de mantenimiento.

En la practica, solo tenemos un único archivo pero en el build tendríamos todas generadas. Esto se puede ver en la carpeta **dist** después de hacer el build del proyecto.

```bash
/grupos-estudiantiles/asociaciones-clubes-y-comites/adenut-csd/index.html
/grupos-estudiantiles/asociaciones-clubes-y-comites/adedin-csti/index.html
/grupos-estudiantiles/asociaciones-clubes-y-comites/ceec-csd/index.html
/grupos-estudiantiles/asociaciones-clubes-y-comites/cead-csd/index.html
/grupos-estudiantiles/asociaciones-clubes-y-comites/ademed-csti/index.html
/grupos-estudiantiles/asociaciones-clubes-y-comites/adenut-csti/index.html
/grupos-estudiantiles/asociaciones-clubes-y-comites/aede-csti/index.html
/grupos-estudiantiles/asociaciones-clubes-y-comites/adetf-csti/index.html
/grupos-estudiantiles/asociaciones-clubes-y-comites/ader-csti/index.html
...
```

***Nota:*** Los archivos de generación estática se encuentra en la carpeta **src/lib/static/**

### Integración con React

Astro permite realizar peticiones, pero esto requiere del uso de un apartador (que el framework provee), pero esto requiere que el entorno de producción pueda soporta un servidor. En este, el escenario final solo soporta archivos estáticos o PHP. Por lo que se optó por utilizar React para poder realizar las peticiones y obtener los datos de las actividades de los grupos estudiantiles. Esto se logra utilizando el hook **useEffect** de React, el cual permite realizar peticiones al momento de renderizar el componente.

Para separa lo más posible todo el código de React, se creó una carpeta llamada **_client** dentro de **src/components/**. En esta carpeta se encuentran todos los componentes de React que se utilizan en la pagina. Esto permite una mejor organización del código y una mayor facilidad de mantenimiento.

Dentro de la misma todo los [**hooks**](https://es.react.dev/learn/reusing-logic-with-custom-hooks) de React se encuentran en la carpeta **_hooks**.

#### Implementación del hook useEffect

Un ejemplo de la implementación del hook **useEffect** es el siguiente:

```tsx
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
```

Donde fácilmente podemos ver la lógica de la petición y el manejo de los estados. Se inicia el estado de las actividades como un arreglo vacío, una vez el componente se monta, se realiza la petición y se actualiza el estado de las actividades. La lógica de la petición se encuentra en el archivo **src/lib/fetch/activities.fetch.ts**, con lo que logramos separar la lógica de la petición del componente.

La misma se ve de la siguiente manera:

```ts
export const getActivities = async ({
	categoryId,
	currentPage,
	amountOfActivitiesToFetch,
}: {
	categoryId: number;
	currentPage: number;
	amountOfActivitiesToFetch: number;
}): Promise<[Activity[], Error | null]> => {
	try {
		const response = await fetch(
			`${PUBLIC_API_URL}posts&categories=${categoryId}&per_page=${amountOfActivitiesToFetch}&page=${currentPage}&_embed`,
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
```

Donde sencillamente se realiza la petición a la API de WordPress y se formatea la información para poder ser utilizada en el componente.

El componente final simplemente pedirá el hook y mostrará la información de las actividades. Esto permite una mejor organización del código y una mayor facilidad de mantenimiento. Además, se pueden reutilizar los hooks en otros componentes, lo que permite una mayor flexibilidad y personalización.

```tsx
import Loading from '@components/_client/loading/Loading';
import { truncateText } from '@utils/text.utils';
import React from 'react';
import { useActivities } from '../_hooks/hooks';

const AMOUNT_ACTIVITIES_TO_FETCH = 12;

export default function Activities() {
	const { activities, loading, campus, currentPage, hasMoreActivities } =
		useActivities({
			amount: AMOUNT_ACTIVITIES_TO_FETCH,
		});

	if (loading) {
		return <Loading />;
	}

	return (
		<div className="events-area">
			<div className="container">
				<div className="row justify-content-center">
					{activities.map((activity) => (
						<div key={activity.id} className="col-lg-4 col-md-6">
							<div className="single-events-card">
								<div className="events-image">
									<a
										href={`/grupos-estudiantiles/calendario-de-actividades/actividad?id=${activity.id}`}
									>
										{activity.imageUrl && (
											<img
												src={activity.imageUrl}
												alt={activity.slug}
												className="img-fluid"
												loading="lazy"
											/>
										)}
									</a>
									<div className="date">
										<span>{activity.date}</span>
									</div>
								</div>
								<div className="events-content">
									<div className="admin">
										<div className="d-flex flex-row justify-content-end align-items-center gap-2">
											<img
												src={`/images/grupos/${activity.groupSlugForImage}.webp`}
												alt={`${activity.groupName} logo`}
												height={28}
												width={28}
												loading="lazy"
											/>
											<a
												href={`/grupos-estudiantiles/asociaciones-clubes-y-comites/${activity.groupSlugForPage}`}
											>
												{activity.groupName ?? 'Grupo Estudiantil'}
											</a>
										</div>
									</div>
									<a
										href={`/grupos-estudiantiles/calendario-de-actividades/actividad?id=${activity.id}`}
									>
										<h3
											dangerouslySetInnerHTML={{
												__html: activity.title,
											}}
										/>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Estado vacio */}
				{activities.length === 0 && (
					<div className="text-center my-5">
						<h2 className="">No hay actividades disponibles</h2>
						<p className="text-muted">
							No se encontraron actividades para el campus{' '}
							<strong>{campus}</strong>.
						</p>
					</div>
				)}

				{/* Paginación */}
				{activities.length > 0 && (
					<div className="d-flex justify-content-between gap-3 my-4">
						<a
							href={
								currentPage - 1 > 0
									? `/grupos-estudiantiles/calendario-de-actividades/${campus}?pagina=${currentPage - 1}`
									: undefined
							}
							className={`default-btn-one text-center ${currentPage === 1 ? 'disabled' : ''}`}
						>
							<i className="fa-solid fa-arrow-left" />
							Anterior
						</a>
						<a
							href={
								hasMoreActivities
									? `/grupos-estudiantiles/calendario-de-actividades/${campus}?pagina=${currentPage + 1}`
									: undefined
							}
							className={`default-btn-one text-center ${!hasMoreActivities ? 'disabled' : ''}`}
						>
							<i className="fa-solid fa-arrow-right" />
							Siguiente
						</a>
					</div>
				)}
			</div>
		</div>
	);
}
```

Donde se puede ver la facilidad de uso del hook y la reutilización de componentes. Esto permite una mejor organización del código y una mayor facilidad de mantenimiento. Además, se pueden reutilizar los hooks en otros componentes, lo que permite una mayor flexibilidad y personalización.

## Uso de WordPress

Para este apartado, el uso de WordPress no será explícitamente mencionado, ya que el mismo es un CMS y no es necesario conocer su funcionamiento para poder utilizarlo. Sin embargo, se recalca el uso de la API REST de WordPress para obtener los datos de las publicaciones. La misma se encuentra protegida con plugins personalizados en PHP que validan que las peticiones sean realizadas desde el dominio de la pagina web y por usuarios autenticados. Del mismo modo, se escondió la pagina publica de WordPress para reducir el riesgo de filtraciones de datos.

Una explicación más detallada del uso de WordPress se encuentra en el documento oficial del proyecto.

## Conclusión
La pagina web de Bienestar Estudiantil es una herramienta útil para los estudiantes de la PUCMM, ya que les permite acceder a toda la información de manera rápida y sencilla. La misma fue desarrollada con tecnologías modernas y optimizadas, lo que permite una mejor experiencia de usuario. Además, se utilizó un enfoque modular y re-utilizable, lo que permite una mayor facilidad de mantenimiento y escalabilidad.