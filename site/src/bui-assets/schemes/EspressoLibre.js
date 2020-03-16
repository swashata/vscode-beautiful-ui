// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Template Color Scheme
 * @author Chris Thomas, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author: 'Chris Thomas, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Espresso Libre',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#2a211c')
			// .darken(0.2)
			.hex(),
		foreground: '#bdae9d',
		comment: '#7c6f59',
		accent: Color('#43a8ed')
			.hsl()
			.darken(0.1)
			.hex(),
		redish: '#c5656b',
		orangish: '#ff9358',
		yellowish: '#ffc600',
		greenish: '#44aa43',
		bluish: '#43a8ed',
		purplish: '#d197d9',
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
			background: '#2b221d', // [background]
			foreground: Color('#beae9d')
				.hsl()
				.lighten(0.1)
				.hex(), // [foreground]
		},
		gutter: {
			background: '#2b221d', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a', // #0000005a for light
		},
		caret: '#44aaee', // [caret]
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
			foreground: '#a39780', // [markup.quote]
		},
		link: '#44aaee', // [markup.underline.link, string.other.link]
		comment: '#7c705a', // [comment] comment, punctuation.definition.comment
		string: '#45a843', // [string]
		color1: '#ffc800', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#c4646a', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#d197d8', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#beae9d', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#44aaee', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#ffb224', // [keyword.operator] keyword.operator
		color7: '#988a71', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#b8ae9d', // [entity.other.pseudo-class] Pseudo Property
		color9: '#ff9257', // [constant.numeric], attributes
	},
};

module.exports = Template;
