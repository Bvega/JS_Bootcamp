// ========================================================
// BootCamp Day 1 — JavaScript Basics in Action
// ========================================================
// This file is your playground. Every line is explained with
// WHAT it does, WHY it matters, and HOW it connects.
// ========================================================

// -------------------------
// 1. Debugging tool: console.log()
// -------------------------
// console.log() prints messages into the browser's console.
// You’ll use this all the time to “see inside” your program.
console.log("Welcome to Bolivar JS BootCamp — Day 1");


// -------------------------
// 2. Grabbing HTML elements (DOM references)
// -------------------------
// We “connect” JavaScript with HTML by grabbing elements
// using their IDs. This lets us read/change them later.

const buttonA = document.getElementById("button_A");  // First button
const buttonB = document.getElementById("button_B");  // Second button
const headingA = document.getElementById("heading_A"); // <h3> heading
const taskContainer = document.getElementById("task-container"); // Task area


// -------------------------
// 3. Adding event listeners
// -------------------------
// An event listener waits for an action (like a click).
// When the button is clicked, the code inside the function runs.

buttonA.addEventListener("click", () => {
  console.log("Button A was clicked!"); // Logs in console
  headingA.textContent = "👉 You clicked Button A!"; // Changes the heading
});

buttonB.addEventListener("click", () => {
  console.log("Button B was clicked!"); // Logs in console
  headingA.textContent = "👉 You clicked Button B!"; // Changes the heading
});


// -------------------------
// 4. Creating and inserting a new task
// -------------------------
// This shows how to build an HTML element using JavaScript
// and place it into the page dynamically.

const newTask = document.createElement("p");  // Step 1: Create a <p> element
newTask.textContent = "🚀 First Task Loaded!"; // Step 2: Add text inside it
taskContainer.appendChild(newTask);           // Step 3: Insert it in the container


// ========================================================
// ✅ SUMMARY OF TODAY:
// - console.log is your “window” to debug
// - document.getElementById links JS to HTML
// - addEventListener makes buttons interactive
// - createElement + appendChild let you build content on the fly
// ========================================================
