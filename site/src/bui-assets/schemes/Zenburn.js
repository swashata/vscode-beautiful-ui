// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Template Color Scheme
 * @author Jani Nurminen, Colin T.A. Gray, William D. Neumann, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author:
		'Jani Nurminen, Colin T.A. Gray, William D. Neumann, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Zenburn',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#393939')
			.darken(0.15)
			.hex(),
		foreground: '#dedede',
		comment: '#747875',
		accent: Color('#f0dfaf')
			.hsl()
			.darken(0.2)
			.hex(),
		redish: '#cc9393',
		orangish: '#dfaf8f',
		yellowish: '#f0dfaf',
		greenish: '#7f9f7f',
		bluish: '#8fbede',
		purplish: '#a7a1e6',
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
			background: '#383838', // [background]
			foreground: '#dedede', // [foreground]
		},
		gutter: {
			background: '#383838', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a', // #0000005a for light
		},
		caret: '#efdeae', // [caret]
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
			current: '#ead5953c', // [findHighlight+3c]
			// for dark
			other: '#ffffff16',
		},
		lineHighlight: '#ffffff0d', // [lineHighlight]
		blockquote: {
			background: '#ffffff13', // [punctuation.definition.blockquote]
			foreground: '#9a9e9a', // [markup.quote]
		},
		link: '#91bfde', // [markup.underline.link, string.other.link]
		comment: '#737874', // [comment] comment, punctuation.definition.comment
		string: '#7f9f7f', // [string]
		color1: '#efdeae', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#cc9393', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#a8a2e6', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#dedede', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#91bfde', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#e9caa0', // [keyword.operator] keyword.operator
		color7: '#8d918d', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#b4b7b4', // [entity.other.pseudo-class] Pseudo Property
		color9: '#e0b090', // [constant.numeric], attributes
	},
};

module.exports = Template;
