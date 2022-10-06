import chroma from 'chroma-js';

const generatePalette = (baseColor) => {
    return {
        50: baseColor.brighten(3),
        100: baseColor.brighten(2.75),
        200: baseColor.brighten(2.25),
        300: baseColor.brighten(1.35),
        400: baseColor.brighten(0.725),
        500: baseColor,
        600: baseColor.darken(1.25),
        700: baseColor.darken(1.75),
        800: baseColor.darken(2.25),
        900: baseColor.darken(2.55),
    };
};

const slate = {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
};

const gray = {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
};

const zinc = {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
};

// const neutral = {
//     50: '#fafafa',
//     100: '#f5f5f5',
//     200: '#e5e5e5',
//     300: '#d4d4d4',
//     400: '#a3a3a3',
//     500: '#737373',
//     600: '#525252',
//     700: '#404040',
//     800: '#262626',
//     900: '#171717',
// };

const stone = {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
};

const red = {
    50: '#FFB8C7',
    100: '#FFA3B7',
    200: '#FF7A97',
    300: '#FF5277',
    400: '#FF2957',
    500: '#FF0037',
    600: '#C7002B',
    700: '#8F001F',
    800: '#570013',
    900: '#1F0007',
};

const orange = {
    50: '#FFEFDE',
    100: '#FFE6C9',
    200: '#FFD3A0',
    300: '#FFC078',
    400: '#FFAD4F',
    500: '#FF9A26',
    600: '#ED7F00',
    700: '#B56100',
    800: '#7D4300',
    900: '#452500',
};

const amber = {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
};

const yellow = {
    50: '#FFFDF0',
    100: '#FFFBDB',
    200: '#FFF7B2',
    300: '#FFF38A',
    400: '#FFEF61',
    500: '#FFEB38',
    600: '#FFE500',
    700: '#C7B300',
    800: '#8F8000',
    900: '#574E00',
};

const lime = {
    50: '#f7fee7',
    100: '#ecfccb',
    200: '#d9f99d',
    300: '#bef264',
    400: '#a3e635',
    500: '#84cc16',
    600: '#65a30d',
    700: '#4d7c0f',
    800: '#3f6212',
    900: '#365314',
};

const green = {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
};

const emerald = {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
};

const teal = {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
};

const cyan = {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
};

const sky = {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
};

const blue = {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
};

const indigo = {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
};

const violet = {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
};

const purple = {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
};

const fuchsia = {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
};

const pink = {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
    900: '#831843',
};

const rose = {
    50: '#FFCFE3',
    100: '#FFBAD7',
    200: '#FF91BF',
    300: '#FF69A7',
    400: '#FF4090',
    500: '#FF1778',
    600: '#DE005D',
    700: '#A60045',
    800: '#6E002E',
    900: '#360016',
};

const vividBlue = {
    50: '#B1CDF8',
    100: '#9EC1F7',
    200: '#79A9F4',
    300: '#5391F0',
    400: '#2E79ED',
    500: '#1363DF',
    600: '#0F4CAB',
    700: '#0A3578',
    800: '#061E44',
    900: '#010710',
};

const transparent = chroma('#000000').alpha(0);

const baseNeutral = chroma('#777a80');
const neutral = generatePalette(baseNeutral);

const basePrimary = chroma('#64748b');
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

const black = chroma('#000000');
const white = chroma('#ffffff');

const fieryRose = {
    50: '#FFFFFF',
    100: '#FFFBFC',
    200: '#FFD2DA',
    300: '#FFAAB8',
    400: '#FF8196',
    500: '#FF5874',
    600: '#FF2045',
    700: '#E70027',
    800: '#AF001D',
    900: '#770014',
};

const vividGreen = {
    50: '#FFFFFF',
    100: '#FFFFFF',
    200: '#DDFDE8',
    300: '#B7FBCE',
    400: '#90F8B3',
    500: '#6AF699',
    600: '#35F375',
    700: '#0EE255',
    800: '#0AAD41',
    900: '#07782D',
};

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
    slate,
    gray,
    zinc,
    stone,
    red,
    orange,
    yellow,
    amber,
    lime,
    green,
    emerald,
    teal,
    cyan,
    sky,
    blue,
    indigo,
    purple,
    fuchsia,
    pink,
    rose,
    vividBlue,
    white,
    black,
    fieryRose,
    vividGreen,
};

const radialRed = {
    50: '#FED9E6',
    100: '#FDC5D9',
    200: '#FC9DBF',
    300: '#FB75A6',
    400: '#FA4E8C',
    500: '#F92672',
    600: '#E10655',
    700: '#AA0540',
    800: '#74032C',
    900: '#3D0217',
};

const lightBlue = {
    50: '#FFFFFF',
    100: '#EAFBFF',
    200: '#C2F5FE',
    300: '#9AEEFE',
    400: '#71E7FD',
    500: '#49E0FD',
    600: '#12D7FC',
    700: '#02B2D3',
    800: '#02839C',
    900: '#015464',
};

const aquaGreen = {
    50: '#D1FAE6',
    100: '#BFF8DC',
    200: '#9AF5C7',
    300: '#75F1B3',
    400: '#50ED9E',
    500: '#2BE98A',
    600: '#15C76E',
    700: '#0F9452',
    800: '#0A6236',
    900: '#052F1A',
};

const kiwi = {
    50: '#F3FCE0',
    100: '#EBFACD',
    200: '#DCF7A8',
    300: '#CEF382',
    400: '#BFF05D',
    500: '#B0EC38',
    600: '#96D715',
    700: '#73A410',
    800: '#4F710B',
    900: '#2B3E06',
};

const celeste = {
    50: '#FFFFFF',
    100: '#F9FEFE',
    200: '#D3FBFA',
    300: '#AEF8F6',
    400: '#88F4F2',
    500: '#63F1EE',
    600: '#30ECE8',
    700: '#13D1CD',
    800: '#0E9E9B',
    900: '#0A6A68',
};

const poloBlue = {
    50: '#FFFFFF',
    100: '#FBFCFD',
    200: '#DDE9F2',
    300: '#BFD7E7',
    400: '#A2C4DC',
    500: '#84B1D1',
    600: '#5B97C2',
    700: '#3E7BA7',
    800: '#2F5D7E',
    900: '#203F55',
};

const lightCyan = {
    50: '#FFFFFF',
    100: '#FFFFFF',
    200: '#F5FEFE',
    300: '#CFFBFA',
    400: '#AAF8F5',
    500: '#84F5F1',
    600: '#50F1EB',
    700: '#1CEDE5',
    800: '#10C1BB',
    900: '#0B8D89',
};

export const clrs = {
    neutral,
    slate,
    gray,
    zinc,
    stone,
    red,
    orange,
    yellow,
    amber,
    lime,
    green,
    emerald,
    teal,
    cyan,
    sky,
    blue,
    indigo,
    purple,
    fuchsia,
    pink,
    rose,
    violet,
    white,
    black,
    radialRed,
    lightBlue,
    aquaGreen,
    kiwi,
    blizzardBlue,
    tealishGreen,
    celeste,
    vividGreen,
    poloBlue,
    lightCyan,
};

export default colors;
