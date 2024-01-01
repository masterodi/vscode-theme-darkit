import Color from 'color';

const palette = {
	background: Color('#232323'),
	backgroundLighter: Color('#272727'),
	backgroundLight: Color('#373737'),
	foreground: Color('#cccae0'),
	foregroundDarker: Color('#8b8a99'),
	foregroundLighter: Color('#F3F2FF'),
	border: '#00000000',
	focus: Color('#333333aa'),
	shadow: Color('#111'),
	accent: Color('#808CFF'),
	accentLighter: Color('#dfeaff'),

	syntax: {
		// #8CFFD9
		// #62b3a6
		// #e2fffb
		// #c6fff6

		// #FF80B9
		// #b35a96
		// #ffdff5
		// #ffc0eb

		// #808CFF
		// #5a79b3
		// #dfeaff
		// #c0d6ff

		// #A6B3FF
		// #8F9ADB
		// #747DB3
		// #5A618A
		// #3F4461

		// #B0A6FF
		// #978FDB
		// #7B74B3
		// #5F5A8A
		// #433F61

		// #B5A6FF
		// #9B8FDB
		// #7E74B3
		// #625A8A
		// #453F61

		// #C2A6FF
		// #A78FDB
		// #8874B3
		// #695A8A
		comment: '#888',
		variable: '#ececec',
		function: '#8FB0DB',
		functionParameter: null,
		keyword: '#8F9ADB',
		storage: '#747DB3',
		class: '#B0A6FF',
		primitive: '#b35a96',
		constant: '#FF80B9',
		number: '#FF80B9',
		string: '#97f0d3',
		stringRegexp: null,
		tag: '#B5A6FF',
		jsonKey: '#b35a96',
		punctuationTag: '#8b7cd9',
		attribute: '#C1A6FF',
		id: '#ffc0eb',
		cssProperty: '#b35a96',
		variableProperty: '#dfeaff',
		readWriteAlias: '#c0d6ff',
		constantObject: '#c0d6ff',
		punctuation: '#c0d6ff',
	},
};

