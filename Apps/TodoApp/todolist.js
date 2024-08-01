
const todoApp = document.querySelector('.todoApp');
todoApp.innerHTML = `
<div class="container">
    <div class="title">To do</div>
    <div class="buttons">
        <button class="button" id="todoMinimizeBtn">-</button>
        <button class="button" id="todoMaximizeBtn">
            <i class="fa-solid fa-window-maximize"></i>
        </button>
        <button class="button" id="todoCloseBtn">X</button>
    </div>
</div>
                    <div class="containerTodo">
        <h1>TODO APP</h1>
        <div class="todo-app">
            <div class="todo">
                <input type="text" placeholder="Add a new task..." id="taskInput">
                <button id="addTaskButton">Add Task</button>
            </div>
            <div class="todo-list">
                <h2>Todo List</h2>
                <ul class="list" id="taskList">
                </ul>
            </div>
        </div>
    </div>
`















// Select the elements from the DOM
const input = document.querySelector('#taskInput');
const button = document.querySelector('#addTaskButton');
const taskList = document.querySelector('#taskList');
const todoCloseBtn = document.querySelector('#todoCloseBtn');
const todoMaximizeBtn = document.querySelector('#todoMaximizeBtn');
const containerTodo = document.querySelector('.containerTodo');

// Define the events function which will be executed when the button is clicked
const events = function () {
    const newTask = input.value.trim();
    if (newTask === "") {
        alert("Please enter a task");
        return;
    }

    const newElem = createTask(newTask);
    taskList.appendChild(newElem);
    input.value = '';

    function createTask(newTask) {
        const div = document.createElement('div');
        const li = document.createElement('li');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        li.textContent = newTask;

        editButton.innerText = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', function () {
            const updatedTask = prompt("Edit your task:", li.textContent);
            if (updatedTask !== null && updatedTask.trim() !== "") {
                li.textContent = updatedTask.trim();
            }
        });

        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function () {
            newElem.remove();
        });

        div.appendChild(li);
        div.appendChild(editButton);
        div.appendChild(deleteButton);

        return div;
    }
}

const todoCloseBtnHandler = () => {
    todoApp.style.display = 'none'
}

const  todoMaximizeBtnHandler = () => {
    todoApp.style.top = '0px';
    todoApp.style.left = '0px';
    todoApp.style.height = '100%';
    todoApp.style.width= '100%';
    containerTodo.style.height = '100%'
    containerTodo.style.width = '100%'
}





todoCloseBtn.addEventListener('click',todoCloseBtnHandler);
button.addEventListener('click', events);
todoMaximizeBtn.addEventListener('click', todoMaximizeBtnHandler)



