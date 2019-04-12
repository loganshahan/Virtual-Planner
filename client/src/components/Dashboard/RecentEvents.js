import React from 'react';
import SingleEvent from './singleEvent';

  const RenderRecent = (props) => {
      const {events} = props;
      if(events.length === 0) {
        return(
          <div className='custom_no'
          >
            <h5>You don't have any events in your calendar</h5>
          </div>
        )
      } else {
        return events.map((event, inx) => (
          <SingleEvent event={event} key={inx}/>
      ))
      }
  };


  function RecentEvents(props) {
    return (
        <div>
        <h3>Next Events in Your Calendar</h3>
            {RenderRecent(props)}
        </div>
    );
  }

export default RecentEvents
