// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Oceanic Next Color Scheme
 * @author Dmitri Voronianski, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author: 'Dmitri Voronianski, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Oceanic Next',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#1b2b34')
			// .darken(0.2)
			.hex(),
		foreground: '#cdd3de',
		comment: '#65737e',
		accent: Color('#99c794')
			.hsl()
			// .darken(0.2)
			.hex(),
		redish: '#ec5f67',
		orangish: '#f99157',
		yellowish: '#fac863',
		greenish: '#99c794',
		bluish: '#6699cc',
		purplish: '#c594c5',
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
			background: '#1a2a32', // [background]
			foreground: '#ced4de', // [foreground]
		},
		gutter: {
			background: '#1a2a32', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a',
		},
		caret: '#99c794', // [caret]
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
			current: '#fbdd833c', // [findHighlight+3c]
			// for dark
			other: '#ffffff16',
		},
		lineHighlight: '#ffffff0d', // [lineHighlight]
		blockquote: {
			background: '#ffffff13', // [punctuation.definition.blockquote]
			foreground: '#8e9aa4', // [markup.quote]
		},
		link: '#6699cc', // [markup.underline.link, string.other.link]
		comment: '#66747f', // [comment] comment, punctuation.definition.comment
		string: '#99c794', // [string]
		color1: '#fac761', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#ec5f66', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#c695c6', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#ced4de', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#6699cc', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#fab05c', // [keyword.operator] keyword.operator
		color7: '#808e99', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#aab4bb', // [entity.other.pseudo-class] Pseudo Property
		color9: '#f99058', // [constant.numeric], attributes
	},
};

module.exports = Template;
