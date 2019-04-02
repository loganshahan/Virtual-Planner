import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import UserContext from './contex/user-context';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Home from './components/Home'


class App extends Component {

  componentDidMount() {
    this.context.getUser();
  }

  static contextType = UserContext;

  isLoggedIn(){
    if(this.context.login.id === undefined) {
      return (
        <BrowserRouter>
        <div>

        <Nav />
        <Route exact path='/' 
        component={Welcome} 
        />
        
        </div>
        </BrowserRouter>
      )
    } else {
      return (
        <BrowserRouter>
        <div>

        <Nav />
        <Route exact path="/" component={Home} />

        </div>
        </BrowserRouter>
      )
    }
  }


  render() {


    
    return (
      
      <div className="App">
        {/* <Nav />
        <Home /> */}
        {this.isLoggedIn()}

      </div>
    );
  }
}

export default App;
