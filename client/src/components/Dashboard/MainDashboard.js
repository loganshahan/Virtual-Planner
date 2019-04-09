import React, { Component, Fragment } from 'react';
import axios from 'axios';
import RecentEvents from './RecentEvents';
import YourBudget from './YourBudget';
import moment from 'moment';

class MainDashboard extends Component {

    state={
      UserId: this.props.user,
      data: [],
      positiveData: 0,
      negativeData: 0,
    }

    componentDidMount() {
      axios.get(`/api/events/recent/${this.state.UserId}`).then(data => {
        const lastEvents = data.data;
        const dataSet = [];
        lastEvents.map((data) => {
          const tomorrowDate = moment(data.startDate).format('YYYY-MM-DD');
          const todaysDate = moment().format('YYYY-MM-DD');
          if(data.UserId === this.state.UserId && tomorrowDate >= todaysDate) {
            dataSet.push(data);
            this.setState({
              data: dataSet
            })
          }
        })
      });
      this.budgetData()
    };

  budgetData = () => {
    axios.get('/api/transactions').then(data => {
      const amt = data.data;
      const positive = [];
      const negative = [];
      amt.map((data) => {
        if(data.UserId === this.state.UserId) {
          const amount = parseFloat(data.amount)

          if(amount < 0) {
            negative.push(amount);
            negative.filter(function (a) { return a >= 0; });
            const sumLess = negative.reduce(function (a, b) { return a + b; });
            this.setState({
              negativeData: sumLess
            })
          } else {
            positive.push(amount);
            positive.filter(function (a) { return a >= 0; });
            const sumPlus = positive.reduce(function (a, b) { return a + b; });
            this.setState({
              positiveData: sumPlus
             
            })
          }
        };
      });
    });
  };

  render() {

    return (
      <Fragment>
        <h1 className='custom_header'>Dashboard</h1>
        <div className="mt-4 container">
            <div className="row">
          <div className="col-md-5">
          <RecentEvents events={this.state.data} />
          </div>

          <div className="col-md-7">
          <YourBudget
          positive={this.state.positiveData}
          negative={this.state.negativeData}
          />
          </div>

          </div>
        </div>
      </Fragment>
    )
  }
}

export default MainDashboard
