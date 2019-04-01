import React, { Component } from 'react';
import './App.css';
import {Nav} from './components/Nav.js';
import {Welcome} from './components/Welcome.js';
import {AppContainer} from './components/AppContainer';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Nav />
        <Welcome />

      </div>
    );
  }
}

export default App;
