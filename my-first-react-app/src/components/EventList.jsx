import React from "react";
import "./EventList.css"

export default function EventList({events, deleteEvent}){
return(

<div>
    {
    events.map((event, index) => (
        <div className="card" key={event.id}>
          <h2>
            {event.id} - {event.title}
          </h2>
          <p>{event.location}: {event.date}</p>
          <button
            onClick={() => {
              deleteEvent(event.id);
            }}
          >
            Delete event
          </button>
        </div>
      ))}
      </div>
        
)}


