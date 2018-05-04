// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Eighties Dark Color Scheme
 * @author Chris Kempson, Ihor Oleksandrov, Swashata Ghosh
 */
const EightiesDark = {
	author: 'Chris Kempson, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Eighties Dark',
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
			background: '#2e2e2e', // [background]
			foreground: '#d4d1c9', // [foreground]
		},
		gutter: {
			background: '#2e2e2e', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a',
		},
		caret: '#f99058', // [caret]
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
			current: '#ffdf803c', // [findHighlight+3c]

			other: '#ffffff16',
		},
		lineHighlight: '#ffffff0d', // [lineHighlight]
		blockquote: {
			background: '#ffffff13', // [punctuation.definition.blockquote]
			foreground: '#99988f', // [markup.quote]
		},
		link: '#6699cc', // [markup.underline.link, string.other.link]
		comment: '#737268', // [comment] comment, punctuation.definition.comment
		string: '#99cc99', // [string]
		color1: '#ffcc66', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#f2787a', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#cc99cc', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#d4d1c9', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#6699cc', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#fdb35d', // [keyword.operator] keyword.operator
		color7: '#8d8c81', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#b1b1a9', // [entity.other.pseudo-class] Pseudo Property
		color9: '#f99058', // [constant.numeric], attributes
	},
};

module.exports = EightiesDark;
