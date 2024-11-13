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

// class User {
//   readonly city: string = "NewYork";
//   constructor(
//     public email: string,
//     private name: string,
//     private userId: string
//   ) {}
// }
// const hrithik = new User("h@h.com", "hrithik");
// console.log(hrithik);

class User {
  private _courseCount = 1;
  readonly city: string = "NewYork";
  constructor(public email: string, private name: string) {}

  get courseContent(): number {
    return this._courseCount;
  }
  set courseContent(courseNum) {
    this._courseCount = courseNum;
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }
}
const hrithik = new User("h@h.com", "hrithik");
hrithik.courseContent = 5;
console.log(hrithik);
