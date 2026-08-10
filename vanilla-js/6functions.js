/*
// parameter
function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Ashutosh"); // Argument
*/

// function make(type) {
//   return `Making ${type}`;
//   console.log("Ashutosh");
// }
// let result = make("Tea");
// console.log(result);

/*
function orderTea(teaType) {
  function confirmOrder() {
    return "Order Confirmed";
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("Ashutosh");
console.log(orderConfirmation);
*/

// Arrow functions
function greet() {
  return "Hello";
}
const calculateTotal = (price, quantity) => price * quantity;

const totalCost = calculateTotal(10, 3);
console.log(totalCost);
