var currentTodo = {
    "todos": [{ title: "Test", description: "Test description" }]
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
function displayTasks() {
    var listDiv = document.getElementById("todo-list");
    currentTodo.todos.forEach(function (element) {
        var todo = document.createElement("div");
        todo.className = "todo";
        var checkboxDiv = document.createElement("div");
        checkboxDiv.className = "checkbox";
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxDiv.appendChild(checkbox);
        var actionDiv = document.createElement("div");
        actionDiv.className = "task";
        var title = document.createElement("p");
        title.className = "task-title";
        var description = document.createElement("p");
        description.className = "task-description";
        actionDiv.appendChild(title);
        actionDiv.appendChild(description);
        title.innerHTML = element.title;
        description.innerHTML = element.description;
        todo.appendChild(checkboxDiv);
        todo.appendChild(actionDiv);
        listDiv === null || listDiv === void 0 ? void 0 : listDiv.appendChild(todo);
    });
}
