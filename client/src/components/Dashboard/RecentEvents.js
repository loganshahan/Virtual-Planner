import React from 'react';
import SingleEvent from './singleEvent';

  const RenderRecent = (props) => {
      const {events} = props;

      return events.map((event, inx) => (
        <SingleEvent event={event} key={inx}/>
    ))
  }


  function RecentEvents(props) {
    return (
        <div>
        <h3>Next Events in Your Calendar</h3>
            {RenderRecent(props)}
        </div>
    );
  }

export default RecentEvents