export const darkitFocus = {
	name: 'Darkit Focus',
	colors: {
		foreground: palette.foreground,
		descriptionForeground: palette.foregroundDarker,
		focusBorder: palette.focus,
		errorForeground: null,
		'widget.shadow': palette.shadow,
		'scrollbar.shadow': palette.shadow,
		'badge.background': palette.accent,
		'badge.foreground': palette.foregroundLighter,
		'icon.foreground': null,
		'settings.headerForeground': null,
		'window.activeBorder': null,
		'window.inactiveBorder': null,
		'sash.hoverBorder': null,

		'toolbar.activeBackground': palette.backgroundLighter,
		'toolbar.hoverBackground': palette.backgroundLight,

		'extensionButton.prominentBackground': '#3d59a1DD',
		'extensionButton.prominentHoverBackground': '#3d59a1AA',
		'extensionButton.prominentForeground': '#ffffff',
		'extensionBadge.remoteBackground': '#3d59a1',
		'extensionBadge.remoteForeground': '#ffffff',

		'button.background': palette.accent,
		'button.hoverBackground': palette.accentLighter,
		'button.secondaryBackground': palette.backgroundLighter,
		'button.foreground': palette.foregroundLighter,
		'progressBar.background': palette.accent,

		'input.background': palette.backgroundLighter,
		'input.foreground': null,
		'input.border': palette.border,
		'input.placeholderForeground': null,
		'inputOption.activeForeground': palette.accent,
		'inputOption.activeBackground': null,
		'inputOption.activeBorder': palette.border,

		'inputValidation.infoForeground': '#bbc2e0',
		'inputValidation.infoBackground': '#3d59a15c',
		'inputValidation.infoBorder': '#3d59a1',
		'inputValidation.warningForeground': '#000000',
		'inputValidation.warningBackground': '#c2985b',
		'inputValidation.warningBorder': '#e0af68',
		'inputValidation.errorForeground': '#bbc2e0',
		'inputValidation.errorBackground': '#85353e',
		'inputValidation.errorBorder': '#963c47',

		'dropdown.foreground': null,
		'dropdown.background': null,
		'dropdown.listBackground': null,

		'activityBar.background': palette.background,
		'activityBar.foreground': null,
		//"activityBar.activeBorder": "#41496b",
		//"activityBar.activeBackground": "#1c2030",
		'activityBar.inactiveForeground': null, //#3b4261
		'activityBar.border': palette.border,
		'activityBarBadge.background': palette.accent,
		'activityBarBadge.foreground': palette.foregroundLighter,

		'tree.indentGuidesStroke': palette.backgroundLight,
		'sideBar.foreground': palette.foregroundDarker,
		'sideBar.background': palette.background,
		'sideBar.border': palette.border,
		'sideBarTitle.foreground': palette.foreground,
		'sideBarSectionHeader.background': palette.background,
		'sideBarSectionHeader.foreground': palette.foregroundLighter,
		'sideBarSectionHeader.border': palette.border,
		'sideBar.dropBackground': palette.backgroundLighter,

		'list.dropBackground': palette.backgroundLighter,
		'list.deemphasizedForeground': palette.foreground,
		'list.activeSelectionBackground': palette.backgroundLighter,
		'list.activeSelectionForeground': palette.foregroundLighter,
		'list.inactiveSelectionBackground': palette.backgroundLighter,
		'list.inactiveSelectionForeground': palette.foreground,
		'list.focusBackground': null,
		'list.focusForeground': null,
		'list.hoverBackground': palette.backgroundLighter,
		'list.hoverForeground': null,
		'list.highlightForeground': palette.accent,
		'list.invalidItemForeground': null,
		'list.errorForeground': null,
		'list.warningForeground': null,
		'listFilterWidget.background': palette.backgroundLighter,
		'listFilterWidget.outline': null,
		'listFilterWidget.noMatchesOutline': null,

		'pickerGroup.foreground': palette.foregroundDarker,
		'pickerGroup.border': palette.border,

		'scrollbarSlider.background': palette.backgroundLighter,
		'scrollbarSlider.hoverBackground': palette.backgroundLight,
		'scrollbarSlider.activeBackground': palette.accent,

		'editorBracketHighlight.foreground1': null,
		'editorBracketHighlight.foreground2': null,
		'editorBracketHighlight.foreground3': null,
		'editorBracketHighlight.foreground4': null,
		'editorBracketHighlight.foreground5': null,
		'editorBracketHighlight.foreground6': null,
		'editorBracketHighlight.unexpectedBracket.foreground': null,

		'editorBracketPairGuide.activeBackground1': null,
		'editorBracketPairGuide.activeBackground2': null,
		'editorBracketPairGuide.activeBackground3': null,
		'editorBracketPairGuide.activeBackground4': null,
		'editorBracketPairGuide.activeBackground5': null,
		'editorBracketPairGuide.activeBackground6': null,

		'selection.background': '#6f7bb635',
		'editor.background': palette.background,
		'editor.foreground': palette.foregroundLighter,
		'editor.foldBackground': null,
		'editorLink.activeForeground': null,
		'editor.selectionBackground': palette.backgroundLight,
		'editor.inactiveSelectionBackground': null,
		'editor.findMatchBackground': null,
		'editor.findMatchBorder': null,
		'editor.findMatchHighlightBackground': null,
		'editor.findRangeHighlightBackground': null,
		'editor.rangeHighlightBackground': null,
		'editor.wordHighlightBackground': null,
		'editor.wordHighlightStrongBackground': null,
		'editor.selectionHighlightBackground': null,
		'editorCursor.foreground': null,
		'editorIndentGuide.background': null,
		'editorIndentGuide.activeBackground': null,
		'editorLineNumber.foreground': null,
		'editorLineNumber.activeForeground': null,
		'editor.lineHighlightBackground': null,
		'editorWhitespace.foreground': null,
		'editorMarkerNavigation.background': null,
		'editorHoverWidget.background': null,
		'editorHoverWidget.border': null,
		'editorBracketMatch.background': null,
		'editorBracketMatch.border': null,
		'editorOverviewRuler.border': null,
		'editorOverviewRuler.errorForeground': null,
		'editorOverviewRuler.warningForeground': null,
		'editorOverviewRuler.infoForeground': null,
		'editorOverviewRuler.bracketMatchForeground': null,
		'editorOverviewRuler.findMatchForeground': null,
		'editorOverviewRuler.rangeHighlightForeground': null,
		'editorOverviewRuler.selectionHighlightForeground': null,
		'editorOverviewRuler.wordHighlightForeground': null,
		'editorOverviewRuler.wordHighlightStrongForeground': null,
		'editorOverviewRuler.modifiedForeground': null,
		'editorOverviewRuler.addedForeground': null,
		'editorOverviewRuler.deletedForeground': null,
		'editorRuler.foreground': null,
		'editorError.foreground': null,
		'editorWarning.foreground': null,
		'editorInfo.foreground': null,
		'editorHint.foreground': null,
		'editorGutter.modifiedBackground': null,
		'editorGutter.addedBackground': null,
		'editorGutter.deletedBackground': null,
		'editorGhostText.foreground': null,

		'minimapGutter.modifiedBackground': '#3d547a',
		'minimapGutter.addedBackground': '#1C5957',
		'minimapGutter.deletedBackground': '#944449',

		'editorGroup.border': palette.backgroundLight,
		'editorGroup.dropBackground': null,
		'editorGroupHeader.tabsBorder': palette.border,
		'editorGroupHeader.tabsBackground': palette.background,
		'editorGroupHeader.noTabsBackground': null,
		'editorGroupHeader.border': null,

		'editorPane.background': null,
		'editorWidget.foreground': palette.foregroundLighter,
		'editorWidget.background': palette.background,
		'editorWidget.resizeBorder': null,

		'editorSuggestWidget.background': palette.background,
		'editorSuggestWidget.border': palette.border,
		'editorSuggestWidget.selectedBackground': palette.backgroundLighter,
		'editorSuggestWidget.foreground': palette.accent,
		'editorSuggestWidget.highlightForeground': palette.accent,
		'editorSuggestWidget.focusHighlightForeground': palette.accent,

		'editorCodeLens.foreground': '#565f89',
		'editorLightBulb.foreground': '#e0af68',
		'editorLightBulbAutoFix.foreground': '#e0af68',

		'peekView.border': palette.border,
		'peekViewEditor.background': palette.backgroundLighter,
		'peekViewEditor.matchHighlightBackground': palette.backgroundLighter,
		'peekViewTitle.background': palette.backgroundLighter,
		'peekViewTitleLabel.foreground': palette.foregroundLighter,
		'peekViewTitleDescription.foreground': palette.foreground,
		'peekViewResult.background': palette.backgroundLighter,
		'peekViewResult.selectionForeground': null,
		'peekViewResult.selectionBackground': null,
		'peekViewResult.lineForeground': null,
		'peekViewResult.fileForeground': null,
		'peekViewResult.matchHighlightBackground': null,

		'diffEditor.insertedTextBackground': '#41a6b520',
		'diffEditor.removedTextBackground': '#db4b4b22',
		'diffEditor.insertedLineBackground': '#41a6b520',
		'diffEditor.removedLineBackground': '#db4b4b22',
		'diffEditorGutter.insertedLineBackground': '#41a6b525',
		'diffEditorGutter.removedLineBackground': '#db4b4b22',
		'diffEditorOverview.insertedForeground': '#41a6b525',
		'diffEditorOverview.removedForeground': '#db4b4b22',
		'diffEditor.diagonalFill': '#2c324a',

		'breadcrumb.background': palette.background,
		'breadcrumbPicker.background': palette.background,
		'breadcrumb.foreground': palette.foreground,
		'breadcrumb.focusForeground': palette.foregroundLighter,
		'breadcrumb.activeSelectionForeground': palette.accent,

		'tab.activeBackground': palette.backgroundLighter,
		'tab.inactiveBackground': palette.background,
		'tab.activeForeground': palette.foregroundLighter,
		'tab.hoverForeground': palette.foreground,
		'tab.activeBorder': palette.accent,
		'tab.inactiveForeground': palette.foreground,
		'tab.border': palette.border,
		'tab.unfocusedActiveForeground': null,
		'tab.unfocusedInactiveForeground': null,
		'tab.unfocusedHoverForeground': null,
		'tab.activeModifiedBorder': null,
		'tab.inactiveModifiedBorder': null,
		'tab.unfocusedActiveBorder': null,
		'tab.lastPinnedBorder': null,

		'panel.background': palette.background,
		'panel.border': palette.border,
		'panelTitle.activeForeground': palette.foregroundLighter,
		'panelTitle.inactiveForeground': null,
		'panelTitle.activeBorder': palette.accent,
		'panelInput.border': palette.border,

		'statusBar.foreground': palette.foreground,
		'statusBar.background': palette.background,
		'statusBar.border': palette.border,
		'statusBar.noFolderBackground': palette.background,
		'statusBar.debuggingBackground': palette.backgroundLighter,
		'statusBar.debuggingForeground': palette.foregroundLighter,
		'statusBarItem.activeBackground': null,
		'statusBarItem.hoverBackground': null,
		'statusBarItem.prominentBackground': null,
		'statusBarItem.prominentHoverBackground': null,

		'titleBar.activeForeground': null,
		'titleBar.inactiveForeground': null,
		'titleBar.activeBackground': palette.background,
		'titleBar.inactiveBackground': palette.background,
		'titleBar.border': palette.border,

		'walkThrough.embeddedEditorBackground': '#1f2335',
		'textLink.foreground': '#668ac4',
		'textLink.activeForeground': '#7dcfff',
		'textPreformat.foreground': '#73daca',
		'textBlockQuote.background': '#1f2335',
		'textCodeBlock.background': '#1f2335',
		'textSeparator.foreground': '#545c7e',

		'debugExceptionWidget.border': '#963c47',
		'debugExceptionWidget.background': '#1b1e2e',
		'debugToolBar.background': '#1b1e2e',
		'debugConsole.infoForeground': '#7982a9',
		'debugConsole.errorForeground': '#bb616b',
		'debugConsole.sourceForeground': '#7982a9',
		'debugConsole.warningForeground': '#c49a5a',
		'debugConsoleInputIcon.foreground': '#73daca',
		'editor.stackFrameHighlightBackground': '#e2bd3a20',
		'editor.focusedStackFrameHighlightBackground': '#73daca20',
		'debugView.stateLabelForeground': '#7982a9',
		'debugView.stateLabelBackground': '#1b1e2e',
		'debugView.valueChangedHighlight': '#3d59a1cc',
		'debugTokenExpression.name': '#7dcfff',
		'debugTokenExpression.value': '#9aa5ce',
		'debugTokenExpression.string': '#9ece6a',
		'debugTokenExpression.boolean': '#ff9e64',
		'debugTokenExpression.number': '#ff9e64',
		'debugTokenExpression.error': '#bb616b',
		'debugIcon.breakpointForeground': '#db4b4b',
		'debugIcon.breakpointDisabledForeground': '#545c7e',
		'debugIcon.breakpointUnverifiedForeground': '#c24242',

		'terminal.background': palette.background,
		'terminal.foreground': palette.foregroundLighter,
		'terminal.selectionBackground': '#6f7bb640',
		'terminalCursor.background': null,
		'terminalCursor.foreground': null,
		'terminal.ansiBlack': '#414868',
		'terminal.ansiRed': '#f7768e',
		'terminal.ansiGreen': '#73daca',
		'terminal.ansiYellow': '#e0af68',
		'terminal.ansiBlue': '#7aa2f7',
		'terminal.ansiMagenta': '#bb9af7',
		'terminal.ansiCyan': '#7dcfff',
		'terminal.ansiWhite': '#a7b0d4',
		'terminal.ansiBrightBlack': '#414868',
		'terminal.ansiBrightRed': '#f7768e',
		'terminal.ansiBrightGreen': '#73daca',
		'terminal.ansiBrightYellow': '#e0af68',
		'terminal.ansiBrightBlue': '#7aa2f7',
		'terminal.ansiBrightMagenta': '#bb9af7',
		'terminal.ansiBrightCyan': '#7dcfff',
		'terminal.ansiBrightWhite': '#a9b1d6',

		'gitDecoration.modifiedResourceForeground': '#6183bb',
		'gitDecoration.ignoredResourceForeground': '#545c7e',
		'gitDecoration.deletedResourceForeground': '#914c54',
		'gitDecoration.renamedResourceForeground': '#449dab',
		'gitDecoration.addedResourceForeground': '#449dab',
		'gitDecoration.untrackedResourceForeground': '#449dab',
		'gitDecoration.conflictingResourceForeground': '#e0af68cc',
		'gitDecoration.stageDeletedResourceForeground': '#914c54',
		'gitDecoration.stageModifiedResourceForeground': '#6183bb',

		'notebook.editorBackground': '#24283b',
		'notebook.cellEditorBackground': '#1f2335',
		'notebook.cellBorderColor': '#1b1e2e',
		'notebook.focusedCellBorder': '#29355a',
		'notebook.cellStatusBarItemHoverBackground': '#2c324a',

		'charts.red': '#f7768e',
		'charts.blue': '#7aa2f7',
		'charts.yellow': '#e0af68',
		'charts.orange': '#ff9e64',
		'charts.green': '#73daca',
		'charts.purple': '#9d7cd8',
		'charts.foreground': '#9AA5CE',
		'charts.lines': '#1f2335',

		'merge.currentHeaderBackground': '#41a6b525',
		'merge.currentContentBackground': '#007a7544',
		'merge.incomingHeaderBackground': '#3d59a1aa',
		'merge.incomingContentBackground': '#3d59a144',
		'mergeEditor.change.background': '#41a6b525',
		'mergeEditor.change.word.background': '#41a6b540',
		'mergeEditor.conflict.unhandledUnfocused.border': '#e0af6888',
		'mergeEditor.conflict.unhandledFocused.border': '#e0af68d9',
		'mergeEditor.conflict.handledUnfocused.border': '#41a6b525',
		'mergeEditor.conflict.handledFocused.border': '#41a6b565',
		'mergeEditor.conflict.handled.minimapOverViewRuler': '#449dab',
		'mergeEditor.conflict.unhandled.minimapOverViewRuler': '#e0af68',

		'gitlens.trailingLineForegroundColor': '#7582ba',
		'gitlens.gutterUncommittedForegroundColor': '#7aa2f7',
		'gitlens.gutterForegroundColor': '#7982a9',
		'gitlens.gutterBackgroundColor': '#1f2335',

		'notificationCenterHeader.background': '#1b1e2e',
		'notifications.background': palette.backgroundLighter,
		'notificationLink.foreground': '#6183bb',
		'notificationsErrorIcon.foreground': '#bb616b',
		'notificationsWarningIcon.foreground': '#bba461',
		'notificationsInfoIcon.foreground': '#0da0ba',

		'menubar.selectionForeground': palette.foregroundLighter,
		'menubar.selectionBackground': palette.backgroundLighter,
		'menubar.selectionBorder': palette.border,
		'menu.foreground': palette.foreground,
		'menu.background': palette.background,
		'menu.selectionForeground': palette.foregroundLighter,
		'menu.selectionBackground': palette.backgroundLighter,
		'menu.separatorBackground': palette.border,
		'menu.border': palette.border,
	},
	tokenColors: [
		{
			name: 'Comments',
			scope: ['comment'],
			settings: {
				foreground: palette.syntax.comment,
			},
		},
		{
			name: 'Variable',
			scope: ['variable'],
			settings: { foreground: palette.syntax.variable },
		},
		{
			name: 'Functions',
			scope: [
				'entity.name.function',
				'support.function',
				'meta.function-call.generic',
				'support.function.magic',
				'punctuation.definition.template-expression',
			],
			settings: {
				foreground: palette.syntax.function,
			},
		},
		{
			name: 'Function parameter',
			scope: ['variable.parameter'],
			settings: {
				foreground: palette.syntax.functionParameter,
				fontStyle: 'italic',
			},
		},
		{
			name: 'Keywords | Keyword operator',
			scope: ['keyword', 'meta.method.declaration storage.type'],
			settings: {
				foreground: palette.syntax.keyword,
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
				foreground: palette.syntax.storage,
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
				'variable.language.this',
				'variable.language.super',
				'variable.parameter.function.language.special.self',
			],
			settings: {
				foreground: palette.syntax.class,
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
				foreground: palette.syntax.primitive,
			},
		},
		{
			name: 'Strings',
			scope: ['string'],
			settings: {
				foreground: palette.syntax.string,
			},
		},
		{
			name: 'String regex',
			scope: ['string.regexp'],
			settings: {
				foreground: palette.syntax.stringRegexp,
				fontStyle: 'italic',
			},
		},
		{
			name: 'Tags',
			scope: [
				'entity.name.tag',
				'variable.language.special.self',
				'entity.name.tag.reference',
			],
			settings: {
				foreground: palette.syntax.tag,
			},
		},
		{
			name: 'Json key, Yaml key',
			scope: [
				'support.type.property-name.json',
				'source.yaml entity.name.tag',
			],
			settings: {
				foreground: palette.syntax.jsonKey,
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
				foreground: palette.syntax.punctuationTag,
			},
		},
		{
			name: 'Attribute name',
			scope: ['entity.other.attribute-name'],
			settings: {
				foreground: palette.syntax.attribute,
				fontStyle: 'italic',
			},
		},
		{
			name: 'Ids',
			scope: ['entity.other.attribute-name.id'],
			settings: {
				foreground: palette.syntax.id,
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
				foreground: palette.syntax.constant,
			},
		},
		{
			name: 'Numeric constant',
			scope: ['constant.numeric'],
			settings: {
				foreground: palette.syntax.number,
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
				foreground: palette.syntax.punctuation,
			},
		},
		{
			name: 'CSS property name',
			scope: ['source.css support.type.property-name'],
			settings: {
				foreground: palette.syntax.cssProperty,
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
				foreground: palette.syntax.variableProperty,
			},
		},
		{
			name: 'Variable other readwrite alias',
			scope: ['variable.other.readwrite.alias', 'entity.name.namespace'],
			settings: {
				foreground: palette.syntax.readWriteAlias,
			},
		},
		{
			name: 'Variable other constant object',
			scope: ['variable.other.constant.object'],
			settings: {
				foreground: palette.syntax.constantObject,
			},
		},
	],
	semanticHighlighting: true,
};
