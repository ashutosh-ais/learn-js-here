// console.log("Global Execution Context starts");

// var globalVariable = "I am a global variable";

// function globalFunction() {
//   console.log("Inside global function");
// }

// console.log(globalVariable);
// globalFunction();

// console.log("Global Execution Context ends");

/*
Global execution context created 
Memory phase
--------------------------------------------------
1. globalVariable = undefined
2. Whole function body is stored in mem phase
globalFunction() {
  console.log("Inside global function");
}
Code phase
--------------------------------------------------
1. console.log("Global Execution Context starts");
2. globalVariable = "I am a global variable"
3. Function declaration - nothing happens
4. console.log(globalVariable); -> Tries to access from memory which is now "I am a global variable"
5. globalFunction() -> Function call 
On every new function call a new local execution context is created 
  Memory phase 
  --------------------------------------------------
  Empty
  Code phase
  --------------------------------------------------
  1. console.log("Inside global function");
Function execution gets completed -> This execution context is deleted 
Whole code gets completed -> Global execution context is deleted 
*/

/* 
// If this function is moved below everything still it works because during the memory phase
// The whole body of the function is stored in the memory
console.log("Global Execution Context starts");
var globalVariable = "I am a global variable";
console.log(globalVariable);
globalFunction();
console.log("Global Execution Context ends");
function globalFunction() {
  console.log("Inside global function");
}
*/

console.log("Global Execution Context starts");
var globalVariable = "I am a global variable";
console.log(globalVariable);
globalFunction();
console.log("Global Execution Context ends");
// TypeError: globalFunction is not a function
var globalFunction = function () {
  console.log("Inside global function");
};
