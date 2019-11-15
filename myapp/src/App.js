// Here we do have imports of necessary packages to our application
import React, { Component } from 'react';

import './App.css';
// It is how  we can add the separate components to the app app.js until we do not create th Root.js file and won't add there paths to another files with components.
import Person from './Person/Person'; // We can use capital letter of our component and rlative path to our newly created file Person.js The name of import has to be named by capital leter

// This is an element extending Components and is injected into App.js file in src folder.  - we can display it by running npm start in terminal in our app directly
// class App extends Component {
// 	// Render is a methode of react as well
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
class App extends Component {
	// Render is a methode of react as well
	render() {
		return (
			//As same we can add props which are like atributes separately declared and can be used for separate element to modify it we have added the attributes separately to components
			<div className="App">
				<h1>Hello All I am React Application</h1>
				<p>That is really working :)</p>
				<Person name="Max" age="28" />
				<Person name="Alex" age="30">
					My Hobbies: Climbing
				</Person>
				<Person name="Ulryk" age="22" />
				<Person name="Howard" age="45" />
			</div>
		);
	}
}

// After declare such a informtion we have to implement them into our code of Person Component so we have to go back to Person.js and...

export default App;
