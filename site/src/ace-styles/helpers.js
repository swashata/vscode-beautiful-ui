const Color = require('color');

/**
 * Convert alpha to hexadecimal code.
 * @param {Number} alpha Alpha value.
 * @returns {String} hex representation of the alpha, padded with 0 if needed
 */
const convertAlpha = alpha =>
	parseInt(alpha, 10)
		.toString(16)
		.padStart(2, '0');

/**
 * Different shades of colors to use with schemes
 */
const modifiers = {
	// Background and text variations
	bgPrimary() {
		return this.workspace.background;
	},
	textPrimary() {
		return this.workspace.foreground;
	},
	bgLighter() {
		const lighten = this.type === 'dark' ? 0.1 : 0.02;
		return Color(this.workspace.background)
			.hsl()
			.lighten(lighten)
			.hex();
	},
	textLighter() {
		const lighten = this.type === 'dark' ? 0.1 : 0.02;
		return Color(this.workspace.foreground)
			.hsl()
			.darken(lighten)
			.hex();
	},
	bgLightest() {
		const lighten = this.type === 'dark' ? 0.2 : 0.05;
		return Color(this.workspace.background)
			.hsl()
			.lighten(lighten)
			.hex();
	},
	textLightest() {
		const lighten = this.type === 'dark' ? 0.2 : 0.05;
		return Color(this.workspace.foreground)
			.hsl()
			.darken(lighten)
			.hex();
	},
	bgDarker() {
		const darken = this.type === 'dark' ? 0.1 : 0.02;
		return Color(this.workspace.background)
			.hsl()
			.darken(darken)
			.hex();
	},
	textDarker() {
		const darken = this.type === 'dark' ? 0.1 : 0.02;
		return Color(this.workspace.foreground)
			.hsl()
			.lighten(darken)
			.hex();
	},
	bgDarkest() {
		const darken = this.type === 'dark' ? 0.2 : 0.05;
		return Color(this.workspace.background)
			.hsl()
			.darken(darken)
			.hex();
	},
	textDarkest() {
		const darken = this.type === 'dark' ? 0.2 : 0.05;
		return Color(this.workspace.foreground)
			.hsl()
			.lighten(darken)
			.hex();
	},
	bgFaded() {
		return `${this.workspace.background}${convertAlpha(40)}`;
	},
	textFaded() {
		return `${this.workspace.foreground}${convertAlpha(40)}`;
	},
	// Background with accent color
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
	// Background for hover
	bgHover() {
		if (this.type === 'dark') {
			return Color(this.workspace.background)
				.hsl()
				.lighten(0.3)
				.hex();
		}
		return Color(this.workspace.background)
			.hsl()
			.darken(0.02)
			.hex();
	},
	textHover() {
		if (this.type === 'dark') {
			return Color(this.workspace.foreground)
				.hsl()
				.lighten(0.3)
				.hex();
		}
		return Color(this.workspace.foreground)
			.hsl()
			.darken(0.02)
			.hex();
	},
	// Background for Focus
	bgFocus() {
		if (this.type === 'dark') {
			return Color(this.workspace.background)
				.hsl()
				.lighten(0.5)
				.hex();
		}
		return Color(this.workspace.background)
			.hsl()
			.darken(0.06)
			.hex();
	},
	textFocus() {
		if (this.type === 'dark') {
			return Color(this.workspace.foreground)
				.hsl()
				.lighten(0.5)
				.hex();
		}
		return Color(this.workspace.foreground)
			.hsl()
			.darken(0.06)
			.hex();
	},
	// Background for active area
	bgActive() {
		if (this.type === 'dark') {
			return Color(this.workspace.background)
				.hsl()
				.lighten(0.65)
				.hex();
		}
		return Color(this.workspace.background)
			.hsl()
			.darken(0.08)
			.hex();
	},
	textActive() {
		if (this.type === 'dark') {
			return Color(this.workspace.foreground)
				.hsl()
				.lighten(0.65)
				.hex();
		}
		return Color(this.workspace.foreground)
			.hsl()
			.darken(0.08)
			.hex();
	},
	// Background for active area of inactive widget/tab
	bgActivePassive() {
		if (this.type === 'dark') {
			return Color(this.workspace.background)
				.hsl()
				.lighten(0.5)
				.hex();
		}
		return Color(this.workspace.background)
			.hsl()
			.darken(0.04)
			.hex();
	},
	textActivePassive() {
		if (this.type === 'dark') {
			return Color(this.workspace.foreground)
				.hsl()
				.lighten(0.5)
				.hex();
		}
		return Color(this.workspace.foreground)
			.hsl()
			.darken(0.04)
			.hex();
	},
	// Background for inActiveFocus
	bgInActiveFocus() {
		if (this.type === 'dark') {
			return Color(this.workspace.accent)
				.hsl()
				.lighten(0.3)
				.hex();
		}
		return Color(this.workspace.accent)
			.hsl()
			.darken(0.02)
			.hex();
	},
	textInActive() {
		if (this.type === 'dark') {
			return Color(this.workspace.foreground)
				.hsl()
				.lighten(0.3)
				.hex();
		}
		return Color(this.workspace.foreground)
			.hsl()
			.darken(0.02)
			.hex();
	},
	// Invalid|Error background & text - Redish
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
	// Info background & text - Bluish
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
	// Warning background & text - Yellowish
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
	// Success background & text - Greenish
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
		if (this.type === 'dark') {
			return Color(this.workspace.background)
				.hsl()
				.darken(0.5)
				.hex();
		}
		return Color(this.workspace.background)
			.hsl()
			.darken(0.02)
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
	// Selections
	bgSelection() {
		return `${this.workspace.bluish}${convertAlpha(40)}`;
	},
};

module.exports = modifiers;
