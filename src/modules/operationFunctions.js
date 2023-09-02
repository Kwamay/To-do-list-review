let tasks = [];
let taskLength = 0;
const saveTasksToLocalStorage = (localStorage) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
const loadTasksFromLocalStorage = (localStorage) => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = storedTasks || [];
};
const populateTasks = () => {
  const ulTag = document.getElementById('list');
  while (ulTag.hasChildNodes()) {
    ulTag.removeChild(ulTag.firstChild);
  }
  tasks.forEach((task, index) => {
    //        <li>

    const listItem = document.createElement('li');

    listItem.className = 'list-item';
    listItem.innerHTML = `
        <input type="checkbox" data-index=${
  task.index
} class='check' id='check-${index}' ${task.completed ? 'checked' : ''}>
        <input type='text' id='editForm-${task.index}' class='item ${
  task.completed ? 'strike' : ''
}' value = ${task.description} data-index='${task.index}'>
      `;

    // <i>
    const iTag = document.createElement('i');
    iTag.className = 'fas fa-ellipsis-v';

    // <div>
    const divTag = document.createElement('div');
    ulTag.appendChild(divTag);

    divTag.className = 'list-container';
    divTag.appendChild(listItem);
    divTag.appendChild(iTag);
  });
};
const addTask = (description, localStorage) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.unshift(newTask);
  saveTasksToLocalStorage(localStorage);
  populateTasks();
  taskLength += 1;
};
const getTaskLength = () => taskLength;
const removeTask = (index, localStorage) => {
  tasks.splice(index, 1);
  tasks.forEach((task, idx) => {
    task.index = idx;
  });
  saveTasksToLocalStorage(localStorage);
  populateTasks();
  taskLength -= 1;
};

const editTask = (index, newDescription, localStorage) => {
  tasks[index - 1].description = newDescription;
  saveTasksToLocalStorage(localStorage);
  return tasks[index - 1].description;
};

const clearCompletedTasks = (localStorage) => {
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((task, idx) => {
    task.index = idx + 1;
  });

  saveTasksToLocalStorage(localStorage);
  populateTasks();
  return tasks.length;
};

const checkedBox = (taskIndex, localStorage) => {
  const task = tasks.find((task) => task.index === +taskIndex);
  task.completed = true;
  saveTasksToLocalStorage(localStorage);
  return task;
};

const notChecked = (taskIndex) => {
  const task = tasks.find((task) => task.index === +taskIndex);
  task.completed = false;
  saveTasksToLocalStorage(localStorage);
  populateTasks();
};

// Check if localStorage is available (browser environment)
if (typeof localStorage !== 'undefined') {
  loadTasksFromLocalStorage(localStorage);
}

export {
  populateTasks,
  checkedBox,
  notChecked,
  addTask,
  removeTask,
  editTask,
  clearCompletedTasks,
  getTaskLength,
  // ... other functions
};
