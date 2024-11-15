# Types

- number, string, boolean, bull, undefined, void, object, Array, Tuples, never, unkown, any(don't use)...
- JavaScript does not have a special runtime value for integers, so there’s no equivalent to `int` or `float` - everything is simply number
- `any`: when Typescript is not able to infer the type of a variable it puts it as `any`

### Situations

- A function accepts 2 numbers.
- A function returns a string.

### Syntax

let variableName:`type` = value

### Type Inference

Whenever you are assigning the value for a variable immediately after declaring, there is no need to metnion type, TS is smart enough to know infer the type of the variable from the assigned value.

```typescript
let userId: number = 135431.696; //Not needed
let userId = 3533.2; // Is enough
userId = "hello"; // will throw error
//Needed
let userId: number;
userId = 56543.54;
```

The compiled JS will not have `:type`.

# Functions

- In functions, type annotation is compulsory

```typescript
function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper(4); //will throw error
getUpper("hello");
```

- Passing default values

```typescript
const loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser("h", "h@h.com");
```

- Return Type

```typescript
function addTwo(num: number): number {
  return num + 2;
  return "hello"; //returning string but number should be returned
}
Arrow Function
const getHello = (s: string): string => {
  return "Hello " + s;
};
```

### Type Script understands Context

No need to do `(hero: string)` cuz TS is smart enough to understand the context whether its array of strings or numbers.

```typescript
const heros = ["superman", "thor", "batman", "ironman"];
const heros = [1, 2, 3, 4];

// heros.map((hero: string): string => {
//   return `hero is ${hero}`;
// });

heros.map((hero): string => {
  return `hero is ${hero}`;
});
```

- Always have a return type
  Always add return type so the programmers know the behaviour of function

```typescript
function consoleError(errorMsg: string): void {
  console.log(errorMsg);
}
```

- From docs: If there are functions which are never going to return use never keyword, when a function throws an exception or terminates execution of the program

```typescript
function handleError(errorMsg: string): never {
  throw new Error(errorMsg);
}
```

# Objects

`Invalid Syntax`

```typescript
function creaeteUser({ name: string, isPaid: boolean }) {} // wrong this is destructuring. Invalid Syntax
```

### Bad behaviour of objs in TS

```typescript
const User = {
  name: "test",
  email: "h@h.com",
  isActive: true,
};

// Bad behaviour of objs in TS
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

createUser({ name: "test", isPaid: true }); //alows correct code
createUser({ name: "test", isPaid: true, email: "h@h.com" }); //ts doesn't allow

// but it allows this, no error
const newUser = {
  name: "test",
  isPaid: true,
  email: "h@h.com",
};
createUser(newUser);
```

### When Function returns an Object

```typescript
fnName(parameters):return type Object {function definition}
function createCourse(): {} {}

function createCourse(): {name:string, price: number}{
  return {name:"hi", price:5}
}
```

### Type Aliases

We use `type` keyword to create new types, and whenever this type is used, it makes the dev to adhere to that type.

```typescript
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "", email: "", isActive: true };
}

createUser(); //Error no parameters
createUser({
  name: "test",
  email: "h@h.com",
  isActive: true,
});
```

### READONLY and Optional

- `readonly`: to make a field readonly. This is only in TS the compiled JS file won't have readonly.
- `?`: to make a field optional.

```typescript
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: string;
};
```

```typescript
let myUser: User = {
  _id: "464",
  name: "h",
  email: "t@t.com",
  isActive: true,
};
myUser.name = "t"; //no errors
myUser._id = "asdasdr"; //error
```

### Extending types(Using existing types to create new ones)

```typescript
type cardNumber = {
  cardNumber: string;
};
type cardDate = {
  cardDate: string;
};
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
```

# Arrays

`Array Declaration`

```typescript
// Both are valid Syntax
const superHeroes: string[] = [];
const superHeroes: Array<string> = [];

type User = {
  name: string;
  isActive: boolean;
};
const allUsers: User[] = [];
allUsers.push({ name: "h", isActive: true });
```

```typescript
const superHeroes = [];
superHeroes.push("batman"); // error never type

const superHeroes: [] = [];
superHeroes.push("batman"); // error never type
```

`Array inside Array`\
Takes only same type in this case number, cannot contain number array and string array

```typescript
const MLModels: number[][] = [[255, 255, 255], []];
```

# Union

When there is a case for a variable which can have values of multiple types. Try to keep it as strict as possible, don't add too many types. Pipe symbol is used `|`

```typescript
let score: number | string = 45;
score = "58";
```

Applies for user defined types too.

```typescript
type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let hrithik: User | Admin = { name: "hrithik", id: 8745 };
hrithik = { username: "hri87", id: 8745 };
```

Useful when writing functions, functions can take multiple values or return multiple values

```typescript
function getDbId(id: number | string) {
  //API calls
  console.log(`DB id is : ${id}`);
}
getDbId(894684);
getDbId("8746512");
```

Problem arises when there is manipulation on these variables.

```typescript
function getDbId(id: number | string) {
  //API calls
  id.toLowerCase(); // throws error: toLowerCase does not exist on type number
}
```

Perform a check for type before manipulation.

```typescript
function getDbId(id: number | string) {
  //API calls
  if (typeof id === "string") {
    id.toLowerCase();
  }
}
```

## Arrays and Union

2 distinct arrays of type number and string

```typescript
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
```

### Array containing both string and number values

Frequent Mistakes

```typescript
const data3: string | number[] = [1, 2, "3"]; // this means either a string or number array
const data4: string[] | number[] = [1, 2, "3"]; // this means either a string array or number array
```

Correct Syntax

```typescript
const data5: (string | number | boolean)[] = [1, 2, "3", true, "8781"]; // this means array can have both number and string
```

### Making variables to have exact value(Literal Types)

Here pi is of type `3.14`

```typescript
let pi: 3.14 = 3.14;
pi = 3.145; //throws error
```

```typescript
let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "middle";
seatAllotment = "crew"; // error
```

# Tuples

When you want to restrict the order of an array

```typescript
let user: (string | number)[] = [1, "hc"]; // order can be anything

//Strict order
let user: [string, number, boolean];
user = ["h", 897, false];

let rgb: [number, number, number] = [255, 204, 36];

type User = [number, string];
const newUser: User = [125, "asd"];
```

Some issues with Tuples in TS

- Values inside a Tuple can be overwritten.

```typescript
newUser[1] = "sdfsdf";
```

- Allows array methods like push,pop,slice, etc. which destroy the Tuples.

```typescript
newUser.push(true);
```

# ENUMS

When you want to restrict the choice to user. A set of named constants. By default enum value starts from 0 and subsequent enums have incremented values. If the first enum's value is changed, the subsequent enums will have values incremented by 1.

```typescript
enum SeatChoice {
  AISLE, //0
  MIDDLE, //1
  WINDOW, //2
  FOURTH, //3
}
let mySeat = SeatChoice.AISLE;
enum SeatChoice {
  AISLE = 10, //10
  MIDDLE = 22, //22
  WINDOW, //23
  FOURTH, //24
}
```

It can have string value too. But if there is a need that the remaining enums have value as nubmers then atleast the first enum value should be initialized

```typescript
enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = 10,
  WINDOW, //11
  FOURTH, //12
}
```

Any IIFE is created when compiled to JS. ENUM creates a very large code, to decrease the code size use const

```typescript
const enum SeatChoice2 {
  AISLE = "aisle",
  MIDDLE = 3,
  WINDOW,
  FOURTH,
}
const seat2 = SeatChoice2.AISLE;
```

Resulting JS

```typescript
var seat2 = "aisle"; /* SeatChoice2.AISLE */
```

# Interfaces

Very similar to `type`, starts with keyword `interface`.
Interface forces to have the variables and methods with the same name but doesn't care what you implement in those methods.
Methods should have return type.
TS checks whether a method of same name is present and has same return type. It doesn't care whether all arguments are passed, or no arguments, even parameter name and argument name can be different.

```typescript
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  //   startTrial: () => string;
  startTrial(): string; //both are same
  getCoupon(coouponName: string, value: number): number;
}
const hrithik: User = {
  dbId: 144,
  email: "h@h.com",
  userId: 45,
  startTrial: () => {
    return "10";
  },
  getCoupon(): number {
    return 10;
  },
  getCoupon(coouponName: "test10"): number {
    return 10;
  },
  getCoupon(name: "test10", off: 456): number {
    return 10;
  },
};
```

## Reopening of interface or Adding properties to interface

```typescript
interface User {
  githubId: string;
}
const hrithik: User = {
  dbId: 144,
  email: "h@h.com",
  userId: 45,
  startTrial: () => {
    return "10";
  },
  getCoupon(): number {
    return 10;
  },
  githubId: "hi",
};
```

### Inheritance

Use `extend` keyword to inherit properties from an interface.

```typescript
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}
const hrithik: Admin = {
  dbId: 144,
  email: "h@h.com",
  userId: 45,
  startTrial: () => {
    return "10";
  },
  getCoupon(): number {
    return 10;
  },
  githubId: "hi",
  role: "learner",
};
```

Make sure interface name is not same as any of the package names

# Class

```typescript
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
```

## Type Modifiers

- Private: can only be accessed within the class in which it is defined.(`#`name or `private` name)
- Public(default): can be accessed from any part of the program.

```typescript
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
```

### A cleaner way to write classes

```typescript
class User {
  readonly city: string = "NewYork";
  constructor(
    public email: string,
    private name: string,
    private userId: string
  ) {}
}
const hrithik = new User("h@h.com", "hrithik");
hrithik.name; //error
```

`Gotcha`\
There is a difference if a parameter is not with a access modifier it is not consider as property and `this.property` is not generated.

- Without Access Modifier: The parameter is treated as a regular function argument, not a class property. You need to manually assign it if you want to use it as a class property.
- With Access Modifier: The parameter is automatically created as a class property with the specified access level, and this.property is generated by TypeScript.\
- For example, here `email` is considered as a function argument

```typescript
class User {
  private userId: string;
  constructor(email: string, private name: string) {
    this.userId = "";
  }
}
//JS
class User {
  constructor(email, name) {
    this.name = name;
    this.userId = "";
  }
}
```

## Getters and Setters

- Annotate with the keyword `get` to create a getter and `set` keyword to create a setter. Both methods can be of same name.
- A getter always needs to return data.
- Setters cannot have a return type, not even void.
- Getters and Setters are normally used to expose private properties with some transformation, manipulation, but can be used for public properties too.

```typescript
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
  //Not accessible outside the class
  private deleteToken() {
    console.log("Token deleted");
  }
}
```

Usage:\
`Getter`

```typescript
const hrithik = new User("h@h.com", "hrithik");
console.log(hrithik.courseContent);
```

`Setter`

```typescript
const hrithik = new User("h@h.com", "hrithik");
hrithik.courseContent = 5;
```

## Protected:

When a property is declared protected it is accessible within the class and classes which inherits the parent class, still not accessible outside the class

```typescript
class User {
  protected _courseCount = 1;
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
  //Not accessible outside the class
  private deleteToken() {
    console.log("Token deleted");
  }
}
class SubUser extends User {
  isFamily: boolean = true;
  set changeCourseCount(n: number) {
    this._courseCount = 5;
  }
}
const hrithik = new SubUser("h@h.com", "hrithik");
hrithik.changeCourseCount = 15;
console.log(hrithik);
hrithik._courseCount; //error
```

# Why Interface is important?

Interfaces are protocols they don't have definition but if you want to do certain things, then interface forces that it has to be done in this way. Interface does not tell how to implement, but it tells about must haves.
Properties are both variables and methods
Eg: Phone has an Interface TakePhoto, which needs to be implmented by all the apps which use camera.

```typescript
interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}
```

- Adding more properties is allowed but cannot miss properties

```typescript
interface Story {
  createStory(): void;
}
class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}
}
```

# Abstract class

They are similar to Interfaces. Abstract class cannot be Instantiated i.e, new objects cannot be created. It acts as a base class for subclasses. Abstract class is a blueprint, objects of classes which inherit Abstract class can be created.

- Methods declared as abstract are compuslory and need to be implmented by subclass.
- Concrete methods act as default feature to sub classes which can be overriden by sub class.

```typescript
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
```

# Generics

Arrays are Generics BTS.
