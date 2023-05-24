/**
 * 			CONTROL FLOW STATEMENT
 * Condition:
 * 		If...else
 *    	Switch case
 * Loop:
 *    	For loop
 *    	While
 *    	Do...While
 */

export {}; // solution for "Cannot redeclare block scoped variable"

//======== CONDITION ========//
// if...else if...else
let num = 10;

if (num === 0) console.log("Number 0");
else if (num % 2) console.log("even");
else console.log("odd"); // odd

// switch case
let salary = 1000;
let expense = 200;
let target = 1500;

switch (salary - expense) {
  case target - 100:
    console.log("Comming soon");
    break;
  case target - 500:
    console.log("Not far");
    break;
  default:
    console.log("A long time");
    break;
} // A long time

let browerName: string = "Chrome";
switch (browerName) {
  case "Chrome":
  case "Safari":
  case "Firefox":
    console.log("Supported");
    break;
  case "IE":
    console.log("Not support!");
    break;
  default:
    console.log("Unknown browser!");
    break;
} // Supported

//======== LOOP ========//
// For loop
// Ex: 1
let lstUser = ["User A", "User B", "User C", "User D", "User E"];
let countUser = 0;
for (let idxItem = 0; idxItem < lstUser.length; idxItem++) {
  console.log(lstUser[idxItem]);
  countUser++;
}
console.log(`Count: ${countUser}`);
/*
	User A
	User B
	User C
	User D
	User E
	Count: 5
*/

// Ex: 2
let i = 0;
for (;;) {
  console.log(`Item: ${i + 1}`);
  i++;
  if (i > 9) break;
}
/*
	Item: 1
	Item: 2
	Item: 3
	Item: 4
	Item: 5
	Item: 6
	Item: 7
	Item: 8
	Item: 9
	Item: 10
*/

// While loop

// Do...while loop
