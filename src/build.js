import chroma from 'chroma-js';
import { mkdir, writeFileSync } from 'fs';
import darkitTheme from './default/theme.js';
import darkitRemakeTheme from './remake/theme.js';

const changeColorsToHexAlphas = (theme) => {
    for (const [key, value] of Object.entries(theme)) {
        if (typeof value === 'object') {
            changeColorsToHexAlphas(value);
        }
        if (value?.hasOwnProperty('_rgb')) {
            theme[key] = chroma(value).hex();
        }
    }
    return theme;
};

const parseTheme = (theme) =>
    JSON.stringify(changeColorsToHexAlphas(theme), null, 4);

const buildThemes = (themes) => {
    mkdir('./themes', { recursive: true }, (err) => {
        if (err) {
            process.exit(1);
        }

        themes.forEach((theme) => {
            writeFileSync(
                `./themes/${theme.name.replaceAll(' ', '-')}-color-theme.json`,
                parseTheme(theme)
            );
        });
    });
};

buildThemes([darkitTheme, darkitRemakeTheme]);
