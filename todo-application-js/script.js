document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    renderTasks(task);
  });

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
      return;
    }
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    todoInput.value = "";
    saveTasks(tasks);
  });

  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) {
      li.classList.add("completed");
    }
    li.innerHTML = `
        <span>${task.text}</span>
        <button>Delete</button>
    `;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        task.completed = !task.completed;
      }
      li.classList.toggle("completed");
      saveTasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent toggle from firing
      tasks;
    });
    todoList.appendChild(li);
  }
});
