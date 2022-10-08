import colors from '../colors.js';

const oopStyles = [
    {
        name: 'User-defined class names',
        scope: ['entity.name.type.class, entity.name.class'],
        settings: {
            foreground: colors.dustyOrange[400],
        },
    },
    {
        name: 'this | super | self | etc.',
        scope: [
            'keyword.expressions-and-types.swift',
            'keyword.other.this',
            'variable.language',
            'variable.language punctuation.definition.variable.php',
            'variable.other.readwrite.instance.ruby',
            'variable.parameter.function.language.special',
        ],
        settings: {
            foreground: colors.fuchsia[300],
            fontStyle: 'italic',
        },
    },
    {
        name: 'Inherited classes',
        scope: ['entity.other.inherited-class'],
        settings: {
            foreground: colors.dustyOrange[400],
            fontStyle: 'italic',
        },
    },
];

export default oopStyles;
