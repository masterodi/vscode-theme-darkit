import colors, { clrs } from './colors.js';
import { workbenchStyles } from './styles/index.js';

const themev3 = {
    name: 'Darkit-Knight',
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
            settings: { foreground: clrs.neutral[200] },
        },
        {
            name: 'Functions',
            scope: [
                'entity.name.function',
                'support.function',
                'meta.function-call.generic',
            ],
            settings: {
                foreground: clrs.celeste[400],
            },
        },
        {
            name: 'Function parameter',
            scope: ['variable.parameter'],
            settings: {
                foreground: colors.neutral[50],
                fontStyle: 'italic',
            },
        },
        {
            name: 'Keywords | Keyword operator',
            scope: ['keyword', 'meta.method.declaration storage.type'],
            settings: {
                foreground: clrs.fuchsia[300],
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
                foreground: clrs.fuchsia[300],
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
                foreground: clrs.blue[400],
            },
        },
        {
            name: 'Primitives',
            scope: [
                'support.type.primitive',
                'entity.other.attribute-name.pseudo-class',
                'entity.other.attribute-name.pseudo-element',
            ],
            settings: {
                foreground: clrs.tealishGreen[300],
            },
        },
        {
            name: 'Strings',
            scope: ['string'],
            settings: {
                foreground: clrs.indigo[300],
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
                'entity.name.tag.reference',
            ],
            settings: {
                foreground: colors.lavenderPink[500],
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
                foreground: clrs.neutral[300],
            },
        },
        {
            name: 'Attribute name',
            scope: ['entity.other.attribute-name'],
            settings: {
                foreground: clrs.blue[200],
                fontStyle: 'italic',
            },
        },
        {
            name: 'Ids',
            scope: ['entity.other.attribute-name.id'],
            settings: {
                foreground: clrs.tealishGreen[300],
            },
        },
        {
            name: 'Constant',
            scope: ['support.constant', 'constant.language'],
            settings: {
                foreground: clrs.radialRed[500],
            },
        },
        {
            name: 'Numeric constant',
            scope: ['constant.numeric'],
            settings: {
                foreground: clrs.radialRed[500],
            },
        },
        {
            name: 'Keyword operator',
            scope: [
                'keyword.operator',
                'keyword.operator.assignment',
                'punctuation.accessor',
                'punctuation.separator.key-value',
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
                foreground: clrs.zinc[300],
            },
        },
        {
            name: 'Variable other property',
            scope: [
                'support.function.magic',
                'support.variable',
                'variable.other.predefined',
                'variable.other.property',
                'meta.object.member',
            ],
            settings: {
                foreground: clrs.indigo[200],
            },
        },
        {
            name: 'Variable other readwrite alias',
            scope: ['variable.other.readwrite.alias'],
            settings: {
                foreground: clrs.tealishGreen[300],
            },
        },
    ],
};

export default themev3;
