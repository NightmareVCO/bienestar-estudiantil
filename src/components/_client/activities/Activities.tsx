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
											// biome-ignore lint/security/noDangerouslySetInnerHtml: Esto es seguro porque controlamos el contenido
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
