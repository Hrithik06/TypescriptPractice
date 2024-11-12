"use strict";
// when we want array to contain, values in a specific order say [number, string, boolean]
// in this case Union doesnt help cuz it can take values in any order
//Tuples
Object.defineProperty(exports, "__esModule", { value: true });
//union
var user = [1, "hc"]; // order can be anything
var tUser = ["sd", 2, true];
var rgb = [255, 255, 121];
var newUser = [125, "asd"];
//this is possible
newUser[1] = "sdsa.com";
newUser.push(2);
console.log(newUser);
