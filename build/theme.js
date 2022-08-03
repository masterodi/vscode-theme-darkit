import { jVar } from 'json-variables';
import clr from '../config/theme.config.js';

// {
//     "name": "Comment",
//     "scope": [
//         "comment",
//         "punctuation.definition.comment"
//     ],
//     "settings": {
//         "fontStyle": "italic",
//         "foreground": "#546E7A"
//     }
// },

const theme = jVar(
    {
        clr: { ...clr },
        name: 'Darkit',
        colors: {
            // defaults
            background: '<<clr.neutral-800>>',
            foreground: '<<clr.neutral-200>>',
            focusBorder: '<<clr.neutral-500>>',
            'widget.shadow': '<<clr.neutral-900-translucent>>',
            // activityBar
            'activityBar.background': '<<clr.neutral-800>>',
            'activityBar.foreground': '<<clr.primary-500>>',
            'activityBar.inactiveForeground': '<<clr.primary-500-translucent>>',
            'activityBarBadge.background': '<<clr.primary-400>>',
            'activityBarBadge.foreground': '<<clr.neutral-50>>',
            'activityBar.border': '<<clr.neutral-900>>',
            'activityBar.activeBackground': '<<clr.transparent>>',
            // sideBar
            'sideBar.background': '<<clr.neutral-800>>',
            'sideBar.foreground': '<<clr.neutral-200>>',
            'sideBarSectionHeader.background': '<<clr.transparent>>',
            'sideBarSectionHeader.foreground': '<<clr.neutral-50>>',
            'sideBarSectionHeader.border': '<<clr.neutral-900>>',
            'sideBarTitle.foreground': '<<clr.neutral-50>>',
            'sideBar.border': '<<clr.neutral-900>>',
            // list (explorer)
            'list.inactiveSelectionBackground':
                '<<clr.neutral-700-translucent>>',
            'list.inactiveSelectionForeground': '<<clr.neutral-100>>',
            'list.hoverBackground': '<<clr.neutral-600-translucent>>',
            'list.hoverForeground': '<<clr.neutral-100>>',
            'list.activeSelectionBackground': '<<clr.neutral-500-translucent>>',
            'list.activeSelectionForeground': '<<clr.neutral-100>>',
            'list.activeSelectionBorder': '<<clr.neutral-400>>',
            'list.dropBackground': '<<clr.neutral-900-translucent>>',
            'list.highlightForeground': '<<clr.neutral-100>>',
            'list.focusBackground': '<<clr.neutral-600-translucent>>',
            'list.focusForeground': '<<clr.neutral-100>>',
            // listFilterWidget (search explorer)
            'listFilterWidget.background': '<<clr.neutral-800>>',
            'listFilterWidget.outline': '<<clr.neutral-900>>',
            'listFilterWidget.noMatchesOutline': '<<clr.error-600>>',
            // tree (lines in explorer folder tree)
            'tree.indentGuidesStroke': '<<clr.primary-400>>',
            // statusBar
            'statusBar.background': '<<clr.neutral-800>>',
            'statusBar.foreground': '<<clr.neutral-200>>',
            'statusBar.border': '<<clr.neutral-900>>',
            'statusBar.debuggingBackground': '<<clr.primary-900>>',
            'statusBar.debuggingForeground': '<<clr.primary-200>>',
            'statusBar.debuggingBorder': '<<clr.neutral-900>>',
            'statusBar.noFolderBackground': '<<clr.neutral-800>>',
            'statusBar.noFolderForeground': '<<clr.neutral-200>>',
            'statusBar.noFolderBorder': '<<clr.neutral-900>>',
            // titleBar
            'titleBar.activeBackground': '<<clr.neutral-800>>',
            'titleBar.activeForeground': '<<clr.neutral-200>>',
            'titleBar.border': '<<clr.transparent>>',
            'titleBar.inactiveBackground': '<<clr.neutral-800>>',
            'titleBar.inactiveForeground': '<<clr.neutral-200>>',
            // menubar
            'menubar.selectionBackground': '<<clr.neutral-900-translucent>>',
            'menubar.selectionForeground': '<<clr.neutral-100>>',
            'menubar.selectionBorder': '<<clr.transparent>>',
            // menu
            'menu.background': '<<clr.neutral-800>>',
            'menu.foreground': '<<clr.neutral-200>>',
            'menu.selectionBackground': '<<clr.neutral-600-translucent>>',
            'menu.selectionForeground': '<<clr.neutral-100>>',
            'menu.selectionBorder': '<<clr.transparent>>',
            'menu.separatorBackground': '<<clr.neutral-900-translucent>>',
            'menu.border': '<<clr.neutral-900-translucent>>',
            // button
            'button.background': '<<clr.primary-600-translucent>>',
            'button.foreground': '<<clr.neutral-100>>',
            'button.hoverBackground': '<<clr.primary-500-translucent>>',
            'button.secondaryBackground': '<<clr.neutral-700-translucent>>',
            'button.secondaryForeground': '<<clr.neutral-200>>',
            // textLink
            'textLink.foreground': '<<clr.primary-500>>',
            // input
            'input.background': '<<clr.neutral-800>>',
            'input.foreground': '<<clr.neutral-200>>',
            'input.border': '<<clr.neutral-900>>',
            'input.placeholderForeground': '<<clr.neutral-400>>',
            // inputOption
            'inputOption.activeBackground': '<<clr.neutral-800>>',
            'inputOption.activeForeground': '<<clr.primary-500>>',
            'inputOption.activeBorder': '<<clr.primary-500>>',
            // panel
            'panel.background': '<<clr.neutral-800>>',
            'panel.border': '<<clr.neutral-900>>',
            // panelTitle
            'panelTitle.activeBorder': '<<clr.primary-500>>',
            'panelTitle.activeForeground': '<<clr.primary-400>>',
            // terminal
            'terminal.selectionBackground': '<<clr.neutral-600-translucent>>',
            'terminal.border': '<<clr.neutral-900>>',
            'terminal.foreground': '<<clr.neutral-200>>',
            'terminal.ansiWhite': '<<clr.neutral-100>>',
            'terminal.ansiBrightWhite': '<<clr.neutral-50>>',
            'terminal.ansiBlack': '<<clr.neutral-900>>',
            'terminal.ansiBrightBlack': '<<clr.neutral-700>>',
            'terminal.ansiBlue': '#3049ff',
            'terminal.ansiBrightBlue': '#8795ff',
            'terminal.ansiCyan': '#29ffe2',
            'terminal.ansiGreen': '#21ff51',
            'terminal.ansiBrightGreen': '#87ffa1',
            'terminal.ansiMagenta': '#e229ff',
            'terminal.ansiBrightMagenta': '#ee82ff',
            'terminal.ansiRed': '#ff1940',
            'terminal.ansiBrightRed': '#ff617b',
            'terminal.ansiYellow': '#ffbc12',
            'terminal.ansiBrightYellow': '#ffd261',
            // terminalCursor
            'terminalCursor.background': '<<clr.primary-50>>',
            'terminalCursor.foreground': '<<clr.primary-500-translucent>>',
            // badge
            'badge.background': '<<clr.primary-400>>',
            'badge.foreground': '<<clr.neutral-50>>',
            // editorGroupHeader
            'editorGroupHeader.border': '<<clr.neutral-900>>',
            'editorGroupHeader.tabsBackground': '<<clr.neutral-800>>',
            'editorGroupHeader.tabsBorder': '<<clr.neutral-900>>',
            // tab
            'tab.border': '<<clr.neutral-900>>',
            'tab.activeBackground': '<<clr.neutral-800>>',
            'tab.activeForeground': '<<clr.neutral-300>>',
            'tab.activeBorder': '<<clr.primary-500>>',
            'tab.activeBorderTop': '<<clr.transparent>>',
            'tab.inactiveBackground': '<<clr.neutral-800>>',
            'tab.inactiveForeground': '<<clr.neutral-300>>',
            'tab.hoverBackground': '<<clr.neutral-700-translucent>>',
            'tab.hoverForeground': '<<clr.neutral-100>>',
            // breadcrumb
            'breadcrumb.background': '<<clr.neutral-800>>',
            'breadcrumb.foreground': '<<clr.neutral-100>>',
            'breadcrumb.focusForeground': '<<clr.primary-50>>',
            // scrollbarSlider
            'scrollbarSlider.background': '<<clr.neutral-600-translucent>>',
            'scrollbarSlider.hoverBackground': '<<clr.neutral-600>>',
            'scrollbarSlider.activeBackground':
                '<<clr.neutral-700-translucent>>',
            'scrollbar.shadow': '<<clr.neutral-900-translucent>>',
            // editorWidget
            'editorWidget.background': '<<clr.neutral-800>>',
            'editorWidget.foreground': '<<clr.neutral-200>>',
            'editorWidget.resizeBorder': '<<clr.neutral-600>>',
            // pickerGroup
            'pickerGroup.border': '<<clr.neutral-900>>',
            'pickerGroup.foreground': '<<clr.primary-400>>',
            // debugToolBar
            'debugToolBar.background': '<<clr.neutral-800>>',
            'debugToolBar.border': '<<clr.neutral-900>>',
            // notifications
            'notifications.background': '<<clr.neutral-800>>',
            'notifications.foreground': '<<clr.neutral-200>>',
            // notificationLink
            'notificationLink.foreground': '<<clr.primary-500>>',
            // notificationToast
            'notificationToast.border': '<<clr.neutral-900>>',
            // gitDecoration
            'gitDecoration.addedResourceForeground': '<<clr.success-400>>',
            'gitDecoration.modifiedResourceForeground': '<<clr.warning-400>>',
            'gitDecoration.deletedResourceForeground': '<<clr.error-400>>',
            'gitDecoration.renamedResourceForeground': '<<clr.success-400>>',
            'gitDecoration.stageModifiedResourceForeground':
                '<<clr.warning-400>>',
            'gitDecoration.stageDeletedResourceForeground': '<<clr.error-400>>',
            'gitDecoration.untrackedResourceForeground': '<<clr.success-400>>',
            'gitDecoration.ignoredResourceForeground':
                '<<clr.neutral-400-translucent>>',
            // editor
            'editor.background': '<<clr.neutral-800>>',
            'editor.foreground': '<<clr.neutral-200>>',
            'editorLineNumber.foreground': '<<clr.neutral-300-translucent>>',
            'editorLineNumber.activeForeground': '<<clr.primary-300>>',
            'editorCursor.foreground': '<<clr.primary-300>>',
            'editorCursor.background': '<<clr.primary-50>>',
            'editor.selectionBackground': '<<clr.neutral-600-translucent>>',
            'editor.inactiveSelectionBackground':
                '<<clr.neutral-700-translucent>>',
            'editor.selectionHighlightBackground':
                '<<clr.primary-500-translucent>>',
            'editor.findMatchBackground': '<<clr.neutral-600-translucent>>',
            'editor.findMatchBorder': '<<clr.primary-400>>',
            'editor.findMatchHighlightBackground':
                '<<clr.neutral-700-translucent>>',
            'editor.findRangeHighlightBackground':
                '<<clr.neutral-600-translucent>>',
            'editor.rangeHighlightBackground':
                '<<clr.neutral-600-translucent>>',
            'editor.hoverHighlightBackground':
                '<<clr.neutral-700-translucent>>',
            'editor.wordHighlightBackground': '<<clr.neutral-700-translucent>>',
            // CHANGE THIS
            'editor.lineHighlightBackground': '<<clr.neutral-700-translucent>>',
            'editorIndentGuide.background': '<<clr.neutral-700-translucent>>',
            'editorIndentGuide.activeBackground':
                '<<clr.primary-400-translucent>>',
            'editorRuler.foreground': '<<clr.primary-900-translucent>>',
            'editorBracketMatch.background': '<<clr.primary-600-translucent>>',
            'editorBracketMatch.border': '<<clr.primary-500>>',
        },
        tokenColors: [
            {
                name: 'Comment',
                scope: ['comment', 'punctuation.definition.comment'],
                settings: {
                    foreground: '#000',
                },
            },
        ],
    },
    {
        heads: '<<',
        tails: '>>',
    }
);

export default theme;
