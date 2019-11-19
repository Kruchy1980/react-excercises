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
	// If we add parmeter to switchNameButton than we can have dynamically changing name  like the example below
	switchNameButton = (newName) => {
		this.setState({
			persons: [
				{ name: newName, age: 28 },
				{ name: 'Alexander', age: 30 },
				{ name: 'Ulryk', age: 22 },
				{ name: 'Howard', age: 40 }
			]
		});
	};
	//Here below we can use a new name change handler/button nqme does not matter and we need to set event as a parqameter in here
	nameChangedHandler = (event) => {
		// We want to change state as well so need to set the new state in here
		// Than wherever we would like to change the name  we need toset an event target as below with parameter .value because we will get the name from input so we need use the inputs value
		this.setState({
			persons: [
				{ name: 'Irek', age: 28 },
				{ name: event.target.value, age: 30 },
				{ name: 'Ulryk', age: 25 },
				{ name: 'Howard', age: 40 }
			]
		});
	};

	// Render is a methode which refreshes the data in module/component
	// In this cawse we want to change the name using change name handler and we want to change the second name so need tu set ther the changed parmeter whicg wil be taken from Persons.js file which is a dummy component extension:)
	render() {
		return (
			<div className="App">
				<h1>Hello All I am React Application</h1>
				<p>That is really working :)</p>
				<button onClick={() => this.switchNameButton('Henryk')}>Switch Name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					doIt={this.switchNameButton.bind(this, 'Henrietta :)')}
					changed={this.nameChangedHandler}
				>
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
