const Color = require('color');

// A small function to convert alpha into hex
const convertAlpha = alpha =>
	parseInt(alpha, 10)
		.toString(16)
		.padStart(2, '0');
// Color codes for different themes
const TomorrowDark = {
	author: 'Chris Kempson, Ihor Oleksandrov, Swashata Ghosh',
	name: 'Tomorrow Night',
	type: 'dark',
	workspace: {
		background: Color('#2d2d2d')
			.darken(0.2)
			.hex(),
		foreground: '#d3d0c8',
		comment: '#747369',
		accent: Color('#f99157')
			.hsl()
			.darken(0.2)
			.hex(),
		redish: '#f2777a',
		orangish: '#f99157',
		yellowish: '#ffcc66',
		greenish: '#99cc99',
		bluish: '#6699cc',
		purplish: '#cc99cc',
		terminal: {
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
			background: '#1d1f20',
			foreground: '#c5c9c6',
		},
		gutter: {
			background: '#1d1f20',
			foreground: '#ffffff33',
		},
		lineNumber: {
			foreground: '#ffffff33',
			active: '#ffffff50',
		},
		caret: '#de935e',
		selection: {
			general: '#ffffff16',
			bright: '#ffffff1a',
			border: '#ffffff16',
			inactive: '#ffffff10',
		},
		guide: {
			indent: '#ffffff1a',
			whitespace: '#ffffff16',
			ruler: '#ffffff1a',
			bracket: '#ffffff16',
		},
		find: {
			current: '#f2d98c1e',
			other: '#ffffff16',
		},
		lineHighlight: '#ffffff0d',
		blockquote: {
			background: '#ffffff13',
			foreground: '#bcbdbc',
		},
		link: '#82a3bf',
		accent: '#de935e',
		comment: '#959795', // comment, punctuation.definition.comment
		string: '#b4bc67',
		color1: '#f0c775', // constant.numeric, constant.language, entity.name
		color2: '#cc6666', // variable.language, invalid, invalid.illegal, storage.modifier, entity.name.tag
		color3: '#b295bb', // constant, constant.other, constant.character, keyword, storage.type, attributes
		color4: '#c5c9c6', // variable, variable.parameter, Operators, Misc, punctuation.definition.variable
		color5: '#82a3bf', // variable.function, variable.annonation, variable.other.constant, entity.name.function, Functions, Special Method
		color6: '#e9b36d', // keyword.operator
		color7: '#afb1af', // Property, Separator, Terminator, list_item
		color8: '#d6d7d6', // Pseudo Property
	},
};

