import Color from 'color';

export const sanitizeColor = (color) => {
	if (!color || color === '') {
		return undefined;
	}

	if (color instanceof Color) {
		return color.hex().toLowerCase();
	}

	if (typeof color === 'string') {
		return color.toLowerCase();
	}

	throw new Error('Invalid color');
};

export const parseWorkbenchColors = (workbenchColors) => {
	const parsed = Object.entries(workbenchColors).map(([k, v]) => [
		k,
		sanitizeColor(v),
	]);

	return Object.fromEntries(parsed);
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
