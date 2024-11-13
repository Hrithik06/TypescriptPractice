// class User {
//   email: string;
//   name: string;
//   readonly city: string;
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const hrithik = new User("h@h.com", "hrithik");

// class User {
//   public email: string;
//   private name: string;
//   readonly city: string;
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const hrithik = new User("h@h.com", "hrithik");
// hrithik.name; //ERROR

// class User {
//   constructor(
//     public email: string,
//     private name: string,
//     private userId: string
//   ) {}
// }
// const hrithik = new User("h@h.com", "hrithik");

class User {
  private _courseCount = 1;
  readonly city: string = "NewYork";
  constructor(public email: string, private name: string) {}

  get courseContent(): number {
    return this._courseCount;
  }
  set courseContent(courseNum: number) {
    this._courseCount = courseNum;
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }
}

const hrithik = new User("h@h.com", "hrithik");
console.log(hrithik.courseContent);
hrithik.courseContent = 5;
console.log(hrithik.courseContent);

export {};
