// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Monokai Classic Color Scheme
 * @author Wimer Hazenberg, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author: 'Wimer Hazenberg, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Monokai Classic',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#272821')
			// .darken(0.2)
			.hex(),
		foreground: '#fdfff1',
		comment: '#6e7066',
		accent: Color('#e4db73')
			.hsl()
			// .darken(0.2)
			.hex(),
		redish: '#f82570',
		orangish: '#fc961f',
		yellowish: '#e4db73',
		greenish: '#a6e12d',
		bluish: '#66d9ee',
		purplish: '#ae81ff',
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
			background: '#262720', // [background]
			foreground: '#fdfff0', // [foreground]
		},
		gutter: {
			background: '#262720', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a', // #0000005a for light
		},
		caret: '#e4db72', // [caret]
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
			current: '#3c', // [findHighlight+3c]
			// for dark
			other: '#ffffff16',
		},
		lineHighlight: '#ffffff0d', // [lineHighlight]
		blockquote: {
			background: '#ffffff13', // [punctuation.definition.blockquote]
			foreground: '#95978c', // [markup.quote]
		},
		link: '#68daee', // [markup.underline.link, string.other.link]
		comment: '#6e7066', // [comment] comment, punctuation.definition.comment
		string: '#a5e12d', // [string]
		color1: '#e4db72', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#f8256f', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#ac80ff', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#fdfff0', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#68daee', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#eebe4f', // [keyword.operator] keyword.operator
		color7: '#888b7e', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#adafa7', // [entity.other.pseudo-class] Pseudo Property
		color9: '#fc941d', // [constant.numeric], attributes
	},
};

module.exports = Template;
