// To not repeat the block code in Html after importing React by scripts in HTML code - one of the methodes to implement React to uor code we can start to create the components in js files like that
// create function - also one of the ways - names have to be named with Capsized letters
// By adding in function an argument props we can later change the values of component in our HTML code
function Person (props) {
  // creaate return of function with brackets to multiply arguments
  return (
    // We have to use a box in here to implement multi objects in one box
    // We have to remember that rezct classes can not be named as same as the classes in HTML so we need to change the name for className for instance
    // We can use the specified values using curly brackets in HTML tags to display them in HTML Code
    <div className='person'>
      <h1>Twoje imię: {props.name}</h1>
      <p>YTwój wiek: {props.age}</p>
    </div>
  )
}
// We had also implemented rect dom the library responsible for actions with DOM in HTML.
// Now we can render a function = implement function to particular element in HTML by render below by implementing it to specified element chosen by querySelector
// If we use the props we can add attributge to our render function to implement them later dinamically to HTML code
ReactDom.render(<Person name="Jurek" age="30" />, document.querySelector('#p1'));
// Now by getting the other element of our HTML we can set the second name by using similar parameters to our second render function
ReactDom.render(<Person name="Heniu" age="25" />, document.querySelector('#p2'));
