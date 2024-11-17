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

// function identity<Type>(val: Type): Type {
//   return val;
// }
interface Bottle {
  brand: string;
  type: string;
}
function identity<Bottle>(val: Bottle): Bottle {
  return val;
}
const b: Bottle = {
  brand: "test",
  type: "oil",
};
identity(b);
console.log(typeof identity(b));

// function getSearchProduct<T>(products: T[]): T {
//   //DB operations
//   const myIndex = 3;
//   return products[myIndex];
// }
const getSearchProduct = <T>(products: T[]): T => {
  //DB operations
  const myIndex = 3;
  return products[myIndex];
};
interface Database {
  connection: string;
  username: string;
  password: string;
}
const anotherFunction = <T, U extends Database>(
  valOne: T,
  valTwo: U
): object => {
  return {
    valOne,
    valTwo,
  };
};
console.log(
  anotherFunction("test", {
    connection: "",
    username: "",
    password: "",
  })
);

interface Course {
  name: string;
  author: string;
  subject: string;
}
interface Quiz {
  name: string;
  type: string;
}
class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}
const c: Course = {
  name: "MathBaby",
  author: "DJ_Jamil",
  subject: "Math",
};
const sell = new Sellable<Course>();
sell.addToCart({
  name: "MyBoyMath",
  author: "DJ_Shabheer",
  subject: "Meth",
});

sell.addToCart(c);

console.log(sell);

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
console.log(typeof Sellable);
console.log(typeof padLeft);

function detectType(val: string | number | number[]) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  //typecheck for number[] array
  if (typeof val === "object") {
    return val;
  }
  return val + 6;
}

const provideId = (id: string | null) => {
  if (!id) {
    console.log("Please procide ID");

    return;
  }
  return id.toLowerCase();
};
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

const isAdminAcoount = (account: User | Admin) => {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
};

console.log(
  isAdminAcoount({
    name: "Test",
    email: "Test",
  })
);

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = {
  swim: () => void;
};
type Bird = {
  fly: () => void;
};
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  console.log(isFish(pet));

  if (isFish(pet)) {
    pet.swim();
    return "fish food";
  } else {
    pet.fly();
    return "bird food";
  }
}
const b1: Bird = {
  fly: () => {},
};
const f1: Fish = {
  swim: () => {},
};
// console.log(isFish(b1));
// console.log(isFish(f1));
console.log(getFood(b1));
console.log(getFood(f1));

interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square;
// const getArea = (shape: Shape): number => {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2;
//   }
//   return shape.side ** 2;
// };

const getArea = (shape: Shape): number => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
};
