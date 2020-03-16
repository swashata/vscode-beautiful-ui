import React from 'react';
import { ThemeProvider } from 'react-jss';

// Our schemes
import schemes, { shikiThemes } from '../bui-assets/all-styles';

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
import Shiki from './Editor/Shiki';

const languageMap = {
	tsx: 'TypeScript React',
	jsx: 'JavaScript React',
	js: 'JavaScript',
	php: 'PHP',
	html: 'HTML',
	md: 'Markdown',
	css: 'CSS',
	c: 'C',
};

const modeMap = {
	tsx: 'tsx',
	jsx: 'jsx',
	js: 'js',
	php: 'php',
	html: 'html',
	md: 'md',
	css: 'css',
	c: 'cpp',
};

class Demo extends React.Component {
	state = {
		scheme: 'TomorrowDark',
		mode: 'jsx',
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
							{/* <AceEditor
								mode={modeMap[this.state.mode]}
								className={this.state.mode}
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
								height="calc(100% - 40px)"
								width="100%"
							/> */}
							<Shiki
								mode={modeMap[this.state.mode]}
								className={this.state.mode}
								value={examples[this.state.mode]}
								theme={shikiThemes[this.state.scheme]}
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
