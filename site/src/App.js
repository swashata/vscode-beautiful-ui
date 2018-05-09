import React, { Component } from 'react';
import logo from './bui-logo.png';
import Editor from './components/Editor';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<div className="App-desc">
						<h1 className="App-title">
							βui - Beautiful UI for VSCode.
						</h1>
						<p className="App-intro">
							βui is a set of 27 themes ported from{' '}
							<a href="https://github.com/ihodev/sublime-da-cs">
								Sublime DA CS
							</a>.
						</p>
					</div>
				</header>
				<div className="App-demo">
					<Editor />
				</div>
			</div>
		);
	}
}

export default App;
