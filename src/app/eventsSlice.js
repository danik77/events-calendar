import { createSlice } from "@reduxjs/toolkit";
import { defaultEvents } from '../constants/defaultEvents';

const initialState = {
  events: JSON.parse(localStorage.getItem("calendar-events")) ?? defaultEvents,
  filter: "all",
};

export const eventsSlice = createSlice({
  name: "events",
  initialState, 
  reducers: {
    filterEvents(state, action) {
     state.filter = action.payload;
    },
    addEvent(state, action) {
      state.events.push(action.payload);
      localStorage.setItem("calendar-events", JSON.stringify(state.events));
    },
    editEvent(state, action) {
      state.events.map((event) =>
          event.id === action.payload.id && Object.assign(event, action.payload)
      );  
      localStorage.setItem("calendar-events", JSON.stringify(state.events));
    },
    deleteEvent(state, action) {
      state.events = state.events.filter((item) => item.id !== action.payload);
      localStorage.setItem("calendar-events", JSON.stringify(state.events));
    },
  },
});

export const { filterEvents, addEvent, editEvent, deleteEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
