import colors from '../colors.js';

const generalStyles = [
    {
        name: 'Emphasis',
        scope: ['emphasis'],
        settings: {
            fontStyle: 'italic',
        },
    },
    {
        name: 'Strong',
        scope: ['strong'],
        settings: {
            fontStyle: 'bold',
        },
    },
    {
        name: 'Header',
        scope: ['header'],
        settings: {
            foreground: colors.primary[400],
        },
    },
    {
        name: 'Meta Diff',
        scope: ['meta.diff', 'meta.diff.header'],
        settings: {
            foreground: colors.neutral[500],
        },
    },
    {
        name: 'Markup Inserted',
        scope: ['markup.inserted'],
        settings: {
            foreground: colors.success[500],
        },
    },
    {
        name: 'Markup Deleted | Markup Error',
        scope: ['markup.deleted', 'markup.error'],
        settings: {
            foreground: colors.error[500],
        },
    },
    {
        name: 'Markup Changed',
        scope: ['markup.changed'],
        settings: {
            foreground: colors.warning[500],
        },
    },
    {
        name: 'Invalid',
        scope: ['invalid'],
        settings: {
            foreground: colors.error[500],
            fontStyle: 'underline italic',
        },
    },
    {
        name: 'Invalid Deprecated',
        scope: ['invalid.deprecated'],
        settings: {
            foreground: colors.error[300],
            fontStyle: 'underline italic',
        },
    },
    {
        name: 'Entity Name Filename',
        scope: ['entity.name.filename'],
        settings: {
            foreground: colors.mikadoYellow[400],
        },
    },
];

export default generalStyles;
