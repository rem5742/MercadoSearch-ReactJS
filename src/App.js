import React, { Component } from 'react';
import Search from './components/search';
import logo from './logo.png';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Search logo={logo} />
			</div>
		);
	}
}

export default App;
