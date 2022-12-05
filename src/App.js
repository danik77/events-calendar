import React from "react"; 
import Calendar from "./components/Calendar/Calendar";
import EventsFilter from "./components/Events/EventsFilter";

function App() {
  return (
    <div className="App">
      <h1>Calendar</h1>
      <EventsFilter />
      <Calendar />
    </div>
  );
}

export default App;
