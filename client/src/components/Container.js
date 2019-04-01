import React, { Component } from 'react'

export class Container extends Component {
  render() {
    return (
        <div class="container">
            <div class="jumbotron">
                <h1 class="display-4">Grello!</h1>
                <p class="lead">Grello lets you work with your colleagues and get shit done</p>
                <hr class="my-4"></hr>
                <p>Make lists. Add to-dos. Categorize your lists. All for free.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Sign Up Today!</a>
            </div>
        </div>
    )
  }
}

export default Container
