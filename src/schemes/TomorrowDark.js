// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Tomorrow Dark Color Scheme
 * @author Chris Kempson, Ihor Oleksandrov, Swashata Ghosh
 */
const TomorrowDark = {
	author: 'Chris Kempson, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Tomorrow Dark',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#2d2d2d')
			.darken(0.2)
			.hex(),
		foreground: '#d3d0c8',
		comment: '#747369',
		accent: Color('#f99157')
			.hsl()
			.darken(0.2)
			.hex(),
		redish: '#f2777a',
		orangish: '#f99157',
		yellowish: '#ffcc66',
		greenish: '#99cc99',
		bluish: '#6699cc',
		purplish: '#cc99cc',
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
			background: '#1d1f20',
			foreground: '#c5c9c6',
		},
		gutter: {
			background: '#1d1f20',
			foreground: '#ffffff33',
		},
		lineNumber: {
			foreground: '#ffffff33',
			active: '#ffffff50',
		},
		caret: '#de935e',
		selection: {
			general: '#ffffff16',
			bright: '#ffffff1a',
			border: '#ffffff16',
			inactive: '#ffffff10',
		},
		guide: {
			indent: '#ffffff1a',
			whitespace: '#ffffff16',
			ruler: '#ffffff1a',
			bracket: '#ffffff16',
		},
		find: {
			current: '#f2d98c1e',
			other: '#ffffff16',
		},
		lineHighlight: '#ffffff0d',
		blockquote: {
			background: '#ffffff13',
			foreground: '#bcbdbc',
		},
		link: '#82a3bf',
		comment: '#959795', // comment, punctuation.definition.comment
		string: '#b4bc67',
		color1: '#f0c775', // constant.numeric, constant.language, entity.name
		color2: '#cc6666', // variable.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#b295bb', // constant, constant.other, constant.character, keyword, storage.type, attributes
		color4: '#c5c9c6', // variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#82a3bf', // variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#e9b36d', // keyword.operator
		color7: '#afb1af', // Property, Separator, Terminator, list_item
		color8: '#d6d7d6', // Pseudo Property
	},
};

module.exports = TomorrowDark;
