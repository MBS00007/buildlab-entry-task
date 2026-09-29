
# BuildLab Entry Task

Welcome to the BuildLab Entry Task.

This repository contains a small Student Task Board application. Your task is to make a small improvement to the existing project and submit your work through GitHub.

This is not a traditional coding exam.

You are expected to explore the existing code, solve the assigned problem, use the tools available to you, and explain the work you submit.

---

## 🎯 Your Task

Add a **search feature** to the Student Task Board.

The user should be able to search through their existing tasks.

### The search feature should:

- Update as the user types
- Find tasks regardless of uppercase or lowercase
- Display matching tasks
- Display a clear message when no tasks match
- Continue working with the existing task features
- Not break adding, completing, or deleting tasks

Keep your changes focused on the assigned task.

---

## 🛠️ Technologies

This project uses:

- HTML
- CSS
- JavaScript

Do not introduce a framework such as React, Vue, Angular, or Next.js for this task.

You should work with the existing project rather than replacing it with a completely new application.

---

## 🤖 AI Usage

AI tools are **allowed and encouraged**.

You may use tools such as:

- ChatGPT
- Claude
- Gemini
- GitHub Copilot
- Cursor
- Other AI development tools

You may use AI to:

- Understand unfamiliar code
- Learn concepts
- Generate or improve code
- Debug problems
- Review your implementation
- Help you understand Git or GitHub

However, you are responsible for the code you submit.

You should understand what your code does and be able to explain your changes during the review.

---

# 🌱 Git & GitHub Workflow

Please follow this workflow:

### 1. Fork this repository

Create your own copy of this repository under your GitHub account.

### 2. Clone your fork

Clone your repository to your computer.

### 3. Create a branch

Do not work directly on `main`.

Create a branch for your feature.

Example:

```bash
git checkout -b feature/task-search
```

### 4. Understand the existing project

Before changing the code, explore the project and understand how the existing task functionality works.

### 5. Implement the feature

Add the search functionality while keeping the existing features working.

### 6. Test your changes

Make sure you test:

- Searching for an existing task
- Searching with different uppercase/lowercase combinations
- Searching for something that does not exist
- Adding a task
- Completing a task
- Deleting a task

### 7. Commit your changes

Use a clear commit message.

Example:

```bash
git add .
git commit -m "feat: add task search"
```

### 8. Push your branch

```bash
git push origin feature/task-search
```

### 9. Open a Pull Request

Create a Pull Request from your branch to the original BuildLab repository.

---

# 📋 Pull Request Requirements

When creating your Pull Request, include:

## What I Changed

Briefly describe what you changed.

## How I Implemented It

Explain the general approach you used.

## How I Tested It

Explain what you tested and whether everything worked as expected.

## AI Usage

Tell us whether you used AI.

If you did, briefly explain how you used it.

For example:

> I used ChatGPT to help me understand the existing JavaScript structure and debug the search logic. I reviewed and tested the generated suggestions before implementing them.

---

# 🔍 Code Review

After submitting your Pull Request, a BuildLab reviewer may leave comments or request changes.

Please read the feedback carefully and make any requested changes.

If you make additional changes:

1. Update your code
2. Commit the changes
3. Push them to the same branch

Your existing Pull Request will update automatically.

You do **not** need to create a new Pull Request.

---

# ⚠️ Important Rules

- Do not replace the entire project.
- Do not introduce a new framework.
- Do not delete existing functionality.
- Do not commit passwords, API keys, or other secrets.
- Keep your changes related to the assigned task.
- Test your work before submitting.
- Use clear commit messages.
- Ask questions if you are genuinely stuck.
- You are responsible for understanding the code you submit.

---

# 💡 If You Get Stuck

Getting stuck is normal.

You may:

- Read the existing code
- Search documentation
- Use AI tools
- Research the problem
- Ask for clarification

We are interested in how you approach problems, not whether you know everything immediately.

---

# ✅ Before You Submit

Make sure:

- [ ] The search feature works
- [ ] Search is case-insensitive
- [ ] No-results message works
- [ ] Adding tasks still works
- [ ] Completing tasks still works
- [ ] Deleting tasks still works
- [ ] You tested your changes
- [ ] Your branch has a clear name
- [ ] Your commits have clear messages
- [ ] Your Pull Request explains your work
- [ ] You can explain the code you submitted

---

# 🚀 Final Step

Once you have completed the task:

**Push your branch → Open a Pull Request → Wait for BuildLab's review.**

Good luck, and remember:

> You don't need to know everything.
>
> You need to be willing to learn, solve problems, and take responsibility for your work.

---

**BuildLab Community**

Student Software Engineering Community
```

### One thing I'd change later

I would **not put the exact evaluation criteria in this README**.

The applicant should know the assignment and the rules, but they don't need to see something like:

> "You get 20 points for Git, 15 for AI usage..."

That can influence how they behave during the test.

Instead, **we keep a separate internal document** called something like:

> **BuildLab Entry Task - Reviewer Guide**

That document is for you and your co-founder. It will contain the checklist for reviewing the applicant's **code, Git history, PR, AI usage, response to feedback, and communication**.

That separation is important:

**Applicant README = instructions**  
**Reviewer Guide = evaluation**
