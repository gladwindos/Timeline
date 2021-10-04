import React, { ReactElement } from "react";
import { EventType } from "./Timeline";

type Props = {
  event: EventType;
};

export default function Event({ event }: Props): ReactElement {
  const { title, description, time } = event;

  return (
    <div className='event'>
      <div className="circle"></div>
      <div className="event-card">
        <div className="card-time">{time}</div>
        <div className="card-text">
          <span className="card-title">{title}</span>
          <span className="card-description">{description}</span>
        </div>
      </div>
    </div>
  );
}
