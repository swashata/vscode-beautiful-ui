// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Template Color Scheme
 * @author Ike Ku, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author: 'Ike Ku, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Ayu Light',
	type: 'light', // dark, or light
	workspace: {
		background: Color('#fafafa')
			.darken(0.05)
			.hex(),
		foreground: '#5c6066',
		comment: '#abb0b6',
		accent: Color('#f2590c')
			.hsl()
			// .darken(0.2)
			.hex(),
		redish: '#f07178',
		orangish: '#f2590c',
		yellowish: '#f29718',
		greenish: '#86b300',
		bluish: '#41a6d9',
		purplish: '#a37acc',
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
			background: '#fafafa', // [background]
			foreground: '#5c6066', // [foreground]
		},
		gutter: {
			background: '#fafafa', // [gutter]
			foreground: '#00000033', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#00000033', // [gutterForeground]
			active: '#ffffff5a', // #0000005a for light
		},
		caret: '#f4590b', // [caret]
		selection: {
			// for light theme
			general: '#00000016',
			bright: '#0000001a',
			border: '#00000016',
			inactive: '#00000010',
		},
		guide: {
			// for light theme
			indent: '#0000001a',
			active: '#00000033',
			whitespace: '#00000016',
			ruler: '#0000001a',
			bracket: '#00000016',
		},
		find: {
			current: '#f8dc873c', // [findHighlight+3c]

			// for light
			other: '#00000016',
		},
		lineHighlight: '#0000000d', // [lineHighlight]
		blockquote: {
			background: '#00000013', // [punctuation.definition.blockquote]
			foreground: '#818992', // [markup.quote]
		},
		link: '#3fa6d9', // [markup.underline.link, string.other.link]
		comment: '#aaafb5', // [comment] comment, punctuation.definition.comment
		string: '#86b300', // [string]
		color1: '#f29718', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#f07076', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#a37acd', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: Color('#5c6066')
			.hsl()
			.darken(0.05)
			.hex(), // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#3fa6d9', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#f37e12', // [keyword.operator] keyword.operator
		color7: '#8f969e', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#687078', // [entity.other.pseudo-class] Pseudo Property
		color9: '#f4590b', // [constant.numeric], attributes
	},
};

module.exports = Template;
