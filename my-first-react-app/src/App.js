import { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  console.log(showModal);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  const subtitle = "All the latest events";

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
      <Title title="Events in Your Area" subtitle={subtitle} />
      {/* <Modal>
        <h2>10% Off coupon Code!</h2>
        <p>Use our code at the checkout</p>
      </Modal> */}
      {/* <Title title="other title" subtitle="events" /> */}
      {showEvents && (
        <div>
          <button className="hideEvents" onClick={() => setShowEvents(false)}>
            Hide events
          </button>
        </div>
      )}
      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent}></NewEventForm>
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>Add new event</button>
      </div>
      {!showEvents && (
        <div>
          <button
            className="showEvents"
            onClick={() => {
              setShowEvents(true);
            }}
          >
            Show events
          </button>
        </div>
      )}
      {showEvents && <EventList events={events} deleteEvent={deleteEvent} />}
    </div>
  );
}
export default App;
