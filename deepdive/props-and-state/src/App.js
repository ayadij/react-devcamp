import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JournalList from './journals/journal-list';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Props and State</h1>
        </header>



        <p className="App-intro">
          <JournalList heading ='Here are my posts: ' />

        </p>
      </div>
    );
  }
}

export default App;
