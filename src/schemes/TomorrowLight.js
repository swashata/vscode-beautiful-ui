// Color lib to make our lives a bit easy
const Color = require('color');

/**
 * Tomorrow Light Color Scheme
 * @author Chris Kempson, Ihor Oleksandrov, Swashata Ghosh
 */
const TomorrowLight = {
	author: 'Chris Kempson, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Tomorrow Light',
	type: 'light', // dark, or light
	workspace: {
		background: Color('#eeeeee')
			.hsl()
			.darken(0.05)
			.hex(),
		foreground: '#282a2e',
		comment: '#969896',
		accent: '#cc6666',
		redish: '#cc6666',
		orangish: '#de935f',
		yellowish: '#f0c674',
		greenish: '#b5bd68',
		bluish: '#81a2be',
		purplish: '#b294bb',
		terminal: {
			ansiBlack: '#000000',
			ansiBlue: '#427ab3',
			ansiBrightBlack: '#686a66',
			ansiBrightBlue: '#84b0d8',
			ansiBrightCyan: '#37e6e8',
			ansiBrightGreen: '#99e343',
			ansiBrightMagenta: '#bc94b7',
			ansiBrightRed: '#f54235',
			ansiBrightWhite: '#f1f1f0',
			ansiBrightYellow: '#fdeb61',
			ansiCyan: '#00a7aa',
			ansiGreen: '#5ea702',
			ansiMagenta: '#89658e',
			ansiRed: '#d81e00',
			ansiWhite: '#dbded8',
			ansiYellow: '#cfae00',
			selectionBackground: '#c1deff5a',
		},
	},
	tokens: {
		editor: {
			background: '#ffffff',
			foreground: '#282a2e',
		},
		gutter: {
			background: '#ffffff',
			foreground: '#00000033',
		},
		lineNumber: {
			foreground: '#00000033',
			active: '#00000050',
		},
		caret: '#cc6666',
		selection: {
			general: '#00000016',
			bright: '#0000001a',
			border: '#00000016',
			inactive: '#00000010',
		},
		guide: {
			indent: '#0000001a',
			whitespace: '#00000016',
			ruler: '#0000001a',
			bracket: '#00000016',
		},
		find: {
			current: '#f2d98c1e',
			other: '#00000016',
		},
		lineHighlight: '#0000000d',
		blockquote: {
			background: '#ffffff13',
			foreground: '#6f716f',
		},
		link: '#82a3bf',
		comment: '#959795', // comment, punctuation.definition.comment
		string: '#b4bc67',
		color1: '#f0c775', // constant.numeric, constant.language, entity.name
		color2: '#cc6666', // variable.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#b295bb', // constant, constant.other, constant.character, keyword, storage.type, attributes
		color4: '#282a2e', // variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#82a3bf', // variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#e9b36d', // keyword.operator
		color7: '#7c7e7c', // Property, Separator, Terminator, list_item
		color8: '#565856', // Pseudo Property
		color9: '#de935e', // constant.numeric
	},
};

module.exports = TomorrowLight;
