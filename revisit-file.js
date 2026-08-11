// closure

function outer() {
  let count = 0;
  return function inner() {
    count = count + 1;
    console.log(count);
  };
}

let increment = outer();

increment();
increment();
increment();
