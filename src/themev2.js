import colors from './colors.js';
import { workbenchStyles } from './styles/index.js';

const themev2 = {
    name: 'DarkitII',
    colors: workbenchStyles,
    tokenColors: [
        {
            settings: {
                background: colors.neutral[800],
                foreground: colors.neutral[100],
            },
        },
        {
            name: 'Comment',
            scope: [
                'comment',
                'punctuation.definition.comment',
                'string.quoted.docstring',
            ],
            settings: {
                foreground: colors.neutral[500],
                fontStyle: 'italic',
            },
        },
        {
            name: 'Variables',
            scope: ['variable', 'string constant.other.placeholder'],
            settings: {
                foreground: colors.neutral[100],
            },
        },
        {
            name: 'Invalid',
            scope: ['invalid', 'invalid.illegal'],
            settings: {
                foreground: colors.red[500],
            },
        },
        {
            name: 'Invalid deprecated',
            scope: ['invalid.deprecated'],
            settings: {
                foreground: colors.yellow[500],
            },
        },
        {
            name: 'Keyword, Storage',
            scope: ['keyword', 'storage.type', 'storage.modifier'],
            settings: {
                foreground: colors.purple[400],
            },
        },
        {
            name: 'Operator, Misc',
            scope: [
                'keyword.control',
                'constant.other.color',
                'keyword.other.template',
                'keyword.other.substitution',
                'keyword.other',
            ],
            settings: {
                foreground: colors.purple[400],
            },
        },
        {
            name: 'Variable Other Property',
            scope: ['variable.other.property'],
            settings: {
                foreground: colors.blue[300],
            },
        },
        {
            name: 'Operator',
            scope: ['keyword.operator'],
            settings: {
                foreground: colors.debianRed[500],
            },
        },
        {
            name: 'Keyword Operator Expression | Keyword Operator New',
            scope: ['keyword.operator.expression', 'keyword.operator.new'],
            settings: {
                foreground: colors.purple[400],
            },
        },
        {
            name: 'This | Super',
            scope: ['variable.language.this', 'variable.language.super'],
            settings: {
                foreground: colors.purple[400],
            },
        },
        {
            name: 'Tag',
            scope: [
                'entity.name.tag',
                'meta.tag.sgml',
                'markup.deleted.git_gutter',
                'source.json support.type',
            ],
            settings: {
                foreground: colors.fieryRose[500],
            },
        },
        {
            name: 'Tag wrappers',
            scope: [
                'punctuation.definition.tag.begin',
                'punctuation.definition.tag.end',
            ],
            settings: {
                foreground: colors.neutral[500],
            },
        },
        {
            name: 'Function, Special Method',
            scope: [
                'entity.name.function',
                'variable.function',
                'support.function',
                'keyword.other.special-method',
                'meta.function-call.generic',
                'support.function.builtin',
            ],
            settings: {
                foreground: colors.blue[400],
            },
        },
        {
            name: 'C-related Block Level Variables',
            scope: ['source.cpp meta.block variable.other'],
            settings: {
                foreground: colors.neutral[100],
            },
        },
        {
            name: 'Variables constant',
            scope: ['variable.other.constant'],
            settings: {
                foreground: colors.neutral[100],
            },
        },
        {
            name: 'Other Variable, String Link',
            scope: ['support.other.variable', 'string.other.link'],
            settings: {
                foreground: colors.neutral[100],
            },
        },
        {
            name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
            scope: [
                'constant.numeric',
                'constant.language',
                'constant.character',
                'constant.escape',
                'variable.parameter.function.language.special',
                'variable.language.special.self',
            ],
            settings: {
                foreground: colors.amber[400],
            },
        },
        {
            name: 'Support Constant | Keyword Other Unit',
            scope: ['support.constant', 'keyword.other.unit'],
            settings: {
                foreground: colors.debianRed[400],
            },
        },
        {
            name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
            scope: ['variable.parameter'],
            settings: {
                foreground: colors.neutral[100],
            },
        },
        {
            name: 'String, Symbols, Inherited Class, Markup Heading',
            scope: [
                'string',
                'constant.other.symbol',
                'constant.other.key',
                'entity.other.inherited-class',
                'markup.heading',
                'markup.inserted.git_gutter',
                'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
            ],
            settings: {
                foreground: colors.tealishGreen[400],
            },
        },
        {
            name: 'Class, Support',
            scope: [
                'entity.name',
                'support.type',
                'support.class',
                'support.orther.namespace.use.php',
                'meta.use.php',
                'support.other.namespace.php',
                'markup.changed.git_gutter',
                'support.type.sys-types',
                'entity.other.inherited-class',
            ],
            settings: {
                foreground: colors.debianRed[400],
            },
        },
        {
            name: 'Entity Types',
            scope: ['support.type'],
            settings: {
                foreground: colors.teal[200],
            },
        },
        {
            name: 'Attributes',
            scope: ['entity.other.attribute-name'],
            settings: {
                foreground: colors.amber[300],
            },
        },
        {
            name: 'Ids',
            scope: ['entity.other.attribute-name.id'],
            settings: {
                foreground: colors.teal[500],
            },
        },
        {
            name: 'Inserted',
            scope: ['markup.inserted'],
            settings: {
                foreground: '#C3E88D',
            },
        },
        {
            name: 'Deleted',
            scope: ['markup.deleted'],
            settings: {
                foreground: colors.red[500],
            },
        },
        {
            name: 'Changed',
            scope: ['markup.changed'],
            settings: {
                foreground: colors.yellow[500],
            },
        },
        {
            name: 'Regular Expressions',
            scope: ['string.regexp'],
            settings: {
                foreground: colors.cyan[300],
            },
        },
        {
            name: 'Escape Characters',
            scope: ['constant.character.escape'],
            settings: {
                foreground: colors.alienGreen[400],
            },
        },
        {
            name: 'URL',
            scope: ['*url*', '*link*', '*uri*'],
            settings: {
                fontStyle: 'underline',
            },
        },
        {
            name: 'Markdown - Plain',
            scope: [
                'text.html.markdown',
                'punctuation.definition.list_item.markdown',
            ],
            settings: {
                foreground: '#EEFFFF',
            },
        },
        {
            name: 'Markdown - Markup Raw Inline',
            scope: ['text.html.markdown markup.inline.raw.markdown'],
            settings: {
                foreground: '#C792EA',
            },
        },
        {
            name: 'Markdown - Markup Raw Inline Punctuation',
            scope: [
                'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown',
            ],
            settings: {
                foreground: '#65737E',
            },
        },
        {
            name: 'Markdown - Line Break',
            scope: ['text.html.markdown meta.dummy.line-break'],
            settings: {
                foreground: '',
            },
        },
        {
            name: 'Markdown - Heading',
            scope: [
                'markdown.heading',
                'markup.heading | markup.heading entity.name',
                'markup.heading.markdown punctuation.definition.heading.markdown',
            ],
            settings: {
                foreground: '#C3E88D',
            },
        },
        {
            name: 'Markup - Italic',
            scope: ['markup.italic'],
            settings: {
                fontStyle: 'italic',
                foreground: '#f07178',
            },
        },
        {
            name: 'Markup - Bold',
            scope: ['markup.bold', 'markup.bold string'],
            settings: {
                fontStyle: 'bold',
                foreground: '#f07178',
            },
        },
        {
            name: 'Markup - Bold-Italic',
            scope: [
                'markup.bold markup.italic',
                'markup.italic markup.bold',
                'markup.quote markup.bold',
                'markup.bold markup.italic string',
                'markup.italic markup.bold string',
                'markup.quote markup.bold string',
            ],
            settings: {
                fontStyle: 'bold',
                foreground: '#f07178',
            },
        },
        {
            name: 'Markup - Underline',
            scope: ['markup.underline'],
            settings: {
                fontStyle: 'underline',
                foreground: '#F78C6C',
            },
        },
        {
            name: 'Markup - Strike',
            scope: ['markup.strike'],
            settings: {
                fontStyle: 'strike',
                foreground: '',
            },
        },
        {
            name: 'Markdown - Blockquote',
            scope: ['markup.quote punctuation.definition.blockquote.markdown'],
            settings: {
                foreground: '#65737E',
            },
        },
        {
            name: 'Markup - Quote',
            scope: ['markup.quote'],
            settings: {
                fontStyle: 'italic',
                foreground: '',
            },
        },
        {
            name: 'Markdown - Link',
            scope: ['string.other.link.title.markdown'],
            settings: {
                foreground: '#82AAFF',
            },
        },
        {
            name: 'Markdown - Link Description',
            scope: ['string.other.link.description.title.markdown'],
            settings: {
                foreground: '#C792EA',
            },
        },
        {
            name: 'Markdown - Link Anchor',
            scope: ['constant.other.reference.link.markdown'],
            settings: {
                foreground: '#FFCB6B',
            },
        },
        {
            name: 'Markup - Raw Block',
            scope: ['markup.raw.block'],
            settings: {
                foreground: '#C792EA',
            },
        },
        {
            name: 'Markdown - Fenced Bode Block Variable',
            scope: [
                'markup.fenced_code.block.markdown',
                'markup.inline.raw.string.markdown',
            ],
            settings: {
                foreground: '#EEFFFF90',
            },
        },
        {
            name: 'Markdown - Fenced Language',
            scope: ['variable.language.fenced.markdown'],
            settings: {
                foreground: '#65737E',
            },
        },
        {
            name: 'Markdown - Separator',
            scope: ['meta.separator'],
            settings: {
                fontStyle: 'bold',
                foreground: '#65737E',
            },
        },
        {
            name: 'Markup - Table',
            scope: ['markup.table'],
            settings: {
                foreground: '#EEFFFF',
            },
        },
    ],
    semanticHighlighting: true,
};

export default themev2;
