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

function addTask(title: string, description: string): void {
    let newTask:Task = {
        "title": title,
        "description": description
    };

    currentTodo.todos.push(newTask);
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