// console.log("Start of script 2");
// setTimeout(() => {
//   console.log("This is from the Task Queue (setTimeout)");
// }, 5000);
// console.log("End of script 2");

/*
Call stack
JS code cannot run without JS engine
1. Push into call stack
2. Call stack waits for nothing

Call stack -> Actual Javascript Engine
Any javascript code we need to execute, we need to push that into the call stack and call stack waits for nothings

Call stack | JS Engine
------------------------
1. GEC pushed into the call stack 
2. Code starts execution 
3. console.log("Start of script 2");  ----> [printed]
4. Encountered setTimeout -> This is a part of Web API's It makes a call to the Web API's 

    Web API Internally starts timer in web browser 
    -------------------------------- Inside WebAPI
    5secs 
    Timer () => {
      console.log("This is from the Task Queue (setTimeout)");
    } 
    --------------------------------
5. Encountered console.log("End of script 2");  ----> [printed]
6. As setTimeout is registered in the WebAPI out callstack main code execution is completed
And the GEC is deleted 
7. Now the timer expires in WebAPI 
    - We now need to execute the code of setTimeout registered function - so the function is pushed into the callstack and gets executed.
    - console.log("This is from the Task Queue (setTimeout)");  ----> [printed]

Internally Queues are used to handle this these type of asynchronous operations which takes time.

Task Queue
----------
Web API pushes setTimeout function into the task queue and and there is EVENT LOOP in between which constantly monitors the call stack and the queues whenever the call stack becomes empty it looks into the queues and pushes task into the call stack for execution.

Execution completed context deleted 

Timers are the part of the WebAPI's not the part of JS, which is pushed into the callstack using the TASK QUEUE.
*/

// Assignment
console.log("Start of script 2");

setTimeout(() => {
  console.log("A");
}, 0);

setTimeout(() => {
  console.log("B");
}, 0);

setTimeout(() => {
  console.log("C");
}, 2000);

console.log("End of script 2");
console.log("Bye bye!");

/*
Output
------
Start of script 2
End of script 2
Bye bye!
A
B
C
*/
