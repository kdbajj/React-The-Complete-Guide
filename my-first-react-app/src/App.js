import { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";

function App() {
  const [showEvents, setShowEvents] = useState(true);
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
  //abc

  useEffect(() => {
    console.log(showEvents);
  }, [showEvents]);

  return (
    <div className="App" id="test">
      <Title />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(true);
            }}
          >
            show events
          </button>
        </div>
      )}
      {showEvents &&
        events.map((event, index) => (
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
