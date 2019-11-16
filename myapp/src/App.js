// Here we do have imports of necessary packages to our application - the component is needed to be imported until version < react 16.8 but in newer versions we do not need to use extends of components but all of them can be functional components so we do not need to import the plug/module Component but for using the states Hook we need to import ->
// import React, { Component } from 'react';
// -> useState from react which allow use to manage of the states in react.
import React, { useState } from 'react';

import './App.css';
// It is how  we can add the separate components to the app app.js until we do not create th Root.js file and won't add there paths to another files with components.
import Person from './Person/Person'; // We can use capital letter of our component and rlative path to our newly created file Person.js The name of import has to be named by capital leter

//--------------------------------------------------------------

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


// -------------------------------------------------------------
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

//--------------------------------------------------------------

// Sometimes in application we want to have possibility to change  the parameter of component on click as well so let's create button inside our app and that we will inject logic of the button to be workable as we want let's make it to change the name of element for instnce.
// To make the parameters of component changable we have to have them not hashed as it is i this exmaple so if we want to change them we have to unhashed them from the elements/components we injected to that file. To do this we have to put our parameters as name or age i separate variable and we can do it only in components which extends the components as here

// class App extends Component {
// 	// here we can use the state methode where we can create the particular parameters to be changed laterv"state" is ised for doing it. Using state in every created component makes the application harder to be interpreted specially when it grows so it is good idea to not to use it in every component we create and is not created as one which extends component.
// 	state = {
// 		// Now we are creating whatever named object which values will be object as well
// 		persons: [
// 			{name: 'Max', age: 28},
// 			{name: 'Alex', age: 30},
// 			{name: 'Ulryk', age: 22},
// 			{name: 'Howard', age: 45}
// 		]
// 	}

// 	// To add logic to button we have to create a methode separately and than se can add it by simply JSX methode onClick.
// 	// Create a methode name whatever can be but is good to name it tobe clearly understandable. Than we can add it to our onclick in specified element but without calling methode so without - ().
	
// 	// Manipulating with states
// 	switchNameButton = () => {
// 		// console.log('Zostało kliknięte'); // comment for now
// 		// we need to remember that the state can not be mutated like that
// 		//this.state.persons[0].name = 'Clementine'; // Wrong command = won't work
// 		// We should use seet state methot for this which will chqange the state not mutate the state.
// 		//setState takes an object as an argument and will concates/merges it with already existed state.
// 		// We need to copy the state and change the keys and/or values manually to change it on a display.
// 		// We need to remember that such a function as changing state is availible only in class components until react version 16.8 
// 		this.setState({
// 			persons: [
// 			{name: 'Max-Pain', age: 28},
// 			{name: 'Alex', age: 30},
// 			{name: 'Ulryk', age: 22},
// 			{name: 'Howard', age: 40}
// 		]})

// 	}



// 	// Render is a methode which refreshes the data in module/component
// 	render() {
// 		return (

// 			//As we can see we are injecting the parameters from state which can be created inside stan of component by word this so it means that it concerns the present state/present in this component extension.
// 			<div className="App">
// 				<h1>Hello All I am React Application</h1>
// 				<p>That is really working :)</p>
// 				<button onClick={this.switchNameButton}>Switch Name</button>
// 				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
// 				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
// 					My Hobbies: Climbing
// 				</Person>
// 				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
// 				<Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
// 			</div>
// 		);
// 	}
// }

//---------------------------------------------------------------
// In React version  > 16.8 we acn use the function components and using useState() hook for state manipulation so to do it we neet to switch class component for function component

const App = props => {
	// We can now use a state like a function
	// useState returns always the state with exactly two elements not more not less but can be assigned to variable another assignment of array when we can add any name we want to the square brackets eg personsData or personsState or whatever what is clear and undersandable for aby person
	// The second element of array in square brackets is the function which helps to set the state eg setPersons, setPersonsState or whatever.
	// The first element is our previous state aas below
	const [ personsData, setPersonsState ] = useState({
		persons: [
		{name: 'Max', age: 28},
		{name: 'Alex', age: 30},
		{name: 'Ulryk', age: 22},
		{name: 'Howard', age: 45}
	],
});
	//Just because we can create a function in component we can do such a state for changing tne name as a function and it is fully good option
	const switchNameButton = () => {
		// And because we have name the change state as a setPersonsState we have to change the changed state  the same way.
		setPersonsState({
			persons: [
			{name: 'Max-Pain', age: 28},
			{name: 'Alexander', age: 33},
			{name: 'Ulryk', age: 22},
			{name: 'Howard', age: 40}
		]
	});
};
	// Render is a methode which refreshes the data in module/component but we do not need the methode in function component.
	// render() {
		return (
			// Now when we have setted the hook state we need to chnge the this.state.persons for personsData - as the name of the first element of the array
			// The second thing we need to do in the button is to change the name of fundtion called on click from this.switchNameButton for switchNameButton without brackets because we do not want to call it without clicking only because we named the function like that
			<div className="App">
				<h1>Hello All I am React Application</h1>
				<p>That is really working :)</p>
				<button onClick={switchNameButton}>Switch Name</button>
				<Person name={personsData.persons[0].name} age={personsData.persons[0].age} />
				<Person name={personsData.persons[1].name} age={personsData.persons[1].age}>
					My Hobbies: Climbing
				</Person>
				<Person name={personsData.persons[2].name} age={personsData.persons[2].age} />
				<Person name={personsData.persons[3].name} age={personsData.persons[3].age} />
			</div>
		);
	}
// }





// After declare such a informtion we have to implement them into our code of Person Component so we have to go back to Person.js and...

export default App;
