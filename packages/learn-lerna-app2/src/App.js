import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { myRandomNoGenerator } from 'learn-lerna-share-lib';
// import { myRandomNoGenerator } from 'loading-fabric';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React {myRandomNoGenerator(10, 100)}
					</a>
				</header>
			</div>
		);
	}
}

export default App;
