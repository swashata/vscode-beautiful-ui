import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// data
import schemes from '../../bui-assets/generated.json';

// editor components
import TitleBar from './TitleBar';
import ActivityBar from './ActivityBar';
import StatusBar from './StatusBar';
import SideBar from './SideBar';
import TabGroup from './TabGroup';
import Shiki from './Shiki';

const languages = {
	tsx: 'TypeScript React',
	jsx: 'JavaScript React',
	js: 'JavaScript',
	php: 'PHP',
	html: 'HTML',
	md: 'Markdown',
	css: 'CSS',
	c: 'C',
};

console.log(schemes);

const EditorContainer = styled.section`
	max-width: 1400px;
	margin: 32px auto;
	box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
	border-radius: 4px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

	.bui-vsc-workspace--window {
		display: flex;
		flex-flow: row nowrap;
		min-height: 700px;
	}

	*::-webkit-scrollbar {
		width: 0.5em;
		height: 0.5em;
	}

	*::-webkit-scrollbar-track {
	}

	*::-webkit-scrollbar-thumb {
		background-color: ${props => props.theme.scrollbarSliderBackground};
	}
	*::-webkit-scrollbar-thumb:hover {
		background-color: ${props => props.theme.scrollbarSliderHoverBackground};
	}
	*::-webkit-scrollbar-thumb:active {
		background-color: ${props => props.theme.scrollbarSliderActiveBackground};
	}

	.bui-vsc-editor {
		width: calc(80% - 50px);
		display: flex;
		flex-flow: row wrap;
		align-content: flex-start;
	}
`;

export default function Editor() {
	const [scheme, setScheme] = useState(0);
	const [lang, setLang] = useState('tsx');

	const currentTheme = schemes[scheme];

	return (
		<ThemeProvider theme={currentTheme.colors}>
			<EditorContainer
				className={`bui-vsc-workspace bui-vsc-workspace--${currentTheme.type}`}
			>
				<TitleBar fileName={`example.${lang}`} />
				<div className="bui-vsc-workspace--window">
					<ActivityBar />
					<SideBar
						schemes={schemes}
						currentScheme={scheme}
						languages={languages}
						currentLang={lang}
						setScheme={setScheme}
						setLang={setLang}
					/>
					<div className="bui-vsc-editor">
						<TabGroup
							languages={languages}
							currentLang={lang}
							setLang={setLang}
						/>
						<Shiki html={currentTheme.languages[lang]} />
					</div>
				</div>
				<StatusBar language={languages[lang]} />
			</EditorContainer>
		</ThemeProvider>
	);
}
