module.exports = {
	verbose: true,
	collectCoverageFrom: [
		'src/templates/*.js',
		'src/helpers.js',
		'src/colors.js',
	],
	collectCoverage: true,
	testPathIgnorePatterns: ['/node_modules/', '.eslintrc'],
};
