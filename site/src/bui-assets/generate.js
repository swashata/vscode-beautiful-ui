const shiki = require('shiki');
const path = require('path');
const fs = require('fs');
const themePkg = require('../../../package.json');
const data = require('./data');
const languages = Object.keys(data);

console.log('Languages found:');
console.log(languages);

async function main() {
	const shikiData = [];
	const themes = themePkg.contributes.themes;
	for (let index = 0; index < themes.length; index++) {
		const theme = themes[index];
		console.log(`Doing theme ${theme.label}`);
		const themePath = path.resolve(__dirname, '../../../', theme.path);
		console.log(`Loading theme from ${themePath}`);
		const shikiTheme = shiki.loadTheme(themePath);
		const rawTheme = require(themePath);
		const themeData = {
			label: theme.label,
			languages: {},
			colors: {
				statusBarBackground: rawTheme.colors['statusBar.background'],
				statusBarForeground: rawTheme.colors['statusBar.foreground'],
				statusBarBorder: rawTheme.colors['statusBar.border'],
				sideBarBackground: rawTheme.colors['sideBar.background'],
				sideBarForeground: rawTheme.colors['sideBar.foreground'],
				sideBarBorder: rawTheme.colors['sideBar.border'],
				widgetShadow: rawTheme.colors['widget.shadow'],
				sideBarSectionHeaderBackground:
					rawTheme.colors['sideBarSectionHeader.background'],
				sideBarSectionHeaderForeground:
					rawTheme.colors['sideBarSectionHeader.foreground'],
				listHoverBackground: rawTheme.colors['list.hoverBackground'],
				listHoverForeground: rawTheme.colors['list.hoverForeground'],
				listActiveSelectionBackground:
					rawTheme.colors['list.activeSelectionBackground'],
				listActiveSelectionForeground:
					rawTheme.colors['list.activeSelectionForeground'],
				titleBarActiveBackground: rawTheme.colors['titleBar.activeBackground'],
				titleBarActiveForeground: rawTheme.colors['titleBar.activeForeground'],
				activityBarBorder: rawTheme.colors['activityBar.border'],
				activityBarForeground: rawTheme.colors['activityBar.foreground'],
				activityBarBackground: rawTheme.colors['activityBar.background'],
				scrollbarShadow: rawTheme.colors['scrollbar.shadow'],
				scrollbarSliderBackground:
					rawTheme.colors['scrollbarSlider.background'],
				scrollbarSliderActiveBackground:
					rawTheme.colors['scrollbarSlider.activeBackground'],
				scrollbarSliderHoverBackground:
					rawTheme.colors['scrollbarSlider.hoverBackground'],
				editorGroupHeaderTabsBackground:
					rawTheme.colors['editorGroupHeader.tabsBackground'],
				editorGroupHeaderTabsBorder:
					rawTheme.colors['editorGroupHeader.tabsBorder'],
				tabInactiveBackground: rawTheme.colors['tab.inactiveBackground'],
				tabInactiveForeground: rawTheme.colors['tab.inactiveForeground'],
				tabHoverBackground: rawTheme.colors['tab.hoverBackground'],
				tabActiveBackground: rawTheme.colors['tab.activeBackground'],
				tabActiveForeground: rawTheme.colors['tab.activeForeground'],
				tabActiveBorder: rawTheme.colors['tab.activeBorder'],
				editorBackground: rawTheme.colors['editor.background'],
			},
			type: rawTheme.type,
		};
		const highlighter = await shiki.getHighlighter({
			theme: shikiTheme,
		});
		console.log('Done');
		console.log('Creating language HTML');

		languages.forEach(lang => {
			themeData.languages[lang] = highlighter.codeToHtml(data[lang], lang);
		});
		shikiData.push(themeData);
	}

	console.log('All processing done, writing to file');
	fs.writeFile(
		path.resolve(__dirname, './generated.json'),
		JSON.stringify(shikiData, null, 2),
		'utf8',
		() => {
			console.log('Done.. You may now import from generated.json file.');
		}
	);
}

main();
