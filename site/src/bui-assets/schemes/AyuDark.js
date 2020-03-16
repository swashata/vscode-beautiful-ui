// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Template Color Scheme
 * @author Ike Ku, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author: 'Ike Ku, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Ayu Dark',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#0f1419')
			.lighten(0.3)
			.hex(),
		foreground: '#e6e1cf',
		comment: '#5c6773',
		accent: Color('#ffb454')
			.hsl()
			// .darken(0.2)
			.hex(),
		redish: '#f07178',
		orangish: '#ff7733',
		yellowish: '#ffb454',
		greenish: '#c2d94c',
		bluish: '#50b4e6',
		purplish: '#9277ff',
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
			background: '#0f141a', // [background]
			foreground: '#e7e2d0', // [foreground]
		},
		gutter: {
			background: '#0f141a', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a', // #0000005a for light
		},
		caret: '#ffb452', // [caret]
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
			// for light
			// other: '#00000016',
		},
		lineHighlight: '#ffffff0d', // [lineHighlight]
		blockquote: {
			background: '#ffffff13', // [punctuation.definition.blockquote]
			foreground: '#828e9b', // [markup.quote]
		},
		link: '#51b4e6', // [markup.underline.link, string.other.link]
		comment: '#5d6874', // [comment] comment, punctuation.definition.comment
		string: '#c1d94a', // [string]
		color1: '#ffb452', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#f07076', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#9175ff', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#e7e2d0', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#51b4e6', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#ff9d47', // [keyword.operator] keyword.operator
		color7: '#748290', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#9fa8b2', // [entity.other.pseudo-class] Pseudo Property
		color9: '#ff7733', // [constant.numeric], attributes
	},
};

module.exports = Template;
