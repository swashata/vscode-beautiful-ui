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
				<div className="App-guide">
					<p className="disclaimer">
						Syntax highlighting differs (degrades) a little from the
						original implementation due to limitations of{' '}
						<a href="https://ace.c9.io/">ace editor</a>.
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
							(Ad) Check eForm
						</a>
					</p>
				</div>
				<div className="App-footer">
					<p className="copyright">
						Made with ❤️ by{' '}
						<a href="https://swashata.me">Swashata Ghosh</a> and
						licensed under MIT. Used{' '}
						<a href="https://code.visualstudio.com/">VSCode</a>,{' '}
						<a href="https://reactjs.org/">React</a>,{' '}
						<a href="https://github.com/cssinjs/react-jss">
							React JSS
						</a>,{' '}
						<a href="https://github.com/securingsincity/react-ace">
							React ace
						</a>, <a href="https://github.com/Qix-/color">color</a>{' '}
						etc.
					</p>
				</div>
			</div>
		);
	}
}

export default App;
