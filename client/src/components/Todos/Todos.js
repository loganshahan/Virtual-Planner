import React, { Component, Fragment } from 'react';
import UserContext from '../../contex/user-context';
import MainTodo from './MainTodo';
import ShowTodos from './ShowTodos';
import MainCategory from './Categories/MainCategory';

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
      <Fragment>
      <h1 className='custom_header'>Todos</h1>
        <div className="container mt-4">            
            <div className="row">

            {/* post todos container */}
            <div className="col-md-3">
                <button onClick={this.showModal}
                className="btn btn-primary custom_todo_btn">
                   <i className='fa fa-plus'></i>
                </button>
                  <MainTodo show={this.state.show} handleClose={this.hideModal} />
                </div>

                {/* get todos container */}
                <div className="col-md-9">
                    <ShowTodos />
                </div>

                {/* filter todos container */}
                {/* <div className="col-md-4">
                    <h2>Filter by Category</h2>
                    <MainCategory />
                </div> */}

            </div>
        </div>
      </Fragment>
    )
  }
}

export default Home