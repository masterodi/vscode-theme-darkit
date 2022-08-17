import chroma from 'chroma-js';
import { mkdir, writeFileSync } from 'fs';
import theme from './theme.js';
import themev2 from './themev2.js';

const changeColorsToHexAlphas = (theme) => {
    for (const [key, value] of Object.entries(theme)) {
        if (typeof value === 'object') {
            changeColorsToHexAlphas(value);
        }
        if (value.hasOwnProperty('_rgb')) {
            theme[key] = chroma(value).hex();
        }
    }
    return theme;
};

const parseTheme = (theme) =>
    JSON.stringify(changeColorsToHexAlphas(theme), null, 4);

mkdir('./themes', { recursive: true }, (err) => {
    if (err) {
        process.exit(1);
    }
    writeFileSync(`./themes/${theme.name}-color-theme.json`, parseTheme(theme));
    writeFileSync(
        `./themes/${themev2.name}-color-theme.json`,
        parseTheme(themev2)
    );
});
