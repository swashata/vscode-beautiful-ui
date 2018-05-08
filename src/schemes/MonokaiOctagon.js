// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Template Color Scheme
 * @author Wimer Hazenberg, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author: 'Wimer Hazenberg, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Monokai Octagon',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#282a3a')
			// .darken(0.2)
			.hex(),
		foreground: '#eaf2f1',
		comment: '#696d77',
		accent: Color('#ffd76d')
			.hsl()
			// .darken(0.2)
			.hex(),
		redish: '#ff657a',
		orangish: '#ff9b5e',
		yellowish: '#ffd76d',
		greenish: '#bad761',
		bluish: '#9cd1bb',
		purplish: '#c39ac9',
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
			background: '#282a39', // [background]
			foreground: '#e9f1f0', // [foreground]
		},
		gutter: {
			background: '#282a39', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a', // #0000005a for light
		},
		caret: '#ffd86b', // [caret]
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
		},
		lineHighlight: '#ffffff0d', // [lineHighlight]
		blockquote: {
			background: '#ffffff13', // [punctuation.definition.blockquote]
			foreground: '#90949d', // [markup.quote]
		},
		link: '#9dd2bc', // [markup.underline.link, string.other.link]
		comment: '#696d77', // [comment] comment, punctuation.definition.comment
		string: '#b9d760', // [string]
		color1: '#ffd86b', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#ff667a', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#c39cc9', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#e9f1f0', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#9dd2bc', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#ffbf66', // [keyword.operator] keyword.operator
		color7: '#838791', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#abaeb5', // [entity.other.pseudo-class] Pseudo Property
		color9: '#ff9a5c', // [constant.numeric], attributes
	},
};

module.exports = Template;
