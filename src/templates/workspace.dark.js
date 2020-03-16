module.exports = {
	colors: {
		// Base Colors
		// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_base-colors
		focusBorder: '<%= bgFocus() %>',
		foreground: '<%= workspace.foreground %>',
		'widget.shadow': '<%= shadow() %>',
		'selection.background': '<%= bgSelection() %>',
		errorForeground: '<%= textInvalid() %>',

		// Button Control
		// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_button-control
		'button.background': '<%= bgAccent() %>',
		'button.foreground': '<%= textAccent() %>',
		'button.hoverBackground': '<%= bgAccentLighter() %>',

		// Dropdown Control
		// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_dropdown-control
		'dropdown.background': '<%= bgDarker() %>',
		'dropdown.listBackground': '<%= bgLighter() %>',
		'dropdown.border': '<%= bgLighter() %>',
		'dropdown.foreground': '<%= textPrimary() %>',

		// Input Control
		// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_input-control
		'input.background': '<%= bgDarker() %>',
		'input.border': '<%= bgLighter() %>',
		'input.foreground': '<%= textPrimary() %>',
		'input.placeholderForeground': '<%= textFaded() %>',
		'inputOption.activeBorder': '<%= bgPrimary() %>',
		'inputValidation.errorBackground': '<%= bgDarker() %>',
		'inputValidation.errorBorder': '<%= bgInvalid() %>',
		'inputValidation.infoBackground': '<%= bgDarker() %>',
		'inputValidation.infoBorder': '<%= bgInfo() %>',
		'inputValidation.warningBackground': '<%= bgDarker() %>',
		'inputValidation.warningBorder': '<%= bgWarning() %>',

		// Scroll Bar Control
		// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_scroll-bar-control
		'scrollbar.shadow': '<%= shadow() %>',
		'scrollbarSlider.background': '<%= scrollbarBg() %>',
		'scrollbarSlider.activeBackground': '<%= scrollbarActive() %>',
		'scrollbarSlider.hoverBackground': '<%= scrollbarHover() %>',

		// Badge
		// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_badge
		'badge.foreground': '<%= textAccent() %>',
		'badge.background': '<%= bgAccentLighter() %>',

		// Progress Bar
		// https: //code.visualstudio.com/docs/getstarted/theme-color-reference#_progress-bar
		'progressBar.background': '<%= workspace.accent %>',

		// Lists and Trees
		// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_lists-and-trees
		'list.activeSelectionBackground': '<%= bgActive() %>',
		'list.activeSelectionForeground': '<%= textActive() %>',
		'list.dropBackground': '<%= bgHover() %>',
		'list.focusBackground': '<%= bgFocus() %>',
		'list.focusForeground': '<%= textFocus() %>',
		'list.highlightForeground': '<%= workspace.accent %>',
		'list.hoverBackground': '<%= bgHover() %>',
		'list.hoverForeground': '<%= textHover() %>',
		'list.inactiveSelectionBackground': '<%= bgActivePassive() %>',
		'list.inactiveSelectionForeground': '<%= textActivePassive() %>',
		'list.inactiveFocusBackground': '<%= bgInActiveFocus() %>',
		'list.invalidItemForeground': '<%= textInvalid() %>',

		// Activity Bar
		// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_activity-bar
		'activityBar.background': '<%= bgPrimary() %>',
		'activityBar.dropBackground': '<%= bgFaded() %>',
		'activityBar.foreground': '<%= textPrimary() %>',
		'activityBar.border': '<%= bgLightest() %>',
		'activityBarBadge.background': '<%= bgAccent() %>',
		'activityBarBadge.foreground': '<%= textAccent() %>',

		// Side Bar
		// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_side-bar
		'sideBar.background': '<%= bgPrimary() %>',
		'sideBar.foreground': '<%= textPrimary() %>',
		'sideBar.border': '<%= bgPrimary() %>',
		'sideBarTitle.foreground': '<%= textLighter() %>',
		'sideBarSectionHeader.background': '<%= bgLightest() %>',
		'sideBarSectionHeader.foreground': '<%= textLightest() %>',

		// Editor Groups & Tabs
		// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-groups-tabs
		'editorGroup.background': '<%= bgLightest() %>',
		'editorGroup.border': '<%= editorGroupBorder() %>',
		'editorGroup.dropBackground': '<%= bgFaded() %>',
		'editorGroupHeader.noTabsBackground': '<%= bgDarker() %>',
		'editorGroupHeader.tabsBackground': '<%= bgDarker() %>',
		'editorGroupHeader.tabsBorder': '<%= bgLightest() %>',
		'tab.activeBackground': '<%= bgLightest() %>',
		'tab.activeForeground': '<%= textDarkest() %>',
		'tab.border': '<%= bgLightest() %>',
		'tab.activeBorder': '<%= bgAccentDarker() %>',
		'tab.inactiveBackground': '<%= bgDarkest() %>',
		'tab.inactiveForeground': '<%= textLighter() %>',
		'tab.unfocusedActiveForeground': '<%= textLighter() %>',
		'tab.unfocusedInactiveForeground': '<%= textLightest() %>',
		'tab.hoverBackground': '<%= bgLightest() %>',
		'tab.unfocusedHoverBackground': '<%= bgLightest() %>',

		// Editor Colors
		// https: //code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-colors
		'editor.background': '<%= tokens.editor.background %>',
		'editor.foreground': '<%= tokens.editor.foreground %>',
		'editorLineNumber.foreground': '<%= tokens.lineNumber.foreground %>',
		'editorLineNumber.activeForeground': '<%= tokens.lineNumber.active %>',
		'editorCursor.foreground': '<%= tokens.caret %>',
		'editor.wordHighlightBackground': '<%= tokens.selection.general %>',
		'editor.wordHighlightStrongBackground':
			'<%= tokens.selection.bright %>',
		'editor.selectionBackground': '<%= tokens.selection.bright %>',
		'editor.selectionHighlightBackground':
			'<%= tokens.selection.general %>',
		'editor.inactiveSelectionBackground':
			'<%= tokens.selection.inactive %>',
		'editor.findMatchBackground': '<%= tokens.find.current %>',
		'editor.findMatchHighlightBackground': '<%= tokens.find.other %>',
		'editor.lineHighlightBackground': '<%= tokens.lineHighlight %>',

		'editorLink.activeForeground': '<%= tokens.link %>',
		'editor.rangeHighlightBackground': '<%= tokens.selection.general %>',
		'editorWhitespace.foreground': '<%= tokens.guide.whitespace %>',
		'editorIndentGuide.background': '<%= tokens.guide.indent %>',
		'editorIndentGuide.activeBackground': '<%= tokens.guide.active %>',
		'editorRuler.foreground': '<%= tokens.guide.ruler %>',
		'editorCodeLens.foreground': '<%= tokens.guide.bracket %>',
		'editorBracketMatch.background': '<%= tokens.guide.bracket %>',
		'editorBracketMatch.border': '<%= tokens.guide.whitespace %>',

		'editorOverviewRuler.border': '<%= editorGroupBorder() %>',
		'editorOverviewRuler.findMatchForeground': '<%= tokens.find.current %>',
		'editorOverviewRuler.rangeHighlightForeground':
			'<%= tokens.selection.general %>',
		'editorOverviewRuler.selectionHighlightForeground':
			'<%= tokens.selection.general %>',
		'editorOverviewRuler.wordHighlightForeground':
			'<%= tokens.selection.bright %>',
		'editorOverviewRuler.wordHighlightStrongForeground':
			'<%= tokens.selection.bright %>',
		'editorOverviewRuler.modifiedForeground': '<%= bgWarning() %>',
		'editorOverviewRuler.addedForeground': '<%= bgSuccess() %>',
		'editorOverviewRuler.deletedForeground': '<%= bgInvalid() %>',
		'editorOverviewRuler.errorForeground': '<%= bgInvalid() %>',
		'editorOverviewRuler.warningForeground': '<%= bgWarning() %>',
		'editorOverviewRuler.infoForeground': '<%= bgWarning() %>',

		'editorError.foreground': '<%= textInvalid() %>',
		'editorWarning.foreground': '<%= textWarning() %>',
		'editorGutter.background':
			'<%= gutterBackground(tokens.gutter.background) %>',
		'editorGutter.modifiedBackground': '<%= gutterModified() %>',
		'editorGutter.addedBackground': '<%= gutterAdded() %>',
		'editorGutter.deletedBackground': '<%= gutterDeleted() %>',

		// Diff Editor Colors
		// https: //code.visualstudio.com/docs/getstarted/theme-color-reference#_diff-editor-colors
		'diffEditor.insertedTextBackground': '<%= bgSuccessFaded() %>',
		'diffEditor.removedTextBackground': '<%= bgInvalidFaded() %>',

		// Editor Widget Colors
		// https: //code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors
		'editorWidget.background': '<%= bgPrimary() %>',
		'editorWidget.border': '<%= bgDarkest() %>',
		'editorHoverWidget.background': '<%= bgLighter() %>',
		'editorSuggestWidget.background': '<%= bgPrimary() %>',
		'editorSuggestWidget.border': '<%= bgPrimary() %>',
		'editorSuggestWidget.foreground': '<%= textPrimary() %>',
		'editorSuggestWidget.selectedBackground': '<%= bgActive() %>',
		'debugExceptionWidget.background': '<%= bgInvalid() %>',
		'debugExceptionWidget.border': '<%= bgInvalid() %>',
		'editorMarkerNavigation.background': '<%= bgPrimary() %>',
		'editorMarkerNavigationError.background': '<%= gutterDeleted() %>',
		'editorMarkerNavigationWarning.background': '<%= gutterModified() %>',

		// Peek View Colors
		// https: //code.visualstudio.com/docs/getstarted/theme-color-reference#_peek-view-colors
		'peekView.border': '<%= bgPrimary() %>',
		'peekViewEditor.background': '<%= bgLighter() %>',
		'peekViewEditorGutter.background': '<%= bgLighter() %>',
		'peekViewEditor.matchHighlightBackground':
			'<%= tokens.selection.general %>',
		'peekViewResult.background': '<%= bgLighter() %>',
		'peekViewResult.fileForeground': '<%= tokens.editor.foreground %>',
		'peekViewResult.lineForeground': '<%= tokens.editor.foreground %>',
		'peekViewResult.matchHighlightBackground':
			'<%= tokens.selection.general %>',
		'peekViewResult.selectionBackground': '<%= tokens.selection.bright %>',
		'peekViewResult.selectionForeground': '<%= tokens.editor.foreground %>',
		'peekViewTitle.background': '<%= bgDarker() %>',
		'peekViewTitleDescription.foreground': '<%= textLightest() %>',
		'peekViewTitleLabel.foreground': '<%= textDarker() %>',

		// Merge Conflicts
		// https: //code.visualstudio.com/docs/getstarted/theme-color-reference#_merge-conflicts
		'merge.currentHeaderBackground': '<%= bgInfo() %>',
		'merge.currentContentBackground': '<%= bgInfoFaded() %>',
		'merge.incomingHeaderBackground': '<%= bgWarning() %>',
		'merge.incomingContentBackground': '<%= bgWarningFaded() %>',
		'merge.border': '<%= bgInvalid() %>',
		'editorOverviewRuler.currentContentForeground': '<%= bgInfoFaded() %>',
		'editorOverviewRuler.incomingContentForeground':
			'<%= bgWarningFaded() %>',

		// Panel Colors
		// https: //code.visualstudio.com/docs/getstarted/theme-color-reference#_panel-colors
		'panel.background': '<%= bgDarkest() %>',
		'panel.border': '<%= bgLightest() %>',
		'panelTitle.activeBorder': '<%= bgAccentDarker() %>',
		'panelTitle.activeForeground': '<%= textDarkest() %>',
		'panelTitle.inactiveForeground': '<%= textLightest() %>',

		// Status Bar Colors
		// https: //code.visualstudio.com/docs/getstarted/theme-color-reference#_status-bar-colors
		'statusBar.background': '<%= bgDarkest() %>',
		'statusBar.foreground': '<%= textStatusbar() %>',
		'statusBar.debuggingBackground': '<%= bgAccent() %>',
		'statusBar.debuggingForeground': '<%= textAccent() %>',
		'statusBar.noFolderBackground': '<%= bgLightest() %>',
		'statusBar.noFolderForeground': '<%= textLightest() %>',
		'statusBarItem.activeBackground': '<%= bgActive() %>',
		'statusBarItem.hoverBackground': '<%= bgHover() %>',
		'statusBarItem.prominentBackground': '<%= bgAccentDarker() %>',
		'statusBarItem.prominentHoverBackground': '<%= bgAccentLighter() %>',
		'statusBar.border': '<%= bgLightest() %>',

		// Title Bar Colors (macOS)
		// https: //code.visualstudio.com/docs/getstarted/theme-color-reference#_title-bar-colors-macos
		'titleBar.activeBackground': '<%= bgDarkest() %>',
		'titleBar.activeForeground': '<%= textDarkest() %>',
		'titleBar.inactiveBackground': '<%= bgLighter() %>',
		'titleBar.inactiveForeground': '<%= textLighter() %>',
		'titleBar.border': '<%= bgDarkest() %>',

		// Notification Dialog Colors
		// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_notification-colors
		'notificationCenter.border': '<%= bgAccentDarker() %>',
		'notificationCenterHeader.foreground': '<%= textAccent() %>',
		'notificationCenterHeader.background': '<%= bgAccentDarker() %>',
		'notificationToast.border': '<%= bgPrimary() %>',
		'notifications.foreground': '<%= textDarkest() %>',
		'notifications.background': '<%= bgDarkest() %>',
		'notifications.border': '<%= bgDarkest() %>',
		'notificationLink.foreground': '<%= tokens.link %>',

		// Extensions
		// https: //code.visualstudio.com/docs/getstarted/theme-color-reference#_extensions
		'extensionButton.prominentForeground': '<%= textAccent() %>',
		'extensionButton.prominentBackground': '<%= bgAccent() %>',
		'extensionButton.prominentHoverBackground': '<%= bgAccentDarker() %>',

		// Quick Picker
		// https: //code.visualstudio.com/docs/getstarted/theme-color-reference#_quick-picker
		'pickerGroup.border': '<%= bgLighter() %>',
		'pickerGroup.foreground': '<%= textLighter() %>',

		// Integrated Terminal Colors
		// https: //code.visualstudio.com/docs/getstarted/theme-color-reference#_integrated-terminal-colors
		'terminal.background': '<%= bgDarkest() %>',
		'terminal.foreground': '<%= textPrimary() %>',
		'terminal.ansiBlack': '<%= workspace.terminal.ansiBlack %>',
		'terminal.ansiBlue': '<%= workspace.terminal.ansiBlue %>',
		'terminal.ansiBrightBlack': '<%= workspace.terminal.ansiBrightBlack %>',
		'terminal.ansiBrightBlue': '<%= workspace.terminal.ansiBrightBlue %>',
		'terminal.ansiBrightCyan': '<%= workspace.terminal.ansiBrightCyan %>',
		'terminal.ansiBrightGreen': '<%= workspace.terminal.ansiBrightGreen %>',
		'terminal.ansiBrightMagenta':
			'<%= workspace.terminal.ansiBrightMagenta %>',
		'terminal.ansiBrightRed': '<%= workspace.terminal.ansiBrightRed %>',
		'terminal.ansiBrightWhite': '<%= workspace.terminal.ansiBrightWhite %>',
		'terminal.ansiBrightYellow':
			'<%= workspace.terminal.ansiBrightYellow %>',
		'terminal.ansiCyan': '<%= workspace.terminal.ansiCyan %>',
		'terminal.ansiGreen': '<%= workspace.terminal.ansiGreen %>',
		'terminal.ansiMagenta': '<%= workspace.terminal.ansiMagenta %>',
		'terminal.ansiRed': '<%= workspace.terminal.ansiRed %>',
		'terminal.ansiWhite': '<%= workspace.terminal.ansiWhite %>',
		'terminal.ansiYellow': '<%= workspace.terminal.ansiYellow %>',
		'terminal.selectionBackground':
			'<%= workspace.terminal.selectionBackground %>',

		// Welcome Page
		// https: //code.visualstudio.com/docs/getstarted/theme-color-reference#_welcome-page
		'welcomePage.buttonBackground': '<%= bgLighter() %>',
		'welcomePage.buttonHoverBackground': '<%= bgLightest() %>',
		'walkThrough.embeddedEditorBackground': '<%= bgPrimary() %>',

		// Git Colors
		// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_git-colors
		'gitDecoration.modifiedResourceForeground': '<%= textInfo() %>',
		'gitDecoration.deletedResourceForeground': '<%= textInvalid() %>',
		'gitDecoration.untrackedResourceForeground': '<%= textSuccess() %>',
		'gitDecoration.ignoredResourceForeground': '<%= textFaded() %>',
		'gitDecoration.conflictingResourceForeground': '<%= textWarning() %>',

		// Breadcrumb
		// https://code.visualstudio.com/api/references/theme-color#breadcrumbs
		'breadcrumb.foreground': '<%= textLightest() %>',
		'breadcrumb.background': '<%= bgLighter() %>',
		'breadcrumb.focusForeground': '<%= textLighter() %>',
		'breadcrumb.activeSelectionForeground': '<%= textFocus() %>',
		'breadcrumbPicker.background': '<%= bgPrimary() %>',
	},
};
