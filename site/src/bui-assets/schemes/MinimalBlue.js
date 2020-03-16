// Color lib to make our lives a bit easy
const Color = require('color');

// https://coolors.co/463730-1f5673-759fbc-90c3c8-b9b8d3
const mainColor = Color('#759FBC').hsl();
const accentColor = Color('#90C3C8').hsl();
const foreGround = Color('#d4d4d4').hsl();
const backGround = Color('#282c35').hsl();

/**
 * Tomorrow Dark Color Scheme
 * @author Swashata Ghosh
 */
const Template = {
	author: 'Swashata Ghosh',
	name: 'Minimal Blue',
	type: 'dark', // dark, or light
	workspace: {
		background: backGround.hex(),
		foreground: foreGround.hex(),
		comment: backGround.lighten(0.5).hex(),
		accent: accentColor.darken(0.2).hex(),
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
			background: backGround.hex(),
			foreground: foreGround.hex(),
		},
		gutter: {
			background: backGround.hex(),
			foreground: '#ffffff33',
		},
		lineNumber: {
			foreground: '#ffffff33',
			active: '#ffffff5a',
		},
		caret: mainColor.lighten(0.2).hex(),
		selection: {
			general: '#ffffff16',
			bright: '#ffffff1a',
			border: '#ffffff16',
			inactive: '#ffffff10',
		},
		guide: {
			indent: '#ffffff1a',
			active: '#ffffff33',
			whitespace: '#ffffff16',
			ruler: '#ffffff1a',
			bracket: '#ffffff16',
		},
		find: {
			current: '#f2d98c3c',
			other: '#ffffff16',
		},
		lineHighlight: '#ffffff0d',
		blockquote: {
			background: '#ffffff13',
			foreground: '#bcbdbc',
		},
		link: accentColor.hex(),
		comment: foreGround.darken(0.5).hex(), // comment, punctuation.definition.comment
		string: foreGround.darken(0.1).hex(),
		color1: foreGround.hex(), // constant.language, entity.name
		color2: mainColor.hex(), // variable.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: mainColor.hex(), // constant, constant.other, constant.character, keyword, storage.type, attributes
		color4: foreGround.hex(), // variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: foreGround.hex(), // variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: foreGround.hex(), // keyword.operator
		color7: foreGround.hex(), // Property, Separator, Terminator, list_item
		color8: foreGround.hex(), // Pseudo Property
		color9: foreGround.hex(), // constant.numeric
	},
};

module.exports = Template;
