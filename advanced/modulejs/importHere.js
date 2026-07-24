// default import
import multiply from "./exportHere.js";
// import anyName from "./exportHere.js";

// named import
import { add, subtract } from "./exportHere.js";

console.log(multiply(10, 20));
// console.log(anyName(10, 20)); // This is possible because of export default

console.log(add(10, 20));
console.log(subtract(10, 20));
