import Color from 'color';

const generatePalette = (baseColor, rewrite = {}) => {
	const palette = {
		50: baseColor.lighten(0.5),
		100: baseColor.lighten(0.4),
		200: baseColor.lighten(0.3),
		300: baseColor.lighten(0.2),
		400: baseColor.lighten(0.1),
		500: baseColor,
		600: baseColor.darken(0.1),
		700: baseColor.darken(0.2),
		800: baseColor.darken(0.3),
		900: baseColor.darken(0.4),
		1000: baseColor.darken(0.5),
	};

	return { ...palette, ...rewrite };
};

const transparent = '#00000000';
const white = '#fff';
const black = '#000';

const baseGray = Color('#777');
const baseDarkGray = Color('#18181f');
const baseTeal = Color('#24ffe8');
const baseCyan = Color('#43e9f2');
const basePinkRed = Color('#ff4d74');
const basePaleBlue = Color('#7883ad');
const baseOrange = Color('#f78764');
const baseLightBlue = Color('#54c9ff');
const baseEmerald = Color('#4dffaf');
const baseIndigo = Color('#694eed');
const basePurpleBlue = Color('#4e53ed');
const baseYellow = Color('#f9d949');
const basePink = Color('#E384FF');

const gray = generatePalette(baseGray);
const darkGray = generatePalette(baseDarkGray);
const teal = generatePalette(baseTeal);
const cyan = generatePalette(baseCyan);
const pinkRed = generatePalette(basePinkRed);
const paleBlue = generatePalette(basePaleBlue);
const orange = generatePalette(baseOrange);
const lightBlue = generatePalette(baseLightBlue);
const emerald = generatePalette(baseEmerald);
const indigo = generatePalette(baseIndigo);
const purpleBlue = generatePalette(basePurpleBlue);
const yellow = generatePalette(baseYellow);
const pink = generatePalette(basePink);

const colors = {
	transparent,
	white,
	black,
	gray,
	darkGray,
	teal,
	cyan,
	pinkRed,
	paleBlue,
	orange,
	lightBlue,
	emerald,
	indigo,
	purpleBlue,
	yellow,
	pink,
};

export default colors;
