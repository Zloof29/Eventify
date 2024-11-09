export class EventModel {
  public id: number;
  public name: string;
  public description: string;
  public startDateTime: Date;
  public endDateTime: Date;
  public location: string;
  public organizerId: number;
  public category: string;
  public ticketPrice: number;
}
