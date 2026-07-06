/*
const arr = ["A", "B", "C"];
console.log(arr[0]);
let first = arr[0];
console.log(first);
*/

// const city = ["London", "Tokyo", "Paris", "New York"];
// console.log(city[2]);

// const c = ["ashutosh", "hello"];
// c[2] = "New data";
// c[20] = "New data";
// console.log(c);
// c.push("Pushed");
// console.log(c);

/*
const arr = [1, 2, 3, 4, 5, 6];
arr.pop();
console.log(arr); // [ 1, 2, 3, 4, 5 ]
*/

/*
// Soft copy
let arr = [1, 2, 3, 4, 5, 6];
let arrCopy = arr;
arr.pop(); // Both the arrays are manipulated.
console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(arrCopy); // [ 1, 2, 3, 4, 5 ]
 */

/*
// Hard copy
let arr = [1, 2, 3, 4, 5];
let arrCopy = [...arr];
arr.pop();
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(arrCopy); // [ 1, 2, 3, 4, 5 ]
*/

/*
let arr = [1, 2, 3, 4, 5];
let newWayHardCopy = arr.slice();
arr.pop();
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(newWayHardCopy); // [ 1, 2, 3, 4, 5 ]
*/

/*
let arr1 = ["Ashutosh"];
let arr2 = ["Merge"];
console.log(arr1 + arr2); // AshutoshMerge
console.log(typeof (arr1 + arr2)); // string

let merge = [arr1, arr2];
console.log(merge); // [ [ 'Ashutosh' ], [ 'Merge' ] ] -> Two dimensional

let realMerge = arr1.concat(arr2);
console.log(realMerge); // [ 'Ashutosh', 'Merge' ]
*/

const city = ["bbsr", "kolkata"];
if (city.includes("bbsR")) {
  console.log("bbsr is present");
}
console.log(city.shift()); // Gives the removed element - remove the first element
console.log(city);

city.unshift("HELLO");
console.log(city); // [ 'HELLO', 'kolkata' ] -> Adds in the beginning
