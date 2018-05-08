// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Template Color Scheme
 * @author Adam Christiansen, Merrick Christensen, Trevor D. Miller, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author:
		'Adam Christiansen, Merrick Christensen, Trevor D. Miller, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Nova',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#3c4c55')
			.darken(0.1)
			.hex(),
		foreground: '#c5d4dd',
		comment: '#899ba6',
		accent: Color('#a8ce93')
			.hsl()
			.darken(0.1)
			.hex(),
		redish: '#df8c8c',
		orangish: '#f2c38f',
		yellowish: '#dada93',
		greenish: '#a8ce93',
		bluish: '#83afe5',
		purplish: '#9a93e1',
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
			background: '#3b4b54', // [background]
			foreground: '#c5d4dd', // [foreground]
		},
		gutter: {
			background: '#3b4b54', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a', // #0000005a for light
		},
		caret: '#a7ce92', // [caret]
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
			current: '#decfa13c', // [findHighlight+3c]
			// for dark
			other: '#ffffff16',
		},
		lineHighlight: '#ffffff0d', // [lineHighlight]
		blockquote: {
			background: '#ffffff13', // [punctuation.definition.blockquote]
			foreground: '#b3bfc6', // [markup.quote]
		},
		link: '#85b0e5', // [markup.underline.link, string.other.link]
		comment: '#889aa5', // [comment] comment, punctuation.definition.comment
		string: '#a7ce92', // [string]
		color1: '#dbdb95', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#de8c8c', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#9993e1', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#c5d4dd', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#85b0e5', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#e3d091', // [keyword.operator] keyword.operator
		color7: '#a5b3bb', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#d0d8dc', // [entity.other.pseudo-class] Pseudo Property
		color9: '#f2c38d', // [constant.numeric], attributes
	},
};

module.exports = Template;
