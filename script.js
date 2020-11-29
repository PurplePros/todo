var currentTodo = new Map();
var completedTodo = new Map();
function addTaskToList() {
    var taskTitle = document.getElementById("todo-title").value;
    var taskDescription = document.getElementById("todo-description").value;
    addTask(taskTitle, taskDescription);
}
function addTask(title, description) {
    var newTask = {
        "title": title,
        "description": description
    };
    var key = currentTodo.size + 1;
    currentTodo.set(key, newTask);
    insertNewTaskHTML(newTask);
}
function deleteTask(taskId) {
    currentTodo["delete"](taskId);
}
function insertCompletedTaskHTML(task) {
    var listDiv = document.getElementById("completed-list");
    var todo = document.createElement("div");
    todo.className = "completed-todo";
    var actionDiv = document.createElement("div");
    actionDiv.className = "task";
    var title = document.createElement("p");
    title.className = "task-title";
    var description = document.createElement("p");
    description.className = "task-description";
    actionDiv.appendChild(title);
    actionDiv.appendChild(description);
    title.innerHTML = task.title;
    description.innerHTML = task.description;
    todo.appendChild(actionDiv);
    listDiv === null || listDiv === void 0 ? void 0 : listDiv.appendChild(todo);
}
function insertNewTaskHTML(task) {
    var listDiv = document.getElementById("todo-list");
    var todo = document.createElement("div");
    todo.className = "todo";
    var checkboxDiv = document.createElement("div");
    checkboxDiv.className = "checkbox";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = currentTodo.size + "";
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            var taskId = parseInt(checkbox.value);
            if (!isNaN(taskId))
                deleteTask(taskId);
            var parentDiv_1 = checkboxDiv.parentElement;
            setTimeout(function () {
                if (parentDiv_1) {
                    parentDiv_1.remove();
                }
            }, 250);
            completedTodo.set(taskId, task);
            setTimeout(function () {
                insertCompletedTaskHTML(task);
            }, 500);
        }
    });
    checkboxDiv.appendChild(checkbox);
    var actionDiv = document.createElement("div");
    actionDiv.className = "task";
    var title = document.createElement("p");
    title.className = "task-title";
    var description = document.createElement("p");
    description.className = "task-description";
    actionDiv.appendChild(title);
    actionDiv.appendChild(description);
    title.innerHTML = task.title;
    description.innerHTML = task.description;
    todo.appendChild(checkboxDiv);
    todo.appendChild(actionDiv);
    listDiv === null || listDiv === void 0 ? void 0 : listDiv.appendChild(todo);
}
function displayTasks() {
    var listDiv = document.getElementById("todo-list");
    if (listDiv)
        listDiv.innerHTML = '';
    currentTodo.forEach(function (element) {
        insertNewTaskHTML(element);
    });
}
