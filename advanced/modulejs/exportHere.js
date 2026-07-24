import { add, subtract } from "./exportHere.js";
export function add(a, b) {
  return a + b;
}

// import { add, subtract } from "./exportHere.js";
export function subtract(a, b) {
  return a - b;
}

// export default can be imported with only name and name can be changed while importing
export default function multiply(a, b) {
  return a * b;
}
