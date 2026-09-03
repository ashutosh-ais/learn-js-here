console.log("Start of script 2");
setTimeout(() => {
  console.log("This is from the Task Queue (setTimeout)");
}, 0);
console.log("End of script 2");

/*
Call stack
JS code cannot run without JS engine
1. Push into call stack
2. Call stack waits for nothing
*/
