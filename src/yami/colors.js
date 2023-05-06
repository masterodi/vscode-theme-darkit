import Color from 'color';

const generatePalette = (color, rewrite = {}) => {
	let clr = color;

	if (typeof clr === 'string') {
		clr = Color(clr);
	}

	const palette = {
		50: clr.lighten(0.5),
		100: clr.lighten(0.4),
		200: clr.lighten(0.3),
		300: clr.lighten(0.2),
		400: clr.lighten(0.1),
		500: clr,
		600: clr.darken(0.1),
		700: clr.darken(0.2),
		800: clr.darken(0.3),
		900: clr.darken(0.4),
		1000: clr.darken(0.5),
	};

	return { ...palette, ...rewrite };
};

const colors = {
	transparent: '#00000000',
	black: '#000',
	white: '#fff',
	gray: generatePalette('#888888'),
	darkGray: generatePalette('#161616'),
	red: generatePalette('#fc5d5d'),
	orangeRed: generatePalette('#ff7559'),
	orange: generatePalette('#fc8a5d'),
	yellowOrange: generatePalette('#ffc64d'),
	yellow: generatePalette('#fcef5d'),
	greenYellow: generatePalette('#e3ff59'),
	green: generatePalette('#78fc5d'),
	blueGreen1: generatePalette('#59ff90'),
	blueGreen2: generatePalette('#59ffbd'),
	blueGreen3: generatePalette('#59ffd8'),
	blueGreen4: generatePalette('#5efcff'),
	blue: generatePalette('#5182fc'),
	indigo: generatePalette('#625dfc'),
	violet: generatePalette('#a32eff'),
	pink: generatePalette('#f15dfc'),
	pinkRed: generatePalette('#ff597a'),
};

export default colors;
