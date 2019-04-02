import React, { Component } from 'react'

export class Home extends Component {

  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h2>Existig To Dos</h2>
                </div>
                <div className="col-4">
                    <h2>Existing Categories</h2>
                </div>
                <div className="col-4">
                    <h2>New To Do</h2>
                    <form>
                        {
                            /*
                            title, body, category, author
                            */
                        }
                        <div className="form-group">
                            <input type="text" class="form-control" id="title" placeholder="Title..."></input>
                        </div>
                        <div className="form-group">
                            <textarea class="form-control" id="body" placeholder="Body..."></textarea>
                        </div>
                        <div className="form-group">
                            <input type="text" class="form-control" id="category" placeholder="Category.."></input>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Add To Do</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Home
