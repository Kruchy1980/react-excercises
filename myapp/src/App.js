// Here we do have imports of necessary packages to our application
import React, { Component } from 'react';

import './App.css';

// This is an element extending Components and is injected into App.js file in src folder.  - we can display it by running npm start in terminal in our app directly
class App extends Component { 
  // Render is a methode of react as well
  render() {
    return (
      // (That is first element of our webApp)
      <div className='App'>
        <h1>Hello All I am React Application</h1>
        <p>That is really working :)</p>
      </div>
    );
    // We can use createElement methode but it is not used to often, because the code is longer and means the same what aboved code
    //React.createElement takes 3 arguments:
    //first - what we want to create
    //second - is a configuration of first element and is oprional can be null as well but also an JS object can be injected
    // third - is an any amount of children and i there is more than one they must be separated by coma. Childrens means what is nested in this element in our case  in div but not used because of unnecessary complcation of code
    // return React.createElement('div', {className: 'App'}, React.createElement('h1'), null, 'Hi I\'m a React Application!!!');
  }
};


export default App;
