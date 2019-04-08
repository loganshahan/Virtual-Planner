import React, { Component } from 'react';
import axios from 'axios';
import RecentEvents from './RecentEvents';
import YourBudget from './YourBudget';
import moment from 'moment';

class MainDashboard extends Component {

    state={
      UserId: this.props.user,
      data: []
    }

    componentDidMount() {
      axios.get(`/api/events/recent/${this.state.UserId}`).then(data => {
        const lastEvents = data.data;
        const dataSet = [];
        lastEvents.map((data) => {
          const tomorrowDate = moment(data.startDate).format('YYYY-MM-DD');
          const todaysDate = moment().format('YYYY-MM-DD');
          console.log(tomorrowDate, todaysDate)
          if(data.UserId === this.state.UserId && tomorrowDate >= todaysDate) {
            dataSet.push(data);
            this.setState({
              data: dataSet
            })
          }
        })
      });
    }

  render() {

    return (
      <div className="mt-4 container">
            <h1>Dashboard</h1>
            <div className="row">
        <div className="col-md-6">
        <RecentEvents events={this.state.data} />
        </div>
        <div className="col-md-6">
        <YourBudget />
        </div>

            </div>
      </div>
    )
  }
}

export default MainDashboard
