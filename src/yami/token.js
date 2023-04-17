import colors from './colors.js';

const tokenColors = [
	{
		name: 'Comments',
		scope: ['comment'],
		settings: {
			foreground: colors.gray,
		},
	},
	{
		name: 'Variable',
		scope: ['variable'],
		settings: {
			foreground: '#ffffff',
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
			foreground: '#a3faff',
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
		settings: {
			foreground: '#8DBDFF',
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
			foreground: '#8DBDFF',
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
			foreground: '#ff73a6',
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
			foreground: colors.teal,
		},
	},
	{
		name: 'Strings',
		scope: ['string'],
		settings: { foreground: '#A493ff' },
	},
	{
		name: 'String regex',
		scope: ['string.regexp'],
		settings: {
			fontStyle: 'italic',
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
			foreground: colors.lightRoseRed,
		},
	},
	{
		name: 'Json key, Yaml key',
		scope: [
			'support.type.property-name.json',
			'source.yaml entity.name.tag',
		],
		settings: {},
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
			foreground: colors.gray,
		},
	},
	{
		name: 'Attribute name',
		scope: ['entity.other.attribute-name'],
		settings: {
			foreground: colors.roseRed,
			fontStyle: 'italic',
		},
	},
	{
		name: 'Ids',
		scope: ['entity.other.attribute-name.id'],
		settings: {
			foreground: colors.lightIndigo,
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
			foreground: colors.teal,
		},
	},
	{
		name: 'Numeric constant',
		scope: ['constant.numeric'],
		settings: {
			foreground: colors.lightTeal,
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
			foreground: colors.roseRed,
		},
	},
	{
		name: 'CSS property name',
		scope: ['source.css support.type.property-name'],
		settings: {
			foreground: colors.cyan,
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
		settings: { foreground: '#d2e4fc' },
	},
	{
		name: 'Variable other readwrite alias',
		scope: ['variable.other.readwrite.alias', 'entity.name.namespace'],
		settings: {
			foreground: '#e8d2fc',
		},
	},
	{
		name: 'Variable other constant object',
		scope: ['variable.other.constant.object'],
		settings: {
			foreground: '#ffd4dc',
		},
	},
];

export default tokenColors;
