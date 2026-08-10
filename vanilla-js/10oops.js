// OOP -> Object Oriented Programming
/*
1. Encapsulation
2. Inheritance
3. Polymorphism
4. Abstraction
*/

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

// console.log(car);
// console.log(car.start());

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let john = new Person("Jhon Doe", 20);
// console.log(john.name);

function Animal(type) {
  this.type = type;
}

// Prototypal chain
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

// console.log(Animal);

Array.prototype.ashutosh = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 43];
// console.log(myArray.ashutosh());

let newArray = [1, 2, 3, 4, 5, 6];
// console.log(newArray.ashutosh());

class Vehicle {
  // function goes inside the class those are called Methods
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.make} is a car from ${this.model}`;
  }
}

// const v1 = new Vehicle("Galardo", "Lambo");
// console.log(v1);
// console.log(v1.start());

// Inheritance
class Car extends Vehicle {
  drive() {
    return `${this.make} Inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

let v11 = new Vehicle("Toyota", "Corolla");
console.log(v11.make);
