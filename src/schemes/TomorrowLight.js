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
			active: '#0000005a',
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
			active: '#00000033',
			whitespace: '#00000016',
			ruler: '#0000001a',
			bracket: '#00000016',
		},
		find: {
			current: '#f2d98c3c',
			other: '#00000016',
		},
		lineHighlight: '#0000000d',
		blockquote: {
			background: '#ffffff13',
			foreground: '#6f716f',
		},
		link: '#82a3bf',
		comment: '#959795', // comment, punctuation.definition.comment
		string: Color('#b4bc67')
			.hsl()
			.darken(0.2)
			.hex(),
		color1: Color('#f0c775')
			.hsl()
			.darken(0.2)
			.hex(), // constant.numeric, constant.language, entity.name
		color2: Color('#cc6666')
			.hsl()
			.darken(0.2)
			.hex(), // variable.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: Color('#b295bb')
			.hsl()
			.darken(0.2)
			.hex(), // constant, constant.other, constant.character, keyword, storage.type, attributes
		color4: Color('#282a2e')
			.hsl()
			.darken(0.2)
			.hex(), // variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: Color('#82a3bf')
			.hsl()
			.darken(0.2)
			.hex(), // variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: Color('#e9b36d')
			.hsl()
			.darken(0.2)
			.hex(), // keyword.operator
		color7: Color('#7c7e7c')
			.hsl()
			.darken(0.2)
			.hex(), // Property, Separator, Terminator, list_item
		color8: Color('#565856')
			.hsl()
			.darken(0.2)
			.hex(), // Pseudo Property
		color9: Color('#de935e')
			.hsl()
			.darken(0.2)
			.hex(), // constant.numeric
	},
};

module.exports = TomorrowLight;
