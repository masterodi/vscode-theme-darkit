import { clrs } from './colors.js';
import { workbenchStyles } from './styles/index.js';

const themev2 = {
    name: 'Darkit-Reborn',
    colors: workbenchStyles,
    semanticHighlighting: true,
    tokenColors: [
        {
            name: 'Comments',
            scope: ['comment'],
            settings: {
                foreground: clrs.neutral[500],
            },
        },
        {
            name: 'Variable',
            scope: ['variable'],
            settings: { foreground: clrs.neutral[100] },
        },
        {
            name: 'Functions',
            scope: [
                'entity.name.function',
                'support.function',
                'meta.function-call.generic',
            ],
            settings: {
                foreground: clrs.purple[300],
            },
        },
        {
            name: 'Keywords | Keyword operator',
            scope: ['keyword', 'meta.method.declaration storage.type'],
            settings: {
                foreground: clrs.indigo[400],
            },
        },
        {
            name: 'Storage (let, const, async, function, class, extends, ...) | Variable language | Keyword operator expression | Keyword operator new',
            scope: [
                'storage',
                'variable.language',
                'keyword.operator.expression',
                'keyword.operator.new',
                'keyword.function',
            ],
            settings: {
                foreground: clrs.indigo[400],
            },
        },
        {
            name: 'Classes',
            scope: [
                'support.class',
                'entity.name.type',
                'entity.other.inherited-class',
                'entity.name.scope-resolution',
                'support.type',
            ],
            settings: {
                foreground: clrs.blizzardBlue[500],
            },
        },
        {
            name: 'Primitives',
            scope: ['support.type.primitive'],
            settings: {
                foreground: clrs.red[300],
            },
        },
        {
            name: 'Strings',
            scope: ['string'],
            settings: {
                foreground: clrs.tealishGreen[300],
            },
        },
        {
            name: 'Tags',
            scope: [
                'entity.name.tag',
                'support.type.property-name.json',
                'variable.language.this',
                'variable.language.super',
                'variable.parameter.function.language.special.self',
            ],
            settings: {
                foreground: clrs.red[300],
            },
        },
        {
            name: 'Punctuation tag',
            scope: [
                'punctuation.definition.tag.begin',
                'punctuation.definition.tag.end',
                'punctuation.definition.typeparameters.begin',
                'punctuation.definition.typeparameters.end',
            ],
            settings: {
                foreground: clrs.neutral[400],
            },
        },
        {
            name: 'Attribute name',
            scope: ['entity.other.attribute-name'],
            settings: {
                foreground: clrs.zinc[400],
            },
        },
        {
            name: 'Ids',
            scope: ['entity.other.attribute-name.id'],
            settings: {
                foreground: clrs.kiwi[500],
            },
        },
        {
            name: 'Constant',
            scope: ['support.constant', 'constant.language'],
            settings: {
                foreground: clrs.vividGreen[500],
            },
        },
        {
            name: 'Numeric constant',
            scope: ['constant.numeric'],
            settings: {
                foreground: clrs.vividGreen[500],
            },
        },
        {
            name: 'Keyword operator',
            scope: [
                'keyword.operator',
                'keyword.operator.assignment',
                'punctuation.accessor',
            ],
            settings: {
                foreground: clrs.radialRed[500],
            },
        },
        {
            name: 'CSS property name',
            scope: [
                'source.css support.type.property-name',
                'meta.property-list entity.name.tag',
            ],
            settings: {
                foreground: clrs.blue[300],
            },
        },
    ],
};

export default themev2;
