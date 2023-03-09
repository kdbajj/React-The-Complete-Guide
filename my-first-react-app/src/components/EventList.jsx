import React from "react";

export default function EventList({events, deleteEvent}){
return(

<div>
    {
    events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>
            {event.id} - {event.title}
          </h2>
          <button
            onClick={() => {
              deleteEvent(event.id);
            }}
          >
            Delete event
          </button>
        </React.Fragment>
      ))}
      </div>
        
)}


