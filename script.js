var currentTodo = {
    "todos": []
};
function addTask(title, description) {
    var newTask = {
        "title": title,
        "description": description
    };
    currentTodo.todos.push(newTask);
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
