console.log("Start of script 3");

setTimeout(() => {
  console.log("This is from the Task Queue (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("This is from the Microtask Queue (Promise)");
});

console.log("End of script 3");
/*
Output
-----------------
Start of script 3
End of script 3
This is from the Microtask Queue (Promise)
This is from the Task Queue (setTimeout)

Microtask queue: #1 priority
Promises

Task queue: #2 priority
setTimeout, setInterval, DOM Event listners, setImmediate

Starvation -> 
If one task in the microtask queue puts another microtask into the queue then the tasks present in the Task queue will never gets chance to get executed which causes starvation
*/
