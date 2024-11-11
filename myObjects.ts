// const User = {
//   name: "test",
//   email: "h@h.com",
//   isActive: true,
// };

// // Bad behaviour of objs in TS
// function createUser({ name: string, isPaid: boolean }) {} // wrong this is destructuring
// // correct way
// function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}
// //or
// type User = { name: string; isPaid: boolean };
// function createUser({ name, isPaid }: User) {}

// createUser({ name: "test", isPaid: true }); //alows correct code
// createUser({ name: "test", isPaid: true, email: "h@h.com" }); //ts doesn't allow

// // but it allows this, no error
// const newUser = {
//   name: "test",
//   isPaid: true,
//   email: "h@h.com",
// };
// createUser(newUser);

// // Type Aliases
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };
// //forces dev to send data of type User and also function returns type User
// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }
// createUser({ name: "h", email: "h@h.com", isActive: true });
// // really useful when input fields are high in number, say 16 fields then creating a type helps

// //readonly and optional(?)
// //readonly feature off TS u can still go and edit the variable in JS code
// // type User = {
// //   readonly _id: string;
// //   name: string;
// //   email: string;
// //   isActive: boolean;
// //   credCardDetails?: number;
// // };
// // let myUSer: User = {
// //   _id: "12345",
// //   name: "h",
// //   email: "h@h.com",
// //   isActive: true,
// //   // credCardDetails: 12435,
// // };
// // myUSer.email = "as@sd.com";
// // // myUSer._id = "567868"; // not allowed

// // //using existing types to create new

// // type cardNumber = {
// //   cardnumber: string;
// // };
// // type cardDate = {
// //   carddate: string;
// // };

// // type cardDetails = cardNumber & cardDate & { cvv: number };
// // const card: cardDetails = { cardnumber: "asdasd", carddate: "546", cvv: 545 };

export {};
