let x = 10;

function outer() {
  let x = 20;
  return function inner() {
    console.log(x);
  };
}

const fn = outer();

x = 100;
fn();

// Output -> 20
