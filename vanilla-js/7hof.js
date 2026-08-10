/*
function makeTea(typeOfTea) {
  return `Make tea ${typeOfTea}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("ashutosh");
}

let order = processTeaOrder(makeTea);
console.log(order);
*/

function createTeaMaker(name) {
  let num = 10;
  return function (teaType) {
    return `Making ${teaType} - Maker ${name} - Orders ${num}`;
  };
}

let teaMaker = createTeaMaker("ashutosh");
console.log(teaMaker("Green Tea"));
