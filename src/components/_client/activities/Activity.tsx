import { useActivity } from '@components/_client/_hooks/hooks';
import ActivitiesSideBar from '@components/_client/activities/sidebar/ActivitySideBar';
import React from 'react';

export default function Activity() {
	const { activity, loading } = useActivity();

	if (loading) {
		return (
			<div className="loading-spinner-container">
				<div className="spinner" />
			</div>
		);
	}

	return (
		<div className="news-simple-card">
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
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: Nosotros controlamos el contenido*/}
			<div dangerouslySetInnerHTML={{ __html: activity.content }} />
		</div>
	);
}
