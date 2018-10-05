class EventSubscription{
  private event: SensorEvent;
  private user: User;

  constructor(event: SensorEvent, user: User){
    this.event = event;
    this.user = user;  
  }

  getEvent(){
    return this.event;
  }

  getUser(){
    return this.user;
  }

  setEvent(event: SensorEvent){
    this.event = event;
  }

  setUser(user: User){
    this.user = user;
  }
}