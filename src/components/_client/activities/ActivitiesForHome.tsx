import { useActivitiesForHome } from '@components/_client/_hooks/hooks';
import { truncateText } from '@utils/text.utils';
import React from 'react';

const AMOUNT_ACTIVITIES_TO_FETCH = 6;

export default function ActivitiesForHome() {
	const { activities, loading } = useActivitiesForHome({
		amount: AMOUNT_ACTIVITIES_TO_FETCH,
	});

	if (loading) {
		return (
			<div className="loading-spinner-container">
				<div className="spinner" />
			</div>
		);
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
			</div>
		</div>
	);
}
