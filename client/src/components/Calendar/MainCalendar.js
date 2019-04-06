import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import UserContext from '../../contex/user-context';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
import SaveForm from './SaveForm';
import ShowEvent from './showEvent';
// import { type } from 'os';
moment.locale('en-GB');

class MainCalendar extends Component {
  static contextType = UserContext;
  
    state = {
      cal_events: [],
      info: {},
      UserId: this.context.login.id,
      open: false
    }

  componentDidMount() { 
    axios.get('/api/events').then(response => {
      let events = response.data;

      const dataSet = [];
    
      events.map((data) => {
        if(data.UserId === this.state.UserId) {
          const title = data.title;
          const start = new Date(data.start)
          const end = new Date(data.end)
          const desc = data.desc;
          const calenId = data.id

          const obj = {title, start, end, desc, calenId};
          dataSet.push(obj);
          this.setState({
            cal_events: dataSet,
          }) 
        }
      });
    });
 };

 handleModal = (e) => {
   this.setState({ open: true, info: e });
 };

render() {
  const localizer = BigCalendar.momentLocalizer(moment);
  const {cal_events} = this.state
    return (

        <div style={{ height: 500 }}>
      <SaveForm user={this.state.UserId} />

          <BigCalendar
            events={cal_events}
            localizer={localizer}
            step={30}
            defaultView='month'
            views={['month','week','day']}
            defaultDate={new Date()}
            className="mt-4"
            onSelectEvent={this.handleModal}
          />
          <ShowEvent open={this.state.open} info={this.state.info}/>
        </div>
    );
  };
};
export default MainCalendar;