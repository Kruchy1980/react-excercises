// Here we do have imports of necessary packages to our application.
import React, { Component } from 'react';

import './App.css';
// It is how  we can add the separate components to the app app.js until we do not create th Root.js file and won't add there paths to another files with components.
import Person from './Person/Person'; // We can use capital letter of our component and rlative path to our newly created file Person.js The name of import has to be named by capital leter

//--------------------------------------------------------------

class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Alex', age: 30 },
			{ name: 'Ulryk', age: 22 },
			{ name: 'Howard', age: 45 }
		]
	};

	// Manipulating with states
	switchNameButton = () => {
		this.setState({
			persons: [
				{ name: 'Max-Pain', age: 28 },
				{ name: 'Alex', age: 30 },
				{ name: 'Ulryk', age: 22 },
				{ name: 'Howard', age: 40 }
			]
		});
	};

	// Render is a methode which refreshes the data in module/component
	render() {
		// If we want to assigned changing of state to another elements eg person2 when clicking it is necessary to add a another argment to this element and name it whatever we want.
		return (
			<div className="App">
				<h1>Hello All I am React Application</h1>
				<p>That is really working :)</p>
				<button onClick={this.switchNameButton}>Switch Name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age} doIt={this.switchNameButton}>
					My Hobbies: Climbing
				</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
				<Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
			</div>
		);
	}
}

// After declare such a information we have to implement them into our code of Person Component so we have to go back to Person.js and...

export default App;
