// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Template Color Scheme
 * @author Wimer Hazenberg, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author: 'Wimer Hazenberg, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Monokai Pro',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#2d2a2e')
			// .darken(0.2)
			.hex(),
		foreground: '#fcfcfa',
		comment: '#727072',
		accent: Color('#ffd866')
			.hsl()
			// .darken(0.2)
			.hex(),
		redish: '#ff6188',
		orangish: '#fc9867',
		yellowish: '#ffd866',
		greenish: '#a9dc76',
		bluish: '#78dce8',
		purplish: '#ab9df2',
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
			background: '#2c292e', // [background]
			foreground: '#fbfbf9', // [foreground]
		},
		gutter: {
			background: '#2c292e', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a', // #0000005a for light
		},
		caret: '#ffd966', // [caret]
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
			current: '#ffdf803c', // [findHighlight+3c]
			// for dark
			other: '#ffffff16',
		},
		lineHighlight: '#ffffff0d', // [lineHighlight]
		blockquote: {
			background: '#ffffff13', // [punctuation.definition.blockquote]
			foreground: '#979597', // [markup.quote]
		},
		link: '#78dde8', // [markup.underline.link, string.other.link]
		comment: '#716f71', // [comment] comment, punctuation.definition.comment
		string: '#a8db75', // [string]
		color1: '#ffd966', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#ff6188', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#aa9cf2', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#fbfbf9', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#78dde8', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#febf67', // [keyword.operator] keyword.operator
		color7: '#8b898b', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#b1afb1', // [entity.other.pseudo-class] Pseudo Property
		color9: '#fc9a69', // [constant.numeric], attributes
	},
};

module.exports = Template;
