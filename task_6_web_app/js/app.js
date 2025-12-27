const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const pendingCount = document.getElementById("pendingCount");

let taskArray = [];

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  taskArray.push(task);
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = " ";

  taskArray.forEach(task => {
    const li = document.createElement("li");
    li.className = "taskItem";

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <span>${task.text}</span>
      <div class="taskActions">
        <button onclick="toggleTask(${task.id})"> ✓ </button>
        <button onclick="deleteTask(${task.id})"> ✕ </button>
      </div>
    `;

    taskList.appendChild(li);
  });

  updateStats();
}

function toggleTask(id) {
  taskArray = taskArray.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  );

  renderTasks();
}

function deleteTask(id) {
  taskArray = taskArray.filter(task => task.id !== id);
  renderTasks();
}

function updateStats() {
  totalCount.textContent = taskArray.length;
  completedCount.textContent = taskArray.filter(t => t.completed).length;
  pendingCount.textContent = taskArray.filter(t => !t.completed).length;
}
