import { mkdir, writeFile } from 'fs';
import remakeTheme from './remake/theme.js';
import yamiTheme from './yami/theme.js';

const THEMES_PATH = `${process.cwd()}/themes`;

const buildThemes = (...themes) => {
	mkdir(THEMES_PATH, { recursive: true }, (err) => {
		if (err) {
			console.log(err);
			process.exit(1);
		}

		for (const theme of themes) {
			const THEME_PATH = `${THEMES_PATH}/${theme.name.replaceAll(
				' ',
				'-'
			)}-color-theme.json`;
			writeFile(
				THEME_PATH,
				JSON.stringify(theme, undefined, 4),
				(err) => {
					if (err) {
						console.log(err);
						process.exit(1);
					}
				}
			);
		}
	});
};

buildThemes(remakeTheme, yamiTheme);
