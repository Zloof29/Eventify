export class EventModel {
  public id: number;
  public name: string;
  public description: string;
  public startDateTime: Date;
  public endDateTime: Date;
  public location: string;
  public organizerId: number; //Id from user-model
  public category: string;
  public ticketPrice: number;

  public constructor(event: EventModel) {
    this.id = event.id;
    this.name = event.name;
    this.description = event.description;
    this.startDateTime = event.startDateTime;
    this.endDateTime = event.endDateTime;
    this.location = event.location;
    this.organizerId = event.organizerId;
    this.category = event.category;
    this.ticketPrice = event.ticketPrice;
  }

  // add validation later...
}
