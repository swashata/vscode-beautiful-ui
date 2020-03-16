import React from 'react';
import styled from 'styled-components';

const ShikiContainer = styled.article`
	flex: 0 0 100%;
	width: 100%;
	tab-size: 2;
	overflow: auto;
	background-color: ${props => props.theme.editorBackground};
	max-height: 700px;

	pre {
		margin: 0;
		padding: 4px 12px;
		font-size: 16px;
		line-height: 24px;
		font-family: 'Dank Mono', 'Courier New', Courier, monospace;
	}
`;

export default function Shiki({ html }) {
	return (
		<ShikiContainer
			dangerouslySetInnerHTML={{
				__html: html,
			}}
		/>
	);
}
