interface Task {
    title: string,
    description: string, 
}

interface Todo {
    todos: Task[],
}

var currentTodo: Todo = {
    "todos": [{title: "Test", description: "Test description"}]
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

function displayTasks(): void {
    const listDiv = document.getElementById("todo-list");
    currentTodo.todos.forEach(element => {
        const todo = document.createElement("div")
        todo.className = "todo"

        const checkboxDiv = document.createElement("div")
        checkboxDiv.className = "checkbox"
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkboxDiv.appendChild(checkbox)

        const actionDiv = document.createElement("div")
        actionDiv.className = "task"
        const title = document.createElement("p")
        title.className = "task-title"
        const description = document.createElement("p")
        description.className = "task-description"
        actionDiv.appendChild(title)
        actionDiv.appendChild(description)

        title.innerHTML = element.title;
        description.innerHTML = element.description;

        todo.appendChild(checkboxDiv)
        todo.appendChild(actionDiv)

        listDiv?.appendChild(todo)
    });
}