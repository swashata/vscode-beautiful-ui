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

module.exports = modifiers;
