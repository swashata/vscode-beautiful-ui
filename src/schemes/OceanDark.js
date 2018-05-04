// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Ocean Dark Color Scheme
 * @author Chris Kempson, Ihor Oleksandrov, Swashata Ghosh
 */
const OceanDark = {
	author: 'Chris Kempson, Ihor Oleksandrov, Swashata Ghosh',
	name: 'OceanDark',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#2b303b')
			.darken(0.2)
			.hex(),
		foreground: '#c0c5ce',
		comment: '#65737e',
		accent: Color('#ebcb8b')
			.hsl()
			.darken(0.2)
			.hex(),
		redish: '#bf616a',
		orangish: '#d08770',
		yellowish: '#ebcb8b',
		greenish: '#a3be8c',
		bluish: '#8fa1b3',
		purplish: '#b48ead',
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
			background: '#2b303b', // [background]
			foreground: '#c0c5ce', // [foreground]
		},
		gutter: {
			background: '#2b303b', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a',
		},
		caret: '#ebca89', // [caret]
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
			current: '#edd6913c', // [findHighlight+3c]
			// for dark
			other: '#ffffff16',
		},
		lineHighlight: '#ffffff0d', // [lineHighlight]
		blockquote: {
			background: '#ffffff13', // [punctuation.definition.blockquote]
			foreground: '#8e9aa4', // [markup.quote]
		},
		link: '#8fa1b3', // [markup.underline.link, string.other.link]
		comment: '#66747f', // [comment] comment, punctuation.definition.comment
		string: '#a4bf8d', // [string]
		color1: '#ebca89', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#be6069', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#b48ead', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#c0c5ce', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#8fa1b3', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#e1ae7f', // [keyword.operator] keyword.operator
		color7: '#808e99', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#aab4bb', // [entity.other.pseudo-class] Pseudo Property
		color9: '#d18771', // [constant.numeric], attributes
	},
};

module.exports = OceanDark;
