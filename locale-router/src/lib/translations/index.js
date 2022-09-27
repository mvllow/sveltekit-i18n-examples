import i18n from 'sveltekit-i18n';
import en from './en.json';
import it from './it.json';

const supportedLanguages = {
	en: 'English',
	it: 'Italiano'
};

/** @type {import('sveltekit-i18n').Config} */
const config = {
	translations: {
		en: { ...en, supportedLanguages },
		it: { ...it, supportedLanguages }
	}
};

export const defaultLocale = 'en';

export const { t, locale, locales, loading, loadTranslations, translations } = new i18n(config);
