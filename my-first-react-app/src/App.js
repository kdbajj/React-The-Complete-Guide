import { useState } from "react";
import "./App.css";

function App() {
  const [events, setEvents] = useState([
    { title: "movie night", id: 1 },
    { title: "live stream", id: 2 },
    { title: "birthday", id: 3 },
  ]);

  const deleteEvent = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  // const deleteEvent = (id) => {
  //   setEvents(
  //     events.filter((event) => {
  //       return id !== event.id;
  //     })
  //   );
  // };

  return (
    <div className="App" id="test">
      {events.map((event, index) => (
        <div key={event.id}>
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
        </div>
      ))}
    </div>
  );
}
export default App;
