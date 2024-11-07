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
    const sql = `
      INSERT INTO events (name, description, startDateTime, endDateTime, location, organizerId, category, ticketPrice)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

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

    const result: any = await dal.execute(sql, values);
    event.id = result.insertId;
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

  public async deleteEvent(id: number): Promise<void> {
    const sql = "delete from events where id = ?";

    const info: OkPacketParams = await dal.execute(sql, [id]);

    if (info.affectedRows === 0) throw new ResourceNotFoundError(id);
  }
}

export const eventServices = new EventServices();
