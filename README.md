# Student Task Manager

A simple task manager built with HTML, CSS, and JavaScript for the BuildLab entry challenge.

## Features

- **Add tasks** — type a task and press Enter or click Add
- **Mark tasks as completed or pending** — click the checkbox to toggle
- **Delete tasks** — click the ✕ button on any task
- **Search tasks** — case-insensitive live search
- **Filter tasks** — view All, Pending, or Completed
- **View task summary counts** — total, completed, and pending at a glance
- **Persist tasks using LocalStorage** — tasks survive page refreshes
- **Responsive layout** — optimized for desktop, tablet, and mobile
- **Toast notifications** — brief feedback when adding or deleting tasks

## How to Run

1. Open `index.html` in a browser.
2. Start adding tasks.

## How Data Is Stored

This app stores tasks in the browser using `localStorage`, so the tasks remain available after refreshing the page. Each task has an `id`, `text`, and `done` status.

## AI Usage

No AI tools were required to complete this implementation.

## Known Limitations

- This is a frontend-only app with no backend or user authentication.
- There is no advanced task editing feature beyond toggling completion status and deleting tasks.

## Project Structure

```
index.html   — Page markup and structure
style.css    — All styling (dark theme, animations, responsive)
script.js    — Application logic (CRUD, search, filter, localStorage)
README.md    — This file
```
