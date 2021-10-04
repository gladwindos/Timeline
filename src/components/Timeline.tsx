import React, { ReactElement, useEffect, useState } from "react";
import Event from "./Event";

export type EventType = {
  eventNumber: number;
  title: string;
  description: string;
  time: string;
};

export default function Timeline(): ReactElement {
  const [events, setEvents] = useState<EventType[]>([]);

  const createEvent = (eventsState: EventType[]) => {
    const eventNumber =
      eventsState.length > 0
        ? eventsState[eventsState.length - 1].eventNumber + 1
        : 1;
    const title = "Event " + eventNumber;
    const description =
      "This is the what happened for event number " + eventNumber;
    const time = new Date().toLocaleTimeString();

    return { eventNumber, title, description, time };
  };

  const updateEventsState = () => {
    setEvents((eventsState) => {
      const prevEvents = eventsState.slice(-4, eventsState.length);
      const newEvent = createEvent(eventsState);
      return [...prevEvents, newEvent];
    });
  };

  useEffect(() => {
    updateEventsState();
    const interval = setInterval(() => {
      updateEventsState();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="line"></div>
        {events.map((event) => {
          return <Event key={event.time} event={event} />;
        })}
      </div>
    </div>
  );
}
