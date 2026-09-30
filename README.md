# BuildLab Entry Challenge

Welcome to the BuildLab Entry Challenge.

This challenge is part of the BuildLab recruitment process.

BuildLab is a student Software Engineering community focused on learning, collaboration, and building real-world software.

This challenge is not designed to test whether you already know everything.

It is designed to see how you approach a real software project, how you learn, how you use modern development tools, how you solve problems, and how you work with GitHub.

## Deadline and Rules

**Deadline: Saturday 3 October 2026, 11:59 PM**

- Complete this challenge alone. AI tools are allowed, but the work and the understanding must be yours.
- Late Pull Requests will not be reviewed.
- After you open your Pull Request, fill in the application form: [BuildLab Application Form](https://docs.google.com/forms/d/e/1FAIpQLSfY1UWLsTv9_4yo_hMGW_ttUgfo9AAPRFBc1VZy5LPFAdJHaQ/viewform)
  You will need your GitHub username and your Pull Request link.

---

## 1. The Challenge

Your task is to build a small web application called:

**Student Task Manager**

The application should help students manage their academic and daily tasks.

A student should be able to create tasks, view them, search through them, filter them, mark them as completed, and delete them.

You are responsible for deciding how the application should look and how you should implement it.

There is no required design.

Your goal is to build a clean, functional, and usable application.

---

## 2. Required Features

Your application must include the following features.

### Create Tasks

Users should be able to create a new task.

Each task should contain at least:

- Task title
- Description
- Status
- Date created

You may add additional information if you believe it improves the application.

### View Tasks

Users should be able to see their tasks clearly.

The application should make it easy to understand:

- What tasks exist
- Which tasks are pending
- Which tasks are completed

### Complete Tasks

Users should be able to mark a task as completed.

If you choose, users may also be able to change a completed task back to pending.

### Delete Tasks

Users should be able to delete tasks they no longer need.

You may add a confirmation step before deleting a task.

### Search Tasks

Users should be able to search through their tasks.

The search should:

- Update as the user searches
- Find relevant tasks
- Work regardless of uppercase or lowercase differences
- Clearly show when no matching task exists

### Filter Tasks

Users should be able to filter their tasks.

At minimum, provide:

- All
- Pending
- Completed

### Task Summary

The application should provide a simple summary of the user's tasks.

For example:

- Total tasks
- Pending tasks
- Completed tasks

You may decide how this information is displayed.

---

## 3. User Experience Requirements

The application should be simple and easy to understand.

A user should be able to use the application without needing a separate instruction manual.

Your application should:

- Work on desktop
- Work on mobile
- Have readable text
- Have clear buttons and controls
- Have a consistent layout
- Provide feedback when actions are completed
- Handle empty states properly
- Handle invalid or empty input appropriately

You are free to decide the visual design.

There is no required:

- Color scheme
- Font
- Layout
- Logo
- Design style

Make your own design decisions.

---

## 4. Technology Requirements

For this challenge, you must use only:

- HTML
- CSS
- JavaScript

Do not use:

- React
- Next.js
- Vue
- Angular
- Svelte
- Bootstrap
- Tailwind CSS
- jQuery
- Other frontend frameworks
- Other UI libraries

The purpose of this requirement is to make sure everyone works with the same basic technologies and demonstrates their understanding of web fundamentals.

---

## 5. Data Storage

Your application must preserve tasks when the page is refreshed.

For this challenge, use **Browser LocalStorage**.

Do not create:

- A backend
- A database
- An API
- Authentication

The goal is to keep the project focused on HTML, CSS, and JavaScript fundamentals.

---

## 6. AI Usage

**AI IS ALLOWED AND ENCOURAGED**

You may use modern AI development tools during this challenge.

Examples include:

- ChatGPT
- Claude
- Gemini
- GitHub Copilot
- Cursor
- Other AI development tools

You may use AI to:

- Understand unfamiliar concepts
- Plan your application
- Learn HTML, CSS, or JavaScript
- Generate code
- Debug errors
- Explain code
- Improve your implementation
- Review your code
- Research possible solutions

Using AI is not against the rules.

However, you are responsible for the code you submit.

You should understand the important parts of your application and be able to explain your implementation during the review.

Do not blindly submit code that you do not understand.

---

## 7. Git & GitHub Workflow

This challenge also tests your ability to work with Git and GitHub.

Please follow this workflow.

### Step 1: Fork the Repository

Fork this repository into your own GitHub account.

Do not directly modify the BuildLab repository.

### Step 2: Clone Your Fork

Clone your fork to your computer.

Example:

```bash
git clone YOUR_REPOSITORY_URL
```

Then open the project in your preferred code editor.

### Step 3: Create a Branch

Do not work directly on `main`.

Create a feature branch.

Example:

```bash
git checkout -b feature/student-task-manager
```

You may choose another appropriate branch name.

### Step 4: Build the Application

Read the requirements carefully.

Plan your approach before you start building.

You are responsible for making your own:

- HTML structure
- CSS design
- JavaScript logic
- User experience decisions

### Step 5: Test Your Application

Before submitting your work, test the major features.

At minimum, test:

- Creating a task
- Viewing tasks
- Completing a task
- Deleting a task
- Searching
- Filtering
- Refreshing the page
- LocalStorage persistence
- Empty states
- Invalid or empty input
- Mobile responsiveness

Also make sure that one feature does not break another.

### Step 6: Commit Your Work

Use meaningful Git commits.

Avoid commit messages such as:

- final
- done
- update
- project

Instead, use messages that describe what changed.

Examples:

```bash
git commit -m "feat: add task creation"
git commit -m "feat: add task filtering"
git commit -m "fix: handle empty task input"
```

You do not need to create a huge number of commits.

Make commits that represent meaningful changes.

### Step 7: Push Your Branch

Push your branch to your GitHub fork.

Example:

```bash
git push origin feature/student-task-manager
```

### Step 8: Create a Pull Request

After completing your work, create a Pull Request from your branch to the original BuildLab repository.

Your Pull Request should include:

**What I Built**
Briefly describe your application.

**Main Features**
List the main features you implemented.

**Technical Approach**
Explain how you implemented the main functionality.

**How I Tested It**
Explain what you tested.

**AI Usage**
Tell us:

- Which AI tools you used
- What you used them for
- How AI helped you
- Anything important you learned from using AI

**Challenges**
Mention one or two challenges you encountered and how you solved them.

**Known Limitations**
If something is incomplete or could be improved, tell us.

Do not pretend that everything is perfect.

**Then fill in the application form:** [BuildLab Application Form](https://docs.google.com/forms/d/e/1FAIpQLSfY1UWLsTv9_4yo_hMGW_ttUgfo9AAPRFBc1VZy5LPFAdJHaQ/viewform)

---

## 8. Code Review

After submitting your Pull Request, BuildLab will review your work.

You may receive comments or requests for changes.

For example, a reviewer may ask you to:

- Fix a bug
- Improve part of the code
- Improve an error state
- Explain a technical decision
- Refactor a section
- Improve accessibility
- Improve the user experience

If changes are requested:

1. Make the changes on the same branch.
2. Commit the changes.
3. Push the branch again.

Your existing Pull Request will automatically update.

You do not need to create a new Pull Request.

---

## 9. Be Ready to Explain Your Work

After submitting your application, you may be asked questions about your implementation.

For example:

- Why did you structure your HTML this way?
- How does your task creation work?
- How are tasks stored?
- How does your search work?
- How does LocalStorage work in your application?
- What happens when the user refreshes the page?
- Why did you choose this design?
- What did AI help you with?
- What problems did you encounter?
- What would you improve if you had more time?

You do not need to know every answer immediately.

If you do not know something, be honest and explain how you would find the answer.

---

## 10. Project Quality

We are not expecting a production-ready application.

However, your project should demonstrate reasonable care.

We will look at things such as:

- Working functionality
- Clean HTML
- Organized CSS
- Readable JavaScript
- Reasonable naming
- Good user experience
- Responsive design
- Basic error handling
- Good Git practices
- Clear documentation

A simple but well-built application is completely acceptable.

---

## 11. Security

Do not commit sensitive information to GitHub.

Never commit:

- Passwords
- API keys
- Secret tokens
- Private credentials
- Other sensitive information

For this challenge, you should not need any secret credentials.

---

## 12. Keep the Scope Reasonable

You do not need to build:

- User authentication
- Payment systems
- Chat
- Notifications
- Admin dashboards
- Complex backend systems
- AI agents
- APIs
- Databases

Focus on completing the required application properly.

We value a well-finished MVP more than an unfinished application with many unnecessary features.

---

## 13. Optional Features

Once all required features are working, you may add additional features using only HTML, CSS, and JavaScript.

Examples:

- Task priorities
- Categories
- Due dates
- Sorting
- Dark mode
- Keyboard shortcuts
- Drag and drop
- Task statistics
- Better accessibility
- Custom confirmation dialogs

Optional features are not required.

Do not sacrifice required features just to add extra features.

---

## 14. Documentation

Your completed project should include documentation explaining:

- What the application does
- Technologies used
- How to run the application
- How tasks are stored
- AI tools used
- Known limitations

Another developer should be able to clone your repository and understand how to run your project.

---

## 15. Submission Checklist

Before creating your Pull Request, make sure:

- [ ] Application runs correctly
- [ ] Tasks can be created
- [ ] Tasks can be viewed
- [ ] Tasks can be completed
- [ ] Tasks can be deleted
- [ ] Tasks can be searched
- [ ] Tasks can be filtered
- [ ] Task summary works
- [ ] Data remains after refresh
- [ ] LocalStorage works correctly
- [ ] Empty states are handled
- [ ] Invalid input is handled
- [ ] Application works on mobile
- [ ] HTML is reasonably organized
- [ ] CSS is reasonably organized
- [ ] JavaScript is reasonably organized
- [ ] No sensitive information is committed
- [ ] A Git branch was used
- [ ] Commits have meaningful messages
- [ ] Project documentation is included
- [ ] Pull Request description is complete
- [ ] AI usage has been documented
- [ ] You can explain your implementation
- [ ] The application form has been submitted (after opening your Pull Request)

---

## 16. Important

You are not expected to know everything before starting this challenge.

You are allowed to:

- Research
- Read documentation
- Use AI
- Make mistakes
- Ask questions when something is unclear

What matters is how you approach the problem, learn what you need, build the solution, and take responsibility for the work you submit.

---

## 17. Final Submission

The expected workflow is:

```text
Fork
  ↓
Clone
  ↓
Create Branch
  ↓
Plan
  ↓
Build
  ↓
Test
  ↓
Commit
  ↓
Push
  ↓
Pull Request
  ↓
Application Form
  ↓
Code Review
  ↓
Make Changes
  ↓
Final Review
```

**Build something you can explain, not just something that runs.**

---

**BuildLab Community**

Student Software Engineering Community
