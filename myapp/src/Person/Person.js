// B4 we can start to use components we have to import the React from ract to interprete the part of code.
import React from 'react';





// Now when we created the new folder in source folder we can create next view in our project - Basics:
//Use the capital letter to create folders as well as .js files which are not Database files which can be named camerCase style.
// The simplest form of component is to create function component
// Because of ES6 when we have new opportunities we can use const for non changing module wchich is mostly used and we can use the lower letters as the name as well as large. Theoretically lower letters are mostly used in names.
// () in function is called arguments list and is used instead of sual function name as the arrow function.
// this is component
const Person = () => {
    //Component function has to return some JSX eg.
    return <p>I'am a Person</p>
};




// We need to export the component as well so we could use the component  we crated
export default Person;

