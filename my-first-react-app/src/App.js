import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Caroline");
  const [events, setEvents] = useState([
    { title: "movie night", id: 1 },
    { title: "live stream", id: 2 },
    { title: "birthday", id: 3 },
  ]);

  const handleClick = () => {
    setName("luigi");
    console.log(name);
    setEvents(["MOVIE", "MOVIE", "MOVIE"]);
    console.log(events);
  };

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>
        </div>
      ))}
    </div>
  );
}
export default App;
