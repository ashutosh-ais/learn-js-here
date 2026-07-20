function Animal() {}
Animal.prototype.speak = function () {
  return "Animal speak";
};
function Dog() {}
Dog.prototype.bark = function () {
  return "Dog Bark";
};

Dog.prototype = Object.create(Animal.prototype);

console.log("Dog.prototype.constructor", Dog.prototype.constructor);
Dog.prototype.constructor = Dog;
console.log("Dog.prototype.constructor", Dog.prototype.constructor);

let d1 = new Dog();
console.log(d1.speak());
