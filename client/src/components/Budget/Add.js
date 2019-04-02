import React, { Component, Fragment } from 'react'

class Add extends Component {
    state = {
        description: '',
        amount: ''
    }
    handleChangeDesc = (e) => {
        this.setState({
            description: e.target.value
        });
    };

    handleChangeAmt = (e) => {
        this.setState({
            amount: e.target.value
        });
    };

    add = () => {
        this.props.onAdd(this.state.description, this.state.amount)
    };

  render() {
    return (
      <Fragment>
          <input type="text"
            value={this.state.description}
            onChange={this.handleChangeDesc}
            placeholder="Description"
          />
          <input type="text"
            value={this.state.amount}
            onChange={this.handleChangeAmt}
            placeholder="Amount"
          />
          <button
            onClick={this.add}
          >Add</button>
        
      </Fragment>
    )
  }
}

export default Add
