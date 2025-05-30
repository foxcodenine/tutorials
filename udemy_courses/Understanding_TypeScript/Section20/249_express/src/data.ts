type Todo = {
    id: number;
    text: string;
}

const TODOS: Todo[] = [];

export function addTodo(text: string) {
    const id = TODOS.length + Math.random()
    const newTodo  = { id, text }
    TODOS.push(newTodo);
    return newTodo;
}

export function getTodos() {
    return TODOS;
}

export function getTodo(id: number) {
    return TODOS.find(t => t.id === id);
}

export function removeTodo(id: number) {
    const i = TODOS.findIndex(t => t.id == id);
    if (i != -1) {
        TODOS.splice(i, 1);
    }
}

export function updateTodo(id: number, text: string) {
    const todo = TODOS.find(t => t.id === id);

    if (!todo) {
        throw new Error("To do not found!");
    }

    todo.text = text;
}
