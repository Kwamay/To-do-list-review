import { addTask, removeTask, taskLength } from "./operationFunctions.js";
// import "./setupTests.js";

// Mock the localStorage object
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();
// Object.defineProperty(window, "localStorage", { value: localStorageMock });
describe("DOM Manipulation Functions", () => {
  document.body.innerHTML = `
<div class="container">
<h1 class="header">
  Today's To Do
  <button class="btn"><span class="fa fa-refresh"></span></button>
</h1>

<div class="list-add">
  <input
    class="addtasks"
    type="text"
    id="newList"
    placeholder="Add to your list..."
  />
  <span class="btn fa fa-plus" id="add-btn"></span>
</div>

<ul class="todo-list" id="list"></ul>
<button class="clear-button" id="clear">Clear all completed</button>
</div>
`;

  // ... Rest of your test setup
  test("addTask should add a new task to the DOM", () => {
    expect(taskLength).toBe(0);
    // Simulate a task description
    const taskDescription = "Sample Task";
    // Call the addTask function with the task description
    addTask(taskDescription, localStorageMock);
    expect(taskLength).toBe(1);
    // Your assertions here to check if the task was added to the DOM
  });
  test("removeTask should remove a task from the DOM", () => {
    // Simulate an index of the task to remove
    const taskIndexToRemove = 0;
    // Call the removeTask function with the index
    removeTask(taskIndexToRemove, localStorageMock);
    // Your assertions here to check if the task was removed from the DOM
  });
  // Other test cases for other functions
});
