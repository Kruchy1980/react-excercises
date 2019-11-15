// B4 we can start to use components we have to import the React from ract to interprete the part of code.
import React from 'react';

// We need to connect our component with App by importing

// Now when we created the new folder in source folder we can create next view in our project - Basics:
//Use the capital letter to create folders as well as .js files which are not Database files which can be named camerCase style.
// The simplest form of component is to create function component
// Because of ES6 when we have new opportunities we can use const for non changing module wchich is mostly used and we can use the lower letters as the name as well as large. Theoretically lower letters are mostly used in names.
// () in function is called arguments list and is used instead of sual function name as the arrow function.
// this is component
// const person = () => {
// 	//Component function has to return some JSX eg.
// 	return <p>I'am a Person</p>;
// };
// Creating of dynamic content
// const person = () => {
// 	//Component function has to return some JSX eg. - for eg we want to randomize age in every injected component in App.js if we want to injest dynamic part of code we have to make it in the curly brackets.
// 	//We can than add the HTML tags which are a JSX tag at present and without the styles we can modify content beside we have to inject them in other curlu braces as we can see the rest o cod can generted by itself
// 	return (
//         // Now when we declared the additional information to the App.js file in particular elements we can than add such a modification
// 		<p>
// 			I'am a Person and I am{' '}
// 			{
// 				<strong>
// 					<u>{Math.floor(Math.random() * 30)}</u>
// 				</strong>
// 			}{' '}
// 			years old
// 		</p>
// 	);
// };
// After we used an arguments in App.js we have to inject them here by parameter props in function. We can notify that if there is only one parameter in function the brackets do not have to be used, that is why the props are not in a brackets
const person = (props) => {
	return (
		// Now when we declared the additional information to the App.js file in particular elements we can than add such a modification
		<p>
			I'm a {props.name} and I am{' '}
			{
				<strong>
					<u>{props.age}</u>
				</strong>
			}{' '}
			years old !
		</p>
	);
};
// We need to export the component as well so we could use the component  we crated
export default person;
