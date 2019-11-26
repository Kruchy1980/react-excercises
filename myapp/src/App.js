// Here we do have imports of necessary packages to our application.
import React, { Component } from 'react';
// Main styles of application  here are added styles for Application from every files not asigned by modules
import './App.css';

// It is how  we can add the separate components to the app app.js until we do not create th Root.js file and won't add there paths to another files with components.
// Add Person general styles import
import Person from './Person/Person'; // We can use capital letter of our component and rlative path to our newly created file Person.js The name of import has to be named by capital leter


//--------------------------------------------------------------
//-------------------------------------------------------------
// Adding styles To person view 2 ways of doing that ------------
// --------------------------------------------------------------
// First way is to add to the folder Person a file Person.css - We need to remember that named file is a global css file so does not concern the only Person .js file but all files in appliation
// ---------------------------------------------------------------
class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Alex', age: 30 },
			{ name: 'Ulryk', age: 22 },
			{ name: 'Howard', age: 45 },
			{ username: 'Jakub\'s', age: 40 }
		]
	};

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

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Irek', age: 28 },
				{ name: event.target.value, age: 30 },
				{ name: 'Ulryk', age: 25 },
				{ name: 'Howard', age: 40 }
			]
		});
	};
	usernameHandlerMethod = (event) => {
		this.setState({
			persons:
				{username: event.target.value, age: 25 }
		})
	}
// We can add styles inline as well in the render function  of our component name of constant does not have to be named style but for better recognizing we can name it like that/asan object.css When we declare it we can add the style inside our element- button this time.
	render() {

		const style = {
			backgroundColor: 'yellow',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		return (
			<div className="App">
				<h1>Hello All I am React Application</h1>
				<p>That is really working :)</p>
				<button
				style={style}
				onClick={() => this.switchNameButton('Henryk')}>Switch Name</button>
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
