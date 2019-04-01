import React, { Component } from 'react';
import './App.css';
import {Nav} from './components/Nav.js';
import {Welcome} from './components/Welcome.js';
import {Home} from './components/Home.js';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Nav />
        <Home />

      </div>
    );
  }
}

export default App;
