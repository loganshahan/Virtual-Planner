import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import UserContext from '../../contex/user-context';
import moment from 'moment';
import CalenForm from './CalenForm';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios'
import data from './config'
moment.locale('en-GB');



class MainCalendar extends Component {
  static contextType = UserContext;
  
    state = {
      title: '',
      desc: '',
      start: '',
      end: '',
      cal_events: [],
      UserId: this.context.login.id
    }
  addEvent = async (values) => {
      //fetch post
      // const {UserId} = this.state
      // amount = parseFloat(amount)
      // const values = {description, amount , UserId}
      await axios.post('/api/transactions', values)
    }
  componentDidMount() { 
  axios.get('/api/events')
  .then(response => {
    console.log(response)
    
    // let appointments = response.data;
    
    // for (let i = 0; i < appointments.length; i++) {
    //   appointments[i].start = moment.utc(appointments[i].start).toDate();
    //   appointments[i].end = moment.utc(appointments[i].end).toDate();
      
    // }
    // this.self.setState({
    //   cal_events:appointments
    // })

  })
 }
render() {
  console.log(this.props)
  const localizer = BigCalendar.momentLocalizer(moment);
  const cal_events = data
    return (

        <div style={{ height: 500 }}>


      <CalenForm calendar={this.state} />

          <BigCalendar
            events={cal_events}
            localizer={localizer}
            step={30}
            defaultView='week'
            views={['month','week','day']}
            defaultDate={new Date()}
            className="mt-4"
          />
        </div>
      
    );
  }
}
export default MainCalendar;