export const SITE_TITLE = 'Mohammed Faour';
export const SITE_DESCRIPTION =
	'Product engineer in Munich. I own logistics products end to end, from spec to production, with a backend core on AWS and AI agents in the loop.';

export const EMAIL = 'faour606@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/mohammed-faour';
export const GITHUB = 'https://github.com/mfaour34';

// First engineering job (Presentail), used for the live "years of experience" counter.
export const CAREER_START = { year: 2020, month: 8 };

export function yearsSince({ year, month }: { year: number; month: number }, now = new Date()) {
	return now.getFullYear() - year - (now.getMonth() + 1 < month ? 1 : 0);
}
