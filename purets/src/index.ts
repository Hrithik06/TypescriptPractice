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

// class User {
//   private _courseCount = 1;
//   readonly city: string = "NewYork";
//   constructor(public email: string, private name: string) {}

//   get courseContent(): number {
//     return this._courseCount;
//   }
//   set courseContent(courseNum) {
//     this._courseCount = courseNum;
//   }

//   get getAppleEmail(): string {
//     return `apple${this.email}`;
//   }
// }
// const hrithik = new User("h@h.com", "hrithik");
// hrithik.courseContent = 5;
// console.log(hrithik);

// class User {
//   protected _courseCount = 1;
//   readonly city: string = "NewYork";
//   constructor(public email: string, private name: string) {}

//   get courseContent(): number {
//     return this._courseCount;
//   }
//   set courseContent(courseNum: number) {
//     this._courseCount = courseNum;
//   }

//   get getAppleEmail(): string {
//     return `apple${this.email}`;
//   }
//   //Not accessible outside the class
//   private deleteToken() {
//     console.log("Token deleted");
//   }
// }
// class SubUser extends User {
//   isFamily: boolean = true;
//   set changeCourseCount(n: number) {
//     this._courseCount = 5;
//   }
// }
// const hrithik = new SubUser("h@h.com", "hrithik");
// hrithik.changeCourseCount = 15;
// console.log(hrithik);
// interface TakePhoto {
//   cameraMode: string;
//   filter: string;
//   burst: number;
// }

// class Instagram implements TakePhoto {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number
//   ) {}
// }
// interface Story {
//   createStory(): void;
// }
// class Youtube implements TakePhoto, Story {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number,
//     public short: string
//   ) {}
//   createStory(): void {
//     console.log("Story");
//   }
// }

// const yt = new Youtube("f", "e", 5, "d");
// console.log(yt);

// class TakePhoto {
//   constructor(public cameraMode: string) {}
// }
// class User {
//   private userId: string;
//   constructor(email: string, private name: string) {
//     this.userId = "";
//   }
// }

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void;
  setReelTime(): number {
    // Calculations
    return 6;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("sepia");
  }
}

const ins = new Instagram("test", "test1", 8);
console.log(ins);

ins.getSepia(); //sepia
console.log(ins.setReelTime()); //6
