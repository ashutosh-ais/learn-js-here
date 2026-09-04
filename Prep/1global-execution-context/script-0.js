/*
console.log(`Value of X is ${x}`);
var x = 10;
*/
// Output: Value of X is undefined

/*
Global execution context is created 
An Execution Context is the environment created by the JavaScript engine in which JavaScript code is evaluated and executed.
In simple words:
Execution Context is the setup/environment JavaScript creates to know what variables, functions, this, and scope are available while executing a piece of code.
You can think of it as a workspace for executing JavaScript code.

Phase 1 - Memory phase 
Phase 2 - Code phase
-----------------------------------
Javascript traverse whole code 
Step 1 - Memory phase
-> var x = undefined
Step 2 - Code phase
-> Value of x is undefined (Tries to access x from memory phase)
-> x = 10
Step 2 - GEC is deleted
*/

x = 3;
console.log(`Value of x is ${x}`);
var x = 10;
/*
Global execution context
Phase 1 - Memory phase
Phase 2 - Code phase 
Step 1 - Memory phase
Because x is declared using var, the declaration is hoisted and initialized with undefined.
x = undefined
Step 2 - Code phase
x = 30
Value of x is 30 (Tries to access x from memory phase)
x = 10
Step 3 - GEC is deleted
*/
