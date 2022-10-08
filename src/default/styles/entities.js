import colors from '../colors.js';

const entitiesStyles = [
    {
        name: 'HTML tags',
        scope: ['entity.name.tag'],
        settings: {
            foreground: colors.blizzardBlue[500],
        },
    },
    {
        name: 'CSS attribute parent selectors (' & ')',
        scope: ['entity.other.attribute-name.parent-selector'],
        settings: {
            foreground: colors.blizzardBlue[300],
        },
    },
    {
        name: 'HTML/CSS attribute names',
        scope: ['entity.other.attribute-name'],
        settings: {
            foreground: colors.indigo[400],
            fontStyle: 'italic',
        },
    },
    {
        name: 'HTML Tag Definition',
        scope: [
            'punctuation.definition.tag.begin',
            'punctuation.definition.tag.end',
        ],
        settings: {
            foreground: colors.blizzardBlue[400],
        },
    },
];

export default entitiesStyles;
