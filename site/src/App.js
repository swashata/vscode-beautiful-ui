import React, { Component } from 'react';
import logo from './bui-logo.png';
import Demo from './components/Demo';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">βui - Beautiful UI for VSCode.</h1>
				</header>
				<p className="App-intro">
					βui is a set of 27 themes ported from <a href="https://github.com/ihodev/sublime-da-cs">Sublime DA CS</a>.
				</p>
				<div className="app-demo">
					<Demo />
				</div>
			</div>
		);
	}
}

export default App;
