import { defaultLocale, loadTranslations } from '$lib/translations';

/** @type {import('./$types').PageLoad} */
export function load() {
	loadTranslations(defaultLocale);
}
