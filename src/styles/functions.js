import colors from '../colors.js';

const functionsStyles = [
    {
        name: 'Function names',
        scope: [
            'entity.name.function',
            'meta.function-call.generic',
            'meta.function-call.object',
            'meta.function-call.php',
            'meta.function-call.static',
            'meta.method-call.java meta.method',
            'meta.method.groovy',
            'support.function.any-method.lua',
            'keyword.operator.function.infix',
        ],
        settings: {
            foreground: colors.yaleBlue[400],
        },
    },
    {
        name: 'Function parameters',
        scope: [
            'entity.name.variable.parameter',
            'meta.at-rule.function variable',
            'meta.at-rule.mixin variable',
            'meta.function.arguments variable.other.php',
            'meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql',
            'variable.parameter',
        ],
        settings: {
            foreground: colors.neutral[200],
            fontStyle: 'italic',
        },
    },
    {
        name: 'Decorators',
        scope: [
            'meta.decorator variable.other.readwrite',
            'meta.decorator variable.other.property',
        ],
        settings: {
            foreground: colors.blizzardBlue[300],
            fontStyle: 'italic',
        },
    },
    {
        name: 'Decorator Objects',
        scope: ['meta.decorator variable.other.object'],
        settings: {
            foreground: colors.yaleBlue[400],
        },
    },
];

export default functionsStyles;
