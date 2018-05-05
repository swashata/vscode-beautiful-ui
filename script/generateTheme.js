// Build dependencies
const fs = require('fs');
const path = require('path');
const template = require('lodash/template');
const chalk = require('chalk');
const ora = require('ora');

// Start the spinner
const spinner = ora('Getting Color Schemes').start();
spinner.color = 'yellow';

const log = chalk.blue;
const update = chalk.green;
// Get schemes
const schemes = require('../src/colors');

// Get modifiers
const modifiers = require('../src/helpers');

spinner.succeed(`Found ${Object.keys(schemes).length} schemes`);
spinner.start('Getting template files');

// Get template
const workspaceDark = require('../src/templates/workspace.dark');
const workspaceLight = require('../src/templates/workspace.light');
const tokens = require('../src/templates/tokens');

const general = {
	name: '<%= name %>',
	type: '<%= type %>',
};

const compilerDark = template(
	JSON.stringify(
		{
			...general,
			...workspaceDark,
			...tokens,
		},
		null,
		4
	)
);

const compilerLight = template(
	JSON.stringify(
		{
			...general,
			...workspaceLight,
			...tokens,
		},
		null,
		4
	)
);
spinner.succeed('Templates found');

// placeholder for the contributes json in package.json
const createdSchemes = {
	contributes: {
		themes: [],
	},
};

// Now loop over all schemes and create the file
Object.keys(schemes).forEach(theme => {
	// spinner.color = 'yellow';
	spinner.start(`Creating color scheme for ${theme}`);

	// Create the theme
	const scheme = schemes[theme];
	const newTheme =
		scheme.type === 'dark'
			? compilerDark({ ...scheme, ...modifiers })
			: compilerLight({ ...scheme, ...modifiers });
	const filename = path.join(
		__dirname,
		`../themes/${theme}-color-theme.json`
	);
	// Save the file, overriding existing
	fs.writeFileSync(filename, newTheme);
	spinner.color = 'green';
	createdSchemes.contributes.themes.push({
		label: `βui - ${theme}`,
		uiTheme: scheme.type === 'dark' ? 'vs-dark' : 'vs', // dark or light
		path: `./themes/${theme}-color-theme.json`,
	});
	spinner.succeed(`Done ${theme} 📁 ${filename}`);
});

spinner.succeed('Operation complete.');

console.log(log('✔ Make sure to update package.json with following directive'));

console.log(update(JSON.stringify(createdSchemes, null, 4)));
