/*
let arr = ["ashutosh", "practice", "loop", "easy"];
let selectedItems = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "loop") {
    break;
  }
  selectedItems.push(arr[i]);
}
console.log(selectedItems);
 */

/*
let arr = ["ashutosh", "practice", "loop", "easy"];
let visited = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "loop") {
    continue;
  }
  visited.push(arr[i]);
}
console.log(visited);
 */

// for-of loop
/*
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);
 */

/*
let arr = ["copy", "paste", "hello", "ashutosh"];
let res = [];
for (const e of arr) {
  if (e === "paste") {
    continue;
  }
  res.push(e);
}
console.log(res);
 */

let cityPopulations = {
  london: 10000,
  "new york": 23999,
  paris: 324234,
  berlin: 123123,
};

let result = {};
console.log(Object.keys(cityPopulations));
console.log(Object.values(cityPopulations));
