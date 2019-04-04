import React, {Fragment} from 'react'

function DisplayTodo(props) {
    const todos = props.todo;
    const renderTodos = () => {
        return todos.map( (todo, index) => {
            const {title, body, category} = todo;
            return(
                
        <div className="list-group" key={index}>

                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1"> {title} </h5>
                        <small>3 days ago</small>
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
