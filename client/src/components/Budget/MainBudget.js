import React, { Component } from 'react';
import Add from './Add';
import TransactionList from './TransactionList';
import Balance from './Balance';

const dataSet = [
  {amount: -10, description: 'Chipotle'},
  {amount: 1000, description: 'Paycheck'},
  {amount: -4.50, description: 'Coffee'}
]

export class MainBudget extends Component {
  state = {
    data: dataSet,
    total: 0
  }

  componentWillMount() {
    this.setState({
      data: dataSet,
      total: dataSet.reduce((a, b) => {
        return a + b.amount;
      }, 0)
    });
  };

  add = (description, amount) => {
    //ajax call to the back end here
    console.log(description, amount)
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6" style={{alignSelf: 'center'}}>
          <Add onAdd={this.add} />
          </div>
          <div className="col-md-6">
          <Balance total={this.state.total} />
          </div>
        </div>
          <TransactionList transactions={this.state.data} />

      </div>
    )
  }
}

export default MainBudget
