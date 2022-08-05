import colors from '../colors.js';

const commentsStyles = [
    {
        name: 'Comments',
        scope: [
            'comment',
            'punctuation.definition.comment',
            'unused.comment',
            'wildcard.comment',
        ],
        settings: {
            foreground: colors.neutral[500],
        },
    },
    {
        name: 'JSDoc-style keywords',
        scope: [
            'comment keyword.codetag.notation',
            'comment.block.documentation keyword',
            'comment.block.documentation storage.type.class',
        ],
        settings: {
            foreground: colors.neutral[500],
        },
    },
    {
        name: 'JSDoc-style types',
        scope: ['comment.block.documentation entity.name.type'],
        settings: {
            foreground: colors.neutral[500],
            fontStyle: 'italic',
        },
    },
    {
        name: 'JSDoc-style type brackets',
        scope: [
            'comment.block.documentation entity.name.type punctuation.definition.bracket',
        ],
        settings: { foreground: colors.neutral[500] },
    },
    {
        name: 'JSDoc-style comment parameters',
        scope: ['comment.block.documentation variable'],
        settings: { foreground: colors.neutral[500], fontStyle: 'italic' },
    },
];

export default commentsStyles;
