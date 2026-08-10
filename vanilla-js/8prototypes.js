// Prototype based programming
// Object based programming

// const myvals = [1, 23, 4, 5];
// console.log(myvals);

/*
let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let tomHardware = {};

// console.log("computer", computer.__proto__); // Dunder __ __
console.log("lenovo", lenovo.__proto__); // lenovo { cpu: 12 }
console.log(lenovo); // { screen: 'HD' }
console.log(lenovo.cpu); // 12 -> can be accessed directly
*/

// -------------------------Methods-[setPrototypeOf | getPrototypeOf]
let genericCar = { tyres: 4 };
let tesla = { driver: "AI" };

console.log("tesla", tesla); // Tesla { driver: 'AI' }
console.log("genericCar", genericCar); // { tyres: 4 }
Object.setPrototypeOf(tesla, genericCar);
console.log(tesla.tyres); // 4
console.log("tesla prototype ->", Object.getPrototypeOf(tesla));
