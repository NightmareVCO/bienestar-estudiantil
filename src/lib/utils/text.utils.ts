export const truncateText = ({
	text,
	maxLength,
}: { text: string; maxLength: number }) => {
	return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};
