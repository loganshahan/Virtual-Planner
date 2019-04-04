import React, { Component } from 'react';
import UserContext from '../../contex/user-context';
import DisplayTodo from './DisplayTodo'

export class ShowTodos extends Component {

  static contextType = UserContext;

  state = {
    todos: [],
    UserId: this.context.login.id
  }

   // fetch todos from the backend 
   componentDidMount() {
    fetch("/api/todos")
      .then(res => res.json())
      .then(
        (result) => {
          const dataSet = [];
          result.map( (data) => {
            
            if(data.User.id === this.state.UserId) {
              dataSet.push(data);
              this.setState({
                todos: dataSet
              });
            };
          
          });    
        }
      )
  };

  render() {
    return (
      <div>

        <DisplayTodo todo={this.state.todos} />

      </div>
    )
  }
}

export default ShowTodos
