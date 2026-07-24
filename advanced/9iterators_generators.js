// function along with a * is called generator function
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen1 = numberGenerator();
let gen2 = numberGenerator();

// next() -> called iterator
console.log(gen1.next().value); // 1
console.log(gen1.next().value); // 2
console.log(gen1.next().value); // 3
console.log(gen1.next().value); // undefined

console.log(gen2.next().value); // 1
console.log(gen2.next().value); // 2
console.log(gen2.next().value); // 3
console.log(gen2.next().value); // undefined
