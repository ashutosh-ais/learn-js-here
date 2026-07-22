function Person(name) {
  this.name = name;
}
// Ability to inject anything into functional constructor
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let ashutosh = new Person("Ashutosh");
ashutosh.greet();
