import React, { Component, Fragment } from 'react';
import UserContext from '../contex/user-context';
import {Link} from 'react-router-dom';

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
           <Fragment>
            <Link to="/home/MainTodo">Todo</Link>
            <Link to="/home/MainBudget">Budget</Link>
            <Link to="/home/MainCalendar">Calendar</Link>
            <a href="/api/logout" onClick={this.logOut}>log out</a>
            <p style={{marginBottom: 0, color:'white'}}> Welcome {this.context.login.displayName}</p>
           </Fragment>
         )               
    }
  }
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">VP</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

          <div className="collapse navbar-collapse" id='navbarNav'>
          <div className="custom_nav navbar-nav">

          {this.renderContent()}
          </div>

          </div>
        </nav>
    )
  }
};

export default Nav
