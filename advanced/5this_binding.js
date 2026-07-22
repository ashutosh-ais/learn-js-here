const person = {
  name: "Ashutosh",
  greet() {
    console.log(`Hi I am ${this.name}`);
  },
};

person.greet();

// transfering the function but the context is missing
const greetFunction = person.greet;
greetFunction("John");

// Binding object so that it gets the context
const boundGreet = person.greet.bind({ name: "John" });
boundGreet();

// bind, call and apply
// [Pending]
