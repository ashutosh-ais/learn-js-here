// function greet(name) {
//   console.log("Hello", name);
// }

// greet("Ashutosh");

// Functional Constructor ----------------------------------------
function Person(name, age) {
  // This constructor function may be converted to a class declaration.
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

// let myCar = new Car("Toyota", "Camry");
// console.log(myCar);
// let myNewCar = new Car("Tata", "Safari");
// console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}

// let lemonTea = new Tea("Lemon tea");
// console.log(lemonTea);
// console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} Sound`;
};

/*
let dog = new Animal("Dog");
console.log(dog); // Animal { species: 'Dog' }
console.log(dog.__proto__); // { sound: [Function (anonymous)] }
console.log(dog.sound()); // Dog Sound
*/

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}

let d1 = new Drink("MangoDrink");
let d2 = Drink("Blueberry");
/*
/Users/anyhowinfo/Desktop/execute/9functions.js:50
    throw new Error("Drink must be called with new keyword");
    ^

Error: Drink must be called with new keyword
    at Drink (/Users/anyhowinfo/Desktop/execute/9functions.js:50:11)
    at Object.<anonymous> (/Users/anyhowinfo/Desktop/execute/9functions.js:56:10)
    at Module._compile (node:internal/modules/cjs/loader:1760:14)
    at Object..js (node:internal/modules/cjs/loader:1893:10)
    at Module.load (node:internal/modules/cjs/loader:1480:32)
    at Module._load (node:internal/modules/cjs/loader:1299:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.8.0
*/
