import React from 'react';
import injectStyles from 'react-jss';

import './ActivityBar.css';

const styles = theme => ({
	activitybar: {
		background: theme.bgPrimary(),
		borderColor:
			theme.type === 'dark' ? theme.bgLightest() : theme.bgDarker(),
		'& .bui-vsc-activitybar__items li': {
			color: theme.textFaded(),
			'&.active': {
				color:
					theme.type === 'dark'
						? theme.textDarker()
						: theme.textLighter(),
			},
		},
	},
});

const ActivityBar = ({ classes }) => (
	<div className={`bui-vsc-activitybar ${classes.activitybar}`}>
		<ul className="bui-vsc-activitybar__items">
			<li className="explorer active">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
					<path
						d="M17.705 8H9s-2 .078-2 2v15s0 2 2 2l11-.004C22 27 22 25 22 25V13.509L17.705 8zM16 10v5h4v10H9V10h7zm5.509-6h-8.493S11 4.016 10.985 6H19v.454L22.931 11H24v12c2 0 2-1.995 2-1.995V9.648L21.509 4z"
						fill="currentColor"
					/>
				</svg>
			</li>
			<li className="search">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
				>
					<path
						d="M19.23 4.095c-4.842 0-8.769 3.928-8.769 8.771 0 1.781.539 3.43 1.449 4.815 0 0-5.482 5.455-7.102 7.102-1.621 1.646 1.001 4.071 2.602 2.409 1.602-1.659 7.006-7.005 7.006-7.005a8.726 8.726 0 0 0 4.814 1.45 8.773 8.773 0 0 0 8.772-8.771c.001-4.844-3.927-8.771-8.772-8.771zm0 15.035a6.265 6.265 0 1 1 0-12.529 6.264 6.264 0 1 1 0 12.529z"
						fill="currentColor"
					/>
				</svg>
			</li>
			<li className="git">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="16"
					viewBox="0 0 10 16"
				>
					<path
						d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
						fill="currentColor"
						fillRule="evenodd"
					/>
				</svg>
			</li>
			<li className="debug">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					<path
						className="icon-white"
						d="M8.667 10.325v2.832c0 .308.06.843-.249.843H7.333v-.667H8v-2.126l-.115-.12a2.362 2.362 0 0 1-3.113.072C4 10.385 4.079 9.333 4.917 8h-2.25v.667H2V7.582c0-.309.535-.249.843-.249h2.736zm-2-6.992H6v-.666h1.3c.307 0 .7.147.7.455v2.23l.491.583a1.3 1.3 0 0 1 1.276-1.14.6.6 0 0 1 .233.026V3.333h.667v1.746a.413.413 0 0 0 .255.255h1.745V6h-1.489c.018 0 .028.1.028.2a1.31 1.31 0 0 1-1.141 1.288l.583.512h2.231c.308 0 .455.389.455.7V10h-.667v-.667h-1.68l-4.32-4.2zM8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm6.667 8a6.634 6.634 0 0 1-1.508 4.216L3.784 2.841A6.662 6.662 0 0 1 14.667 8zM1.333 8a6.633 6.633 0 0 1 1.508-4.216l9.375 9.376A6.663 6.663 0 0 1 1.333 8z"
						fill="currentColor"
					/>
				</svg>
			</li>
			<li className="extension">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
					<path
						className="st0"
						d="M12.9 47.1H30V60H0V0h25.7v12.9H12.9v34.2zm4.2-4.2h25.7V17.1H17.1v25.8zM30 0v12.9h8.6V8.6h12.9v12.9h-4.3V30H60V0H30zm17.1 47.1H34.3V60H60V34.3H47.1v12.8z"
						fill="currentColor"
					/>
				</svg>
			</li>
			<li className="settings">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					<path
						className="icon-vs-bg"
						d="M12.876 9.521L15 9.167V6.834l-2.121-.354a5.12 5.12 0 0 0-.354-.854l1.25-1.75-1.65-1.65-1.752 1.251c-.137-.072-.262-.159-.408-.219s-.3-.087-.444-.133L9.167 1H6.834L6.48 3.121a5.118 5.118 0 0 0-.854.354l-1.75-1.25-1.65 1.65 1.251 1.752c-.072.137-.159.262-.219.408s-.087.3-.133.444L1 6.833v2.333l2.121.354a5.122 5.122 0 0 0 .354.854l-1.25 1.75 1.65 1.65 1.752-1.252c.137.072.262.159.408.22s.3.087.444.133L6.833 15h2.333l.354-2.121a5.121 5.121 0 0 0 .854-.354l1.75 1.25 1.65-1.65-1.252-1.752c.072-.137.159-.263.219-.409s.089-.295.135-.443zM8 10.212A2.212 2.212 0 1 1 10.212 8 2.212 2.212 0 0 1 8 10.212z"
					/>
				</svg>
			</li>
		</ul>
	</div>
);

export default injectStyles(styles)(ActivityBar);
