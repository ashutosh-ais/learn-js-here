class Calculator {
  static add(a, b) {
    return a + b;
  }
}

let miniCalc = new Calculator();
// console.log(miniCalc.add(12, 2)); // TypeError: miniCalc.add is not a function
console.log(Calculator.add(10, 20));
