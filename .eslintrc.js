module.exports = {
	"extends": [
        "airbnb-base",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": 1,
        "prettier/prettier": ["error"],
        "import/no-extraneous-dependencies": ["error", {
			"devDependencies": true,
		}],
		"no-console": 0,
		"no-plusplus": [2, {
			"allowForLoopAfterthoughts": true
		}]
	},
};
