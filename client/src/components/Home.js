import React, { Component, Fragment } from 'react';
import UserContext from '../contex/user-context';
import MainDashboard from './Dashboard/MainDashboard'


export class Home extends Component {

  static contextType = UserContext;

  state = {
    UserId: this.context.login.id
  }


  render() {

    return (
      <Fragment>
        
         <MainDashboard
         user={this.state.UserId}
          />

      </Fragment>
    )
  }
};

export default Home
