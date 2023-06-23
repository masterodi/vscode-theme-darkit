import Color from 'color';

export const maybeGetHex = (color) => {
	return color instanceof Color ? color.hex() : color;
};

export const parseWorkbenchColors = (workbenchColors) => {
	return Object.fromEntries(
		Object.entries(workbenchColors).map(([k, v]) => [k, maybeGetHex(v)])
	);
};

export const parseTokenColors = (tokenColors) => {
	return tokenColors.map((color) => ({
		...color,
		settings: {
			...color.settings,
			foreground: maybeGetHex(color.settings.foreground),
		},
	}));
};

export const THEMES_PATH = `${process.cwd()}/themes`;

export const getThemePath = (theme) => {
	return `${THEMES_PATH}/${theme.name.replaceAll(' ', '-')}-color-theme.json`;
};
