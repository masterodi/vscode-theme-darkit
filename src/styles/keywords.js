import colors from '../colors.js';

const keywordsStyle = [
    {
        name: 'Keywords',
        scope: ['keyword', 'punctuation.definition.keyword'],
        settings: {
            foreground: colors.debianRed[300],
        },
    },
    {
        name: "Keyword 'new'",
        scope: ['keyword.control.new', 'keyword.operator.new'],
        settings: {
            foreground: colors.debianRed[300],
            fontStyle: 'bold',
        },
    },
    {
        name: 'Generic selectors (CSS/SCSS/Less/Stylus)',
        scope: ['meta.selector'],
        settings: {
            foreground: colors.neutral[500],
        },
    },
];

export default keywordsStyle;
