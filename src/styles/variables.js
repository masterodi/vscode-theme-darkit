import colors from '../colors.js';

const variablesStyles = [
    {
        name: 'Variables and object properties',
        scope: [
            'variable',
            'constant.other.key.perl',
            'support.variable.property',
            'variable.other.constant.js',
            'variable.other.constant.ts',
            'variable.other.constant.tsx',
        ],
        settings: {
            foreground: colors.neutral[200],
        },
    },
    {
        name: 'Destructuring / aliasing reference name (LHS)',
        scope: [
            'meta.import variable.other.readwrite',
            'meta.variable.assignment.destructured.object.coffee variable',
        ],
        settings: {
            fontStyle: 'italic',
            foreground: colors.neutral[200],
        },
    },
    {
        name: 'Destructuring / aliasing variable name (RHS)',
        scope: [
            'meta.import variable.other.readwrite.alias',
            'meta.export variable.other.readwrite.alias',
            'meta.variable.assignment.destructured.object.coffee variable variable',
        ],
        settings: {
            fontStyle: 'normal',
            foreground: colors.neutral[200],
        },
    },
    {
        name: 'Variable property',
        scope: ['variable.other.property'],
        settings: {
            foreground: colors.indigo[300],
        },
    },
];

export default variablesStyles;
