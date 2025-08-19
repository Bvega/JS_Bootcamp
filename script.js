"use strict";
/*
Bolivar JS BootCamp — Day 2 (Annotated Examples)
Paste this entire file into your script.js (or merge with your current file).
It follows the Day 1 class flow and adds Day 2 data-type demos + input→task flow.
*/

// ------------------------------------------------------
// Boot markers (helps confirm the script is loaded)
// ------------------------------------------------------
console.log("BootCamp Day 1 Ready");
console.log("BootCamp Day 2 Ready");

// ------------------------------------------------------
// DOM references (Day 1 + Day 2)
// ------------------------------------------------------
const taskContainer  = document.getElementById("task-container");
const buttonA        = document.getElementById("button_A");
const buttonB        = document.getElementById("button_B");
const headingA       = document.getElementById("heading_A");

// Day 2 inputs
const inputTitle     = document.getElementById("task_title");
const inputDesc      = document.getElementById("task_desc");
const addTaskBtn     = document.getElementById("add_task_btn");
const inputFeedback  = document.getElementById("input_feedback");

// ------------------------------------------------------
// Small utilities (from Day 1)
// ------------------------------------------------------
function showMessageInHeading(message) {
  if (headingA) headingA.textContent = message;
}

function appendSampleTask() {
  if (!taskContainer) return;
  const card = document.createElement("div");
  card.className = "task-card";
  card.innerHTML = `
    <p><strong>Sample Task</strong></p>
    <p>Created at: ${new Date().toLocaleTimeString()}</p>
  `;
  taskContainer.appendChild(card);
}

// Keep demo buttons wired
if (buttonA) {
  buttonA.addEventListener("click", () => {
    showMessageInHeading("Button A was clicked! 🎯");
    console.log("Button A click handled");
  });
}
if (buttonB) {
  buttonB.addEventListener("click", () => {
    appendSampleTask();
    showMessageInHeading("A sample task was added 🧩");
    console.log("Button B click handled");
  });
}

// ======================================================
// BLOCK A — Data Types & typeof (WHAT → WHY → HOW)
// ======================================================
/*
WHAT: JavaScript has primitive and reference types. typeof inspects them.
WHY: Correctly handling types prevents bugs and helps with validation.
HOW: Log typeof results for a set of samples; show dynamic typing.
*/

const samples = {
  stringVal:   "Hola",                   // string
  numberVal:   42,                       // number (integers + decimals)
  booleanVal:  true,                     // boolean
  nullVal:     null,                     // null  (typeof null === "object": JS legacy quirk)
  undefVal:    undefined,                // undefined
  objectVal:   { a: 1, b: 2 },           // object
  arrayVal:    [1, 2, 3],                // object (use Array.isArray to detect arrays)
  funcVal:     function () {},           // function
  bigIntVal:   9007199254740991n,        // BigInt (bonus)
  symbolVal:   Symbol("id")              // Symbol (bonus)
};

console.log("=== Day 2: typeof samples ===");
for (const key in samples) {
  console.log(key, "→", samples[key], "| typeof:", typeof samples[key]);
}
console.log("Array check:", "Array.isArray(samples.arrayVal) →", Array.isArray(samples.arrayVal));

// Dynamic typing demo: the same variable can change type (not recommended in production)
let changing = 10;           // number
console.log("changing:", changing, "| typeof:", typeof changing);
changing = "ten";            // string
console.log("changing:", changing, "| typeof:", typeof changing);

// ======================================================
// BLOCK B — Input → Task Object → Render
// ======================================================
/*
WHAT: Read user input, validate, build a task object, render UI.
WHY: This mirrors a real app workflow (form → validate → build → display).
HOW: 1) Select inputs 2) Validate title 3) Build task object 4) Render card
*/

// In-memory storage for today's session (simple array for Day 2)
const day2Tasks = [];

// Factory: build a task object
function makeTask({ title, description }) {
  return {
    id: Date.now(),                       // simple unique-ish id
    title: String(title).trim(),          // guard against non-strings
    description: String(description || "").trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };
}

// Render: create a card in the UI
function renderTaskCard(task) {
  if (!taskContainer) return;
  const card = document.createElement("div");
  card.className = "task-card";
  card.innerHTML = `
    <p><strong>${task.title}</strong></p>
    ${task.description ? `<p>${task.description}</p>` : ""}
    <small>Created: ${new Date(task.createdAt).toLocaleString()}</small>
  `;
  taskContainer.appendChild(card);
}

// Click handler for "Add Task"
if (addTaskBtn) {
  addTaskBtn.addEventListener("click", () => {
    const rawTitle = inputTitle ? inputTitle.value : "";
    const rawDesc  = inputDesc ? inputDesc.value : "";

    // Type inspection (learning)
    console.log("Input typeof title:", typeof rawTitle, "| value:", rawTitle);
    console.log("Input typeof desc:",  typeof rawDesc,  "| value:", rawDesc);

    // Basic validation: title required, <= 80 chars
    if (!rawTitle || !rawTitle.trim()) {
      if (inputFeedback) inputFeedback.textContent = "⚠️ Title is required.";
      showMessageInHeading("Provide a title to add a task.");
      return;
    }
    if (rawTitle.trim().length > 80) {
      if (inputFeedback) inputFeedback.textContent = "⚠️ Title too long (max 80 characters).";
      showMessageInHeading("Shorten the title.");
      return;
    }

    // Build, store, render
    const task = makeTask({ title: rawTitle, description: rawDesc });
    day2Tasks.push(task);
    renderTaskCard(task);

    // Reset inputs + feedback
    if (inputTitle) inputTitle.value = "";
    if (inputDesc)  inputDesc.value  = "";
    if (inputFeedback) inputFeedback.textContent = "✅ Task added.";
    showMessageInHeading(`Added task: "${task.title}"`);
  });
}

/*
Stretch Ideas:
- Display a live counter of tasks.
- Prevent duplicate titles (case-insensitive).
- Sanitize user input further or escape HTML to avoid injection (we'll cover security later).
*/

/* Optional tiny CSS (put in style.css):
body { font-family: system-ui, Arial, sans-serif; padding: 1rem; }
label { display: inline-block; margin: 0.5rem 1rem 0.5rem 0; }
.muted { color: #666; margin-top: 0.25rem; }
.task-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  margin: 0.5rem 0;
  background: #fafafa;
}
*/
