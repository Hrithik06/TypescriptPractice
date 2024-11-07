// const superHeroes = []
// superHeroes.push("batman"); // error never type

// const superHeroes: [] = []
//  superHeroes.push("batman"); // error never type

// Both are valid Syntax
// const superHeroes: string[] = []
const superHeroes: Array<string> = [];

superHeroes.push("batman");

type User = {
  name: string;
  isActive: boolean;
};
const allUsers: User[] = [];
allUsers.push({ name: "h", isActive: true });

// array inside array

const MLModels: number[][] = [[255, 255, 255], []];
export {};
