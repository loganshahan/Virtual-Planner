import React, {Fragment} from 'react';
import axios from 'axios';
import moment from 'moment';


function MarkCompBtn(props) {
    const {customID} = props;
    console.log(customID.todo);

    const handleMarkComplete = (e) => {
        let id = e.currentTarget.getAttribute('id');

        axios.put(`/api/todos/${id}`, {isComplete: 1}).then(response => {
            console.log(response);
        });

        // window.location.reload();
    }

    const dispBtn = () => {
        //This code is printing one button for to-do on every to-do item
        //We only want it to print one button
        //I am not sure how we specify the particular ID of the button that we need

        return customID.todo.map((val, index) => {
            console.log(val.id);
            console.log(val.isComplete);
    
            return (
                <div>                
                <button 
                className="btn btn-primary mark-complete" onClick={handleMarkComplete} id={val.id}>Mark Complete Componen1t</button>
                </div>

            )
        });
    }




    return(
        <Fragment>
        {dispBtn()}
        </Fragment>
    )



}

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

    const displayComplete = (isComp) => {
        
        if (isComp == 0) {
            return <MarkCompBtn customID = {props}/>
        } else {
            console.log("not complete!");
        }
    }




    const renderTodos = () => {
        return todos.map( (todo, index) => {
            const {id, title, body, category, isComplete, createdAt} = todo;
            return(
                
        <div className="list-group" key={index}>

                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">

                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1"> {title} </h5>
                        <h6>{moment(createdAt).format('MMM Do YYYY')}</h6>
                    </div>
                    <p className="mb-1"> {body} </p>
                    <small> {category} </small>
                    <div>
                    {displayComplete(isComplete)}
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


// <button id={id} onClick={handleMarkComplete} 
// className="btn btn-primary mark-complete">Mark Complete</button>