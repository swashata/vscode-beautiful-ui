// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * One Dark Color Scheme
 * @author GitHub Inc., Ihor Oleksandrov, Swashata Ghosh
 */
const OneDark = {
	author: 'GitHub Inc., Ihor Oleksandrov, Swashata Ghosh',
	name: 'One Dark',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#252930')
			.darken(0.2)
			.hex(),
		foreground: '#aab1bf',
		comment: '#5b6270',
		accent: Color('#61afef')
			.hsl()
			.darken(0.2)
			.hex(),
		redish: '#de6771',
		orangish: '#d19965',
		yellowish: '#e4bd76',
		greenish: '#97c279',
		bluish: '#61afef',
		purplish: '#c578dd',
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
		classic: {
			purple: '#c678dd',
			error: '#f44747',
			coral: '#e06c75',
			whiskey: '#d19a66',
			chalky: '#e5c07b',
			lightDark: '#7f848e',
			dark: '#5c6370',
			malibu: '#61afef',
			green: '#98c379',
			fountainBlue: '#56b6c2',
			invalid: '#ffffff',
		},
	},
	tokens: {
		editor: {
			background: '#262a31', // [background]
			foreground: '#abb2bf', // [foreground]
		},
		gutter: {
			background: '#262a31', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a',
		},
		caret: '#61afef', // [caret]
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
			current: '#ead5953c', // [findHighlight+3c]
			other: '#ffffff16',
		},
		lineHighlight: '#ffffff0d', // [lineHighlight]
		blockquote: {
			background: '#ffffff13', // [punctuation.definition.blockquote]
			foreground: '#818998', // [markup.quote]
		},
		link: '#61afef', // [markup.underline.link, string.other.link]
		comment: '#5c6370', // [comment] comment, punctuation.definition.comment
		string: '#98c27a', // [string]
		color1: '#56b6c2', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#e06c75', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier
		color3: '#c678dd', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#abb2bf', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#61afef', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#e5c07b', // [keyword.operator] keyword.operator
		color7: '#7f848e', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#9da3af', // [entity.other.pseudo-class] Pseudo Property
		color9: '#d19a66', // [constant.numeric], attributes
	},
};

module.exports = OneDark;
