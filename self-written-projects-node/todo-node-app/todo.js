const fs = require("fs");
const filePath = "./tasks.json";

// process.agrv[0] -> Node path
// process.agrv[0] -> File path
const command = process.argv[2];
const argument = process.argv[3];

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("Task added : " + task);
};

const listTasks = () => {
  //   const tasks = loadTasks();
  const dataBuffer = fs.readFileSync("./tasks.json");
  const dataJSONString = dataBuffer.toString();
  const actualDataJSON = JSON.parse(dataJSONString);
  actualDataJSON.map((task, index) => {
    console.log("Task -> " + index + " -> " + task?.task);
  });
};

const removeTask = (itemNo) => {
  const dataBuffer = fs.readFileSync("./tasks.json");
  const dataJSONString = dataBuffer.toString();
  const jsonData = JSON.parse(dataJSONString);
  if (!(itemNo > jsonData?.length) && itemNo > 0 && typeof itemNo == "number") {
    const updatedTasks = jsonData?.filter((item, index) => {
      return index !== itemNo - 1;
    });
    console.log("Updated tasks -> ", updatedTasks);
    saveTasks(updatedTasks);
  } else {
    console.log("Invalid operation");
  }
};

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found!");
}
