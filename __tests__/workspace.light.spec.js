const workspaceLight = require('../src/templates/workspace.light');

describe('Workspace Light', () => {
	test('matches snapshot', () => {
		expect(workspaceLight).toMatchSnapshot();
	});
});
