import React, {Fragment} from 'react';
import axios from 'axios';

function DisplayTodo(props) {
    const todos = props.todo;

    const handleDelete = (e) => {
        
        let id = e.currentTarget.getAttribute('id');
        let todoId = {
            id: id
        };

        axios.delete(`/api/todos/single/${id}`, { params: todoId }).then(response => {
            console.log(response);
          });
        
        window.location.reload();


    }

    const handleMarkComplete = (e) => {
        let id = e.currentTarget.getAttribute('id');

        axios.put(`/api/todos/${id}`, {isComplete: 1}).then(response => {
            console.log(response);
        });

        window.location.reload();
    }
    const renderTodos = () => {
        return todos.map( (todo, index) => {
            const {id, title, body, category} = todo;
            return(
                
        <div className="list-group" key={index}>

                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">

                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1"> {title} </h5>
                    </div>
                    <p className="mb-1"> {body} </p>
                    <small> {category} </small>
                    <div>
                        <button id={id} onClick={handleMarkComplete} className="btn btn-primary mark-complete">Mark Complete</button>
                    </div>
                    <div>
                        <button id={id} onClick={handleDelete} className="btn btn-danger">Remove</button>
                    </div>
                </a>
                
        </div>

            )
        })   
    };
    return(
        <Fragment>
            {renderTodos()}
        </Fragment>
      )
};

export default DisplayTodo
