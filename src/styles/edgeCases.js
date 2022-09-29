import colors from '../colors.js';

const edgeCasesStyles = [
    {
        name: 'Edge cases (foreground color resets)',
        scope: [
            'constant.other.symbol.hashkey.ruby',
            'keyword.operator.dereference.java',
            'keyword.operator.navigation.groovy',
            'meta.scope.for-loop.shell punctuation.definition.string.begin',
            'meta.scope.for-loop.shell punctuation.definition.string.end',
            'meta.scope.for-loop.shell string',
            'storage.modifier.import',
            'punctuation.section.embedded.begin.tsx',
            'punctuation.section.embedded.end.tsx',
            'punctuation.section.embedded.begin.jsx',
            'punctuation.section.embedded.end.jsx',
            'punctuation.separator.list.comma.css',
            'constant.language.empty-list.haskell',
        ],
        settings: {
            foreground: colors.neutral[200],
        },
    },
    {
        name: 'Shell variables prefixed with "$" (edge case)',
        scope: ['source.shell variable.other'],
        settings: {
            foreground: colors.neutral[200],
        },
    },
    {
        name: 'Powershell constants mistakenly scoped to `support`, rather than `constant` (edge)',
        scope: ['support.constant'],
        settings: {
            fontStyle: 'normal',
            foreground: colors.tealishGreen[300],
        },
    },
    {
        name: 'Makefile prerequisite names',
        scope: ['meta.scope.prerequisites.makefile'],
        settings: {
            foreground: colors.neutral[500],
        },
    },
    {
        name: 'SCSS attibute selector strings',
        scope: ['meta.attribute-selector.scss'],
        settings: {
            foreground: colors.neutral[500],
        },
    },
    {
        name: 'SCSS attribute selector brackets',
        scope: [
            'punctuation.definition.attribute-selector.end.bracket.square.scss',
            'punctuation.definition.attribute-selector.begin.bracket.square.scss',
        ],
        settings: {
            foreground: colors.neutral[500],
        },
    },
    {
        name: 'Haskell Pragmas',
        scope: ['meta.preprocessor.haskell'],
        settings: {
            foreground: colors.neutral[500],
        },
    },
    {
        name: 'Log file error',
        scope: ['log.error'],
        settings: {
            foreground: colors.neutral[500],
            fontStyle: 'bold',
        },
    },
    {
        name: 'Log file warning',
        scope: ['log.warning'],
        settings: {
            foreground: colors.neutral[500],
            fontStyle: 'bold',
        },
    },
];

export default edgeCasesStyles;
