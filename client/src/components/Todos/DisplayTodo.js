import React, {Fragment, useState} from 'react';
import axios from 'axios';
import moment from 'moment';

function DisplayTodo(props) {
    const todos = props.todo;
    const [completed, setCompleted] = useState(todos.isComplete)

    const handleDelete = (e) => {
        let id = e.currentTarget.getAttribute('id');
        let todoId = {
            id: id
        };
        axios.delete(`/api/todos/single/${id}`, { params: todoId }).then(response => {
            console.log(response);
          });
        window.location.reload();
    };

    const handleMarkComplete = (e) => {
        axios.put(`/api/todos/${e}`, {isComplete: true}).then(response => {
            console.log('done');
        });
        setCompleted(!completed);
        window.location.reload();
    };

    const renderCompleted = (id, isComplete) => {
        return (
            !isComplete && <button
        onClick={() => handleMarkComplete(id)}
        className="btn btn-success custom_todo_btn" 
        >
        <i className='fa fa-check'></i>
        </button>
        )
    };

    const renderTodos = () => {
        
    if(todos.length === 0) {
        return(
         <div className='custom_no col-md-12'>
           <h5>No Todos yet</h5>
         </div>
       )
 
   } else {
    return todos.map( (todo, index) => {
        const {id, title, body, category, createdAt, isComplete} = todo;

        return(
            
    <div 
    className="list-group mt-2 col-md-6"
    data-aos='fade-in' 
    key={index}>

            <div href="#" 
            className={!isComplete ? '"not-completed list-group-item list-group-item-action flex-column align-items-start" ' : 'mark-complete list-group-item list-group-item-action flex-column align-items-start'}
            >

            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1"> {title} </h5>
                <h6>{moment(createdAt).format('MMM Do YYYY hh:mm a')}</h6>
            </div>
            <p className="mb-1"> {body} </p>
            {/* <small> {category} </small> */}

            <div className="row">
                <div className='col-md-6'>
                    {renderCompleted(id, isComplete)} 
                </div>
                <div className='col-md-6'>
                    <button id={id} onClick={handleDelete} className="btn btn-danger custom_todo_btn"> <i className='fa fa-times'></i> </button>
                </div>
            </div>
        </div>
            
    </div>

        )
    }) 
   };
    };

    return(
        <Fragment>
            {renderTodos()}
        </Fragment>
      )
};

export default DisplayTodo