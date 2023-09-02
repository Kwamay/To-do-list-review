import {
  addTask,
  removeTask,
  getTaskLength,
  editTask,
  checkedBox,
  clearCompletedTasks,
} from './operationFunctions.js';

let store = {};

// Mock the localStorage object
const localStorageMock = (() => ({
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
}))();

describe('DOM Manipulation Functions', () => {
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
  test('addTask should add a new task to the DOM', () => {
    expect(getTaskLength()).toBe(0);
    // Simulate a task description
    const taskDescription = 'Sample Task';
    // Call the addTask function with the task description
    addTask(taskDescription, localStorageMock);
    expect(getTaskLength()).toBe(1);
    // Your assertions here to check if the task was added to the DOM
  });

  test('editTask should edit task in the DOM', () => {
    const editDescription = 'editTask';
    const response = editTask(1, editDescription, localStorageMock);
    expect(response).toBe(editDescription);
  });

  test('removeTask should remove task to the DOM', () => {
    expect(getTaskLength()).toBe(1);
    removeTask(0, localStorageMock);
    expect(getTaskLength()).toBe(0);
  });

  test('should mark a task complete in the DOM', () => {
    const taskDescription = 'Sample Task';
    addTask(taskDescription, localStorageMock);
    const task = checkedBox('1', localStorageMock);
    expect(task.completed).toBe(true);
  });

  test('clearComplete should clear task in the DOM', () => {
    expect(getTaskLength()).toBe(1);
    const taskNumber = clearCompletedTasks(localStorageMock);
    expect(taskNumber).toBe(0);
  });
});
