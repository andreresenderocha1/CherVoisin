import React, { createContext, useEffect, useState } from "react";
import { eventsRequest } from "./events.service";
import { EventsRef } from "../../../FirebaseApp";

export const EventsContext = createContext();

export const EventsContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  /*  useEffect(() => {
    EventsRef.get().then((result) => {
      const array = [];
      result.forEach((doc) => {
        array.push({ ...doc.data() });
      });
      setEvents(array);
    });
  }, [events]); */

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <EventsContext.Provider value={{ events, addEvent }}>
      {children}
    </EventsContext.Provider>
  );
};
