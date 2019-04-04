import React from 'react';

const  Welcome = () => {
  
    return (
      <div className="full-height">
        <div className="container custom_guess">
            <div className="jumbotron">
                <h1 className="display-2">Virtual Helper</h1>
                <p className="lead">VH lets you work with your colleagues and get shit done</p>
                <hr className="my-4" />
                <p>Make lists. Add to-dos. Categorize your lists. All for free.</p>
                <a className="btn btn-primary btn-lg" href="/auth/google" role="button">Sign Up Today!</a>
            </div>
        </div>
      </div>
    )
};

export default Welcome
