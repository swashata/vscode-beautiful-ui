import React from 'react';
import injectStyles from 'react-jss';

import './SideBar.css';

const styles = theme => ({
	sidebar: {
		background:
			theme.type === 'dark' ? theme.bgPrimary() : theme.bgLighter(),
		color: theme.textPrimary(),
		borderColor: theme.bgPrimary(),
		'& .bui-vsc-sidebar__title': {
			boxShadow: `0 2px 1px ${theme.shadow()}`,
			background:
				theme.type === 'dark' ? theme.bgLightest() : theme.bgPrimary(),
			color:
				theme.type === 'dark'
					? theme.textLightest()
					: theme.textPrimary(),
		},
		'& .bui-vsc-sidebar__list li': {
			'&:hover': {
				backgroundColor: theme.bgHover(),
				color: theme.textHover(),
			},
			'&.active': {
				backgroundColor: theme.bgActive(),
				color: theme.textActive(),
			},
		},
	},
});

const SideBar = ({
	classes,
	schemes,
	scheme,
	modes,
	mode,
	setMode,
	setScheme,
}) => (
	<div className={`bui-vsc-sidebar ${classes.sidebar}`}>
		<div className="bui-vsc-sidebar__schemes">
			<h4 className="bui-vsc-sidebar__title">Schemes</h4>
			<ul className="bui-vsc-sidebar__list">
				{Object.keys(schemes).map(key => (
					<li
						key={key}
						className={`${key === scheme ? 'active' : ''}`}
						onClick={() => setScheme(key)}
					>
						{schemes[key].name}
					</li>
				))}
			</ul>
		</div>
		<div className="bui-vsc-sidebar__editors">
			<h4 className="bui-vsc-sidebar__title">Open Editors</h4>
			<ul className="bui-vsc-sidebar__list">
				{Object.keys(modes).map(key => (
					<li
						key={key}
						className={`${key === mode ? 'active' : ''}`}
						onClick={() => setMode(key)}
					>
						example.{key}
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default injectStyles(styles)(SideBar);
