// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Solarized Light Color Scheme
 * @author Ethan Schoonover, Ihor Oleksandrov, Swashata Ghosh
 */
const SolarizedLight = {
	author: 'Ethan Schoonover, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Solarized Light',
	type: 'light', // dark, or light
	workspace: {
		background: Color('#fdf6e3')
			// .darken(0.1)
			.hex(),
		foreground: '#657b83',
		comment: '#93a1a1',
		accent: Color('#268bd2')
			// .hsl()
			// .darken(0.2)
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
			background: '#fdf6e2', // [background]
			foreground: '#647a82', // [foreground]
		},
		gutter: {
			background: '#fdf6e2', // [gutter]
			foreground: '#00000033', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#00000033', // [gutterForeground]
			active: '#0000005a',
		},
		caret: '#278bd3', // [caret]
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
			current: '#ffdf803c', // [findHighlight+3c]
			// for light
			other: '#00000016',
		},
		lineHighlight: '#0000000d', // [lineHighlight]
		blockquote: {
			background: '#00000013', // [punctuation.definition.blockquote]
			foreground: '#6b7b7b', // [markup.quote]
		},
		link: '#278bd3', // [markup.underline.link, string.other.link]
		comment: '#92a0a0', // [comment] comment, punctuation.definition.comment
		string: '#859900', // [string]
		color1: '#b38600', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#dc312e', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#6d72c5', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#647a82', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#278bd3', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#be7009', // [keyword.operator] keyword.operator
		color7: '#778888', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#535f5f', // [entity.other.pseudo-class] Pseudo Property
		color9: '#ca4c16', // [constant.numeric], attributes
	},
};

module.exports = SolarizedLight;
