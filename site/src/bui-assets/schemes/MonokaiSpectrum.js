// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Template Color Scheme
 * @author Wimer Hazenberg, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author: 'Wimer Hazenberg, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Monokai Spectrum',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#222222')
			// .darken(0.2)
			.hex(),
		foreground: '#f7f1ff',
		comment: '#69676c',
		accent: Color('#fce566')
			.hsl()
			// .darken(0.2)
			.hex(),
		redish: '#fc618d',
		orangish: '#fd9353',
		yellowish: '#fce566',
		greenish: '#7bd88f',
		bluish: '#5ad4e6',
		purplish: '#948ae3',
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
			background: '#212121', // [background]
			foreground: '#f6f0ff', // [foreground]
		},
		gutter: {
			background: '#212121', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a', // #0000005a for light
		},
		caret: '#fce564', // [caret]
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
			current: '#fcde833c', // [findHighlight+3c]
			// for dark
			other: '#ffffff16',
		},
		lineHighlight: '#ffffff0d', // [lineHighlight]
		blockquote: {
			background: '#ffffff13', // [punctuation.definition.blockquote]
			foreground: '#8e8d91', // [markup.quote]
		},
		link: '#5bd4e6', // [markup.underline.link, string.other.link]
		comment: '#68666b', // [comment] comment, punctuation.definition.comment
		string: '#79d78e', // [string]
		color1: '#fce564', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#fc5f8b', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#968ce3', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#f6f0ff', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#5bd4e6', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#fcc55f', // [keyword.operator] keyword.operator
		color7: '#828085', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#a8a7aa', // [entity.other.pseudo-class] Pseudo Property
		color9: '#fd9453', // [constant.numeric], attributes
	},
};

module.exports = Template;
