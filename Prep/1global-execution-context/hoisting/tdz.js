/*
The Temporal Dead Zone (TDZ) is a JavaScript behavior associated with let and const variables.
It refers to the period/ time duration/ zone between entering a scope and initializing the variable.

console.log(a);
let a = 10;

GEC created 
memory phase 
a: uninitialized
code execution phase
ReferenceError: cannot access a before initialization
a=10 initialized

Time between a going inside memory phase or scope and a initialized is called TDZ
*/
