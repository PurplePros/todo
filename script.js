var currentTodo = {
    "todos": []
};
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
    currentTodo.todos.push(newTask);
    displayTasks();
}
function deleteTask() {
    currentTodo.todos.pop();
}
function returnTasks() {
    currentTodo.todos.forEach(function (element) {
        console.log("Title: " + element.title);
        console.log("Description: " + element.description);
    });
}
function displayTasks() {
    var listDiv = document.getElementById("todo-list");
    currentTodo.todos.forEach(function (element) {
        var todo = document.createElement("div");
        var title = document.createElement("p");
        var description = document.createElement("p");
        title.innerHTML = element.title;
        description.innerHTML = element.description;
        todo.appendChild(title);
        todo.appendChild(description);
        listDiv === null || listDiv === void 0 ? void 0 : listDiv.appendChild(todo);
    });
}
