// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Template Color Scheme
 * @author author, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author: 'author, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Template',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#')
			.darken(0.2)
			.hex(),
		foreground: '#',
		comment: '#',
		accent: Color('#')
			.hsl()
			.darken(0.2)
			.hex(),
		redish: '#',
		orangish: '#',
		yellowish: '#',
		greenish: '#',
		bluish: '#',
		purplish: '#',
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
			background: '#', // [background]
			foreground: '#', // [foreground]
		},
		gutter: {
			background: '#', // [gutter]
			foreground: '#', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#', // [gutterForeground]
			active: '#ffffff5a', // #0000005a for light
		},
		caret: '#', // [caret]
		selection: {
			// for dark theme
			general: '#ffffff16',
			bright: '#ffffff1a',
			border: '#ffffff16',
			inactive: '#ffffff10',
			// for light theme
			// general: '#00000016',
			// bright: '#0000001a',
			// border: '#00000016',
			// inactive: '#00000010',
		},
		guide: {
			// for dark theme
			indent: '#ffffff1a',
			active: '#ffffff33',
			whitespace: '#ffffff16',
			ruler: '#ffffff1a',
			bracket: '#ffffff16',
			// for light theme
			// indent: '#0000001a',
			// active: '#00000033',
			// whitespace: '#00000016',
			// ruler: '#0000001a',
			// bracket: '#00000016',
		},
		find: {
			current: '#3c', // [findHighlight+3c]
			// for dark
			other: '#ffffff16',
			// for light
			// other: '#00000016',
		},
		lineHighlight: '#', // [lineHighlight]
		blockquote: {
			background: '#', // [punctuation.definition.blockquote]
			foreground: '#', // [markup.quote]
		},
		link: '#', // [markup.underline.link, string.other.link]
		comment: '#', // [comment] comment, punctuation.definition.comment
		string: '#', // [string]
		color1: '#', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#', // [keyword.operator] keyword.operator
		color7: '#', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#', // [entity.other.pseudo-class] Pseudo Property
		color9: '#', // [constant.numeric], attributes
	},
};

module.exports = Template;
