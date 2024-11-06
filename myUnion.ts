 let score: number | string = 33
 score = 44 
 score = "55"

 type User = {
    name: string
    id: Number
 }

 type Admin = {
    username: string,
    id: number
 }
 let hrithik: User | Admin = {name:"hrithik", id:87}
 hrithik = {username:"sad", id:8798}

//  function getDbId(id: number | string){
//     console.log(`DB id is : ${id}`);
    
//  }

 getDbId(3);
 getDbId("3")
//  function getDbId(id: number | string){
//     id.toLowerCase(); //will not work when id is number
//     console.log(`DB id is : ${id}`);
    
//  }
function getDbId(id: number | string){
    if(typeof id == "string"){
        id.toLowerCase();
    }
    console.log(`DB id is : ${id}`);
    
 }

 //array

 const data: number[]=[1,2,3]
 const date2: string[]= ["1","2","3"]
//  if we want array having both number and strings
 const data3: string | number[]=[1,2,"3"] // this means either a string or number array
 const data4: string[] | number[]=[1,2,"3"] // this means either a string array or number array

 const data5: (string | number)[]=[1,2,"3"] // this means array can have both number and string

 //security feature allow only certian values
 //usecase sear allotment in aeroplane

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
seatAllotment = "crew" //not allowed
export{}