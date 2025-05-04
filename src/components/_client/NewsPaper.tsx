import { useNewsPapers } from '@components/_client/_hooks/hooks';
import Loading from '@components/_client/loading/Loading';
import React from 'react';

export default function NewsPapers() {
	const { newsPapers, loading } = useNewsPapers();

	if (loading) {
		return <Loading />;
	}

	return (
		<div className="row justify-content-center">
			{newsPapers?.map((currentNew) => (
				<div key={currentNew.title} className="col-lg-4 col-md-6">
					<div className="single-stories-card">
						<a href={currentNew.link} target="_blank" rel="noopener noreferrer">
							<img
								src={currentNew.image}
								alt={currentNew.title}
								className="card-responsive-image"
								width="415"
								height="276"
								decoding="async"
								loading="lazy"
							/>
						</a>
						<div className="stories-content">
							<ul className="d-flex justify-content-between">
								<li className="date">{currentNew.pubDate}</li>
							</ul>
							<a
								href={currentNew.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<h3>{currentNew.title}</h3>
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
