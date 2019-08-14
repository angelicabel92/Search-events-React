import React from 'react';
import { EventsConsumer } from '../context/EventsContext';
import EventComponent from './EventComponent';

const ListEventsComponent = () => {
    return ( 
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventsConsumer>
                {(value) => {
                    console.log(value)
                    return (
                        value.events.map(event => (
                            <EventComponent key={event.id} event={event}/>
                        ))
                    )
                }}
            </EventsConsumer>
        </div>
     );
}
  
export default ListEventsComponent;
