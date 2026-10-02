const STORAGE_KEY = "student-task-manager-v1";

const state = {
  tasks: loadTasks(),
  filter: "all",
  query: ""
};

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const feedback = document.getElementById("feedback");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");

const totalCount = document.getElementById("total-count");
const pendingCount = document.getElementById("pending-count");
const completedCount = document.getElementById("completed-count");

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tasks));
}

function setFeedback(message, isError = false) {
  feedback.textContent = message;
  feedback.style.color = isError ? "#d93b4f" : "#1f9d68";
}

function getFilteredTasks() {
  const query = state.query.trim().toLowerCase();

  return state.tasks.filter((task) => {
    const matchesFilter =
      state.filter === "all" ||
      (state.filter === "pending" && !task.completed) ||
      (state.filter === "completed" && task.completed);

    const matchesQuery =
      query === "" ||
      task.title.toLowerCase().includes(query);

    return matchesFilter && matchesQuery;
  });
}

function updateSummary() {
  const total = state.tasks.length;
  const pending = state.tasks.filter((task) => !task.completed).length;
  const completed = state.tasks.filter((task) => task.completed).length;

  totalCount.textContent = total;
  pendingCount.textContent = pending;
  completedCount.textContent = completed;
}

function renderTasks() {
  const filteredTasks = getFilteredTasks();

  if (filteredTasks.length === 0) {
    taskList.innerHTML = `
      <li class="empty-state">
        ${state.tasks.length === 0
          ? "No tasks yet. Add your first task to get started."
          : "No matching tasks found for your search."}
      </li>
    `;
    return;
  }

  taskList.innerHTML = filteredTasks
    .map((task) => `
      <li class="task-item ${task.completed ? "completed" : ""}" data-id="${task.id}">
        <div class="task-main">
          <span class="task-status" aria-hidden="true"></span>
          <span class="task-text">${escapeHtml(task.title)}</span>
        </div>

        <div class="task-meta">
          <button
            class="task-toggle"
            type="button"
            data-action="toggle"
            data-id="${task.id}"
          >
            ${task.completed ? "Mark Pending" : "Mark Done"}
          </button>
          <button
            class="task-delete"
            type="button"
            data-action="delete"
            data-id="${task.id}"
          >
            Delete
          </button>
        </div>
      </li>
    `)
    .join("");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function addTask(title) {
  const trimmedTitle = title.trim();

  if (!trimmedTitle) {
    setFeedback("Task title cannot be empty.", true);
    return;
  }

  const newTask = {
    id: crypto.randomUUID ? crypto.randomUUID() : `task-${Date.now()}-${Math.random()}`,
    title: trimmedTitle,
    completed: false
  };

  state.tasks.unshift(newTask);
  saveTasks();
  updateSummary();
  renderTasks();
  taskInput.value = "";
  taskInput.focus();
  setFeedback("Task added successfully.");
}

function toggleTask(taskId) {
  state.tasks = state.tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  saveTasks();
  updateSummary();
  renderTasks();
}

function deleteTask(taskId) {
  state.tasks = state.tasks.filter((task) => task.id !== taskId);
  saveTasks();
  updateSummary();
  renderTasks();
  setFeedback("Task deleted.");
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask(taskInput.value);
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderTasks();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.toggle("active", btn === button);
    });

    renderTasks();
  });
});

taskList.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  const taskId = target.dataset.id;
  const action = target.dataset.action;

  if (action === "toggle") {
    toggleTask(taskId);
  }

  if (action === "delete") {
    deleteTask(taskId);
  }
});

function initialize() {
  updateSummary();
  renderTasks();
}

initialize();