import React from 'react';
import injectStyles from 'react-jss';

import './TitleBar.css';

const styles = theme => ({
	titlebar: {
		background: theme.type === 'dark' ? theme.bgDarkest() : theme.bgDarker(),
		color: theme.type === 'dark' ? theme.textDarkest() : theme.textDarkest(),
	}
});

const TitleBar = ({classes, fileName}) => (
	<div className={`bui-vsc-titlebar ${classes.titlebar}`}>
		<ul className="bui-vsc-titlebar__actions">
			<li className="close"></li>
			<li className="minimize"></li>
			<li className="maximize"></li>
		</ul>
		<h4 className="bui-vsc-titlebar__title">{fileName} - Beautiful UI (Workspace)</h4>
	</div>
);

export default injectStyles(styles)(TitleBar);
