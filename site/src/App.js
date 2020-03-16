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
						<h1 className="App-title">βui - Beautiful UI for VSCode.</h1>
						<p className="App-intro">
							βui is a set of 32 themes ported from{' '}
							<a href="https://github.com/ihodev/sublime-da-cs">
								Sublime DA CS
							</a>
							.
						</p>
					</div>
				</header>
				<div className="App-demo">
					<Editor />
				</div>
				<div className="App-guide">
					<p className="disclaimer">
						Syntax highlighting by <a href="https://shiki.matsu.io/">Shiki</a>.{' '}
						Icons from{' '}
						<a href="https://github.com/microsoft/vscode-codicons">
							vscode-codicons
						</a>
						.
					</p>
					<p className="links">
						<a
							href="https://marketplace.visualstudio.com/items?itemName=swashata.beautiful-ui"
							className="vscode"
						>
							Install
						</a>
						<a
							href="https://github.com/swashata/vscode-beautiful-ui#vscode-beautiful-ui---color-themes"
							className="github"
						>
							GitHub
						</a>
						<a href="https://eform.live" className="eform">
							<span style={{ textTransform: 'lowercase' }}>(plug)</span> Check
							eForm
						</a>
					</p>
				</div>
			</div>
		);
	}
}

export default App;
