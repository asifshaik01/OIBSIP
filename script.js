document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');
    const addButton = document.getElementById('add-button');
    const newTaskInput = document.getElementById('new-task');
  
    addButton.addEventListener('click', addTask);
  
    function addTask() {
      const taskText = newTaskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');
        const taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.value = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask);
        li.appendChild(taskInput);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        newTaskInput.value = '';
      }
    }
  
    function deleteTask(event) {
      const li = event.target.parentNode;
      todoList.removeChild(li);
    }
  });
  