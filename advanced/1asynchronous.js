// Synchronous code

function sayHello() {
  console.log("I would like to say Hello");
}

setTimeout(() => {
  sayHello();
}, 4000);

console.log("Hello");

for (let index = 0; index <= 10; index++) {
  console.log(index);
}

// Asynchronous
/*
Having pause
    1. Network calls
    2. Read/Write files
    3. Time functions
    4. User inputs
    5. [.....]

Event loop
    1 
*/