const modifiers = {
	// Background and text variations
	bgPrimary() {
		return this.workspace.background;
	},
	textPrimary() {
		return this.workspace.foreground;
	},
	bgLighter() {
		return Color(this.workspace.background)
			.hsl()
			.lighten(0.1)
			.hex();
	},
	textLighter() {
		return Color(this.workspace.foreground)
			.hsl()
			.darken(0.1)
			.hex();
	},
	bgLightest() {
		return Color(this.workspace.background)
			.hsl()
			.lighten(0.2)
			.hex();
	},
	textLightest() {
		return Color(this.workspace.foreground)
			.hsl()
			.darken(0.2)
			.hex();
	},
	bgDarker() {
		return Color(this.workspace.background)
			.hsl()
			.darken(0.1)
			.hex();
	},
	textDarker() {
		return Color(this.workspace.foreground)
			.hsl()
			.lighten(0.1)
			.hex();
	},
	bgDarkest() {
		return Color(this.workspace.background)
			.hsl()
			.darken(0.2)
			.hex();
	},
	textDarkest() {
		return Color(this.workspace.foreground)
			.hsl()
			.lighten(0.2)
			.hex();
	},
	bgFaded() {
		return `${this.workspace.background}${convertAlpha(40)}`;
	},
	textFaded() {
		return `${this.workspace.foreground}${convertAlpha(40)}`;
	},
	bgAccent() {
		return Color(this.workspace.accent)
			.hsl()
			.darken(0.25)
			.hex();
	},
	bgAccentDarker() {
		return Color(this.workspace.accent)
			.hsl()
			.darken(0.35)
			.hex();
	},
	bgAccentLighter() {
		return Color(this.workspace.accent)
			.hsl()
			.darken(0.2)
			.hex();
	},
	textAccent() {
		return '#ffffff';
	},
	bgActive() {
		return Color(this.workspace.background)
			.hsl()
			.lighten(0.3)
			.hex();
	},
	textActive() {
		return Color(this.workspace.foreground)
			.hsl()
			.lighten(0.3)
			.hex();
	},
	bgActivePassive() {
		return Color(this.workspace.background)
			.hsl()
			.lighten(0.25)
			.hex();
	},
	textActivePassive() {
		return Color(this.workspace.foreground)
			.hsl()
			.lighten(0.25)
			.hex();
	},
	bgInActive() {
		return Color(this.workspace.background)
			.hsl()
			.lighten(0.1)
			.hex();
	},
	bgInActiveFocus() {
		return Color(this.workspace.accent)
			.hsl()
			.lighten(0.05)
			.hex();
	},
	textInActive() {
		return Color(this.workspace.foreground)
			.hsl()
			.lighten(0.05)
			.hex();
	},
	bgFocus() {
		return Color(this.workspace.background)
			.hsl()
			.lighten(0.15)
			.hex();
	},
	textFocus() {
		return Color(this.workspace.foreground)
			.hsl()
			.lighten(0.15)
			.hex();
	},
	bgHover() {
		return Color(this.workspace.background)
			.hsl()
			.lighten(0.2)
			.hex();
	},
	textHover() {
		return Color(this.workspace.foreground)
			.hsl()
			.lighten(0.2)
			.hex();
	},
	bgInvalid() {
		return Color(this.workspace.redish)
			.hsl()
			.darken(0.2)
			.hex();
	},
	bgInvalidFaded() {
		return `${this.bgInvalid()}${convertAlpha(40)}`;
	},
	textInvalid() {
		return Color(this.workspace.redish)
			.hsl()
			.lighten(0.05)
			.hex();
	},
	bgInfo() {
		return Color(this.workspace.bluish)
			.hsl()
			.darken(0.2)
			.hex();
	},
	bgInfoFaded() {
		return `${this.bgInfo()}${convertAlpha(40)}`;
	},
	textInfo() {
		return Color(this.workspace.bluish)
			.hsl()
			.lighten(0.05)
			.hex();
	},
	bgWarning() {
		return Color(this.workspace.yellowish)
			.hsl()
			.darken(0.2)
			.hex();
	},
	bgWarningFaded() {
		return `${this.bgWarning()}${convertAlpha(40)}`;
	},
	textWarning() {
		return Color(this.workspace.yellowish)
			.hsl()
			.lighten(0.05)
			.hex();
	},
	bgSuccess() {
		return Color(this.workspace.greenish)
			.hsl()
			.darken(0.2)
			.hex();
	},
	bgSuccessFaded() {
		return `${this.bgSuccess()}${convertAlpha(40)}`;
	},
	textSuccess() {
		return Color(this.workspace.greenish)
			.hsl()
			.lighten(0.05)
			.hex();
	},
	// Shadow
	shadow() {
		return Color(this.workspace.background)
			.hsl()
			.lighten(0.1)
			.hex();
	},
	// Scrollbar - transparency
	scrollbarBg() {
		return `${this.workspace.foreground}${convertAlpha(40)}`;
	},
	scrollbarHover() {
		return `${this.workspace.foreground}${convertAlpha(50)}`;
	},
	scrollbarActive() {
		return `${this.workspace.foreground}${convertAlpha(60)}`;
	},
	// Git Gutter - Transparency
	gutterAdded() {
		return `${this.workspace.greenish}${convertAlpha(90)}`;
	},
	gutterDeleted() {
		return `${this.workspace.redish}${convertAlpha(90)}`;
	},
	gutterModified() {
		return `${this.workspace.yellowish}${convertAlpha(90)}`;
	},
};

module.exports = {
	'Tomorrow Night': {
		...TomorrowDark,
		...modifiers,
	},
};
