export function readingTime(markdown: string) {
	const words = markdown.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 220));
}
