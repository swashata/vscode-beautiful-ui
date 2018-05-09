// Ace
import ace from 'brace';
// Style creator
import styleCreator from './styleCreator';
// Schemes
import TomorrowDark from './schemes/TomorrowDark';
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

// helpers
import methods from './helpers';

const importedStyles = {
	TomorrowDark,
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
};

// Loop over and define
Object.keys(importedStyles).forEach(key => {
	const val = importedStyles[key];
	ace.define(
		`ace/theme/${key}`,
		['require', 'exports', 'module', 'ace/lib/dom'],
		function(acequire, exports, module) {
			exports.isDark = val.type === 'dark';
			exports.cssClass = `ace-${key}`;
			exports.cssText = styleCreator(key, val);

			var dom = acequire('../lib/dom');
			dom.importCssString(exports.cssText, exports.cssClass);
		}
	);
});

// Prepare exports
const styles = {};
Object.keys(importedStyles).forEach(key => {
	styles[key] = {
		...importedStyles[key],
		...methods,
	};
});

export default styles;
