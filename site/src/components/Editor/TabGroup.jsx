import React from 'react';
import injectSheet from 'react-jss';

import './TabGroup.css';

const styles = theme => ({
	group: {
		background: theme.bgLightest(),
		borderColor: theme.bgLighter(),
		'& .bui-vsc-tabgroup__tab': {
			background: theme.bgDarkest(),
			color: theme.textLighter(),
			borderColor: theme.bgLightest(),
			'&:hover': {
				background:
					theme.type === 'dark'
						? theme.bgLightest()
						: theme.bgLighter(),
			},
			'&.active': {
				background: theme.bgLightest(),
				color:
					theme.type === 'dark'
						? theme.textDarkest()
						: theme.textPrimary(),
				borderColor:
					theme.type === 'dark'
						? theme.bgLightest()
						: theme.bgPrimary(),
				borderBottomColor: theme.bgAccentDarker(),
			},
		},
	},
});

const TabGroup = ({ classes, modes, mode, setMode }) => (
	<div className={`bui-vsc-tabgroup ${classes.group}`}>
		{Object.keys(modes).map(key => (
			<div
				className={`bui-vsc-tabgroup__tab ${
					key === mode ? 'active' : ''
				}`}
				key={key}
				onClick={() => setMode(key)}
			>
				example.{key}
			</div>
		))}
	</div>
);

export default injectSheet(styles)(TabGroup);
