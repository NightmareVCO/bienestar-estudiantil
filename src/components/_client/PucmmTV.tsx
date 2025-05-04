import { usePucmmTV } from '@components/_client/_hooks/hooks';
import Loading from '@components/_client/loading/Loading';
import React from 'react';

export default function PucmmTV() {
	const { videos, loading } = usePucmmTV();

	if (loading) {
		return <Loading />;
	}

	return (
		<div className="row">
			<div className="col-lg-12">
				<div className="row">
					{videos.map((video) => (
						<div key={video.title} className="col-lg-4 col-md-6">
							<div className="single-podcasts-card">
								<div className="podcasts-image youtube-image">
									<img
										src={video.image}
										alt=""
										aria-hidden="true"
										className="blur-filter"
									/>
									<img
										src={video.image}
										alt={video.title}
										width="415"
										height="276"
										loading="lazy"
										decoding="async"
									/>
									<a
										className="popup-youtube play-btn"
										href={video.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa-sharp fa-solid fa-circle-play" />
									</a>
								</div>
								<div className="podcast-content">
									<ul className="d-flex justify-content-between">
										<li className="date">{video.published}</li>
									</ul>
									<a
										href={video.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<h3>{video.title}</h3>
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
