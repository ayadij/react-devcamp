import React, { Component } from 'react';
import BirthdayForm from './birthdayForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div> 
        <header>
          <div className="header_skew"> 
            <div className="header_subskew">
              <BirthdayForm />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
