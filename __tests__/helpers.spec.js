const helpers = require('../src/helpers');
const colorDark = require('../src/schemes/TomorrowDark');
const colorLight = require('../src/schemes/TomorrowLight');

const colorRegEx = /^#([0-9a-f]{6})([0-9a-f]{2})?$/i;

const checkPropertyAndValue = (obj, prop) => {
	expect(obj).toHaveProperty(prop);
	expect(obj[prop]()).toMatch(colorRegEx);
};

const checkHashes = obj => {
	test('has needed background and text hashes', () => {
		const interpolatedProperties = [
			'Primary',
			'Lighter',
			'Lightest',
			'Darker',
			'Darkest',
			'Faded',
			'Accent',
			'Hover',
			'Focus',
			'Active',
			'ActivePassive',
			'Invalid',
			'Info',
			'Warning',
			'Success',
		];
		interpolatedProperties.forEach(prop => {
			checkPropertyAndValue(obj, `bg${prop}`);
			checkPropertyAndValue(obj, `text${prop}`);
		});

		const staticProperties = [
			'bgAccentDarker',
			'bgAccentLighter',
			'bgInActiveFocus',
			'textInActive',
			'bgInvalidFaded',
			'bgInfoFaded',
			'bgWarningFaded',
			'bgSuccessFaded',
			'shadow',
			'scrollbarBg',
			'scrollbarHover',
			'scrollbarActive',
			'gutterAdded',
			'gutterDeleted',
			'gutterModified',
			'bgSelection',
		];
		staticProperties.forEach(prop => {
			checkPropertyAndValue(obj, prop);
		});
	});
};

describe('🚑 Helpers', () => {
	describe('For Dark Scheme', () => {
		const extended = {
			...colorDark,
			...helpers,
		};
		checkHashes(extended);
	});
	describe('For Light Scheme', () => {
		const extended = {
			...colorLight,
			...helpers,
		};
		checkHashes(extended);
	});
});
