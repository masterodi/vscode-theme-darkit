import { mkdirSync, writeFileSync } from 'fs';
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
	const result = mkdirSync(THEMES_PATH, { recursive: true });

	for (const theme of themes) {
		const THEME_PATH = getThemePath(theme);
		const parsedTheme = parseTheme(theme);

		writeFileSync(THEME_PATH, parsedTheme);
	}
};

buildThemes(base, astral, malakai);
