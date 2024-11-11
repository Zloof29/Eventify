import { useSelector } from "react-redux";
import css from "./EventList.module.css";
import { AppState } from "../../../Redux/store";
import { EventModel } from "../../../Models/EventModel";
import { eventService } from "../../../Services/EventService";
import { useEffect } from "react";
import moment from "moment";

export function EventList(): JSX.Element {
  const events =
    useSelector<AppState, EventModel[]>((state) => state.events) || [];

  useEffect(() => {
    eventService.getAllEvents();
  }, [events]);

  return (
    <div className={css.Container}>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <p>{moment(event.startDateTime).format("MMMM Do YYYY, h:mm:ss")}</p>
          <p>{moment(event.endDateTime).format("MMMM Do YYYY, h:mm:ss")}</p>
          <p>{event.location}</p>
          <p>{event.organizerId}</p>
          <p>{event.category}</p>
          <p>{event.ticketPrice}</p>
        </div>
      ))}
    </div>
  );
}
