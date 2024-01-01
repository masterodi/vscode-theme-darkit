import Color from 'color';

export const sanitizeColor = (color) => {
	if (color instanceof Color) {
		return color.hex();
	}

	if (!color || color === '') {
		return undefined;
	}

	return color;
};

export const parseWorkbenchColors = (workbenchColors) => {
	return Object.fromEntries(
		Object.entries(workbenchColors).map(([k, v]) => [k, sanitizeColor(v)])
	);
};

export const parseTokenColors = (tokenColors) => {
	return tokenColors.map((color) => ({
		...color,
		settings: {
			...color.settings,
			foreground: sanitizeColor(color.settings.foreground),
		},
	}));
};

export const THEMES_PATH = `${process.cwd()}/themes`;

export const getThemePath = (theme) => {
	return `${THEMES_PATH}/${theme.name.replaceAll(' ', '-')}.json`;
};
