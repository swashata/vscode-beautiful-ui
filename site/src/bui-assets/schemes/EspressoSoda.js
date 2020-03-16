// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Template Color Scheme
 * @author Ian Hill, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author: 'Ian Hill, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Espresso Soda',
	type: 'light', // dark, or light
	workspace: {
		background: Color('#ffffff')
			.darken(0.1)
			.hex(),
		foreground: Color('#000000')
			.hsl()
			.lighten(0.1)
			.hex(),
		comment: '#adadad',
		accent: Color('#3a77bf')
			.hsl()
			// .darken(0.2)
			.hex(),
		redish: '#d44950',
		orangish: '#bc670f',
		yellowish: '#b3950e',
		greenish: '#61862f',
		bluish: '#3a77bf',
		purplish: '#7653c1',
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
			background: '#ffffff', // [background]
			foreground: '#000000', // [foreground]
		},
		gutter: {
			background: '#ffffff', // [gutter]
			foreground: '#00000033', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#00000033', // [gutterForeground]
			active: '#0000005a', // #0000005a for light
		},
		caret: '#3b79bf', // [caret]
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
			current: '#f5da8a3c', // [findHighlight+3c]
			other: '#00000016',
		},
		lineHighlight: '#0000000d', // [lineHighlight]
		blockquote: {
			background: '#00000013', // [punctuation.definition.blockquote]
			foreground: '#878787', // [markup.quote]
		},
		link: '#3b79bf', // [markup.underline.link, string.other.link]
		comment: '#adadad', // [comment] comment, punctuation.definition.comment
		string: '#5f842e', // [string]
		color1: '#b3950f', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#d44950', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#7553c1', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: Color('#000000')
			.hsl()
			.lighten(0.15)
			.hex(), // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#3b79bf', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#b8820f', // [keyword.operator] keyword.operator
		color7: '#949494', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#6e6e6e', // [entity.other.pseudo-class] Pseudo Property
		color9: '#bd690f', // [constant.numeric], attributes
	},
};

module.exports = Template;
