class AppConfig {
  public readonly productsUrl = "http://localhost:4000/api/products/";
  public readonly registerUrl = "http://localhost:4000/api/register/";
  public readonly loginUrl = "http://localhost:4000/api/login/";
  public readonly getAllEvents = "http://localhost:4000/api/events";
  public readonly getOneEvent = "http://localhost:4000/api/event";
  public readonly addEvent = "http://localhost:4000/api/event";
  public readonly editEvent = "http://localhost:4000/api/event";
  public readonly deleteEvent = "http://localhost:4000/api/event";
}

export const appConfig = new AppConfig();
