const fs = require("fs");
const os = require("os");

// Its a class - not a regular module
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    // {message} is design choice not a EventEmitter requirement
    // If passed only message in place of const logToFile = (event) => { ## we get string in event directly
    this.emit("message", { message });
  }
}

const logger = new Logger();
const logFile = "./eventlog.txt";

const logToFile = (event) => {
  console.log(event);
  const logMessage = `${new Date().toISOString()} - ${event?.message}\n`;
  fs.appendFileSync(logFile, logMessage);
};

logger.on("message", logToFile);

setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log("Current memory usage " + memoryUsage?.toFixed(2));
}, 2000);

logger.log("Application started");
logger.log("Application event occured");
