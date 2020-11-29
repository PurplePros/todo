interface Task {
    title: string,
    description: string, 
}

type Todo = Map<number, Task>; 
var currentTodo: Todo = new Map<number, Task>();
var completedTodo: Todo = new Map<number, Task>();

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

    let key = currentTodo.size + 1;
    currentTodo.set(key, newTask);
    insertNewTaskHTML(newTask);
}

function deleteTask(taskId: number): void {
    currentTodo.delete(taskId);
}

function insertCompletedTaskHTML(task: Task): void {
    const listDiv = document.getElementById("completed-list");

    const todo = document.createElement("div")
    todo.className = "completed-todo"

    const actionDiv = document.createElement("div")
    actionDiv.className = "task"
    const title = document.createElement("p")
    title.className = "task-title"
    const description = document.createElement("p")
    description.className = "task-description"
    actionDiv.appendChild(title)
    actionDiv.appendChild(description)

    title.innerHTML = task.title;
    description.innerHTML = task.description;

    todo.appendChild(actionDiv)

    listDiv?.appendChild(todo)
}

function insertNewTaskHTML(task: Task): void {
    const listDiv = document.getElementById("todo-list");

    const todo = document.createElement("div")
    todo.className = "todo"

    const checkboxDiv = document.createElement("div")
    checkboxDiv.className = "checkbox"
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.value = currentTodo.size + ""; 
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            let taskId = parseInt(checkbox.value)
            if (!isNaN(taskId))
                deleteTask(taskId)
            let parentDiv = checkboxDiv.parentElement;
            setTimeout(() => {
                if (parentDiv) {
                    parentDiv.remove();
                }
            }, 250)

            completedTodo.set(taskId, task)
            setTimeout(() => {
                insertCompletedTaskHTML(task)
            }, 500);
        }
    })

    checkboxDiv.appendChild(checkbox)

    const actionDiv = document.createElement("div")
    actionDiv.className = "task"
    const title = document.createElement("p")
    title.className = "task-title"
    const description = document.createElement("p")
    description.className = "task-description"
    actionDiv.appendChild(title)
    actionDiv.appendChild(description)

    title.innerHTML = task.title;
    description.innerHTML = task.description;

    todo.appendChild(checkboxDiv)
    todo.appendChild(actionDiv)

    listDiv?.appendChild(todo)
}

function displayTasks(): void {
    const listDiv = document.getElementById("todo-list");
    
    if (listDiv)
        listDiv.innerHTML = '';

    currentTodo.forEach(element => {
        insertNewTaskHTML(element);
    });
}