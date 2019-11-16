// Here we do have imports of necessary packages to our application
import React, { Component } from 'react';

import './App.css';
// It is how  we can add the separate components to the app app.js until we do not create th Root.js file and won't add there paths to another files with components.
import Person from './Person/Person'; // We can use capital letter of our component and rlative path to our newly created file Person.js The name of import has to be named by capital leter

// This is an element extending Components and is injected into App.js file in src folder.  - we can display it by running npm start in terminal in our app directly
// class App extends Component {
// 		// Render is a methode which refreshes the data in module/component
// 	render() {
// 		return (
// 			// (That is first element of our webApp)
// 			// Now we can use the component we nhave create in App.js file using JSX tags which are look similar to HTML tags
// 			<div className="App">
// 				<h1>Hello All I am React Application</h1>
// 				<p>That is really working :)</p>
// 				<Person />
// 				<Person />
// 				<Person />
// 				<Person />
// 			</div>
// 		);
// We can use createElement methode but it is not used to often, because the code is longer and means the same what aboved code
//React.createElement takes 3 arguments:
//first - what we want to create
//second - is a configuration of first element and is oprional can be null as well but also an JS object can be injected
// third - is an any amount of children and i there is more than one they must be separated by coma. Childrens means what is nested in this element in our case  in div but not used because of unnecessary complcation of code
// return React.createElement('div', {className: 'App'}, React.createElement('h1'), null, 'Hi I\'m a React Application!!!');
// 	}
// }
// class App extends Component {
// 		// Render is a methode which refreshes the data in module/component
// 	render() {
// 		return (
// 			// We can also inject the elements between tags but a little bit different -  go to Person.js
// 			<div className="App">
// 				<h1>Hello All I am React Application</h1>
// 				<p>That is really working :)</p>
// 				<Person name="Max" age="28" />
// 				<Person name="Alex" age="30">
// 					My Hobbies: Climbing
// 				</Person>
// 				<Person name="Ulryk" age="22" />
// 				<Person name="Howard" age="45" />
// 			</div>
// 		);
// 	}
// }

// Sometimes in application we want to have possibility to change  the parameter of component on click as well so let's create button inside our app and that we will inject logic of the button to be workable as we want let's make it to change the name of element for instnce.
// To make the parameters of component changable we have to have them not hashed as it is i this exmaple so if we want to change them we have to unhashed them from the elements/components we injected to that file. To do this we have to put our parameters as name or age i separate variable and we can do it only in components which extends the components as here

class App extends Component {
	// here we can use the state methode where we can create the particular parameters to be changed laterv"state" is ised for doing it. Using state in every created component makes the application harder to be interpreted specially when it grows so it is good idea to not to use it in every component we create and is not created as one which extends component.
	state = {
		// Now we are creating whatever named object which values will be object as well
		persons: [
			{name: 'Max', age: 28},
			{name: 'Alex', age: 30},
			{name: 'Ulryk', age: 22},
			{name: 'Howard', age: 45}
		]
	}
	// Render is a methode which refreshes the data in module/component
	render() {
		return (
			//As we can see we are injecting the parameters from state which can be created inside stan of component by word this so it means that it concerns the present state/present in this component extension.
			<div className="App">
				<h1>Hello All I am React Application</h1>
				<p>That is really working :)</p>
				<button>Switch Name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
					My Hobbies: Climbing
				</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
				<Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
			</div>
		);
	}
}



// After declare such a informtion we have to implement them into our code of Person Component so we have to go back to Person.js and...

export default App;
