import React, { Component } from 'react';
import './App.css';
import SmurfList from './SmurfList';
import AddSmurf from './AddSmurf';
class App extends Component {
	render() {
		return (
			<div className='App'>
				<h1>SMURFS! 2.0 with Redux</h1>
				<div>State management with Smurfs</div>

				<AddSmurf />
				<SmurfList />
			</div>
		);
	}
}

export default App;
