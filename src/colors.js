import chroma from 'chroma-js';

const generatePalette = (baseColor) => {
    return {
        50: baseColor.brighten(3),
        100: baseColor.brighten(2.75),
        200: baseColor.brighten(2.25),
        300: baseColor.brighten(1.35),
        400: baseColor.brighten(0.75),
        500: baseColor,
        600: baseColor.darken(1.25),
        700: baseColor.darken(1.75),
        800: baseColor.darken(2.25),
        900: baseColor.darken(2.55),
    };
};

const transparent = chroma('#000000').alpha(0);

const baseNeutral = chroma('#777a80');
const neutral = generatePalette(baseNeutral);

const basePrimary = chroma('#6366f1');
const primary = generatePalette(basePrimary);

const baseSuccess = chroma('#10b981');
const success = generatePalette(baseSuccess);

const baseError = chroma('#ef4444');
const error = generatePalette(baseError);

const baseWarning = chroma('#f59e0b');
const warning = generatePalette(baseWarning);

const baseBlizzardBlue = chroma('#8eebec');
const blizzardBlue = generatePalette(baseBlizzardBlue);

const baseLavenderPink = chroma('#f77fbe');
const lavenderPink = generatePalette(baseLavenderPink);

const baseDebianRed = chroma('#E30B5D');
const debianRed = generatePalette(baseDebianRed);

const baseDustyOrange = chroma('#FF8040');
const dustyOrange = generatePalette(baseDustyOrange);

const baseMikadoYellow = chroma('#FFC901');
const mikadoYellow = generatePalette(baseMikadoYellow);

const baseAlienGreen = chroma('#84bb3c');
const alienGreen = generatePalette(baseAlienGreen);

const baseTealishGreen = chroma('#12E193');
const tealishGreen = generatePalette(baseTealishGreen);

const baseYaleBlue = chroma('#0e83e3');
const yaleBlue = generatePalette(baseYaleBlue);

const baseFerrariRed = chroma('#E30022');
const ferrariRed = generatePalette(baseFerrariRed);

const baseMagenta = chroma('#9900cc');
const magenta = generatePalette(baseMagenta);

const colors = {
    transparent,
    neutral,
    primary,
    success,
    error,
    warning,
    blizzardBlue,
    lavenderPink,
    debianRed,
    dustyOrange,
    mikadoYellow,
    alienGreen,
    tealishGreen,
    yaleBlue,
    ferrariRed,
    magenta,
};

export default colors;
