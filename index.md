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
