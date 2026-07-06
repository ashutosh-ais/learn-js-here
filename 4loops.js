/*
while
do while
for
for in
for of 
for Each
*/

// let sum = 0;
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   sum += i;
//   i++;
// }
// console.log("sum = ", sum);

// let countdown = [];
// let j = 5;
// while (j > 0) {
//   countdown.push(j);
//   j--;
// }
// console.log(countdown);

// let collection = [];
// let inp;
// do {
//   inp = prompt(`Enter your input type "stop" to finish : `);
//   if (inp !== "stop") {
//     collection.push(inp);
//   }
// } while (inp !== "stop");

// let total = 0;
// let n = 1;
// do {
//   total += n;
//   n++;
// } while (n <= 3);
// console.log(total);

let multipliedNumbers = [];
let numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i++) {
  multipliedNumbers.unshift(numbers[i] * 2);
}
console.log(multipliedNumbers);
