function addTwo(num: number): number {
  // this will make sure of return type
  // num.toUpperCase();
  return num + 2;
  // return "hello";//returning string but number should be returned
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}
//giving default values
const loginUser = (name: string, email: string, isPaid: boolean = false) => {};

const value = addTwo(5);
// addTwo("6");
// getUpper(4);
getUpper("hrithik");
signUpUser("sa", "asd", false);
loginUser("h", "h@h.com");

const getHello = (s: string): string => {
  return "Hello " + s;
};
// console.log(getHello("Hrithik"));

const heros = ["superman", "thor", "batman", "ironman"];
// const heros = [1,2,3,4];

// heros.map((hero):string=>{ // no need to do this cuz TS is smart enough to understand the context whether its array of strings or numbers.
//     return `hero is ${hero}`
// })
heros.map((hero) => {
  // this is enough
  return `hero is ${hero}`;
});

//always add return type so the programmers know the behaviour of function

function consoleError(errorMsg: string): void {
  console.log(errorMsg);
}

//from docs if there are function which are never going to return use never keyword, when a function throws an exception or terminates execution of the program
function handleError(errorMsg: string): never {
  throw new Error(errorMsg);
}
export {};
