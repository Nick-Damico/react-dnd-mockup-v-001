import React, { Component } from 'react';
import logo from './logo.svg';
import CharacterCardContainer from './components/CharacterCardContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">D&amp;D Character APP</h1>
        </header>
        <CharacterCardContainer />
      </div>
    );
  }
}

export default App;
