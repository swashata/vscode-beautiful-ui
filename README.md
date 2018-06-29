# VSCode Beautiful UI - Color Themes

[![codecov](https://codecov.io/gh/swashata/vscode-beautiful-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/swashata/vscode-beautiful-ui) [![Build Status](https://travis-ci.org/swashata/vscode-beautiful-ui.svg?branch=master)](https://travis-ci.org/swashata/vscode-beautiful-ui) [![VSCode Version](https://vsmarketplacebadge.apphb.com/version-short/swashata.beautiful-ui.svg)](https://marketplace.visualstudio.com/items?itemName=swashata.beautiful-ui) [![VSCode Install](https://vsmarketplacebadge.apphb.com/installs/swashata.beautiful-ui.svg)](vscode:extension/swashata.beautiful-ui) [![VSCode Rating](https://vsmarketplacebadge.apphb.com/rating-short/swashata.beautiful-ui.svg)](https://marketplace.visualstudio.com/items?itemName=swashata.beautiful-ui#review-details)

--------------------------------------

<p align="center">
	<a href="https://vscbui.rocks/">
		<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/bui-logo-medium.png" />
	</a>
</p>

A collection of **32** [VSCode](https://code.visualstudio.com/) themes inspired from
the awesome [Sublime DA CS](https://github.com/ihodev/sublime-da-cs).

I am not at all the original author of the color scheme. This project was born
out of a necessity. I was a user of Sublime Text and Sublime DA UI for a long time.

Due to many reasons (mainly VSCode's intellisense and JS friendliness) I had to
switch to VSCode and the only thing I felt missing was the awesome UI engine made
by [Ihor Oleksandrov](https://github.com/ihodev) and compatible themes.

So this is my attempt to fill the gap. Personally I've been using Tomorrow Night
theme for a long time and I have put effort to port as many themes as possible.

> * I am not original author of any of the color schemes.
> * Syntax highlighting differs from the DA UI and DA CS, but I have managed to keep as much as possible. Also in some cases I have increased the darkness of colors for light themes.
> * If you like any color theme, go and ❤️ the original authors.

## Installation

You can install manually from `git` or use the [vscode extensions marketplace](https://marketplace.visualstudio.com/items?itemName=swashata.beautiful-ui).

### Marketplace Installation

From command palette, run

```
ext install swashata.beautiful-ui
```

Or search for `Beautiful UI` in the marketplace and install from there.

### Git Installation

* Go to `~/.vscode/extensions/`
* Clone the repository.
```bash
git clone git@github.com:swashata/vscode-beautiful-ui.git
```

### Activation

After installation, open/restart vscode and from command palette search for
`βui -`. You can choose and apply the color theme of your choice.

## Customization

Workspace colors can be customized by editing `workbench.colorCustomizations`
user settings. More information can be found [here](https://code.visualstudio.com/docs/getstarted/theme-color-reference).

## Recommended Settings

Following extensions/tools are recommended for the color schemes.

* [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons) - For file icons.
* [WhiteViz](https://marketplace.visualstudio.com/items?itemName=spywhere.whiteviz) - Sublime like whitespace highlight.
* [FiraCoda](https://github.com/tonsky/FiraCode) - For an awesome font with ligatures.
* [Dank Mono](https://dank.sh/) - Awesome font for `40.00£`. This is what I am using right now.
* [Operator Mono](https://www.typography.com/fonts/operator/styles/) - If you can spend `$200` 😉.
* [Operator Mono Lig](https://github.com/kiliman/operator-mono-lig) - For creating ligatures for operator mono.

Also note the recommended user settings.

```json
{
	"workbench.iconTheme": "vscode-icons",
	"editor.fontFamily": "Operator Mono SSM Lig",
	"editor.lineHeight": 25,
	"editor.fontLigatures": true,
	"explorer.decorations.badges": false,
	"editor.fontSize": 14,
	"editor.letterSpacing": 0.5,
	"editor.fontWeight": "400",
	"editor.renderWhitespace": "none",
	"workbench.statusBar.feedback.visible": false,
	"editor.rulers": [
		80,
		100,
		120
	],
	"whiteviz.maximumLimit": 500,
	"whiteviz.expandedTabIndicator": false,
	"editor.occurrencesHighlight": true,
	"workbench.tree.horizontalScrolling": true,
	"editor.cursorStyle": "line-thin",
	"editor.showFoldingControls": "always",
	"editor.matchBrackets": true
}
```

## Color Themes

The following color themes have been ported.

### Color Pack from Chris Kempson

* Original [sources](https://github.com/chriskempson/base16).
* Licensed under the [MIT License](https://github.com/chriskempson/base16/blob/master/LICENSE.md).

#### Eighties Dark

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/EightiesDark.png" alt="Eighties Dark" title="Eighties Dark">
</p>

#### Ocean Dark

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/OceanDark.png" alt="Ocean Dark" title="Ocean Dark">
</p>

#### Ocean Light

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/OceanLight.png" alt="Ocean Light" title="Ocean Light">
</p>

#### Tomorrow Dark

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/TomorrowNight.png" alt="Tomorrow Dark" title="Tomorrow Dark">
</p>

#### Tomorrow Subliminal

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/TomorrowSubliminal.png" alt="Tomorrow Subliminal" title="Tomorrow Subliminal">
</p>

#### Tomorrow Light

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/TomorrowLight.png" alt="Tomorrow Dark" title="Tomorrow Dark">
</p>


### Color Pack from Ethan Schoonover

* Original [sources](http://ethanschoonover.com/solarized).
* Licensed under the [MIT License](https://github.com/altercation/solarized/blob/master/LICENSE).

#### Solarized Dark

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/SolarizedDark.png" alt="Solarized Dark" title="Solarized Dark">
</p>

#### Solarized Light

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/SolarizedLight.png" alt="Solarized Light" title="Solarized Light">
</p>

### Color Pack from Dmitri Voronianski

* Original [sources](https://labs.voronianski.com/oceanic-next-color-scheme/).
* Licensed under the [MIT License](https://github.com/voronianski/oceanic-next-color-scheme/blob/master/README.md).
* You can show your appreciation to Dmitri using [PayPal](https://www.paypal.me/voronianski).

#### Oceanic Next

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/OceanicNext.png" alt="OceanicNext" title="OceanicNext">
</p>

### Color Pack from Wimer Hazenberg

* Original [sources](https://www.monokai.pro/sublime-text/).
* Monokai &copy; 2017.
* You can show your appreciation to Wimer via buying [Monokai Pro](https://www.monokai.pro/sublime-text/).


#### Monokai Classic

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/MonokaiClassic.png" alt="Monokai Classic" title="Monokai Classic">
</p>


#### Monokai Machine

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/MonokaiMachine.png" alt="Monokai Machine" title="Monokai Machine">
</p>


#### Monokai Octagon

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/MonokaiOctagon.png" alt="Monokai Octagon" title="Monokai Octagon">
</p>


#### Monokai Pro

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/MonokaiPro.png" alt="Monokai Pro" title="Monokai Pro">
</p>


#### Monokai Ristretto

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/MonokaiRistretto.png" alt="Monokai Ristretto" title="Monokai Ristretto">
</p>


#### Monokai Spectrum

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/MonokaiSpectrum.png" alt="Monokai Spectrum" title="Monokai Spectrum">
</p>


### Color Pack from Mattia Astorino

* Original [sources](https://github.com/equinusocio/material-theme).
* Licensed under the [MIT License](https://github.com/equinusocio/material-theme/blob/master/LICENSE.md).
* You can show your appreciation to Mattia using [Beerpay](https://beerpay.io/equinusocio/material-theme).


#### Material

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/Material.png" alt="Material" title="Material">
</p>


#### Material Darker

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/MaterialDarker.png" alt="Material Darker" title="Material Darker">
</p>


#### Material Palenight

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/MaterialPalenight.png" alt="Material Palenight" title="Material Palenight">
</p>

### Color Pack from GitHub Inc.

* Original [sources](https://github.com/atom/one-dark-syntax).
* Licensed under the [MIT License](https://github.com/atom/one-dark-syntax/blob/master/LICENSE.md).

#### One Dark

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/OneDark.png" alt="One Dark" title="One Dark">
</p>

#### One Light

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/OneLight.png" alt="One Light" title="One Light">
</p>

### Color Pack from Jani Nurminen, Colin T.A. Gray, William D. Neumann

* Original [sources](https://github.com/colinta/zenburn).
* Licensed under the [BSD 2-clause "Simplified" License](https://github.com/colinta/zenburn/blob/master/LICENSE).

#### Zenburn

<p>
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/Zenburn.png" alt="Zenburn" title="Zenburn">
</p>


### Color Pack from Adam Christiansen, Merrick Christensen, Trevor D. Miller

* Original [sources](https://trevordmiller.com/projects/nova).
* Licensed under the [MIT License](https://github.com/trevordmiller/nova-colors/blob/master/LICENSE).


#### Nova

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/Nova.png" alt="Nova" title="Nova">
</p>


### Color Pack from Arctic Ice Studio

* Original [sources](https://github.com/arcticicestudio/nord).
* Licensed under the [Apache License](https://github.com/arcticicestudio/nord/blob/develop/LICENSE.md).


#### Nord

<p>
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/Nord.png" alt="Nord" title="Nord">
</p>


### Color Pack from Chris Thomas

* Original [sources](https://github.com/textmate/themes.tmbundle/blob/master/Themes/Espresso%20Libre.tmTheme).
* Licensed under the [Permissive License](https://github.com/textmate/themes.tmbundle/blob/master/README.mdown).


#### Espresso Libre

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/EspressoLibre.png" alt="Espresso Libre" title="Espresso Libre">
</p>


### Color Pack from Ian Hill

* Original [sources](https://github.com/buymeasoda/soda-theme).
* Licensed under the [Creative Commons Attribution-ShareAlike 3.0 License](https://creativecommons.org/licenses/by-sa/3.0/).

#### Espresso Soda

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/EspressoSoda.png" alt="Espresso Soda" title="Espresso Soda">
</p>


### Color Pack from Ike Ku

* Original [sources](https://github.com/dempfi/ayu).
* Licensed under the [MIT License](https://github.com/dempfi/ayu/blob/master/LICENSE).


#### Ayu Dark

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/AyuDark.png" alt="Ayu Dark" title="Ayu Dark">
</p>


#### Ayu Light

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/AyuLight.png" alt="Ayu Light" title="Ayu Light">
</p>


#### Ayu Mirage

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/AyuMirage.png" alt="Ayu Mirage" title="Ayu Mirage">
</p>

### Minimal Color Pack

Inspired from Dan Abramov's Subliminal.

* Original [sources](https://github.com/gaearon/subliminal).
* Licensed under the [MIT License](https://github.com/gaearon/subliminal/blob/master/LICENSE).

#### Minimal Blue

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/MinimalBlue.png" alt="Minimal Blue" title="Minimal Blue">
</p>

#### Minimal Yellow

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/MinimalYellow.png" alt="Minimal Yellow" title="Minimal Yellow">
</p>

#### Minimal Purple

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/MinimalPurple.png" alt="Minimal Purple" title="Minimal Purple">
</p>

#### Minimal Green

<p align="center">
	<img src="https://raw.githubusercontent.com/swashata/vscode-beautiful-ui/master/docs/assets/screenshots/MinimalGreen.png" alt="Minimal Green" title="Minimal Green">
</p>

## Development

> Help porting popular tmThemes to vscode.

The development is made easy with some custom scripts. First fork and clone the
repo and run

```bash
yarn install
```

This will install all dependencies. Then run

```bash
yarn start
```

To build the themes and watch for file changes. You can press <kbd>F5</kbd> to
launch VSCode development window where you can preview the themes.

Once satisfied run

```bash
yarn build
```

to finalize the themes and make changes to `package.json` manually.

Then submit a PR.

### Adding a new theme

* Copy `./src/schemes/Template.noop.js` to `./src/schemes/MyTheme.js`.
* Mark the theme `dark` or `light` and make changes accordingly.
* Add colors to the config.
* Import and add the theme in `src/colors.js`.
* Build and test.

<h1 align="center">
👨‍🎨
</h1>
