const fs = require("fs");
const os = require("os");

const EventEmitter = require("events");
const path = require("path");

const myEmitter = new EventEmitter();
const logFile = "./logs.txt";
myEmitter.on("mykey", (event) => {
  fs.appendFileSync(logFile, event?.message);
});

const log = (msg) => {
  myEmitter.emit("mykey", { message: msg });
};

setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  log(new Date().toISOString() + " Message - " + memoryUsage + "\n");
}, 1000);

log("Application started");
