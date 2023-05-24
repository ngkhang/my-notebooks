/**
 * 			DATA TYPE
 * Pre: number, string, boolean
 * Ref: Object, Array, Tuple
 * Others:
 * 		Enum, Any, Void, Never
 * 		Alieses
 *
 */

export {}; // Solution for "Cannot redeclare block scoped variable"

//======== NUMBER - STRING - BOOLEAN ========//
let devName: string;
let isLogin: boolean;
let age: number;

devName = "khangnguyen"; //ok
isLogin = true; //ok
age = 22; //ok

/*
age="22" //Type 'string' is not assignable to type 'number'.ts(2322)
*/

//======== OBJECT ========//
let userStyle_1: object;
let userStyle_2: {};
let userStyle_3: {
  name: string;
  salary: number;
};

userStyle_1 = {
  name: "Khang",
  salary: 1000,
};

userStyle_2 = {
  name: "Khang",
  salary: 1000,
};

let personal: {
  id: string;
  password: string;
} = {
  id: "KhangN1",
  password: "12345",
};

//======== ARRAY ========//
// Solution 1: Array<DATA_TYPE>
let lstId: Array<string>;
lstId = ["ID001", "ID003"];

// Solution 2: DATA_TYPE[]
let lstName: string[];
lstName = ["Khang", "Hieu"];

//======== TUPLE ========//
let topEmployee: [string, number];
topEmployee = ["Khang", 1000]; // ok
// topEmployee = [123, 1000]; // Type 'number' is not assignable to type 'string'.

// Optional tuple element: DATA_TYPE?
let address: [string, number, boolean?];
address = ["Saigon", 70000, true]; //ok
address = ["Saigon", 70000]; //ok
// address = ['Saigon', 70000, "true"] // Type 'string' is not assignable to type 'boolean | undefined'.

// let user: [string, string?, boolean] // A required element cannot follow an optional element.

//======== ENUM ========//

//======== ANY ========//
let anyType: any;

anyType = "any type";
anyType = 1221;
anyType = true;
anyType = [1, 2, "abc"];

//======== VOID ========//
// sum() return number
const sum = (fNum: number, sNum: number): number => {
  return fNum + sNum;
};

// printLog() unrequired return
const printLog = (mess: string): void => {
  console.log(mess);
};

//======== NEVER ========//
// const neverFunc = (errorMess: string): never => {
//   throw Error(errorMess);
// };
// function voidFunc(errorMess: string): void {}

// let neverVar = neverFunc("never function");
// let voidVar = voidFunc("void function");
// console.log(neverVar);
// console.log(voidVar);

//======== UNION ========//
const addTwoObj = (objA: number | string, objB: number | string) => {
  if (typeof objA === "number" && typeof objB === "number") return objA + objB;
  if (typeof objA === "string" && typeof objB === "string")
    return objA.concat(" ", objB);

  throw new Error("Parameter must be numbers or strings");
};

console.log(addTwoObj(10, 12));
console.log(addTwoObj("Hello", "World"));

//======== Aliases ========//
type customType = number | string;

let input: customType;
input = 1202;
input = "TypeScript";
// input=true // Type 'boolean' is not assignable to type 'customType'
