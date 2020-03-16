// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * One Light Color Scheme
 * @author GitHub Inc., Ihor Oleksandrov, Swashata Ghosh
 */
const OneLight = {
	author: 'GitHub Inc., Ihor Oleksandrov, Swashata Ghosh',
	name: 'One Light',
	type: 'light', // dark, or light
	workspace: {
		background: Color('#f9f9f9')
			.darken(0.1)
			.hex(),
		foreground: '#383942',
		comment: '#9fa0a6',
		accent: Color('#4078f1')
			.hsl()
			.darken(0.1)
			.hex(),
		redish: '#e45548',
		orangish: '#936400',
		yellowish: '#bb8000',
		greenish: '#50a04f',
		bluish: '#4078f1',
		purplish: '#a625a4',
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
			foreground: '#383942', // [foreground]
		},
		gutter: {
			background: '#fafafa', // [gutter]
			foreground: '#00000033', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#00000033', // [gutterForeground]
			active: '#0000005a',
		},
		caret: '#4179f1', // [caret]
		selection: {
			general: '#00000016',
			bright: '#0000001a',
			border: '#00000016',
			inactive: '#00000010',
		},
		guide: {
			indent: '#0000001a',
			active: '#00000033',
			whitespace: '#00000016',
			ruler: '#0000001a',
			bracket: '#00000016',
		},
		find: {
			current: '#ffdf803c', // [findHighlight+3c]
			other: '#00000016',
		},
		lineHighlight: '#0000000d', // [lineHighlight]
		blockquote: {
			background: '#00000013', // [punctuation.definition.blockquote]
			foreground: '#787982', // [markup.quote]
		},
		link: '#4179f1', // [markup.underline.link, string.other.link]
		comment: '#a0a1a7', // [comment] comment, punctuation.definition.comment
		string: '#50a14f', // [string]
		color1: '#bd8100', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#e45649', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#a725a5', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#383942', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#4179f1', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#ad7600', // [keyword.operator] keyword.operator
		color7: '#85868e', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#5f6067', // [entity.other.pseudo-class] Pseudo Property
		color9: '#946500', // [constant.numeric], attributes
	},
};

module.exports = OneLight;
