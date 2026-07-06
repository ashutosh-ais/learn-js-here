// Object
/*
const obj = {
  firstName: "Ashutosh",
  isLoggedIn: true,
  "first name": "Spaced letter",
};

console.log(obj);
console.log(typeof obj); // object

obj.firstName = "Hello"; // Allowed
obj.lastName = "Lastname"; // Adding to Object
console.log(obj);
console.log(obj["firstName"]);
console.log(obj["first name"]);

let today = new Date();
console.log(today.getDay());
*/

// Array
let anotherUser = ["Ashutosh", true];
console.log(anotherUser[0]);

// Type conversion
console.log(1 + "1"); // 11
console.log("1" + 1); // 11

let isValue = true;
console.log(isValue + 1); // 2
console.log(Number(isValue) + 1); // 2

let num = "2";
console.log(Number(num) + 1); // 3

let randomNum = "2abc";
console.log(Number(randomNum)); // NaN
console.log(typeof Number(randomNum)); // number
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
