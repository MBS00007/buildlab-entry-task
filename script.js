/* ======================================================
   Student Task Manager — Application Logic
   ====================================================== */

(function () {
  "use strict";

  // ---- State ----
  const STORAGE_KEY = "student_tasks";
  let tasks = loadTasks();
  let currentFilter = "all"; // 'all' | 'pending' | 'completed'
  let searchQuery = "";

  // ---- DOM References ----
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const taskInput = $("#task-input");
  const searchInput = $("#search-input");
  const addBtn = $("#btn-add");
  const taskList = $("#task-list");
  const filterBtns = $$(".filter-btn");
  const countTotal = $("#count-total");
  const countDone = $("#count-done");
  const countPending = $("#count-pending");
  const toastContainer = $("#toast-container");

  // ---- LocalStorage helpers ----
  function loadTasks() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }

  function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  // ---- Unique ID ----
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  // ---- Toast ----
  function toast(message) {
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = message;
    toastContainer.appendChild(el);
    setTimeout(() => {
      el.classList.add("toast-exit");
      el.addEventListener("animationend", () => el.remove());
    }, 2200);
  }

  // ---- Rendering ----
  function getVisibleTasks() {
    return tasks.filter((t) => {
      // Filter
      if (currentFilter === "pending" && t.done) return false;
      if (currentFilter === "completed" && !t.done) return false;
      // Search (case-insensitive)
      if (
        searchQuery &&
        !t.text.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;
      return true;
    });
  }

  function updateSummary() {
    const total = tasks.length;
    const done = tasks.filter((t) => t.done).length;
    const pending = total - done;

    animateCount(countTotal, total);
    animateCount(countDone, done);
    animateCount(countPending, pending);
  }

  function animateCount(el, value) {
    const current = parseInt(el.textContent, 10) || 0;
    if (current === value) return;
    el.textContent = value;
    el.style.transform = "scale(1.15)";
    setTimeout(() => {
      el.style.transform = "scale(1)";
    }, 200);
  }

  function renderTasks() {
    const visible = getVisibleTasks();

    if (visible.length === 0) {
      let msg = "No tasks yet — add one above!";
      if (searchQuery) msg = "No tasks match your search.";
      else if (currentFilter === "completed") msg = "No completed tasks yet.";
      else if (currentFilter === "pending") msg = "All tasks completed! 🎉";
      taskList.innerHTML = `
        <li class="empty-state">
          <span class="empty-icon">📋</span>
          <p>${msg}</p>
        </li>`;
      updateSummary();
      return;
    }

    taskList.innerHTML = visible
      .map(
        (t, i) => `
      <li class="task-item ${t.done ? "completed" : ""}" data-id="${t.id}" style="animation-delay:${i * 0.04}s">
        <label class="task-checkbox">
          <input type="checkbox" ${t.done ? "checked" : ""} aria-label="Toggle ${t.text}" />
          <span class="checkmark">✓</span>
        </label>
        <span class="task-text">${escapeHTML(t.text)}</span>
        <span class="task-status ${t.done ? "done-pill" : "pending-pill"}">${t.done ? "Done" : "Pending"}</span>
        <button class="btn-delete" aria-label="Delete ${t.text}" title="Delete task">✕</button>
      </li>`,
      )
      .join("");

    updateSummary();
  }

  function escapeHTML(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  // ---- Actions ----
  function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
      toast("Please enter a task title.");
      taskInput.focus();
      return;
    }
    tasks.unshift({ id: uid(), text, done: false });
    taskInput.value = "";
    saveTasks();
    renderTasks();
    toast("✅ Task added");
    taskInput.focus();
  }

  function toggleTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    task.done = !task.done;
    saveTasks();
    renderTasks();
  }

  function deleteTask(id) {
    const li = taskList.querySelector(`[data-id="${id}"]`);
    if (li) {
      li.classList.add("removing");
      li.addEventListener("animationend", () => {
        tasks = tasks.filter((t) => t.id !== id);
        saveTasks();
        renderTasks();
        toast("🗑️ Task deleted");
      });
    } else {
      tasks = tasks.filter((t) => t.id !== id);
      saveTasks();
      renderTasks();
    }
  }

  // ---- Event Listeners ----
  addBtn.addEventListener("click", addTask);

  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
  });

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderTasks();
  });

  taskList.addEventListener("click", (e) => {
    const item = e.target.closest(".task-item");
    if (!item) return;
    const id = item.dataset.id;

    if (e.target.closest(".btn-delete")) {
      deleteTask(id);
    } else if (e.target.closest(".task-checkbox")) {
      toggleTask(id);
    }
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderTasks();
    });
  });

  // ---- Initial Render ----
  renderTasks();
})();
