import React, { Component } from 'react';
import UserContext from '../contex/user-context';
import MainTodo from './Todos/MainTodo';

export class Home extends Component {

    state= {
      show: false,
      todos: []
    }
    
    static contextType = UserContext;

    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };

    // get api call
    componentDidMount() {
      fetch("http://localhost:3000/api/todos")
        .then(res => res.json())
        .then(
          (result) => {
            // console.log(result)
            let todos = result.map((todo, index) => {
              return(
                <div key={index}>
                  <p>Title: {todo.title}<br/>
                  Body: {todo.body}<br/>
                  Category: {todo.category}</p>
                </div>
              )
            })
            this.setState({
              todos: todos
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }


  render() {
    return (
      <div>
        <div className="container mt-4">            
            <div className="row">

                {/* get todos container */}
                <div className="col-md-4">
                    <h2>Existing To Dos</h2>
                    {this.state.todos}
                </div>

                {/* filter todos container */}
                <div className="col-md-4">
                    <h2>Filter by Category</h2>
                </div>

                {/* post todos container */}
                <div className="col-md-4">
                <button onClick={this.showModal}
                className="btn btn-primary">
                   Add Todo
                </button>
                  <MainTodo show={this.state.show} handleClose={this.hideModal} />
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Home
