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
const schemes = require('../config/colors');

spinner.succeed(`Found ${Object.keys(schemes).length} schemes`);
spinner.start('Getting template file');

// Get template
const themeTemplate = fs.readFileSync(
	path.join(__dirname, '../config/template.json')
);
const compiler = template(themeTemplate.toString());
spinner.succeed('Template found');

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
	const newTheme = compiler(scheme);
	const filename = path.join(
		__dirname,
		`../themes/${theme}-color-theme.json`
	);
	// Save the file, overriding existing
	fs.writeFileSync(filename, newTheme);
	spinner.color = 'green';
	createdSchemes.contributes.themes.push({
		label: `Beautiful UI - ${theme}`,
		uiTheme: scheme.type === 'dark' ? 'vs-dark' : 'vs', // dark or light
		path: `./themes/${theme}-color-theme.json`,
	});
	spinner.succeed(`Done ${theme} 📁 ${filename}`);
});

spinner.succeed('Operation complete.');

console.log(log('✔ Make sure to update package.json with following directive'));

console.log(update(JSON.stringify(createdSchemes, null, 4)));
