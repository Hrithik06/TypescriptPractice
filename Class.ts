class User {
  email: string;
  name: string;
  readonly city: string;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}
const hrithik = new User("h@h.com", "hrithik");

class User {
  public email: string;
  private name: string;
  readonly city: string;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}
const hrithik = new User("h@h.com", "hrithik");
hrithik.name; //ERROR

class User {
  constructor(
    public email: string,
    private name: string,
    private userId: string
  ) {}
}
const hrithik = new User("h@h.com", "hrithik");
export {};
