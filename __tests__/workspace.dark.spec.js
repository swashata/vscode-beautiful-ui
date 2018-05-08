const workspaceDark = require('../src/templates/workspace.dark');

describe('💻 Workspace Dark', () => {
	test('matches snapshot', () => {
		expect(workspaceDark).toMatchSnapshot();
	});
});
