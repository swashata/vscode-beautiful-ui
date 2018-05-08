import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

function onChange(newValue) {
  console.log('change',newValue);
}

class Demo extends React.PureComponent {
	state = {
		theme: 'github'
	};

	render() {
		return (
			<AceEditor
				mode="java"
				theme="github"
				onChange={onChange}
				name="UNIQUE_ID_OF_DIV"
				editorProps={{$blockScrolling: true}}
			/>
		)
	}
}

export default Demo;
