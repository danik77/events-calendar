import React from "react"; 
import Calendar from "./components/Calendar/Calendar";
import EventsFilter from "./components/Events/EventsFilter";
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'

function App() {
  return (
 
    <div className="App">
    <Header />
      <h1>Calendar</h1>
      <EventsFilter />
      <Calendar />
       <Footer />
    </div>
 
  );
}

export default App;
