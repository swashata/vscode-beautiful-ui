import React from 'react';
import AceEditor from 'react-ace';
import { ThemeProvider } from 'react-jss';

// ace editor
/* eslint-disable import/no-extraneous-dependencies */
import 'brace/mode/jsx';
import 'brace/mode/javascript';
import 'brace/mode/php';
import 'brace/mode/html';
import 'brace/mode/markdown';
import 'brace/mode/css';
import 'brace/mode/c_cpp';
/* eslint-enable */

// Our schemes
import schemes from '../ace-styles/all-styles';

// data
import * as examples from '../data/data';

// style
import './Editor.css';

// editor components
import TitleBar from './Editor/TitleBar';
import ActivityBar from './Editor/ActivityBar';
import StatusBar from './Editor/StatusBar';
import SideBar from './Editor/SideBar';
import TabGroup from './Editor/TabGroup';

const languageMap = {
	jsx: 'JavaScript React',
	js: 'JavaScript',
	php: 'PHP',
	html: 'HTML',
	md: 'Markdown',
	css: 'CSS',
	c: 'C',
};

const modeMap = {
	jsx: 'jsx',
	js: 'javascript',
	php: 'php',
	html: 'html',
	md: 'markdown',
	css: 'css',
	c: 'c_cpp',
};

class Demo extends React.PureComponent {
	state = {
		scheme: 'TomorrowDark',
		mode: 'jsx',
		data: {
			jsx: examples.eJSX,
			js: examples.eJS,
			php: examples.ePHP,
			html: examples.eHTML,
			md: examples.eMD,
			css: examples.eCSS,
			c: examples.eC,
		},
	};

	handleChange = val => {
		this.setState(prevState => ({ data: { [prevState.mode]: val } }));
	};

	setScheme = val => {
		this.setState({ scheme: val });
	};

	setMode = val => {
		this.setState({ mode: val });
	};

	render() {
		return (
			<ThemeProvider theme={schemes[this.state.scheme]}>
				<div
					className={`bui-vsc-workspace bui-vsc-workspace--${
						schemes[this.state.scheme].type
					}`}
				>
					<TitleBar fileName={`example.${this.state.mode}`} />
					<div className="bui-vsc-workspace--window">
						<ActivityBar />
						<SideBar
							schemes={schemes}
							scheme={this.state.scheme}
							modes={modeMap}
							mode={this.state.mode}
							setScheme={this.setScheme}
							setMode={this.setMode}
						/>
						<div className="bui-vsc-editor">
							<TabGroup
								mode={this.state.mode}
								modes={modeMap}
								setMode={this.setMode}
							/>
							<AceEditor
								mode={modeMap[this.state.mode]}
								value={this.state.data[this.state.mode]}
								theme={this.state.scheme}
								onChange={this.handleChange}
								name="bui-vsc-editor-ace"
								editorProps={{ $blockScrolling: true }}
								fontSize={14}
								enableBasicAutocompletion={true}
								tabSize={2}
								setOptions={{
									useSoftTabs: true,
									fontFamily:
										'Operator Mono SSm Book, Operator Mono SSm, Operator Mono Book, Operator Mono, Fira Code',
									highlightActiveLine: true,
									useWorker: false,
								}}
								height="calc(100% - 48px)"
								width="100%"
							/>
						</div>
					</div>
					<StatusBar language={languageMap[this.state.mode]} />
				</div>
			</ThemeProvider>
		);
	}
}

export default Demo;
