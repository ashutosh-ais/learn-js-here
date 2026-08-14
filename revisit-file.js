// closure

// function outer() {
//   let count = 0;
//   return function inner() {
//     count = count + 1;
//     console.log(count);
//   };
// }

// let increment = outer();

// increment();
// increment();
// increment();

const err = new Error("This is error", {
  cause: "Only options to pass",
});
console.log(err.cause);
console.log(err.message);
console.log(err.name);
console.log(err.stack);
