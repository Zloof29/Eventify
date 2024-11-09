import express, { Request, Response, NextFunction } from "express";
import { eventServices } from "../4-services/event-services";
import { EventModel } from "../3-models/event-model";
import { StatusCode } from "../3-models/enums";

// Product controller - listening to product requests:
class EventController {
  // Creating a router object:
  public readonly router = express.Router();

  // Register routes:
  public constructor() {
    this.router.get("/events", this.getAllEvents);
    this.router.get("/event/:id", this.getOneEvent);
    this.router.post("/events", this.addEvent);
    this.router.put("/event/:id", this.editEvent);
    this.router.delete("/event/:id", this.deleteEvent);
  }

  // Get all products:
  private async getAllEvents(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const events = await eventServices.getAllEvents();
      response.json(events);
    } catch (err: any) {
      next(err); // Go to catchAll middleware!
    }
  }

  private async getOneEvent(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const id = +request.params.id;
      const event = await eventServices.getOneEvent(id);
      response.json(event);
    } catch (err: any) {
      next(err);
    }
  }

  private async addEvent(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const event = new EventModel(request.body);
      const addedEvent = await eventServices.addEvent(event);
      response.status(StatusCode.Created).json(addedEvent);
    } catch (err: any) {
      next(err);
    }
  }

  private async editEvent(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const id = +request.params.id;
      request.body.id = id;
      const event = new EventModel(request.body);
      const editedEvent = await eventServices.updateEvent(event);
      response.json(editedEvent);
    } catch (err: any) {
      next(err);
    }
  }

  private async deleteEvent(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const id = +request.params.id;
      await eventServices.deleteEvent(id);
      response.sendStatus(StatusCode.NoContent);
    } catch (err: any) {
      next(err);
    }
  }
}

export const eventController = new EventController();
