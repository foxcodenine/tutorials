const TODOS = [];
export function addTodo(text) {
    const id = TODOS.length + Math.random();
    const newTodo = { id, text };
    TODOS.push(newTodo);
    return newTodo;
}
export function getTodos() {
    return TODOS;
}
export function getTodo(id) {
    return TODOS.find(t => t.id === id);
}
export function removeTodo(id) {
    const i = TODOS.findIndex(t => t.id == id);
    if (i != -1) {
        TODOS.splice(i, 1);
    }
}
export function updateTodo(id, text) {
    const todo = TODOS.find(t => t.id === id);
    if (!todo) {
        throw new Error("To do not found!");
    }
    todo.text = text;
}
