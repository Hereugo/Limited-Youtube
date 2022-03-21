import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';

import LinkButton from '../Components/LinkButton';
import Header from '../Components/Header';

import '../Styles/App.css';

const App = () => {
	return (
		<div className="App light">
		<Header/>
		<main>
			<p>This extension allows you to hide videos on youtube that contain certain keywords</p>
		</main>
		<footer>
			<div className="button-container">
				<LinkButton url="https://github.com" text="Github" icon={<FontAwesomeIcon icon={faGithub}/>} className="github-color"/>
				<LinkButton url="https://github.com" text="Rate this extension!" icon={<FontAwesomeIcon icon={faChrome}/>}/>
			</div>
		</footer>
		</div>
	);
}

export default App;
