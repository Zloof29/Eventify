import { Navigate, Route, Routes } from "react-router-dom";
import css from "./Routing.module.css";
import { Home } from "../../HomeArea/Home/Home";
import { About } from "../../AboutArea/About/About";
import { Page404 } from "../Page404/Page404";
import { Register } from "../../UserArea/Register/Register";
import { Login } from "../../UserArea/Login/Login";
import { AddEvent } from "../../EventArea/AddEvent/addEvent";
import { EventList } from "../../EventArea/EventList/EventList";

export function Routing(): JSX.Element {
  return (
    <div className={css.Container}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/new-event" element={<AddEvent />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}
