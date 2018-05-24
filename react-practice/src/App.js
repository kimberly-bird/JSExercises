import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class = Object.create
// App is the name selected to represent this component
class App extends Component {
  // render is a method on the component
  render() {
    // JSX representation of what to return
    // always return ( stuff )
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{ color: "red" }} className="App-title">Welcome to NSS React</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
