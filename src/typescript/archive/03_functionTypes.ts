/**
 * 			FUNCTION TYPES
 * Data type of parameter and function
 * Parameters
 * 		Optional parameter
 *      Default parameter
 *      Rest parameter
 * Function Overloading
 */

export {}; // solution for "Cannot redeclare block scoped variable"

//======== DATA TYPE of PARAMETER and FUNCTION ========//
// Normal function
function sum_v1(fNum: number, sNum: number): number {
  return fNum + sNum;
}

// Arrow function
const sum_v2 = (fNum: number, sNum: number): number => {
  return fNum + sNum;
};

//======== PARAMETER ========//
// Optional parameter
const getWelcome = (fName: string, lName?: string): string => {
  return lName ? `Welcome ${fName} ${lName}` : `Welcome ${fName}`;
};

console.log(getWelcome("Khang")); // Welcome Khang
console.log(getWelcome("Khang", "Nguyen")); // Welcome Khang Nguyen

// Default parameter
const AddorMulti = (fNum: number, sNum: number, calculus = "+") => {
  return calculus === "+" ? fNum + sNum : fNum * sNum;
};

console.log(AddorMulti(2, 10)); // 12
console.log(AddorMulti(2, 10, "*")); // 20

// Rest parameter
// Ex: 1
const getTotal = (...numbers: number[]) => {
  let total = 0;
  numbers.forEach((num) => {
    total += num;
  });
  return total;
};
console.log(getTotal(1, 2, 3, 4)); // 10

// Ex: 2
const multi = (multiNum: number, ...numbers: number[]) => {
  return numbers.map((num) => multiNum * num);
};
console.log(multi(10, 1, 2, 3, 4)); // [10, 20, 30, 40]

// Ex: 3
// A rest parameter must be of an array type.
// const Greeting = (...listUser:string{})=>{}

// A function definition can only have one rest parameter
// function sum(...rest1:number[], ...rest2:number[]){}

//======== FUNCTION OVERLOADING ========//
function addNumOrString(param_1: number, param_2: number): number;
function addNumOrString(param_1: string, param_2: string): string;
function addNumOrString(param_1: any, param_2: any): any {
  return param_1 + param_2;
}

console.log(addNumOrString(12, 21)); // 33
console.log(addNumOrString("Khang ", "Nguyen")); //Khang Nguyen
