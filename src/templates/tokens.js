module.exports = {
	tokenColors: [
		{
			settings: {
				foreground: '<%= tokens.editor.foreground %>',
				background: '<%= tokens.editor.background %>',
			},
		},
		{
			name: 'Comment',
			scope: ['comment', 'punctuation.definition.comment'],
			settings: {
				fontStyle: 'italic',
				foreground: '<%= tokens.comment %>',
			},
		},
		{
			name: 'Variable',
			scope: ['variable', 'variable.other', 'variable.name'],
			settings: {
				foreground: '<%= tokens.color4 %>',
			},
		},
		{
			name: 'Variable - parameter',
			scope: ['variable.parameter'],
			settings: {
				foreground: '<%= tokens.color4 %>',
			},
		},
		{
			name: 'Variable - language',
			scope: [
				'variable.language',
				'variable.scss',
				'variable.less',
				'variable.styl',
			],
			settings: {
				foreground: '<%= tokens.color2 %>',
				fontStyle: 'italic',
			},
		},
		{
			name: 'Variable - punctuation',
			scope: ['punctuation.definition.variable'],
			settings: {
				foreground: '<%= tokens.color4 %>',
				fontStyle: 'italic',
			},
		},
		{
			name: 'Variable - constant',
			scope: ['variable.other.constant'],
			settings: {
				foreground: '<%= tokens.color5 %>',
				fontStyle: 'bold',
			},
		},
		{
			name: 'Constants',
			scope: ['constant', 'constant.other', 'constant.character'],
			settings: {
				foreground: '<%= tokens.color3 %>',
			},
		},
		{
			name: 'Constants - numeric, support, Property Name',
			scope: [
				'support.type.property-name',
				'constant.numeric',
				'support.constant',
			],
			settings: {
				foreground: '<%= tokens.color9 %>',
			},
		},
		{
			name: 'Object Literal',
			scope: ['meta.object-literal.key'],
			settings: {
				foreground: '<%= tokens.color1 %>',
			},
		},
		{
			name: 'Constants - language',
			scope: ['constant.language'],
			settings: {
				foreground: '<%= tokens.color2 %>',
				fontStyle: 'italic',
			},
		},
		{
			name: 'Constants - Escape, Inheritance',
			scope: ['constant.character.escape', 'constant.other.placeholder'],
			settings: {
				foreground: '<%= tokens.color1 %>',
				fontStyle: 'italic',
			},
		},
		{
			name: 'Invalid',
			scope: ['invalid', 'invalid.illegal'],
			settings: {
				foreground: '<%= tokens.color2 %>',
			},
		},
		{
			name: 'Keyword, Storage',
			scope: ['keyword', 'storage.type'],
			settings: {
				foreground: '<%= tokens.color3 %>',
			},
		},
		{
			name: 'Storage - modifier',
			scope: ['storage.modifier'],
			settings: {
				foreground: '<%= tokens.color2 %>',
			},
		},
		{
			name: 'Keyword, Storage - italics',
			scope: ['storage.modifier', 'storage.type', 'keyword.control'],
			settings: {
				fontStyle: 'italic',
			},
		},
		{
			name:
				'Keyword - operator ($this->stuff), Punctuation - accessor (this.stuff)',
			scope: ['keyword.operator', 'punctuation.accessor.'],
			settings: {
				foreground: '<%= tokens.color6 %>',
			},
		},
		{
			name: 'Operator, Misc',
			scope: [
				'constant.other.color',
				'punctuation',
				'meta.tag',
				'punctuation.definition.tag',
				'punctuation.definition.tag.html',
				'punctuation.definition.tag.begin.html',
				'punctuation.definition.tag.end.html',
				'punctuation.section.embedded',
				'keyword.other.template',
				'keyword.other.substitution',
			],
			settings: {
				foreground: '<%= tokens.color4 %>',
			},
		},
		{
			name: 'Entity - name',
			scope: ['entity.name'],
			settings: {
				foreground: '<%= tokens.color1 %>',
			},
		},
		{
			name: 'Tag',
			scope: ['entity.name.tag', 'meta.tag.sgml'],
			settings: {
				foreground: '<%= tokens.color2 %>',
				fontStyle: '',
			},
		},
		{
			name: 'Function, Special Method',
			scope: [
				'entity.name.function',
				'entity.name.label',
				'meta.function-call',
				'variable.function',
				'keyword.other.special-method',
				'support.function',
				'support.type',
				'support.class',
			],
			settings: {
				foreground: '<%= tokens.color5 %>',
				fontStyle: '',
			},
		},
		{
			name: 'String, Symbols, Inherited Class, Markup Heading',
			scope: [
				'string',
				'entity.other.inherited-class',
				'markup.heading',
				'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
			],
			settings: {
				fontStyle: '',
				foreground: '<%= tokens.string %>',
			},
		},
		{
			name: 'Attributes',
			scope: ['meta.tag.attribute', 'entity.other.attribute-name'],
			settings: {
				foreground: '<%= tokens.color9 %>',
				fontStyle: 'italic',
			},
		},
		{
			name: 'Property, Separator, Terminator',
			scope: [
				'punctuation.terminator',
				'punctuation.separator',
				'meta.property-list.scss',
				'meta.property-list.css',
				'meta.property-list.styl',
				'meta.property-list.less',
				'punctuation.separator.inheritance',
			],
			settings: {
				foreground: '<%= tokens.color7 %>',
			},
		},
		{
			name: 'CSS - Class',
			scope: [
				'source.css entity.other.attribute-name.class',
				'source.scss entity.other.attribute-name.class',
				'source.styl entity.other.attribute-name.class',
				'source.less entity.other.attribute-name.class',
			],
			settings: {
				foreground: '<%= tokens.color6 %>',
			},
		},
		{
			name: 'CSS - ID',
			scope: [
				'source.css entity.other.attribute-name.id',
				'source.scss entity.other.attribute-name.id',
				'source.styl entity.other.attribute-name.id',
				'source.less entity.other.attribute-name.id',
			],
			settings: {
				foreground: '<%= tokens.color5 %>',
			},
		},
		{
			name: 'CSS - Property Name',
			scope: ['support.type.property-name.css'],
			settings: {
				foreground: '<%= tokens.color4 %>',
			},
		},
		{
			name: 'Pseudo Elements',
			scope: [
				'entity.other.attribute-name.pseudo-element',
				'entity.other.attribute-name.pseudo-class',
			],
			settings: {
				foreground: '<%= tokens.color8 %>',
				fontStyle: 'italic',
			},
		},
		{
			name: 'URL',
			scope: ['*url*', '*link*', '*uri*'],
			settings: {
				foreground: '<%= tokens.link %>',
				fontStyle: 'italic underline',
			},
		},
		{
			name: 'Decorators',
			scope: [
				'tag.decorator.js entity.name.tag.js',
				'tag.decorator.js punctuation.definition.tag.js',
			],
			settings: {
				fontStyle: 'italic',
				foreground: '<%= tokens.color5 %>',
			},
		},
		{
			name: 'JSON Key - Level 0',
			scope: [
				'source.json meta.structure.dictionary.json support.type.property-name.json',
			],
			settings: {
				foreground: '<%= tokens.color1 %>',
			},
		},
		{
			name: 'JSON Key - Level 1',
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
			],
			settings: {
				foreground: '<%= tokens.color9 %>',
			},
		},
		{
			name: 'JSON Key - Level 2',
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
			],
			settings: {
				foreground: '<%= tokens.color3 %>',
			},
		},
		{
			name: 'JSON Key - Level 3',
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
			],
			settings: {
				foreground: '<%= tokens.color4 %>',
			},
		},
		{
			name: 'JSON Key - Level 4',
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
			],
			settings: {
				foreground: '<%= tokens.color5 %>',
			},
		},
		{
			name: 'JSON Key - Level 5',
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
			],
			settings: {
				foreground: '<%= tokens.color6 %>',
			},
		},
		{
			name: 'JSON Key - Level 6',
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
			],
			settings: {
				foreground: '<%= tokens.color7 %>',
			},
		},
		{
			name: 'JSON Key - Level 7',
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
			],
			settings: {
				foreground: '<%= tokens.color8 %>',
			},
		},
		{
			name: 'JSON Key - Level 8',
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
			],
			settings: {
				foreground: '<%= tokens.color2 %>',
			},
		},
		{
			name: 'Markdown - Plain',
			scope: [
				'text.html.markdown',
				'punctuation.definition.list_item.markdown',
			],
			settings: {
				foreground: '<%= tokens.color7 %>',
			},
		},
		{
			name: 'Markdown - Markup Raw Inline',
			scope: ['text.html.markdown markup.inline.raw.markdown'],
			settings: {
				foreground: '<%= tokens.color3 %>',
			},
		},
		{
			name: 'Markdown - Markup Raw Inline Punctuation',
			scope: [
				'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown',
			],
			settings: {
				foreground: '<%= tokens.color8 %>',
			},
		},
		{
			name: 'Markdown - Line Break',
			scope: ['text.html.markdown meta.dummy.line-break'],
			settings: {
				foreground: '',
			},
		},
		{
			name: 'Markdown - Heading',
			scope: [
				'markdown.heading',
				'markup.heading.markdown entity.name.section.markdown',
				'markup.heading | markup.heading entity.name',
				'markup.heading.markdown punctuation.definition.heading.markdown',
			],
			settings: {
				foreground: '<%= tokens.color2 %>',
			},
		},
		{
			name: 'Markdown - List',
			scope: ['beginning.punctuation.definition.list.markdown'],
			settings: {
				foreground: '<%= tokens.color9 %>',
			},
		},
		{
			name: 'Markup - Italic',
			scope: ['markup.italic'],
			settings: {
				fontStyle: 'italic',
				foreground: '<%= tokens.color6 %>',
			},
		},
		{
			name: 'Markup - Bold',
			scope: ['markup.bold', 'markup.bold string'],
			settings: {
				fontStyle: 'bold',
				foreground: '<%= tokens.color6 %>',
			},
		},
		{
			name: 'Markup - Bold-Italic',
			scope: [
				'markup.bold markup.italic',
				'markup.italic markup.bold',
				'markup.quote markup.bold',
				'markup.bold markup.italic string',
				'markup.italic markup.bold string',
				'markup.quote markup.bold string',
			],
			settings: {
				fontStyle: 'bold italic',
				foreground: '<%= tokens.color6 %>',
			},
		},
		{
			name: 'Markup - Underline',
			scope: ['markup.underline'],
			settings: {
				fontStyle: 'underline',
				foreground: '<%= tokens.link %>',
			},
		},
		{
			name: 'Markup - Strike',
			scope: ['markup.strike'],
			settings: {
				fontStyle: 'strike',
				foreground: '<%= tokens.comment %>',
			},
		},
		{
			name: 'Markdown - Blockquote Punctuation',
			scope: ['beginning.punctuation.definition.quote'],
			settings: {
				foreground: '<%= tokens.blockquote.background %>',
			},
		},
		{
			name: 'Markup - Quote',
			scope: ['markup.quote'],
			settings: {
				fontStyle: 'italic',
				foreground: '<%= tokens.blockquote.foreground %>',
			},
		},
		{
			name: 'Markdown - Link',
			scope: ['string.other.link.title.markdown'],
			settings: {
				foreground: '<%= tokens.color9 %>',
			},
		},
		{
			name: 'Markdown - Link Description',
			scope: ['string.other.link.description.title.markdown'],
			settings: {
				foreground: '<%= tokens.string %>',
			},
		},
		{
			name: 'Markdown - Link Anchor',
			scope: ['constant.other.reference.link.markdown'],
			settings: {
				foreground: '<%= tokens.color6 %>',
			},
		},
		{
			name: 'Markup - Raw Block',
			scope: ['markup.raw.block'],
			settings: {
				foreground: '<%= tokens.color4 %>',
			},
		},
		{
			name: 'Markdown - Raw',
			scope: [
				'markup.raw.block.fenced.markdown',
				'markup.inline.raw.string.markdown',
				'markup.fenced_code.block.markdown',
			],
			settings: {
				foreground: '<%= tokens.color4 %>',
			},
		},
		{
			name: 'Markdown - Separator',
			scope: ['meta.separator'],
			settings: {
				fontStyle: 'bold',
				background: '<%= bgPrimary() %>',
				foreground: '<%= textPrimary() %>',
			},
		},
		{
			name: 'Markup - Table',
			scope: ['markup.table'],
			settings: {
				foreground: '<%= tokens.editor.foreground %>',
			},
		},
		{
			scope: 'token.info-token',
			settings: {
				foreground: '<%= textInfo() %>',
			},
		},
		{
			scope: 'token.warn-token',
			settings: {
				foreground: '<%= textWarning() %>',
			},
		},
		{
			scope: 'token.error-token',
			settings: {
				foreground: '<%= textInvalid() %>',
			},
		},
		{
			scope: 'token.debug-token',
			settings: {
				foreground: '<%= tokens.color5 %>',
			},
		},
		{
			scope: ['markup.deleted', 'punctuation.definition.deleted'],
			settings: {
				foreground: '<%= textInvalid() %>',
			},
		},
		{
			scope: ['markup.inserted', 'punctuation.definition.inserted'],
			settings: {
				foreground: '<%= textSuccess() %>',
			},
		},
		{
			scope: ['markup.changed', 'punctuation.definition.changed'],
			settings: {
				foreground: '<%= textInfo() %>',
			},
		},
		// Language Specific tweaks
		{
			name: 'PHP Embed Tags',
			scope: [
				'punctuation.section.embedded.begin.php',
				'punctuation.section.embedded.end.php',
			],
			settings: {
				fontStyle: 'italic',
			},
		},
		{
			name: 'PHP namespace, use',
			scope: ['keyword.other.namespace.php', 'keyword.other.use.php'],
			settings: {
				fontStyle: 'italic',
			},
		},
		{
			name: 'HTML doctype',
			scope: ['meta.tag.sgml.doctype.html'],
			settings: {
				fontStyle: 'italic',
			},
		},
	],
};
