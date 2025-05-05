import { useActivitiesSideBar } from '@components/_client/_hooks/hooks';
import { truncateText } from '@utils/text.utils';
import React from 'react';

const ACTIVITIES_PER_PAGE = 6;

export default function ActivitiesSideBar() {
	const { activities, loading } = useActivitiesSideBar({
		amount: ACTIVITIES_PER_PAGE,
	});

	if (loading) {
		return (
			<div className="loading-spinner-container">
				<div className="spinner" />
			</div>
		);
	}

	return (
		<div className="related-post-area">
			<h3>Actividades recientes</h3>
			{activities.map((activity) => (
				<div key={activity.id} className="related-post-box">
					<div className="related-post-content">
						<a
							href={`/grupos-estudiantiles/calendario-de-actividades/actividad?id=${activity.id}`}
						>
							{activity.imageUrl && (
								<img
									src={activity.imageUrl}
									alt={activity.title}
									width={300}
									height={300}
									className="img-fluid"
									loading="lazy"
									decoding="async"
								/>
							)}
						</a>
						<h4>
							<a
								href={`/grupos-estudiantiles/calendario-de-actividades/actividad?id=${activity.id}`}
								// biome-ignore lint/security/noDangerouslySetInnerHtml: Nosotros controlamos el contenido
								dangerouslySetInnerHTML={{ __html: activity.title }}
							/>
						</h4>
						<p
							className="mb-2"
							// biome-ignore lint/security/noDangerouslySetInnerHtml: Nosotros controlamos el contenido
							dangerouslySetInnerHTML={{
								__html: truncateText({
									text: activity.content,
									maxLength: 200,
								}),
							}}
						/>
						<p className="text-muted small">
							<i className="fas fa-calendar me-2" />
							{activity.date}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
