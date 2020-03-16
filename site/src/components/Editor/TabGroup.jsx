import React from 'react';
import styled from 'styled-components';

const TabGroupContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	height: 40px;
	width: 100%;
	overflow-y: auto;
	background: ${props => props.theme.editorGroupHeaderTabsBackground};
	border-bottom: 1px solid ${props => props.theme.editorGroupHeaderTabsBorder};

	.bui-vsc-tabgroup__tab {
		border: 1px solid ${props => props.theme.tabInactiveBackground};
		border-bottom-width: 2px;
		border-top: 0 none;
		cursor: pointer;
		padding: 0 16px;
		font-size: 14px;
		line-height: 38px;
		margin: -1px -1px 0;
		background-color: ${props => props.theme.tabInactiveBackground};
		color: ${props => props.theme.tabInactiveForeground};

		&:hover {
			background-color: ${props => props.theme.tabHoverBackground};
		}

		&.active {
			background-color: ${props => props.theme.tabActiveBackground};
			color: ${props => props.theme.tabActiveForeground};
			border-color: ${props => props.theme.tabActiveBackground};
			border-bottom-color: ${props => props.theme.tabActiveBorder};
		}
	}
`;

export default function TabGroup({ languages, currentLang, setLang }) {
	return (
		<TabGroupContainer className="bui-vsc-tabgroup">
			{Object.keys(languages).map(lang => (
				<div
					className={`bui-vsc-tabgroup__tab ${
						lang === currentLang ? 'active' : ''
					}`}
					key={lang}
					onClick={() => setLang(lang)}
				>
					example.{lang}
				</div>
			))}
		</TabGroupContainer>
	);
}
