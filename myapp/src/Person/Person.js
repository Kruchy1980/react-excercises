// B4 we can start to use components we have to import the React from ract to interprete the part of code.
import React from 'react';

// That is an exmple of dumb component - offstate component wchich we schould havw more than casual stqtecomponenet as is in App.js file. Now we can add the calling from App which we declared inside the element and named doIt, so we know that it should be inserted inside main pargraph which should execute the function assigned to button.

//----------------------------------------------------------
//What if we would like to set an unput in personwhoch is a type of text - look at the bottom of the code
//(/* if we would like to use in the input as the one of changing value we have to use the onChang methode as below firstly we need to go back to app and add a new handler or chqange the old one if we would not like to use it.with the prop declared in App.js as changed * /)
// By usung value we have already entered name after refreshing bu it is not fully necessary but will change it when we get know better solutions for dynamic stte changing but i tis really not necessary for now to have it but we will left it where it is.

const person = (props) => {
	return (
		<div>
			<p onClick={props.doIt}>
				I'm a {props.name} and I am{' '}
				{
					<strong>
						<u>{props.age}</u>
					</strong>
				}{' '}
				years old !
			</p>
			<p>{props.children}</p>

			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};
// We need to export the component as well so we could use the component  we crated
export default person;
