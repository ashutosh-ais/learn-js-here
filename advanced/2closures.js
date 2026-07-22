// Closures are functions
/*
A closure in JavaScript is a function that 
remembers and can access variables 
from its outer (lexical) scope, 
even after the outer function has finished executing.
*/
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

/*
How it works
outer() is called.
1. It creates a local variable count.
2. It returns the inner() function.
3. Normally, count would be destroyed after outer() finishes.
4. But because inner() still references count, JavaScript keeps it in memory.
5. Every time counter() is called, it accesses the same count variable.
*/

function greet(name) {
  return function (message) {
    return `${message} ${name}`;
  };
}

const greetJhonWithMessage = greet("Jhon");

console.log(greetJhonWithMessage("Welcome"));
console.log(greetJhonWithMessage("Bye"));

// Bank account

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  function deposit(amount) {
    balance += amount;
    console.log("Current balance is : " + balance);
  }

  function withdraw(amount) {
    balance -= amount;
    console.log("Current balance is : " + balance);
  }

  return {
    deposit,
    withdraw,
  };
}

let account1 = createBankAccount(1000);

account1.deposit(500);
account1.deposit(500);
account1.withdraw(200);
