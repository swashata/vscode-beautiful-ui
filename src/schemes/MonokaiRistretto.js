// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Template Color Scheme
 * @author Wimer Hazenberg, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author: 'Wimer Hazenberg, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Monokai Ristretto',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#2c2525')
			// .darken(0.2)
			.hex(),
		foreground: '#fff1f3',
		comment: '#72696a',
		accent: Color('#f9cc6c')
			.hsl()
			// .darken(0.2)
			.hex(),
		redish: '#fd6883',
		orangish: '#f38d70',
		yellowish: '#f9cc6c',
		greenish: '#adda78',
		bluish: '#85dacc',
		purplish: '#a8a9eb',
		terminal: {
			// works for light+dark
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
			background: '#2c2525', // [background]
			foreground: '#fff0f2', // [foreground]
		},
		gutter: {
			background: '#2c2525', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a', // #0000005a for light
		},
		caret: '#f9cc6c', // [caret]
		selection: {
			// for dark theme
			general: '#ffffff16',
			bright: '#ffffff1a',
			border: '#ffffff16',
			inactive: '#ffffff10',
		},
		guide: {
			// for dark theme
			indent: '#ffffff1a',
			active: '#ffffff33',
			whitespace: '#ffffff16',
			ruler: '#ffffff1a',
			bracket: '#ffffff16',
		},
		find: {
			current: '#fadd853c', // [findHighlight+3c]
			// for dark
			other: '#ffffff16',
		},
		lineHighlight: '#ffffff0d', // [lineHighlight]
		blockquote: {
			background: '#ffffff13', // [punctuation.definition.blockquote]
			foreground: '#989091', // [markup.quote]
		},
		link: '#86dacc', // [markup.underline.link, string.other.link]
		comment: '#72696a', // [comment] comment, punctuation.definition.comment
		string: '#acda77', // [string]
		color1: '#f9cc6c', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#fd6884', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#a8a9eb', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#fff0f2', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#86dacc', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#f7b36e', // [keyword.operator] keyword.operator
		color7: '#8c8283', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#b1aaab', // [entity.other.pseudo-class] Pseudo Property
		color9: '#f48e71', // [constant.numeric], attributes
	},
};

module.exports = Template;
