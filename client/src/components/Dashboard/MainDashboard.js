import React, { Component, Fragment } from 'react';
import axios from 'axios';
import RecentEvents from './RecentEvents';
import YourBudget from './YourBudget';
import moment from 'moment';
import NotCompletedTodos from './NotCompletedTodos'

class MainDashboard extends Component {

    state={
      UserId: this.props.user,
      data: [],
      positiveData: 0,
      negativeData: 0,
      unCompleted: []
    }

    componentDidMount() {
      axios.get(`/api/events/recent/${this.state.UserId}`).then(data => {
        const lastEvents = data.data;
        const dataSet = [];
        return lastEvents.map((data) => {
          const tomorrowDate = moment(data.startDate).format('YYYY-MM-DD HH:mm');
          const todaysDate = moment().format('YYYY-MM-DD HH:mm');
          if(data.UserId === this.state.UserId && tomorrowDate >= todaysDate) {
            dataSet.push(data);
            this.setState({
              data: dataSet
            })
          }
        })
      });
      this.budgetData();
      this.unCompletedTodo();
    };

  budgetData = () => {
    axios.get('/api/transactions').then(data => {
      const amt = data.data;
      const positive = [];
      const negative = [];
      amt.map((data) => {
        if(data.UserId === this.state.UserId) {
          const amount = parseFloat(data.amount);

          if(amount < 0) {
            negative.push(amount);
            negative.filter(function (a) { return a >= 0; });
            const sumLess = negative.reduce(function (a, b) { return a + b; });
            this.setState({
              negativeData: parseFloat(sumLess).toFixed(2)
            })
          } else {
            positive.push(amount);
            positive.filter(function (a) { return a >= 0; });
            const sumPlus = positive.reduce(function (a, b) { return a + b; });
            this.setState({
              positiveData: parseFloat(sumPlus).toFixed(2)
             
            })
          }
        };
      });
    });
  };

  unCompletedTodo = () => {
    axios.get(`/api/todos/not/0`).then(data => {
      const notYet = data.data;
      const dataSet = [];
      notYet.map((data) => {
        if(data.UserId === this.state.UserId) {
          dataSet.push(data)
          this.setState({
            unCompleted: dataSet
          })
        };
      })
    })
  };

  render() {

    return (
      <Fragment>
        <h1 className='custom_header'>Dashboard</h1>
        <div className="mt-4 container mb-5">
            <div className="row">

          <div className="col-md-5">
            <RecentEvents events={this.state.data} />
          </div>

              <div className="col-md-7">
                  <YourBudget
                  positive={this.state.positiveData}
                  negative={this.state.negativeData}
                  />

                  <NotCompletedTodos notcompleted={this.state.unCompleted} />

              </div>

          </div>
        </div>
      </Fragment>
    )
  }
}

export default MainDashboard
