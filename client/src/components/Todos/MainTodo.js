import React, { Component } from 'react';
import UserContext from '../../contex/user-context';
import CloseIconPage from './CloseIconPage';

export class MainTodo extends Component {
    static contextType = UserContext;
    state = {
        UserId: this.context.login.id,
        title: '',
        body: '',
        category: 'select'
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.context.postTodo(this.state);
        this.context.postCategory(this.state);
        this.setState({
            title: '',
            body: '',
            category: 'select'
        });
        this.props.handleClose()
    };

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleCategory = (e) => {
        e.preventDefault();
        this.setState({
            category: e.target.value
        });
    };

  render() {
    const showModal = this.props.show ? "modal display-block " : "modal display-none";

    return (
      <div className={showModal}>
        <form onSubmit={this.handleSubmit}>

        <div className="form-group">
            <input 
            type="text" 
            className="form-control" 
            id="title" 
            placeholder="Title..."
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
            autoComplete="off"
            />
        </div>
        <div className="form-group">
            <input 
            type="text"
            className="form-control" 
            id="body" 
            placeholder="Body..."
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
            autoComplete="off"
            />
        </div>

        <div className="form-group">
        <select id="category"
         onChange={this.handleCategory} 
         value={this.state.category}
         className="form-control"
         >
            <option value="default">Select</option>
            <option value="business">Business</option>
            <option value="fun">Fun</option>
            <option value="important">Important</option>
            <option value="school">School</option>
        </select>

        </div>
        <div className="form-group">
            <input 
            type="submit" 
            className="btn btn-success"
            value="Add" 
            />
        </div>
       <CloseIconPage close={this.props.handleClose} />
        </form>

      </div>
    
    )
  }
}

export default MainTodo
