/*
--------------------------------------------------------
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
--------------------------------------------------------
Before executing the code, JavaScript creates an execution context and prepares variables and function declarations in memory.
1. Memory Creation Phase
2. Code Execution Phase

--------------------------------------------------------
Variable Hoisting
--------------------------------------------------------
Technically, that is inaccurate. let and const are also hoisted, but they are not initialized with undefined the way var is.

Memory Creation Phase
---------------------------- var initialized with undefined
var a
↓
a → undefined
---------------------------- let and const initialized with nothing - they are uninitialized
let b
↓
b → <uninitialized>
----------------------------
const c
↓
c → <uninitialized>
----------------------------

--------------------------------------------------------
Function Hoisting
--------------------------------------------------------
sayHello();

function sayHello() {
  console.log("Hello");
}

O/P ->
Hello

Conceptually->
Memory Creation Phase
----------------------
sayHello → entire function

But a function expression behaves according to the variable holding it.
sayHello();

var sayHello = function () {
  console.log("Hello");
};

Here JavaScript first creates:
Memory
----------------
sayHello → undefined

Then execution reaches: sayHello(); which is effectively: undefined();
Therefore:
TypeError: sayHello is not a function

Only afterward does this execute:
sayHello = function () {
  console.log("Hello");
};
and memory becomes:
sayHello → function

Example ---------------------->
hello();
var hello = () => {
    console.log("Hello");
};
// TypeError: hello is not a function

Example ---------------------->
hello();
let hello = () => {
    console.log("Hello");
};
// ReferenceError: Cannot access 'hello' before initialization

 */
/*
----------------------
Tricky examples
----------------------
*/
// ######## ######## Example 1 ######## ########
/* 
var x = 10;

function test() {
  console.log(x);
  var x = 20;
}

test();
*/
/*
GEC created
Memory creation phase
---------------------------
x:undefined
test: function test() {
  console.log(x);
  var x = 20;
}

Code execution phase
---------------------------
x = 10
Function declaration has no effect
test() -> Function called 
    New local/function execution context is created
        Memory creation phase
        ---------------------------
        x:undefined

        Code execution phase
        ---------------------------
        console.log(x); -> undefined
        x = 20;
    Local execution context deleted 
GEC deleted
*/

// ######## ######## Example 2 ######## ########
var a = 10;

function foo() {
  console.log(a);
}

foo();
/*
mem
a: undefined
foo: foo() full function code

code
a = 10;
foo fn defination no effect

foo()
    local execution context created
        mem -> nothing
        code execution phase
        console.log(a); -> in local EC in mem not found so looking for outer scope 
        a = 10 found 
        Output -> 10

        JavaScript Code
      ↓
Global Execution Context created
      ↓
┌────────────────────────────┐
│ Memory Creation Phase      │
│                            │
│ var → undefined            │
│ let → uninitialized        │
│ const → uninitialized      │
│ function → full function   │
└────────────────────────────┘
      ↓
┌────────────────────────────┐
│ Code Execution Phase       │
│                            │
│ Executes code line by line │
│ Assigns actual values      │
│ Calls functions            │
└────────────────────────────┘

And whenever a function executes:

Function called
      ↓
New Execution Context
      ↓
Memory Creation Phase
      ↓
Execution Phase
      ↓
Function finishes
      ↓
Execution Context removed

--------------------------------------------------------
Class Hoisting
--------------------------------------------------------
console.log(Person);
class Person {}

Also gives:
ReferenceError


console.log(Person);
function Person() {} -> [Function: Person]

*/
