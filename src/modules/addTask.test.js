import { addTask, removeTask, taskLength, editTask, mark } from "./operationFunctions.js";
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

  test("editTask should edit task in the DOM", () => {
   
    // Simulate a task description
    const editDescription = "editTask";
    // Call the editTask function with the task description
    const response = editTask(1, editDescription, localStorageMock);
    expect(response).toBe(editDescription);
    // Your assertions here to check if the task was added to the DOM
  });


  test("removeTask should remove task to the DOM", () => {
    expect(taskLength).toBe(1);
    // Simulate a task description
    const taskDescription = "Sample Task";
    // Call the removeTask function with the task description
    removeTask(1, localStorageMock);
    expect(taskLength).toBe(0);
    // Your assertions here to check if the task was added to the DOM
  });
 
  test("markC should remove task to the DOM", () => {
    //expect(taskLength).toBe(1);
    // Simulate a task description
    const taskDescription = "Sample Task";
    // Call the removeTask function with the task description
    removeTask(1, localStorageMock);
    //expect(taskLength).toBe();
    // Your assertions here to check if the task was added to the DOM
  });
 
 });
