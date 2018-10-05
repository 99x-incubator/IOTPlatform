class User{
  protected _id: string;
  protected _name: string;
  protected _email: string;
  protected _mobileNo: string;

  constructor(name: string, email: string, mobileNo: string){
    this._name = name;
    this._email = email;
    this._mobileNo = mobileNo;  
  }

  get id(){
    return this._id;
  }

  get name(){
    return this._name;
  }

  get email(){
    return this._email;
  }

  get mobileNo(){
    return this._mobileNo;
  }

  set id(id: string){
    this._id = id;
  }

  set name(value: string){
    this._name = value;  
  }

  set email(value: string){
    this._email = value;
  }

  set mobileNo(value: string){
    this._mobileNo = value;
  }

}