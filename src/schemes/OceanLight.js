// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Ocean Light Color Scheme
 * @author Chris Kempson, Ihor Oleksandrov, Swashata Ghosh
 */
const OceanLight = {
	author: 'Chris Kempson, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Ocean Light',
	type: 'light', // dark, or light
	workspace: {
		background: Color('#eff1f5').hex(),
		foreground: '#4f5b66',
		comment: '#a6acb9',
		accent: Color('#a3be8c')
			.hsl()
			.darken(0.1)
			.hex(),
		redish: Color('#bf616a')
			.hsl()
			.darken(0.4)
			.hex(),
		orangish: Color('#d08770')
			.hsl()
			.darken(0.4)
			.hex(),
		yellowish: Color('#ebcb8b')
			.hsl()
			.darken(0.4)
			.hex(),
		greenish: Color('#a3be8c')
			.hsl()
			.darken(0.4)
			.hex(),
		bluish: Color('#8fa1b3')
			.hsl()
			.darken(0.4)
			.hex(),
		purplish: Color('#b48ead')
			.hsl()
			.darken(0.4)
			.hex(),
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
			background: '#eff1f5', // [background]
			foreground: '#4e5a65', // [foreground]
		},
		gutter: {
			background: '#eff1f5', // [gutter]
			foreground: '#00000033', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#00000033', // [gutterForeground]
			active: '#0000000d', // [lineHighlight]
		},
		caret: '#a4bf8d', // [caret]
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
			current: '#edd6913c', // [findHighlight+3c]

			// for light
			other: '#00000016',
		},
		lineHighlight: '#0000000d', // [lineHighlight]
		blockquote: {
			background: '#00000013', // [punctuation.definition.blockquote]
			foreground: '#7c8598', // [markup.quote]
		},
		link: '#8fa1b3', // [markup.underline.link, string.other.link]
		comment: '#a6acb9', // [comment] comment, punctuation.definition.comment
		string: '#a4bf8d', // [string]
		color1: Color('#ebca89')
			.hsl()
			.darken(0.2)
			.hex(), // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: Color('#be6069')
			.hsl()
			.darken(0.2)
			.hex(), // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: Color('#b48ead')
			.hsl()
			.darken(0.2)
			.hex(), // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: Color('#4e5a65')
			.hsl()
			.darken(0.2)
			.hex(), // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: Color('#8fa1b3')
			.hsl()
			.darken(0.2)
			.hex(), // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: Color('#e1ae7f')
			.hsl()
			.darken(0.2)
			.hex(), // [keyword.operator] keyword.operator
		color7: Color('#8a92a3')
			.hsl()
			.darken(0.2)
			.hex(), // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: Color('#636b7e')
			.hsl()
			.darken(0.2)
			.hex(), // [entity.other.pseudo-class] Pseudo Property
		color9: Color('#d18771')
			.hsl()
			.darken(0.2)
			.hex(), // [constant.numeric], attributes
	},
};

module.exports = OceanLight;
