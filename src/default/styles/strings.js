import colors from '../colors.js';

const stringsStyles = [
    {
        name: 'Strings',
        scope: ['string'],
        settings: {
            foreground: colors.tealishGreen[400],
        },
    },
    {
        name: 'String quotes (temporary vscode fix)',
        scope: [
            'punctuation.definition.string.begin',
            'punctuation.definition.string.end',
        ],
        settings: {
            foreground: colors.tealishGreen[400],
        },
    },
    {
        name: 'Property quotes (temporary vscode fix)',
        scope: [
            'punctuation.support.type.property-name.begin',
            'punctuation.support.type.property-name.end',
        ],
        settings: {
            foreground: colors.debianRed[400],
        },
    },
    {
        name: 'Docstrings',
        scope: [
            'string.quoted.docstring.multi',
            'string.quoted.docstring.multi.python punctuation.definition.string.begin',
            'string.quoted.docstring.multi.python punctuation.definition.string.end',
            'string.quoted.docstring.multi.python constant.character.escape',
        ],
        settings: {
            foreground: colors.tealishGreen[400],
        },
    },
];

export default stringsStyles;
