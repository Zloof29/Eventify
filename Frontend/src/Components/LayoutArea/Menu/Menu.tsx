import { NavLink } from "react-router-dom";
import css from "./Menu.module.css";

export function Menu(): JSX.Element {
  return (
    <div className={css.Container}>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/new-event">Add Event</NavLink>
      <NavLink to="/about">About</NavLink>

      {/* <TotalEvents /> */}
    </div>
  );
}
