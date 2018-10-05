class EventSubscription{
  private _event: SensorEvent;
  private _user: User;

  constructor(event: SensorEvent, user: User){
    this._event = event;
    this._user = user;  
  }

  get event(){
    return this._event;
  }

  get user(){
    return this._user;
  }

  set event(value: SensorEvent){
    this._event = value;
  }

  set user(value: User){
    this._user = value;
  }
}