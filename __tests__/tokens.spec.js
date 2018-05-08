const tokens = require('../src/templates/tokens');

describe('Tokens', () => {
	test('matches snapshot', () => {
		expect(tokens).toMatchSnapshot();
	});
});
