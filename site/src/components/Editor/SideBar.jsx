import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
	width: 20%;
	overflow: auto;
	border-right: 1px solid ${props => props.theme.sideBarBorder};
	background: ${props => props.theme.sideBarBackground};
	color: ${props => props.theme.sideBarForeground};

	.bui-vsc-sidebar__title {
		box-shadow: 0 2px 1px ${props => props.theme.widgetShadow};
		background: ${props => props.theme.sideBarSectionHeaderBackground};
		color: ${props => props.theme.sideBarSectionHeaderForeground};
		text-transform: uppercase;
		font-size: 12px;
		margin: 0;
		padding: 0 8px;
		font-weight: 600;
		height: 22px;
		line-height: 22px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.bui-vsc-sidebar__list {
		margin: 0 0 8px;
		padding: 0;
		list-style: none;
		max-height: 300px;
		overflow: auto;
		font-size: 13px;
	}
	.bui-vsc-sidebar__list li {
		cursor: pointer;
		padding: 0 16px;
		height: 22px;
		line-height: 22px;
		overflow: hidden;
		text-overflow: ellipsis;
		color: ${props => props.theme.sideBarForeground};
		&:hover {
			background-color: ${props => props.theme.listHoverBackground};
			color: ${props => props.theme.listHoverForeground};
		}
		&.active {
			background-color: ${props => props.theme.listActiveSelectionBackground};
			color: ${props => props.theme.listActiveSelectionForeground};
		}
	}
`;

export default function Sidebar({
	schemes,
	currentScheme,
	languages,
	currentLang,
	setScheme,
	setLang,
}) {
	return (
		<SidebarContainer className="bui-vsc-sidebar">
			<div className="bui-vsc-sidebar__schemes">
				<h4 className="bui-vsc-sidebar__title">Schemes</h4>
				<ul className="bui-vsc-sidebar__list">
					{schemes.map((scheme, index) => (
						<li
							key={index}
							className={`${index === currentScheme ? 'active' : ''}`}
							onClick={() => setScheme(index)}
						>
							{schemes[index].label}
						</li>
					))}
				</ul>
			</div>
			<div className="bui-vsc-sidebar__editors">
				<h4 className="bui-vsc-sidebar__title">Open Editors</h4>
				<ul className="bui-vsc-sidebar__list">
					{Object.keys(languages).map(key => (
						<li
							key={key}
							className={`${key === currentLang ? 'active' : ''}`}
							onClick={() => setLang(key)}
						>
							example.{key}
						</li>
					))}
				</ul>
			</div>
		</SidebarContainer>
	);
}
