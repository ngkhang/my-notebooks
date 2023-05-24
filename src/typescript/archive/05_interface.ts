/**
 *          INTERFACE
 * Declare interface
 *      Properties
 *      Methods
 */

export {}; // solution for "Cannot redeclare block scoped variable"

//======== DECLARE INTERFACE ========//
// Example 1
interface Person {
  // Declare property interface
  readonly id: string; // Using keyword: readonly
  firstName: string;
  lastName: string;
  age?: number; // Using optional parameter
}

const getInfor = (info: Person): string => {
  return `${info.firstName} ${info.lastName}`;
};

let admin22 = {
  id: "Avc123",
  firstName: "Khang",
  lastName: "Nguyen",
  // age: 12,
};
console.log(getInfor(admin22)); // Khang Nguyen

// Example 2: Declare method A without a name
interface SumFunc {
  (a: number, b: number): number;
}
const add: SumFunc = (a, b) => a + b;
console.log(`Sum: ${add(12, 12)}`); // Sum: 24

// Example 3: Declare method A with a name
interface Param {
  fNum: number;
  sNum: number;
}

interface Func {
  // Defined method interface with name
  sum: (input: Param) => number;
  subs(input: Param): number;
}

let calc: Func = {
  sum: (input) => input.fNum + input.sNum,
  subs: (input) => input.fNum - input.sNum,
};

console.log(calc); // { sum: [Function: sum], subs: [Function: subs] }
console.log(`Sum: ${calc.sum({ fNum: 12, sNum: 10 })}`); // Sum: 22
console.log(`Subs: ${calc.subs({ fNum: 12, sNum: 10 })}`); // Subs: 2
