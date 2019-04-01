import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 class="display-4">Grello!</h1>
                <p className="lead">Grello lets you work with your colleagues and get shit done</p>
                <hr className="my-4"></hr>
                <p>Make lists. Add to-dos. Categorize your lists. All for free.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Sign Up Today!</a>
            </div>
        </div>
    )
  }
}

export default Welcome
