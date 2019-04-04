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
        this.props.onAdd(this.state.description, this.state.amount);
        window.location.reload(); 
    };

  render() {
    return (
<Fragment>
<h3>$+ or $- from your budget !</h3>
<form className="form-inline mb-2 budget_form">
  <div className="form-group mb-2">
    <label htmlFor="desc" className="sr-only">Description</label>
    <input type="text"
            id="desc"
            value={this.state.description}
            onChange={this.handleChangeDesc}
            placeholder="Description"
          />
  </div>
  <div className="form-group mx-sm-3 mb-2">
    <label htmlFor="amt" className="sr-only">Amount</label>
    <input type="text"
            id="amt"
            value={this.state.amount}
            onChange={this.handleChangeAmt}
            placeholder="Amount"
          />
  </div>
  <button 
  type="submit" 
  className="btn btn-secondary mb-1 mt-1"
  onClick={this.add}
  >Calculate</button>
</form>
</Fragment>

    )
  }
}

export default Add
