import colors from '../colors.js';

const regexpStyles = [
    {
        name: 'RegExp string',
        scope: [
            'string.regexp',
            'constant.other.character-class.set.regexp',
            'constant.character.escape.backslash.regexp',
        ],
        settings: {
            foreground: colors.blizzardBlue[400],
        },
    },
    {
        name: 'Non-capture operators',
        scope: ['punctuation.definition.group.capture.regexp'],
        settings: {
            foreground: colors.blizzardBlue[300],
        },
    },
    {
        name: 'RegExp start and end characters',
        scope: [
            'string.regexp punctuation.definition.string.begin',
            'string.regexp punctuation.definition.string.end',
        ],
        settings: {
            foreground: colors.debianRed[400],
        },
    },
    {
        name: 'Character group',
        scope: ['punctuation.definition.character-class.regexp'],
        settings: {
            foreground: colors.debianRed[400],
        },
    },
    {
        name: 'Capture groups',
        scope: ['punctuation.definition.group.regexp'],
        settings: {
            foreground: colors.debianRed[400],
        },
    },
    {
        name: 'Assertion operators',
        scope: [
            'punctuation.definition.group.assertion.regexp',
            'keyword.operator.negation.regexp',
        ],
        settings: {
            foreground: colors.debianRed[400],
        },
    },
    {
        name: 'Positive lookaheads',
        scope: ['meta.assertion.look-ahead.regexp'],
        settings: {
            foreground: colors.debianRed[400],
        },
    },
];

export default regexpStyles;
