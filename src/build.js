import Color from 'color';
import { mkdir, writeFile } from 'fs';
import astralTheme from './astral.js';
import defaultTheme from './default/theme.js';
import malakaiTheme from './malakai.js';

const THEMES_PATH = `${process.cwd()}/themes`;

const parseTheme = (theme) => {
	const { colors, tokenColors } = theme;

	const parsedColors = {};

	for (const [key, value] of Object.entries(colors)) {
		if (value instanceof Color) {
			parsedColors[key] = value.hex();
		} else {
			parsedColors[key] = value;
		}
	}

	const parsedTokenColors = [];

	for (const token of tokenColors) {
		if (token?.settings?.foreground instanceof Color) {
			const parsedForeground = token.settings.foreground.hex();
			parsedTokenColors.push({
				...token,
				settings: { ...token.settings, foreground: parsedForeground },
			});
		} else {
			parsedTokenColors.push(token);
		}
	}

	const parsedTheme = {
		...theme,
		colors: parsedColors,
		tokenColors: parsedTokenColors,
	};

	return JSON.stringify(parsedTheme, undefined, 4);
};

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
			writeFile(THEME_PATH, parseTheme(theme), (err) => {
				if (err) {
					console.log(err);
					process.exit(1);
				}
			});
		}
	});
};

buildThemes(defaultTheme, astralTheme, malakaiTheme);
