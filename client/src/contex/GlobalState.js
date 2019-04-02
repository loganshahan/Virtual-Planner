import React, { Component } from 'react';
import axios from 'axios';
import UserContext from './user-context';

export class GlobalState extends Component {

    state =  {
        login: []
    }

    getUser = async () => {
        const res = await axios.get('/api/current-user');
        const data = res.data
        this.setState({
            login: data
        });
    };

  
  render() {
    return (
     <UserContext.Provider
        value={{
            getUser: this.getUser,
            login: this.state.login
        }}
     >
        {this.props.children}
     </UserContext.Provider>

    )
  }
}

export default GlobalState
