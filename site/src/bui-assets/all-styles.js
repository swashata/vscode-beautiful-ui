import * as shiki from 'shiki';

// Schemes
import TomorrowDark from './schemes/TomorrowDark';
import TomorrowSubliminal from './schemes/TomorrowSubliminal';
import TomorrowLight from './schemes/TomorrowLight';
import OneDark from './schemes/OneDark';
import OneLight from './schemes/OneLight';
import EightiesDark from './schemes/EightiesDark';
import OceanDark from './schemes/OceanDark';
import OceanLight from './schemes/OceanLight';
import SolarizedDark from './schemes/SolarizedDark';
import SolarizedLight from './schemes/SolarizedLight';
import OceanicNext from './schemes/OceanicNext';
import MonokaiClassis from './schemes/MonokaiClassis';
import MonokaiMachine from './schemes/MonokaiMachine';
import MonokaiPro from './schemes/MonokaiPro';
import MonokaiOctagon from './schemes/MonokaiOctagon';
import MonokaiRistretto from './schemes/MonokaiRistretto';
import MonokaiSpectrum from './schemes/MonokaiSpectrum';
import Material from './schemes/Material';
import MaterialDarker from './schemes/MaterialDarker';
import MaterialPalenight from './schemes/MaterialPalenight';
import Zenburn from './schemes/Zenburn';
import Nova from './schemes/Nova';
import Nord from './schemes/Nord';
import EspressoLibre from './schemes/EspressoLibre';
import EspressoSoda from './schemes/EspressoSoda';
import AyuDark from './schemes/AyuDark';
import AyuLight from './schemes/AyuLight';
import AyuMirage from './schemes/AyuMirage';
import MinimalBlue from './schemes/MinimalBlue';
import MinimalGreen from './schemes/MinimalGreen';
import MinimalYellow from './schemes/MinimalYellow';
import MinimalPurple from './schemes/MinimalPurple';

// helpers
import methods from './helpers';

const importedStyles = {
	TomorrowDark,
	TomorrowSubliminal,
	TomorrowLight,
	OneDark,
	OneLight,
	EightiesDark,
	OceanDark,
	OceanLight,
	SolarizedDark,
	SolarizedLight,
	OceanicNext,
	MonokaiClassis,
	MonokaiMachine,
	MonokaiPro,
	MonokaiOctagon,
	MonokaiRistretto,
	MonokaiSpectrum,
	Material,
	MaterialDarker,
	MaterialPalenight,
	Zenburn,
	Nova,
	Nord,
	EspressoLibre,
	EspressoSoda,
	AyuDark,
	AyuLight,
	AyuMirage,
	MinimalBlue,
	MinimalGreen,
	MinimalYellow,
	MinimalPurple,
};

// Prepare exports
const styles = {};
Object.keys(importedStyles).forEach(key => {
	styles[key] = {
		...importedStyles[key],
		...methods,
	};
});
export default styles;

// Prepare shiki themes
export const shikiThemes = {
	TomorrowDark: shiki.loadTheme('./themes/Tomorrow Dark-color-theme.json'),
	TomorrowSubliminal: shiki.loadTheme(
		'./themes/Tomorrow Subliminal-color-theme.json'
	),
	TomorrowLight: shiki.loadTheme('./themes/Tomorrow Light-color-theme.json'),
	OneDark: shiki.loadTheme('./themes/One Dark-color-theme.json'),
	OneLight: shiki.loadTheme('./themes/One Light-color-theme.json'),
	EightiesDark: shiki.loadTheme('./themes/Eighties Dark-color-theme.json'),
	OceanDark: shiki.loadTheme('./themes/Ocean Dark-color-theme.json'),
	OceanLight: shiki.loadTheme('./themes/Ocean Light-color-theme.json'),
	SolarizedDark: shiki.loadTheme('./themes/Solarized Dark-color-theme.json'),
	SolarizedLight: shiki.loadTheme(
		'./themes/Solarized Light-color-theme.json'
	),
	OceanicNext: shiki.loadTheme('./themes/Oceanic Next-color-theme.json'),
	MonokaiClassis: shiki.loadTheme(
		'./themes/Monokai Classic-color-theme.json'
	),
	MonokaiMachine: shiki.loadTheme(
		'./themes/Monokai Machine-color-theme.json'
	),
	MonokaiPro: shiki.loadTheme('./themes/Monokai Pro-color-theme.json'),
	MonokaiOctagon: shiki.loadTheme(
		'./themes/Monokai Octagon-color-theme.json'
	),
	MonokaiRistretto: shiki.loadTheme(
		'./themes/Monokai Ristretto-color-theme.json'
	),
	MonokaiSpectrum: shiki.loadTheme(
		'./themes/Monokai Spectrum-color-theme.json'
	),
	Material: shiki.loadTheme('./themes/Material-color-theme.json'),
	MaterialDarker: shiki.loadTheme(
		'./themes/Material Darker-color-theme.json'
	),
	MaterialPalenight: shiki.loadTheme(
		'./themes/Material Palenight-color-theme.json'
	),
	Zenburn: shiki.loadTheme('./themes/Zenburn-color-theme.json'),
	Nova: shiki.loadTheme('./themes/Nova-color-theme.json'),
	Nord: shiki.loadTheme('./themes/Nord-color-theme.json'),
	EspressoLibre: shiki.loadTheme('./themes/Espresso Libre-color-theme.json'),
	EspressoSoda: shiki.loadTheme('./themes/Espresso Soda-color-theme.json'),
	AyuDark: shiki.loadTheme('./themes/Ayu Dark-color-theme.json'),
	AyuLight: shiki.loadTheme('./themes/Ayu Light-color-theme.json'),
	AyuMirage: shiki.loadTheme('./themes/Ayu Mirage-color-theme.json'),
	MinimalBlue: shiki.loadTheme('./themes/Minimal Blue-color-theme.json'),
	MinimalGreen: shiki.loadTheme('./themes/Minimal Green-color-theme.json'),
	MinimalYellow: shiki.loadTheme('./themes/Minimal Yellow-color-theme.json'),
	MinimalPurple: shiki.loadTheme('./themes/Minimal Purple-color-theme.json'),
};
