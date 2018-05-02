const Color = require('color');

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
			background: '#000000',
			foreground: '#ffffff',
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
			current: '#f2d98c',
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
		color7: '#afb1af', // Property, Separator, Terminator
		color8: '#d6d7d6', // Pseudo Property
	},
	scheme: {
		blockquote: {
			background: '#ffffff13',
			foreground: '#bcbdbc',
		},
		'markup.error': '#cc6666',
		'message.error': '#cc6666',
		'markup.warning': '#f0c775',
		'markup.info': '#82a3bf',
		'markup.deleted': '#cc6666',
		'markup.inserted': '#b4bc67',
		'markup.changed': '#82a3bf',
		'markup.ignored': '#898b89',
		'markup.untracked': '#898b89',
		'markup.heading': '#cc6666',
		'markup.list.unnumbered': '#afb1af',
		'markup.list.numbered': '#82a3bf',
		'markup.quote': '#bcbdbc',
		link: '#82a3bf',
		'link.description': '#b4bc67',
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
		return `${this.workspace.background}${(40).toString(16)}`;
	},
	textFaded() {
		return `${this.workspace.foreground}${(40).toString(16)}`;
	},
	bgAccent() {
		return Color(this.workspace.accent)
			.hsl()
			.darken(0.15)
			.hex();
	},
	bgAccentDarker() {
		return Color(this.workspace.accent)
			.hsl()
			.darken(0.2)
			.hex();
	},
	bgAccentLighter() {
		return Color(this.workspace.accent)
			.hsl()
			.darken(0.1)
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
	textInvalid() {
		return Color(this.workspace.redish)
			.hsl()
			.lighten(0.4)
			.hex();
	},
	bgInfo() {
		return Color(this.workspace.bluish)
			.hsl()
			.darken(0.2)
			.hex();
	},
	textInfo() {
		return Color(this.workspace.bluish)
			.hsl()
			.lighten(0.4)
			.hex();
	},
	bgWarning() {
		return Color(this.workspace.orangish)
			.hsl()
			.darken(0.2)
			.hex();
	},
	textWarning() {
		return Color(this.workspace.orangish)
			.hsl()
			.lighten(0.4)
			.hex();
	},
	bgSuccess() {
		return Color(this.workspace.greenish)
			.hsl()
			.darken(0.2)
			.hex();
	},
	textSuccess() {
		return Color(this.workspace.greenish)
			.hsl()
			.lighten(0.4)
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
		return `${this.workspace.foreground}${(40).toString(16)}`;
	},
	scrollbarHover() {
		return `${this.workspace.foreground}${(50).toString(16)}`;
	},
	scrollbarActive() {
		return `${this.workspace.foreground}${(60).toString(16)}`;
	},
};

module.exports = {
	'Tomorrow Night': {
		...TomorrowDark,
		...modifiers,
	},
};
