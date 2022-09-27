import { redirect } from '@sveltejs/kit';
import { defaultLocale, locales, loadTranslations } from '$lib/translations';

/** @type {import('./$types').LayoutLoad} */
export function load({ params, url }) {
	const supportedLocales = locales.get();
	let locale = supportedLocales.find(
		(supportedLocale) => supportedLocale === params.lang.toLowerCase()
	);

	if (locale === defaultLocale) {
		throw redirect(
			307,
			url.pathname
				// Replace nested locale routes
				// e.g. example.com/en/about -> example.com/about
				.replace(`/${locale}/`, '/')
				// Replace base locale routes
				// e.g. example.com/en -> example.com
				.replace(`/${locale}`, '')
		);
	} else {
		loadTranslations(locale ?? defaultLocale);
	}
}
