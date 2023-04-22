import colors from './colors.js';

const tokenColors = [
	{
		name: 'Comments',
		scope: ['comment'],
		settings: {
			foreground: colors.gray[400],
		},
	},
	{
		name: 'Variable',
		scope: ['variable', 'text'],
		settings: {
			foreground: colors.white,
		},
	},
	{
		name: 'Functions',
		scope: [
			'entity.name.function',
			'support.function',
			'meta.function-call.generic',
			'support.function.magic',
		],
		settings: {
			foreground: colors.indigo[300],
		},
	},
	{
		name: 'Function parameter',
		scope: ['variable.parameter'],
		settings: {
			fontStyle: 'italic',
		},
	},
	{
		name: 'Keywords | Keyword operator',
		scope: ['keyword', 'meta.method.declaration storage.type'],
		settings: { foreground: colors.paleBlue[100] },
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
		settings: { foreground: colors.paleBlue[100] },
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
			foreground: colors.teal[200],
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
			foreground: colors.pink[500],
		},
	},
	{
		name: 'Strings',
		scope: ['string'],
		settings: { foreground: colors.pinkRed[400] },
	},
	{
		name: 'String regex',
		scope: ['string.regexp'],
		settings: {
			foreground: colors.pinkRed[500],
			fontStyle: 'bold',
		},
	},
	{
		name: 'Tags',
		scope: [
			'entity.name.tag',
			'variable.language.this',
			'variable.language.super',
			'variable.parameter.function.language.special.self',
			'variable.language.special.self',
			'entity.name.tag.reference',
		],
		settings: {
			foreground: colors.teal[200],
		},
	},
	{
		name: 'Json key, Yaml key',
		scope: [
			'support.type.property-name.json',
			'source.yaml entity.name.tag',
		],
		settings: {
			foreground: colors.purpleBlue[200],
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
			foreground: colors.paleBlue[600],
		},
	},
	{
		name: 'Attribute name',
		scope: ['entity.other.attribute-name'],
		settings: {
			foreground: colors.paleBlue[100],
		},
	},
	{
		name: 'Ids',
		scope: ['entity.other.attribute-name.id'],
		settings: {
			foreground: colors.lightBlue[100],
			fontStyle: 'italic',
		},
	},
	{
		name: 'CSS property name',
		scope: ['source.css support.type.property-name'],
		settings: {
			foreground: colors.purpleBlue[100],
		},
	},
	{
		name: 'Constant',
		scope: [
			'support.constant',
			'constant.language',
			'support.type.builtin',
		],
		settings: {
			foreground: colors.lightBlue[300],
		},
	},
	{
		name: 'Numeric constant',
		scope: ['constant.numeric'],
		settings: {
			foreground: colors.lightBlue[300],
		},
	},
	{
		name: 'Keyword operator',
		scope: [
			'keyword.operator',
			'keyword.operator.assignment',
			'punctuation.accessor',
			'punctuation.separator.key-value',
			'punctuation.definition.block.sequence.item',
			'punctuation.separator.dictionary.key-value',
			'punctuation.definition.variable',
			'punctuation.separator.colon',
			'punctuation.separator.period',
			'punctuation.section',
			'keyword.other.unit',
		],
		settings: {
			foreground: colors.pinkRed[500],
		},
	},
	{
		name: 'Variable other property',
		scope: [
			'support.variable',
			'variable.other.predefined',
			'variable.other.property',
			'meta.object.member',
		],
		settings: {
			foreground: colors.lightBlue[100],
		},
	},
	{
		name: 'Variable other readwrite alias',
		scope: ['variable.other.readwrite.alias', 'entity.name.namespace'],
		settings: {
			foreground: colors.emerald[300],
		},
	},
	{
		name: 'Variable other constant object',
		scope: ['variable.other.constant.object'],
		settings: {},
	},
];

export default tokenColors;
