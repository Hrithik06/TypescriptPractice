interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  //   startTrial: () => string;
  startTrial(): string; //both are same
  getCoupon(coouponName: string, value: number): number;
}

interface User {
  githubId: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
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
  githubId: "hi",
};

const hrithik2: Admin = {
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
  githubId: "hi",
  role: "learner",
};
export {};
