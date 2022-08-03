import { writeFileSync } from 'fs';
import theme from './theme.js';

const res = theme;

delete res['clr'];

const themeJson = JSON.stringify(res, null, 4);

writeFileSync(`${process.cwd()}/themes/Darkit-color-theme.json`, themeJson);
