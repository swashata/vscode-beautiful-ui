// Build dependencies
const fs = require('fs');
const path = require('path');
const template = require('lodash/template');
const chalk = require('chalk');

const log = chalk.blue;
const update = chalk.green;

console.log(log('Getting schemas'));
// Get schemes
const schemes = require('../config/colors');

console.log(update(`Found ${Object.keys(schemes).length} schemes`));

console.log(log('Getting template file'));
// Get template
const themeTemplate = fs.readFileSync(
	path.join(__dirname, '../config/template-color-theme.json')
);
const compiler = template(themeTemplate.toString());
console.log(log('Creating themes'));

// Now loop over all schemes and create the file
Object.keys(schemes).forEach(theme => {
	console.log(log(`Creating color scheme for ${theme}`));
	// Create the theme
	const scheme = schemes[theme];
	const newTheme = compiler(scheme);
	// Save the file, overriding existing
	fs.writeFileSync(
		path.join(__dirname, `../themes/${theme}-color-theme.json`),
		newTheme
	);
	console.log(update(`Done creating color scheme for ${theme}`));
});
