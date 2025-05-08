import { useActivity } from '@components/_client/_hooks/hooks';
import { studentsGroups } from '@static/studentGroups.static';

import React from 'react';

export default function Activity() {
	const { activity, loading } = useActivity();

	const group = studentsGroups.find(
		(group) => group.group === activity.groupSlugForPage,
	);

	if (loading) {
		return (
			<div className="loading-spinner-container">
				<div className="spinner" />
			</div>
		);
	}

	return (
		<div>
			<div className="news-simple-group">
				<div className="news-simple-group-header">
					<a
						href={`/grupos-estudiantiles/asociaciones-clubes-y-comites/${group?.group}`}
					>
						<img
							src={group?.logo ?? ''}
							alt={group?.title ?? ''}
							width={150}
							height={150}
							className="img-fluid"
							loading="lazy"
							decoding="async"
						/>
					</a>
				</div>
				<div className="news-simple-group-body">
					<a
						href={`/grupos-estudiantiles/asociaciones-clubes-y-comites/${group?.group}`}
					>
						<h3>{group?.title ?? ''}</h3>
					</a>
					<div className="news-simple-group-footer">
						<h4>{group?.campus}</h4>
						<p>
							<i className="fas fa-calendar me-2" />
							Publicado: {activity.date}
						</p>
					</div>
				</div>
			</div>
			<div className="news-simple-card">
				<div className="news-simple-card-body">
					<div className="text-center">
						{/* biome-ignore lint/security/noDangerouslySetInnerHtml: Nosotros controlamos el contenido*/}
						<h2 dangerouslySetInnerHTML={{ __html: activity.title }} />
					</div>
					<img
						src={activity.imageUrl ?? ''}
						alt={activity.title}
						width={800}
						height={400}
						className="img-fluid"
						loading="lazy"
						decoding="async"
					/>
					<div
						// biome-ignore lint/security/noDangerouslySetInnerHtml: Nosotros controlamos el contenido
						dangerouslySetInnerHTML={{ __html: activity.content }}
						className="news-simple-card-body-content"
					/>
				</div>
			</div>
		</div>
	);
}
