/**
 * Create a color for ace editor.
 * @param {String} name Name of the theme
 * @param {Object} colors Colors object
 */
const styleCreator = (name, colors) => {
	const supportedScope = {
		keyword: {
			color: colors.tokens.color3,
			'font-style': 'italic',
		},
		'keyword.operator': {
			color: colors.tokens.color6,
			'font-style': 'normal',
		},
		'keyword.other.unit': {
			color: colors.tokens.color3,
			'font-style': 'normal',
		},

		constant: {
			color: colors.tokens.color3,
			'font-style': 'normal',
		},
		'constant.language': {
			color: colors.tokens.color2,
			'font-style': 'italic',
		},
		'constant.library': {
			color: colors.tokens.color3,
			'font-style': 'normal',
		},
		'constant.numeric': {
			color: colors.tokens.color9,
			'font-style': 'normal',
		},
		'constant.character': {
			color: colors.tokens.color3,
			'font-style': 'normal',
		},
		'constant.character.escape': {
			color: colors.tokens.color1,
			'font-style': 'italic',
		},
		'constant.character.entity': {
			color: colors.tokens.color1,
			'font-style': 'normal',
		},
		'constant.other': {
			color: colors.tokens.color3,
			'font-style': 'normal',
		},

		support: {
			color: colors.tokens.color5,
			'font-style': 'normal',
		},
		'support.function': {
			color: colors.tokens.color5,
			'font-style': 'normal',
		},
		'support.function.dom': {
			color: colors.tokens.color5,
			'font-style': 'normal',
		},
		'support.firebug': {
			color: colors.tokens.color9,
			'font-style': 'normal',
		},
		'support.function.constant': {
			color: colors.tokens.color5,
			'font-style': 'normal',
		},
		'support.constant': {
			color: colors.tokens.color9,
			'font-style': 'normal',
		},
		'support.constant.property-value': {
			color: colors.tokens.color9,
			'font-style': 'normal',
		},
		'support.class': {
			color: colors.tokens.color5,
			'font-style': 'normal',
		},
		'support.type': {
			color: colors.tokens.color5,
			'font-style': 'normal',
		},
		'support.other': {
			color: colors.tokens.color5,
			'font-style': 'normal',
		},

		function: {
			color: colors.tokens.color5,
			'font-style': 'normal',
		},
		'function.buildin': {
			color: colors.tokens.color5,
			'font-style': 'normal',
		},

		storage: {
			color: colors.tokens.color2,
			'font-style': 'normal',
		},
		'storage.type': {
			color: colors.tokens.color3,
			'font-style': 'italic',
		},

		invalid: {
			color: colors.tokens.color2,
			'font-style': 'normal',
		},
		'invalid.illegal': {
			color: colors.tokens.color2,
			'font-style': 'normal',
		},
		'invalid.deprecated': {
			color: colors.tokens.color2,
			'font-style': 'normal',
		},

		string: {
			color: colors.tokens.string,
			'font-style': 'normal',
		},
		'string.regexp': {
			color: colors.tokens.string,
			'font-style': 'normal',
		},
		'string.blockquote': {
			color: colors.tokens.blockquote.foreground,
			'font-style': 'italic',
		},
		'string.emphasis': {
			color: colors.tokens.color6,
			'font-style': 'italic',
		},
		'string.strong': {
			color: colors.tokens.color6,
			'font-weight': 'bold',
		},

		comment: {
			color: colors.tokens.comment,
			'font-style': 'normal',
		},
		'comment.doc': {
			color: colors.tokens.comment,
			'font-style': 'italic',
		},
		'comment.doc.tag': {
			color: colors.tokens.color3,
			'font-style': 'normal',
		},

		variable: {
			color: colors.tokens.color4,
			'font-style': 'normal',
		},
		'variable.language': {
			color: colors.tokens.color2,
			'font-style': 'italic',
		},
		'variable.parameter': {
			color: colors.tokens.color4,
			'font-style': 'normal',
		},

		meta: {
			color: colors.tokens.color4,
			'font-style': 'normal',
		},
		'xml-pe': {
			color: colors.tokens.color4,
			'font-style': 'normal',
		},
		'meta.tag': {
			color: colors.tokens.color4,
			'font-style': 'italic',
		},
		'meta.selector': {
			color: colors.tokens.color4,
			'font-style': 'normal',
		},

		'entity.other.attribute-name': {
			color: colors.tokens.color9,
			'font-style': 'italic',
		},
		'entity.name.function': {
			color: colors.tokens.color5,
			'font-style': 'normal',
		},
		'entity.name': {
			color: colors.tokens.color1,
			'font-style': 'normal',
		},
		'entity.name.tag': {
			color: colors.tokens.color2,
			'font-style': 'normal',
		},
		'tag-name.xml': {
			color: colors.tokens.color2,
		},

		'markup.heading': {
			color: colors.tokens.color2,
			'font-style': 'normal',
		},
		'markup.underline': {
			color: colors.tokens.link,
			'text-decoration': 'underline',
		},
	};
	return `
	.ace-${name} .ace_gutter {
		background-color: ${colors.tokens.gutter.background};
		color: ${colors.tokens.gutter.foreground};
	}
	.ace-${name} .ace_gutter-layer {
		background: repeat left top;
	}
	.ace-${name} .ace_gutter-active-line {
		background-color: ${colors.tokens.lineHighlight};
	}
	.ace-${name} .ace_fold-widget {
		text-align: center;
	}
	.ace-${name} .ace_fold-widget:hover {
		color: ${colors.tokens.lineNumber.active};
	}
	.ace-${name} .ace_fold-widget.ace_start,
	.ace-${name} .ace_fold-widget.ace_end,
	.ace-${name} .ace_fold-widget.ace_closed{
		background: none;
		border: none;
		box-shadow: none;
	}
	.ace-${name} .ace_fold-widget.ace_start:after {
		content: '▾'
	}
	.ace-${name} .ace_fold-widget.ace_end:after {
		content: '▴'
	}
	.ace-${name} .ace_fold-widget.ace_closed:after {
		content: '‣'
	}
	.ace-${name} .ace_print-margin {
		border-left: 1px dotted ${colors.tokens.guide.ruler};
		right: 0;
		background: transparent;
	}
	.ace-${name} {
		color: ${colors.tokens.editor.foreground};
		background-color: ${colors.tokens.editor.background};
		line-height: 25px !important;
	}
	.ace-${name} .ace_cursor {
		border-left: 1px solid ${colors.tokens.caret};
	}
	.ace-${name} .ace_overwrite-cursors .ace_cursor {
		border: 1px solid ${colors.tokens.find.selection};
		background: ${colors.tokens.find.other};
	}
	.ace-${name}.normal-mode .ace_cursor-layer {
		z-index: 0;
	}
	.ace-${name} .ace_marker-layer .ace_selection {
		background: ${colors.tokens.selection.general};
	}
	.ace-${name} .ace_marker-layer .ace_selected-word {
		border-radius: 4px;
		border: 8px solid ${colors.tokens.selection.border};
	}
	.ace-${name} .ace_marker-layer .ace_bracket {
		margin: -1px 0 0 -1px;
		border: 1px solid ${colors.tokens.selection.border};
	}
	.ace-${name} .ace_marker-layer .ace_active-line {
		background: ${colors.tokens.lineHighlight};
	}
	.ace-${name} .ace_paren {
		color: ${colors.tokens.color4};
	}
	${Object.keys(supportedScope).reduce((prev, key) => {
		const newStyles = supportedScope[key];
		const selector = `.ace-${name} .ace_${key.split('.').join('.ace_')}`;
		const properties = Object.keys(newStyles).reduce(
			(p, k) => `${p}${k}:${newStyles[k]};`,
			''
		);
		// console.log(key, newStyles);
		return `${prev}${selector}{${properties}}`;
	}, '')}
	.ace-${name}.css .ace_support.ace_type {
		color: ${colors.tokens.color4};
	}
	.ace-${name}.css .ace_variable {
		color: ${colors.tokens.color6};
	}
	.ace-${name}.css .ace_keyword {
		color: ${colors.tokens.color5};
	}
	.ace-${name}.css .ace_variable + .ace_string,
	.ace-${name}.css .ace_keyword + .ace_string {
		color: ${colors.tokens.color8};
		font-style: italic;
	}
	.ace-${name} .ace_indent-guide {
		color: ${colors.tokens.guide.indent};
		position: relative;
		display: inline-block;
	}
	.ace-${name} .ace_indent-guide::before {
		content: '→';
		display: block;
		position: absolute;
		left: 0;
	}
	`;
};

export default styleCreator;
