import axios from "axios";
import { EventModel } from "../Models/EventModel";
import { appConfig } from "../Utils/AppConfig";
import { eventActions, store } from "../Redux/store";

class EventService {
  public async getAllEvents(): Promise<EventModel[]> {
    const response = await axios.get<EventModel[]>(appConfig.getAllEvents);
    const events = response.data;

    const action = eventActions.initEvent(events);
    store.dispatch(action);

    return events;
  }

  public async getOneEvent(id: number): Promise<EventModel> {
    const response = await axios.get<EventModel>(appConfig.getOneEvent + id);
    const event = response.data;

    const action = eventActions.oneEvent(event);
    store.dispatch(action);

    return event;
  }

  public async addEvent(event: EventModel): Promise<EventModel> {
    const response = await axios.post<EventModel>(appConfig.addEvent, event);
    const addedEvent = response.data;

    const action = eventActions.addEvent(addedEvent);
    store.dispatch(action);

    return addedEvent;
  }

  public async editEvent(id: number): Promise<EventModel> {
    const response = await axios.put<EventModel>(appConfig.editEvent + id);
    const editedEvent = response.data;

    const action = eventActions.initEvent([editedEvent]);
    store.dispatch(action);

    return editedEvent;
  }

  public async deleteEvent(id: number): Promise<void> {
    const response = await axios.delete<EventModel>(appConfig.deleteEvent + id);
    const deletedEvent = response.data;

    const action = eventActions.deleteEvent(deletedEvent);
    store.dispatch(action);

    return;
  }
}

export const eventService = new EventService();
