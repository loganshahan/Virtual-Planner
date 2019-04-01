import React, { Component } from 'react';
import './App.css';
import {Nav} from './components/Nav.js';
import {Container} from './components/Container.js';
import {AppContainer} from './components/AppContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Container />
      </div>
    );
  }
}

export default App;
