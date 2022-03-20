import React from 'react';

import LinkButton from './LinkButton';
import Header from './Header';

import {ReactComponent as GithubLogo} from '../Assets/Icons/githubLogo.svg';
import {ReactComponent as YoutubeLogo} from '../Assets/Icons/youtubeLogo.svg';

import '../Styles/App.css';

const App = () => {
	return (
		<div className="App">
			<Header></Header>

			<main>
				<p>This extension allows you to hide videos on youtube that contain certain keywords</p>
			</main>

			<footer>
				<div className="button-container">
					<LinkButton url="https://github.com" text="Github" icon={<GithubLogo/>} className="github-color"/>
					<LinkButton url="https://github.com" text="✨ Rate this extension! ✨"/>
				</div>
			</footer>
		</div>
	);
}

export default App;
