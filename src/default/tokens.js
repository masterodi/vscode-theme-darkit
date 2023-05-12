import colors from '../colors.js';

const tokens = [
	{
		name: 'Comments',
		scope: ['comment'],
		settings: {
			foreground: colors.darkBlue[300],
		},
	},
	{
		name: 'Variable',
		scope: ['variable'],
		settings: { foreground: colors.slate[200] },
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
			foreground: '#d6ffa0',
		},
	},
	{
		name: 'Function parameter',
		scope: ['variable.parameter'],
		settings: {
			foreground: colors.indigo[200],
			fontStyle: 'italic',
		},
	},
	{
		name: 'Keywords | Keyword operator',
		scope: ['keyword', 'meta.method.declaration storage.type'],
		settings: {
			foreground: colors.aquamarine[300],
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
			foreground: colors.aquamarine[300],
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
			foreground: colors.indigo[400],
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
			foreground: colors.roseRed[300],
		},
	},
	{
		name: 'Strings',
		scope: ['string'],
		settings: {
			foreground: colors.aquamarine[500],
		},
	},
	{
		name: 'String regex',
		scope: ['string.regexp'],
		settings: {
			foreground: colors.indigo[300],
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
			foreground: colors.blue[300],
		},
	},
	{
		name: 'Json key, Yaml key',
		scope: [
			'support.type.property-name.json',
			'source.yaml entity.name.tag',
		],
		settings: {
			foreground: colors.blue[200],
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
			foreground: colors.blue[200],
		},
	},
	{
		name: 'Attribute name',
		scope: ['entity.other.attribute-name'],
		settings: {
			foreground: colors.washedBlue[300],
			fontStyle: 'italic',
		},
	},
	{
		name: 'Ids',
		scope: ['entity.other.attribute-name.id'],
		settings: {
			foreground: colors.turquoise[500],
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
			foreground: colors.roseRed[300],
		},
	},
	{
		name: 'Numeric constant',
		scope: ['constant.numeric'],
		settings: {
			foreground: colors.roseRed[300],
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
			foreground: colors.cyan[100],
		},
	},
	{
		name: 'CSS property name',
		scope: ['source.css support.type.property-name'],
		settings: {
			foreground: colors.darkBlue[50],
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
			foreground: colors.slate[200],
		},
	},
	{
		name: 'Variable other readwrite alias',
		scope: ['variable.other.readwrite.alias', 'entity.name.namespace'],
		settings: {
			foreground: colors.redOrange[100],
		},
	},
	{
		name: 'Variable other constant object',
		scope: ['variable.other.constant.object'],
		settings: {
			foreground: colors.slate[300],
		},
	},
];

export default tokens;
