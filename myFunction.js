"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // this will make sure of return type
    // num.toUpperCase();
    return num + 2;
    // return "hello";//returning string but number should be returned
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
//giving default values
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var value = addTwo(5);
// addTwo("6");
// getUpper(4);
getUpper("hrithik");
signUpUser("sa", "asd", false);
loginUser("h", "h@h.com");
var getHello = function (s) {
    return "Hello " + s;
};
// console.log(getHello("Hrithik"));
var heros = ["superman", "thor", "batman", "ironman"];
// const heros = [1,2,3,4];
// heros.map((hero):string=>{ // no need to do this cuz TS is smart enough to understand the context whether its array of strings or numbers.
//     return `hero is ${hero}`
// })
heros.map(function (hero) {
    // this is enough
    return "hero is ".concat(hero);
});
//always add return type so the programmers know the behaviour of function
function consoleError(errorMsg) {
    console.log(errorMsg);
}
//from docs if there are function which are never going to return use never keyword, when a function throws an exception or terminates execution of the program
function handleError(errorMsg) {
    throw new Error(errorMsg);
}
