import React, { Component } from 'react';
import Info from './Components/Info'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Info />
        </header>
      </div>
    );
  }
}

export default App;
