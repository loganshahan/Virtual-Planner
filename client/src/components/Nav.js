import React, { Component, Fragment } from 'react';
import UserContext from '../contex/user-context';
import {Link} from 'react-router-dom';

export class Nav extends Component {

  static contextType = UserContext;


  renderContent() {
    console.log(this.context)
    switch(this.context.login.id) {
      case undefined:
      return(
        <a href="/auth/google"> Login </a>
      )

      default:
         return (
           <Fragment>
            <Link to="/home/MainBudget">My Budget</Link>
            <a href="/api/logout" onClick={this.logOut}>log out</a>
            <p style={{marginBottom: 0, color:'white'}}> Welcome {this.context.login.displayName}</p>
           </Fragment>
         )               
    }
  }
  render() {
    return (
        <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Grello</Link>
      <div className="custom_nav">

      {this.renderContent()}
      </div>

      </div>
        </nav>
    )
  }
}

export default Nav
