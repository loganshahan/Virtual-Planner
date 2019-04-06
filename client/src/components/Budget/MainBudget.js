import React, { Component } from 'react';
import UserContext from '../../contex/user-context';
import Add from './Add';
import TransactionList from './TransactionList';
import Balance from './Balance';
import axios from 'axios';

class MainBudget extends Component {
  static contextType = UserContext;

  state = {
    data: [],
    total: 0,
    UserId: this.context.login.id
  }

  componentWillMount() {
    // fetch get 
    axios.get('/api/transactions').then(data => {
      const amt = data.data
      const dataSet = [];
      amt.map((data) => {
        // looks for the information of the right user who is loged in
        if(data.UserId === this.state.UserId) {
          let amount = parseFloat(data.amount);
          let description = data.description
          let amtId = data.id
          let obj = {amount, description, amtId};
          dataSet.push(obj);
            this.setState({
              data: dataSet,
              total: dataSet.reduce( (a, b) => {
                return a + b.amount;
              }, 0)
            });
        };
      });
    }); 
  };

  add = async (description, amount) => {
    //fetch post
    const {UserId} = this.state
    amount = parseFloat(amount)
    const values = {description, amount , UserId}
    await axios.post('/api/transactions', values)
  };

  resetBud = async () => {
    await axios.delete(`/api/transactions/${this.state.UserId}`)
    window.location.reload();
  };

  render() {
    return (
      <div className="container mt-4">
  
        <div className="row mt-3">
          <div className="col-md-7" style={{alignSelf: 'center'}}>
          <Add onAdd={this.add} data={this.state.data}/>
          </div>
          <div className="col-md-5" style={{alignSelf: 'center'}}>
          <Balance total={this.state.total} />

          <button 
          onClick={this.resetBud}
          className='custom_btn'>Reset</button>

          </div>
        </div>
          <TransactionList transactions={this.state.data}/>
      </div>
    )
  }
};

export default MainBudget
