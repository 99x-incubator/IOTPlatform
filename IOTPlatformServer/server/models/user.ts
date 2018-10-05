class User{
  private id: string;
  private name: string;
  private email: string;
  private mobileNo: string;

  constructor(name: string, email: string, mobileNo: string){
    this.name = name;
    this.email = email;
    this.mobileNo = mobileNo;  
  }

  getId(){
    return this.id;
  }

  getName(){
    return this.name;
  }

  getEmail(){
    return this.email;
  }

  getMobileNo(){
    return this.mobileNo;
  }

  setId(id: string){
    this.id = id;
  }

  setName(name: string){
    this.name = name;  
  }

  setEmail(email: string){
    this.email = email;
  }

  setMobileNo(mobileNo: string){
    this.mobileNo = mobileNo;
  }

}