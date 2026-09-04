/*
Execution Context
------------------
An Execution Context is the environment created by the JavaScript engine in which JavaScript code is evaluated and executed.

Hoisting
------------------
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

Temporal Dead Zone
------------------
The Temporal Dead Zone (TDZ) is a JavaScript behavior associated with let and const variables.
It refers to the period/ time duration/ zone between entering a scope and initializing the variable.

*/

function outer() {
  let count = 0;
  return function inner() {
    return count++;
  };
}

let increment = outer();

console.log(increment());
console.log(increment());
console.log(increment());
