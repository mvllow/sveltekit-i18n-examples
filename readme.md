# sveltekit-i18n-examples

Work in progress examples to update, and possibly simplify, the current [sveltekit-i18n](https://github.com/sveltekit-i18n/lib) examples.

Once in a more complete state, I intend on making a PR to update the upstream examples.

## Current status

My personal focus is on the locale based routing examples. The goal is to treat the default locale as the root, e.g. if "en" is the default, then "/en" would redirect to "/". [astro-i18next](https://astro-i18next.yassinedoghri.com) has a lovely `generate` command which I'd also like to reproduce (see https://github.com/sveltekit-i18n/lib/issues/72).

Any contributions are much appreciated – some may be better suited for the upstream library rather than this temporary examples library but your judgement is advised :)

| Example              | Status                                                                                              |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| locale-router        | Missing locale detection. Manual navigation works.                                                  |
| locale-router-static | `locale-router` but using the static adapter as well as setting prerender globally in `+layout.js`. |
