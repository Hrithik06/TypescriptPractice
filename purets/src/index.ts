// class User {
//   email: string;
//   name: string;
//   readonly city: string = "NewYork";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const hrithik = new User("h@h.com", "hrithik");

class User {
  readonly city: string = "NewYork";
  constructor(
    public email: string,
    private name: string,
    private userId: string
  ) {}
}
const hrithik = new User("h@h.com", "hrithik");
console.log(hrithik);
