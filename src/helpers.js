const Color = require('color');

/**
 * Convert alpha to hexadecimal code.
 * @param {Number} alpha Alpha value.
 * @returns {String} hex representation of the alpha, padded with 0 if needed
 */
const convertAlpha = num => {
	const percentage = Math.round(num) / 100;
	const alpha = Math.round(percentage * 255);
	const hex = (alpha + 0x10000)
		.toString(16)
		.substr(-2)
		.toLowerCase();
	return hex;
};
const addAlpha = (hex, alpha) => `${hex}${convertAlpha(alpha)}`;

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
		return addAlpha(this.workspace.background, 80);
	},
	textFaded() {
		return addAlpha(this.workspace.foreground, 65);
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
		return Color(this.bgAccent()).isDark()
			? addAlpha('#ffffff', 90)
			: addAlpha('#000000', 90);
	},
	// Background for hover
	bgHover() {
		return this.type === 'dark'
			? addAlpha('#ffffff', 10)
			: addAlpha('#000000', 5);
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
		return this.type === 'dark'
			? addAlpha('#ffffff', 20)
			: addAlpha('#000000', 15);
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
		return this.type === 'dark'
			? addAlpha('#ffffff', 15)
			: addAlpha('#000000', 10);
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
		return this.type === 'dark'
			? addAlpha('#ffffff', 13)
			: addAlpha('#000000', 8);
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
		return this.type === 'dark'
			? addAlpha('#ffffff', 12)
			: addAlpha('#000000', 7);
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
		return addAlpha(this.bgInvalid(), 10);
	},
	textInvalid() {
		const color = Color(this.workspace.redish).hsl();
		if (this.type === 'dark') {
			return color.lighten(0.05).hex();
		}
		return color.darken(0.1).hex();
	},
	// Info background & text - Bluish
	bgInfo() {
		return Color(this.workspace.bluish)
			.hsl()
			.darken(0.2)
			.hex();
	},
	bgInfoFaded() {
		return addAlpha(this.bgInfo(), 10);
	},
	textInfo() {
		const color = Color(this.workspace.bluish).hsl();
		if (this.type === 'dark') {
			return color.lighten(0.05).hex();
		}
		return color.darken(0.3).hex();
	},
	// Warning background & text - Yellowish
	bgWarning() {
		return Color(this.workspace.yellowish)
			.hsl()
			.darken(0.2)
			.hex();
	},
	bgWarningFaded() {
		return addAlpha(this.bgWarning(), 10);
	},
	textWarning() {
		const color = Color(this.workspace.yellowish).hsl();
		if (this.type === 'dark') {
			return color.lighten(0.05).hex();
		}
		return color.darken(0.3).hex();
	},
	// Success background & text - Greenish
	bgSuccess() {
		return Color(this.workspace.greenish)
			.hsl()
			.darken(0.2)
			.hex();
	},
	bgSuccessFaded() {
		return addAlpha(this.bgSuccess(), 10);
	},
	textSuccess() {
		const color = Color(this.workspace.greenish).hsl();
		if (this.type === 'dark') {
			return color.lighten(0.05).hex();
		}
		return color.darken(0.3).hex();
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
		return addAlpha(this.workspace.foreground, 10);
	},
	scrollbarHover() {
		return addAlpha(this.workspace.foreground, 20);
	},
	scrollbarActive() {
		return addAlpha(this.workspace.foreground, 30);
	},
	// Git Gutter - Transparency
	gutterAdded() {
		return addAlpha(this.workspace.greenish, 70);
	},
	gutterDeleted() {
		return addAlpha(this.workspace.redish, 70);
	},
	gutterModified() {
		return addAlpha(this.workspace.yellowish, 70);
	},
	// Selections
	bgSelection() {
		return addAlpha(this.workspace.bluish, 70);
	},
	// Status bar Text Color
	textStatusbar() {
		return this.type === 'dark'
			? `#ffffff${convertAlpha(80)}`
			: `#000000${convertAlpha(80)}`;
	},
};

module.exports = modifiers;
