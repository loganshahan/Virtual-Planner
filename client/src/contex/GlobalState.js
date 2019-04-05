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

    postTodo = async (values) => {
        // console.log(values)
       await axios.post('/api/todos', values);
    };
    postCategory = async (values) => {
       await axios.post('/api/categories', values);
    };
    postEvents = async (values) => {
        await axios.post('/api/events', values);
    }

  
  render() {
    return (
     <UserContext.Provider
        value={{
            getUser: this.getUser,
            postTodo: this.postTodo,
            postEvents: this.postEvents,
            login: this.state.login,
            postCategory: this.postCategory
        }}
     >
        {this.props.children}
     </UserContext.Provider>

    )
  }
}

export default GlobalState
