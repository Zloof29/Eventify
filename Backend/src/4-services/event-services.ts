import { OkPacketParams } from "mysql2";
import { dal } from "../2-utils/dal";
import { EventModel } from "../3-models/event-model";
import { ResourceNotFoundError } from "../3-models/client-error";

class EventServices {
  public async getAllEvents(): Promise<EventModel[]> {
    const sql = "SELECT * From events";

    const events = await dal.execute(sql);

    return events;
  }

  public async getOneEvent(id: number): Promise<EventModel> {
    const sql = "SELECT * FROM events where id = ?";

    const events = await dal.execute(sql, [id]);

    const event = events[0];

    if (!event) throw new ResourceNotFoundError(id);

    return event;
  }

  public async addEvent(event: EventModel): Promise<EventModel> {
    const sql =
      "insert into events(name, description, startDateTime, endDateTime, location, organizerId, category, ticketPrice) values(?, ?, ?, ?, ?, ?, ?, ?";

    const values = [
      event.name,
      event.description,
      event.startDateTime,
      event.endDateTime,
      event.location,
      event.organizerId,
      event.category,
      event.ticketPrice,
    ];

    const info: OkPacketParams = await dal.execute(sql, values);

    event = await this.getOneEvent(info.insertId);

    return event;
  }

  public async updateEvent(event: EventModel): Promise<EventModel> {
    const sql =
      "update events set name = ?, description = ?, startDateTime = ?, endDateTime = ?, location = ?, category = ?, ticketPrice = ?";

    const values = [
      event.name,
      event.description,
      event.startDateTime,
      event.endDateTime,
      event.location,
      event.category,
      event.ticketPrice,
    ];

    const info: OkPacketParams = await dal.execute(sql, values);

    if (info.affectedRows === 0) throw new ResourceNotFoundError(event.id);

    return event;
  }
}
