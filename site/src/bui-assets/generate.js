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
		const themeData = {
			label: theme.label,
			languages: {},
			editor: {},
		};
		const themePath = path.resolve(__dirname, '../../../', theme.path);
		console.log(`Loading theme from ${themePath}`);
		const shikiTheme = shiki.loadTheme(themePath);
		const rawTheme = require(themePath);
		const highlighter = await shiki.getHighlighter({
			theme: shikiTheme,
		});
		themeData.editor = {
			statusBarBackground: rawTheme.colors['statusBar.background'],
		};
		console.log('Done');
		console.log('Creating language HTML');

		languages.forEach(lang => {
			themeData.languages[lang] = highlighter.codeToHtml(
				data[lang],
				lang
			);
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
