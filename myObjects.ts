// const User = {
//     name: "hrithik",
//     email:"h@h.com",
//     isActive: true,
// }

// // Bad behaviour of objs in TS
// function creaeteUser({name:string, isPaid: boolean}){}// wrong this is destructuring
//  correct way 
// function createUser({ name, isPaid }: { name: string, isPaid: boolean }) {}
// //or
// type User = { name: string, isPaid: boolean }
// function createUser({ name, isPaid }: User) {}

// creaeteUser({name:"hrithik", isPaid:true}) //alows correct code
// creaeteUser({name:"hrithik", isPaid:true, email:"h@h.com"}) //ts doesn't allow

// // but it allows this, no error
// const newUser = {
//     name: "hrithik",
//     isPaid: true,
//     email:"h@h.com",
// }
// creaeteUser(newUser)

// Type Aliases
// type User = {
//     name: string,
//     email: string,
//     isActive: boolean,
// }
// //forces dev to send data of type User and also function returns type User
// function creaeteUser(user: User): User{
//     return {name:"", email:"", isActive:true};
// }
// creaeteUser({name:"h", email:"h@h.com",isActive:true})
// really useful when input fields are high in number, say 16 fields then creating a type helps

//readonly and optional(?)
//readonly feature off TS u can still go and edit the variable in JS code
type User = {
    readonly _id:string,
    name: string,
    email: string,
    isActive: boolean,
    credCardDetails?: number,
}
let myUSer: User={
    _id:"12345",
    name: "h",
    email: "h@h.com",
    isActive: true,
    // credCardDetails: 12435,
}
myUSer.email = "as@sd.com"
// myUSer._id = "567868"; // not allowed

//using existing types to create new

type cardNumber = {
    cardnumber: string
}
type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {cvv: number}
const card: cardDetails = {cardnumber:"asdasd", carddate:"546", cvv:545}
export{}