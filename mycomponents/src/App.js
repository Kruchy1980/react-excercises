import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import UserInput from './components/UserInput';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends React.Component {
  state ={
    username: 'Dżejkob'
  }

usernameChangeHandler = (event) => {
  this.setState({
    username: event.target.value
  })
}

  render() {
    return (
      <div className="App">
        <UserInput changed={this.usernameChangeHandler}
        currentName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>

        <UserOutput userName="Helmut" />

      </div>
    );
  }
}




export default App;
