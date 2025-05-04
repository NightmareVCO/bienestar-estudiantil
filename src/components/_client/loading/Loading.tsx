// This is a JXS component because we are using it inside a JSX file
// Astro components cannot be used inside a JSX file
export default function Loading() {
	return (
		<div className="loading-spinner-container">
			<div className="spinner" />
		</div>
	);
}
