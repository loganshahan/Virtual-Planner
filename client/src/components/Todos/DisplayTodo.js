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
    const renderTodos = () => {
        return todos.map( (todo, index) => {
            const {id, title, body, category} = todo;
            return(
                
        <div className="list-group" key={index}>

                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1"> {title} </h5>
                        <button id={id} onClick={handleDelete}>Remove</button>
                    </div>
                        <p className="mb-1"> {body} </p>
                        <small> {category} </small>
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
