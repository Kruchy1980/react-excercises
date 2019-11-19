// B4 we can start to use components we have to import the React from ract to interprete the part of code.
import React from 'react';

// That is an exmple of dumb component - offstate component wchich we schould havw more than casual stqtecomponenet as is in App.js file. Now we can add the calling from App which we declared inside the element and named doIt, so we know that it should be inserted inside main pargraph which should execute the function assigned to button.

//----------------------------------------------------------
// If we want to add some styles we need to add classNme's to elements
const person = (props) => {
	return (
		<div className="Person">
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
