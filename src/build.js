import { mkdir, writeFile } from 'fs';
import { astral, base, malakai } from './themes/index.js';
import {
	THEMES_PATH,
	getThemePath,
	parseTokenColors,
	parseWorkbenchColors,
} from './utils.js';

const parseTheme = (theme) => {
	const { colors: workbenchColors, tokenColors } = theme;

	const parsedWorkbenchColors = parseWorkbenchColors(workbenchColors);
	const parsedTokenColors = parseTokenColors(tokenColors);

	const parsedTheme = {
		...theme,
		colors: parsedWorkbenchColors,
		tokenColors: parsedTokenColors,
	};

	return JSON.stringify(parsedTheme, undefined, 4);
};

const buildThemes = (...themes) => {
	const handleError = (err) => {
		if (err) {
			console.log(err);
			process.exit(1);
		}
	};

	mkdir(THEMES_PATH, { recursive: true }, (err) => {
		handleError(err);

		for (const theme of themes) {
			const THEME_PATH = getThemePath(theme);
			const parsedTheme = parseTheme(theme);

			writeFile(THEME_PATH, parsedTheme, (err) => {
				handleError(err);
			});
		}
	});
};

buildThemes(base, astral, malakai);
