import React, { Component } from 'react';
import UserContext from '../contex/user-context';
import { Redirect , Link, Route} from 'react-router-dom';

export class Nav extends Component {

  static contextType = UserContext;


  renderContent() {
    switch(this.context.login.id) {
      case undefined:
      return(
        <a href="/auth/google"> Login </a>
      )

      default:
         return (
      <a href="/api/logout" onClick={this.logOut}>log out</a>
         )               
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Grello</a>

      {this.renderContent()}

        </nav>
      </div>
    )
  }
}

export default Nav
