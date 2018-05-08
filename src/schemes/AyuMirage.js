// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Template Color Scheme
 * @author Ike Ku, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author: 'Ike Ku, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Ayu Mirage',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#212733')
			.lighten(0.3)
			.hex(),
		foreground: '#d9d7ce',
		comment: '#5c6773',
		accent: Color('#ffd580')
			.hsl()
			// .darken(0.2)
			.hex(),
		redish: '#f07178',
		orangish: '#ffae57',
		yellowish: '#ffd580',
		greenish: '#bae67e',
		bluish: '#5ccfe6',
		purplish: '#d4bfff',
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
			background: '#202631', // [background]
			foreground: '#d9d7ce', // [foreground]
		},
		gutter: {
			background: '#202631', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a', // #0000005a for light
		},
		caret: '#ffd480', // [caret]
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
			// for light
			// other: '#00000016',
		},
		lineHighlight: '#ffffff0d', // [lineHighlight]
		blockquote: {
			background: '#ffffff13', // [punctuation.definition.blockquote]
			foreground: '#828e9b', // [markup.quote]
		},
		link: '#5ccfe6', // [markup.underline.link, string.other.link]
		comment: '#5d6874', // [comment] comment, punctuation.definition.comment
		string: '#bbe77e', // [string]
		color1: '#ffd480', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#f07076', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#d3bdff', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#d9d7ce', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#5ccfe6', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#ffc670', // [keyword.operator] keyword.operator
		color7: '#748290', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#9fa8b2', // [entity.other.pseudo-class] Pseudo Property
		color9: '#ffae57', // [constant.numeric], attributes
	},
};

module.exports = Template;
