import colors from '../colors.js';

const languageBuiltInsStyles = [
    {
        name: 'Language Built-ins',
        scope: ['support'],
        settings: {
            foreground: colors.dustyOrange[400],
            fontStyle: 'italic',
        },
    },
    {
        name: 'Built-in magic functions and constants',
        scope: [
            'support.function.magic',
            'support.variable',
            'variable.other.predefined',
        ],
        settings: {
            foreground: colors.fuchsia[300],
            fontStyle: '',
        },
    },
    {
        name: 'Built-in functions',
        scope: ['support.function'],
        settings: {
            foreground: colors.yaleBlue[400],
            fontStyle: '',
        },
    },
    {
        name: 'Built-in properties',
        scope: ['support.type', 'support.type.property-name'],
        settings: {
            foreground: colors.dustyOrange[400],
            fontStyle: '',
        },
    },
    {
        name: 'Json support.type.property-name',
        scope: ['support.type.property-name.json'],
        settings: {
            foreground: colors.debianRed[300],
        },
    },
];

export default languageBuiltInsStyles;
