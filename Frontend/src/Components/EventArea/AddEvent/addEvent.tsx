import { useForm } from "react-hook-form";
import { EventModel } from "../../../Models/EventModel";
import css from "./AddEvent.module.css";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../Utils/notify";
import { errorHandler } from "../../../Utils/ErrorHandler";
import { eventService } from "../../../Services/EventService";

export function AddEvent(): JSX.Element {
  const { register, handleSubmit } = useForm<EventModel>();

  const navigate = useNavigate();

  async function send(event: EventModel) {
    try {
      await eventService.addEvent(event);
      notify.success("Event has been added.");
      navigate("/events");
    } catch (error: any) {
      notify.error(errorHandler.getError(error));
    }
  }

  return (
    <div className={css.Container}>
      <form onSubmit={handleSubmit(send)}>
        <label>Name: </label>
        <input
          type="text"
          {...register("name")}
          required
          minLength={1}
          maxLength={100}
        />

        <label>Description: </label>
        <textarea
          {...register("description")}
          required
          minLength={1}
          maxLength={1000}
          cols={38}
          rows={15}
        ></textarea>

        <label>Start date: </label>
        <input type="datetime-local" {...register("startDateTime")} required />

        <label>End date: </label>
        <input type="datetime-local" {...register("endDateTime")} required />

        <label>Location: </label>
        <input
          type="text"
          {...register("location")}
          required
          minLength={1}
          maxLength={100}
        ></input>

        <label>Category: </label>
        <input
          type="text"
          {...register("category")}
          required
          minLength={1}
          maxLength={100}
        />

        <label>ticket Price: </label>
        <input
          type="number"
          {...register("ticketPrice")}
          required
          min={0}
          max={9999}
        ></input>
      </form>
    </div>
  );
}
