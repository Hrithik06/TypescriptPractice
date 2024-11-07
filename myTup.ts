// when we want array to contain, values in a specific order say [number, string, boolean]
// in this case Union doesnt help cuz it can take values in any order
//Tuples

//union
let user: (string | number)[] = [1, "hc"]; // order can be anything
const tUser: [string, number, boolean] = ["sd", 2, true];

let rgb: [number, number, number] = [255, 255, 121];

// but error is we can operate on tuples like arrays push, pop, unshift and all
type User = [number, string];
const newUser: User = [125, "asd"];

//this is possible
newUser[1] = "sdsa.com";
newUser.push(true);
export {};
