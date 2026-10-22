export const SITE_TITLE = 'Mohammed Faour';
export const SITE_DESCRIPTION =
	'Senior Software Engineer in Munich. Backend and serverless systems on AWS, logistics platforms, and building with AI agents.';

export const EMAIL = 'faour606@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/mohammed-faour';
export const GITHUB = 'https://github.com/mfaour34';

// First engineering job (Presentail), used for the live "years of experience" counter.
export const CAREER_START = { year: 2020, month: 8 };

export function yearsSince({ year, month }: { year: number; month: number }, now = new Date()) {
	return now.getFullYear() - year - (now.getMonth() + 1 < month ? 1 : 0);
}
