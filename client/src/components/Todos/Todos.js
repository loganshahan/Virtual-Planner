import React, { Component } from 'react';
import UserContext from '../../contex/user-context';
import MainTodo from './MainTodo';
import ShowTodos from './ShowTodos';

export class Home extends Component {

    state= {
      show: false
    }
    
    static contextType = UserContext;

    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };

  render() {
    return (
      <div>
        <div className="container mt-4">            
            <div className="row">

                {/* get todos container */}
                <div className="col-md-4">
                    <h2>Existing To Dos</h2>
                    <ShowTodos />
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
