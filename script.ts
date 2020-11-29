interface Task {
    title: string,
    description: string, 
}

interface Todo {
    todos: Task[],
}

var currentTodo: Todo = {
    "todos": []
};

function addTaskToList(): void {
    let taskTitle: string = (<HTMLInputElement>document.getElementById("todo-title")).value;
    let taskDescription: string = (<HTMLInputElement>document.getElementById("todo-description")).value;
    addTask(taskTitle, taskDescription);
} 

function addTask(title: string, description: string): void {
    let newTask:Task = {
        "title": title,
        "description": description
    };

    currentTodo.todos.push(newTask);
    displayTasks();
}

function deleteTask(): void {
    currentTodo.todos.pop();
}

function returnTasks(): void {
    currentTodo.todos.forEach(element => {
        console.log("Title: " + element.title);
        console.log("Description: " + element.description);
    });
}

function displayTasks(): void {
    const listDiv = document.getElementById("todo-list");
    currentTodo.todos.forEach(element => {
        const todo = document.createElement("div")
        const title = document.createElement("p")
        const description = document.createElement("p")

        title.innerHTML = element.title;
        description.innerHTML = element.description;

        todo.appendChild(title)
        todo.appendChild(description)

        listDiv?.appendChild(todo)
    });
}