// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Template Color Scheme
 * @author Arctic Ice Studio, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author: 'Arctic Ice Studio, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Template',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#2e3440')
			// .darken(0.2)
			.hex(),
		foreground: '#d8dee9',
		comment: '#4c566a',
		accent: Color('#a4be8e')
			.hsl()
			// .darken(0.2)
			.hex(),
		redish: '#b96068',
		orangish: '#cb866f',
		yellowish: '#e8cb8c',
		greenish: '#a4be8e',
		bluish: '#85a1c0',
		purplish: '#b18dac',
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
			background: '#2f3541', // [background]
			foreground: '#d8dee9', // [foreground]
		},
		gutter: {
			background: '#2f3541', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a', // #0000005a for light
		},
		caret: '#a3be8e', // [caret]
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
			current: '#ead5953c', // [findHighlight+3c]
			// for dark
			other: '#ffffff16',
		},
		lineHighlight: '#ffffff0d', // [lineHighlight]
		blockquote: {
			background: '#ffffff13', // [punctuation.definition.blockquote]
			foreground: '#6e7c96', // [markup.quote]
		},
		link: '#86a1c1', // [markup.underline.link, string.other.link]
		comment: '#4d576a', // [comment] comment, punctuation.definition.comment
		string: '#a3be8e', // [string]
		color1: '#e8cb8c', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#b95f67', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#b18cac', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#d8dee9', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#86a1c1', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#deb182', // [keyword.operator] keyword.operator
		color7: '#637088', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#8c97ab', // [entity.other.pseudo-class] Pseudo Property
		color9: '#cc8771', // [constant.numeric], attributes
	},
};

module.exports = Template;
