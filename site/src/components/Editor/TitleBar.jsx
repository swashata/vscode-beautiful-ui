import React from 'react';
import styled from 'styled-components';

const TitleBarContainer = styled.header`
	height: 32px;
	border-radius: 4px 4px 0 0;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	padding: 0 12px;
	background-color: ${props => props.theme.titleBarActiveBackground};
	color: ${props => props.theme.titleBarActiveForeground};

	.bui-vsc-titlebar__actions {
		list-style: none;
		margin: 0;
		padding: 0;
		width: 54px;
	}

	.bui-vsc-titlebar__actions li {
		display: inline-block;
		height: 10px;
		width: 10px;
		border-radius: 100%;
		list-style: none;
		margin: 0 6px 0 0;
	}

	.bui-vsc-titlebar__actions li.close {
		background-color: #fa5f57;
	}
	.bui-vsc-titlebar__actions li.minimize {
		background-color: #fbbd2f;
	}
	.bui-vsc-titlebar__actions li.maximize {
		background-color: #29ca41;
	}

	.bui-vsc-titlebar__title {
		font-size: 12px;
		width: calc(100% - 54px);
		text-align: center;
		font-weight: normal;
	}
`;

export default function TitleBar({ fileName }) {
	return (
		<TitleBarContainer className="bui-vsc-titlebar">
			<ul className="bui-vsc-titlebar__actions">
				<li className="close"></li>
				<li className="minimize"></li>
				<li className="maximize"></li>
			</ul>
			<h4 className="bui-vsc-titlebar__title">
				{fileName} - Beautiful UI (Workspace)
			</h4>
		</TitleBarContainer>
	);
}
