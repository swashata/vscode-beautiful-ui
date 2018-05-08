// Color lib to make our lives a bit easy
const Color = require('color');

// Color codes for different themes

/**
 * Monokai Machine Color Scheme
 * @author Wimer Hazenberg, Ihor Oleksandrov, Swashata Ghosh
 */
const Template = {
	author: 'Wimer Hazenberg, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Monokai Machine',
	type: 'dark', // dark, or light
	workspace: {
		background: Color('#273136')
			// .darken(0.2)
			.hex(),
		foreground: '#f2fffc',
		comment: '#6b7678',
		accent: Color('#ffed72')
			.hsl()
			// .darken(0.2)
			.hex(),
		redish: '#ff6d7e',
		orangish: '#ffb270',
		yellowish: '#ffed72',
		greenish: '#a2e57b',
		bluish: '#7cd5f1',
		purplish: '#baa0f8',
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
			background: '#273035', // [background]
			foreground: '#f0fffb', // [foreground]
		},
		gutter: {
			background: '#273035', // [gutter]
			foreground: '#ffffff33', // [gutterForeground]
		},
		lineNumber: {
			foreground: '#ffffff33', // [gutterForeground]
			active: '#ffffff5a', // #0000005a for light
		},
		caret: '#ffec70', // [caret]
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
			foreground: '#939d9f', // [markup.quote]
		},
		link: '#7ed6f1', // [markup.underline.link, string.other.link]
		comment: '#6c787a', // [comment] comment, punctuation.definition.comment
		string: '#a2e57b', // [string]
		color1: '#ffec70', // [entity.name - (entity.name.section | entity.name.tag | entity.name.label)] entity.name, support.constant.property-value
		color2: '#ff6b7c', // [variable.language] variable.language, constant.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#baa0f8', // [storage.type] constant, constant.other, constant.character, keyword, storage.type
		color4: '#f0fffb', // [variable.parameter] variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#7ed6f1', // [variable.function] variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#ffd470', // [keyword.operator] keyword.operator
		color7: '#859193', // [punctuation.separator] Property, Separator, Terminator, list_item
		color8: '#aeb6b7', // [entity.other.pseudo-class] Pseudo Property
		color9: '#ffb370', // [constant.numeric], attributes
	},
};

module.exports = Template;
