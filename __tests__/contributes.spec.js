const pkg = require('../package.json');
const colors = require('../src/colors');

describe('Contributes in Package.json', () => {
	Object.keys(colors).forEach(key => {
		test(`has ${key}`, () => {
			const filtered = pkg.contributes.themes.filter(
				val => val.label === `βui - ${key}`
			);
			expect(filtered).toHaveLength(1);
		});
	});
});
