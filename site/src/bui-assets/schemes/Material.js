// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Template Color Scheme
 * @author Mattia Astorino, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author: 'Mattia Astorino, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Material',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#263238')
			// .darken(0.2)
			.hex(),
		foreground: '#eeffff',
		comment: '#546E7A',
		accent: Color('#c3e88d')
			.hsl()
			// .darken(0.2)
			.hex(),
		redish: '#ff5370',
		orangish: '#f78c6c',
		yellowish: '#ffcb6b',
		greenish: '#c3e88d',
		bluish: '#82aaff',
		purplish: '#c792ea',
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
			background: '#253137', // [background]
			foreground: Color('#f0ffff')
				.hsl()
				.darken(0.02)
				.hex(), // [foreground]
		},
		gutter: {
			background: '#253137', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a', // #0000005a for light
		},
		caret: '#c3e88d', // [caret]
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
			foreground: '#7895a1', // [markup.quote]
		},
		link: '#80a8ff', // [markup.underline.link, string.other.link]
		comment: '#546d78', // [comment] comment, punctuation.definition.comment
		string: '#c3e88d', // [string]
		color1: '#ffcb6b', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#ff526f', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#c894eb', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: Color('#f0ffff')
			.hsl()
			.darken(0.05)
			.hex(), // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#80a8ff', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#fcb56e', // [keyword.operator] keyword.operator
		color7: '#698996', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#96adb6', // [entity.other.pseudo-class] Pseudo Property
		color9: '#f78e6e', // [constant.numeric], attributes
	},
};

module.exports = Template;
