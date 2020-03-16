// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Solarized Dark Color Scheme
 * @author Ethan Schoonover, Ihor Oleksandrov, Swashata Ghosh
 */
const SolarizedDark = {
	author: 'Ethan Schoonover, Ihor Oleksandrov, Swashata Ghosh',
	name: 'SolarizedDark',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#002b36')
			.darken(0.1)
			.hex(),
		foreground: '#839496',
		comment: '#586e75',
		accent: Color('#268bd2')
			.hsl()
			.darken(0.1)
			.hex(),
		redish: '#dc322f',
		orangish: '#cb4b16',
		yellowish: '#b58900',
		greenish: '#859900',
		bluish: '#268bd2',
		purplish: '#6c71c4',
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
			background: '#002d38', // [background]
			foreground: '#839495', // [foreground]
		},
		gutter: {
			background: '#002d38', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a',
		},
		caret: '#278bd3', // [caret]
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
			foreground: '#7c959c', // [markup.quote]
		},
		link: '#278bd3', // [markup.underline.link, string.other.link]
		comment: '#586e74', // [comment] comment, punctuation.definition.comment
		string: '#859900', // [string]
		color1: '#b38600', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#dc312e', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#6d72c5', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#839495', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#278bd3', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#be7009', // [keyword.operator] keyword.operator
		color7: '#6e8a91', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#99adb2', // [entity.other.pseudo-class] Pseudo Property
		color9: '#ca4c16', // [constant.numeric], attributes
	},
};

module.exports = SolarizedDark;
