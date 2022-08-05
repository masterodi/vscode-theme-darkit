import colors from '../colors.js';

const constantsStyles = [
    {
        name: 'Constants',
        scope: ['constant'],
        settings: {
            foreground: colors.tealishGreen[400],
        },
    },
    {
        name: 'Numbers',
        scope: ['constant.numeric'],
        settings: {
            foreground: colors.fuchsia[300],
        },
    },
    {
        name: 'Variable constant',
        scope: ['variable.other.constant'],
        settings: {
            foreground: colors.neutral[200],
        },
    },
    {
        name: 'Constant escape sequences',
        scope: [
            'constant.character.escape',
            'constant.character.string.escape',
            'constant.regexp',
        ],
        settings: {
            foreground: colors.primary[200],
        },
    },
];

export default constantsStyles;
