// Encapsulation - Encapsulation is the process of bundling data (properties) and the methods
// that operate on that data into a single unit (a class), while restricting direct access to the data.

/*
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
account.deposit(100);
account.deposit(20);
console.log(account.getBalance());
 */

// Abstraction -> Showing only the essential details to the user while hiding the complex implementation.

class CoffeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine..`;
  }

  brewCoffe() {
    // Operations
    return `Brew started..`;
  }

  pressStartButton() {
    let m1 = this.start();
    let m2 = this.brewCoffe();
    return `${m1}\n${m2}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffe());

// console.log(myMachine.pressStartButton());

// Polymorphishm

class Bird {
  fly() {
    return "Flying..";
  }
}

class Penguin extends Bird {
  fly() {
    return "Penguin can't fly..";
  }
}

let bird = new Bird();
let penguin = new Penguin();

// Same method name but different behaviour
console.log(bird.fly());
console.log(penguin.fly());
