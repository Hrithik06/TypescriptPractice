//interface doesnt force what should be the code of startTrial it foreces that it should always return string
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //function return type
  // startTrial: ()=> string // confusing little
  startTrial(): string; //this is better
  getCoupon(couponname: string, value: number): number;
}
// reopening of  interface
// just adding more fields to interface
// when there is existing package from someone or from api but u dont want to edit it and add ur own fields then interfaces is used

interface User {
  githubToken: string;
}
const hrithik: User = {
  dbId: 1545,
  email: "h@hrithik.com",
  userId: 6565,
  githubToken: "sdsf",
  startTrial: () => {
    return "start trial";
  },
  getCoupon: (name: "trial10", off: 10) => {
    // see argument name is different from interface value->off couponname->name allowed
    return 10;
  },
};

//Inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hrithik2: Admin = {
  dbId: 1545,
  email: "h@hrithik.com",
  userId: 6565,
  role: "admin",
  githubToken: "sdsf",
  startTrial: () => {
    return "start trial";
  },
  getCoupon: (name: "trial10", off: 10) => {
    // see argument name is different from interface value->off couponname->name allowed
    return 10;
  },
};
