// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import ReactDOM from 'react-dom'

// To not repeat the block code in Html after importing React by scripts in HTML code - one of the methodes to implement React to uor code we can start to create the components in js files like that
// create function - also one of the ways - names have to be named with Capsized letters
// By adding in function an argument props we can later change the values of component in our HTML code
function Person(props) {
// creaate return of function with brackets to multiply arguments
return (
  // We have to use a box in here to implement multi objects in one box
  // We have to remember that rezct classes can not be named as same as the classes in HTML so we need to change the name for className for instance
  // We can use the specified values using curly brackets in HTML tags to display them in HTML Code
  <div className='Person'>
    <h1>Twoje imię: {props.name}</h1>
    <p>Twój wiek: {props.age}</p>
  </div>
)

}

//  We can add some code above the render to include the two components in one to make the code shorter  by adding the variable with cumulated code

const App = () => (
  <div>
    <div>
      <Person name='Jurek' age='30' />
      "<Person name='Heniu' age='25' />"
    </div>
  </div>
);

// We had also implemented rect dom the library responsible for actions with DOM in HTML.
// Now we can render a function = implement function to particular element in HTML by render below by implementing it to specified element chosen by querySelector
// If we use the props we can add attributge to our render function to implement them later dinamically to HTML code
// ReactDOM.render(<Person name='Jurek' age='30' />, document.querySelector('#p1'))
// Now by getting the other element of our HTML we can set the second name by using similar parameters to our second render function
// ReactDOM.render(<Person name='Heniu' age='25' />, document.querySelector('#p2'))
// Now we can tqke from dom the onlu one div which we created
ReactDOM.render(<App />, document.querySelector('#root'));

export default App
