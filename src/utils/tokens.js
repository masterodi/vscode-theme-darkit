class ColorToken {
	#name;
	#scope = [];
	#settings = {};

	constructor(name) {
		this.#name = name ?? '';
	}

	name(name) {
		this.#name = name;
		return this;
	}

	scope(...scope) {
		for (const s of scope) {
			this.#scope.push(s);
		}
		return this;
	}

	settings({ color: foreground, style: fontStyle } = {}) {
		this.#settings = { foreground, fontStyle };
		return this;
	}

	parse() {
		return {
			name: this.#name,
			scope: this.#scope,
			settings: this.#settings,
		};
	}
}

const commentsToken = new ColorToken('Comments').scope('comment');

const variablesToken = new ColorToken('Variables').scope('variable');

const objectPropertiesToken = new ColorToken('Object Properties').scope(
	'support.type',
	'support.variable',
	'variable.other.predefined',
	'variable.other.property',
	'meta.object.member'
);

const readWriteAliasesToken = new ColorToken('Read-write Aliases').scope(
	'variable.other.readwrite.alias',
	'entity.name.namespace'
);

const constantObjectsToken = new ColorToken('Constant Objects').scope(
	'variable.other.constant.object'
);

const functionsToken = new ColorToken('Functions').scope(
	'entity.name.function',
	'support.function',
	'meta.function-call.generic',
	'support.function.magic',
	'punctuation.definition.template-expression'
);

const functionParametersToken = new ColorToken('Function parameters').scope(
	'variable.parameter'
);

const stringsToken = new ColorToken('Strings').scope('string');

const regexToken = new ColorToken('String regex').scope('string.regexp');

const primitivesToken = new ColorToken('Primitives').scope(
	'support.type.primitive',
	'entity.other.attribute-name.pseudo-class',
	'entity.other.attribute-name.pseudo-element'
);

const constantsToken = new ColorToken('Constants').scope(
	'support.constant',
	'constant.language',
	'support.type.builtin'
);

const numbersToken = new ColorToken('Numbers').scope('constant.numeric');

const keywordsToken = new ColorToken('Keywords').scope('keyword');

const storageTypesToken = new ColorToken('Storage Types').scope(
	'storage',
	'variable.language',
	'keyword.operator.expression',
	'keyword.operator.new',
	'keyword.function'
);

const operatorsToken = new ColorToken('Operators').scope(
	'keyword.operator',
	'keyword.operator.assignment',
	'punctuation.separator',
	'punctuation.accessor',
	'punctuation.separator.key-value',
	'punctuation.definition.block.sequence.item',
	'punctuation.separator.dictionary.key-value',
	'punctuation.definition.variable',
	'punctuation.separator.colon',
	'punctuation.separator.period',
	'punctuation.section',
	'keyword.other.unit',
	'punctuation.decorator'
);

const classesToken = new ColorToken('Classes').scope(
	'support.class',
	'entity.name.type',
	'entity.other.inherited-class',
	'entity.name.scope-resolution',
	'variable.language.this',
	'variable.language.super',
	'variable.parameter.function.language.special.self',
	'variable.language.special.self'
);

const tagsToken = new ColorToken('HTML Tags').scope(
	'entity.name.tag',
	'entity.name.tag.reference'
);

const tagsPunctuationToken = new ColorToken('Tags Punctuation').scope(
	'punctuation.definition.tag.begin',
	'punctuation.definition.tag.end',
	'punctuation.definition.typeparameters.begin',
	'punctuation.definition.typeparameters.end'
);

const htmlAttributesToken = new ColorToken('HTML Attributes').scope(
	'entity.other.attribute-name'
);

const htmlIdsToken = new ColorToken('HTML Ids').scope(
	'entity.other.attribute-name.id'
);

const jsonYamlKeysToken = new ColorToken('Json Yaml Keys').scope(
	'support.type.property-name.json',
	'source.yaml entity.name.tag'
);

const tokens = {
	comments: commentsToken,
	variables: variablesToken,
	objectProperties: objectPropertiesToken,
	readWriteAliases: readWriteAliasesToken,
	constantObjects: constantObjectsToken,
	functions: { _: functionsToken, parameters: functionParametersToken },
	strings: { _: stringsToken, regex: regexToken },
	primitives: primitivesToken,
	constants: constantsToken,
	numbers: numbersToken,
	keywords: keywordsToken,
	storage: storageTypesToken,
	operators: operatorsToken,
	classes: classesToken,
	tags: { _: tagsToken, punctuation: tagsPunctuationToken },
	html: { attributes: htmlAttributesToken, ids: htmlIdsToken },
	jsonYamlKeys: jsonYamlKeysToken,
};

export const createTokenColors = ({
	comments,
	variables,
	objectProperties,
	readWriteAliases,
	constantObjects,
	functions,
	functionParameters,
	strings,
	regex,
	primitives,
	constants,
	numbers,
	keywords,
	storage,
	operators,
	classes,
	tags,
	tagsPunctuation,
	htmlAttributes,
	htmlIds,
	jsonYamlKeys,
} = {}) => {
	return [
		tokens.comments.settings(comments),
		tokens.variables.settings(variables),
		tokens.objectProperties.settings(objectProperties),
		tokens.readWriteAliases.settings(readWriteAliases),
		tokens.constantObjects.settings(constantObjects),
		tokens.functions._.settings(functions),
		tokens.functions.parameters.settings(functionParameters),
		tokens.strings._.settings(strings),
		tokens.strings.regex.settings(regex),
		tokens.primitives.settings(primitives),
		tokens.constants.settings(constants),
		tokens.numbers.settings(numbers),
		tokens.keywords.settings(keywords),
		tokens.storage.settings(storage),
		tokens.operators.settings(operators),
		tokens.classes.settings(classes),
		tokens.tags._.settings(tags),
		tokens.tags.punctuation.settings(tagsPunctuation),
		tokens.html.attributes.settings(htmlAttributes),
		tokens.html.ids.settings(htmlIds),
		tokens.jsonYamlKeys.settings(jsonYamlKeys),
	].map((token) => token.parse());
};
