"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// ---------------------------------------------------------------------
// Create an Express Router
const router = (0, express_1.Router)();
// Define an array to store todos
let todos = [];
// ---------------------------------------------------------------------
// Handle GET request to retrieve all todos
router.get('/todo', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
// ---------------------------------------
// Handle POST request to add a new todo
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Todo added successfully', todo: newTodo });
});
// ---------------------------------------
// Handle PUT request to update an existing todo
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === params.todoId);
    const body = req.body;
    if (todoIndex >= 0) {
        // Update the existing todo
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text
        };
        return res.status(200).json({ message: 'Updated todo', todos: todos });
    }
    // If the todo with the specified id is not found, return a 404 status
    res.status(404).json({ message: 'Could not find todo for this id.' });
});
// ---------------------------------------
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
    res.status(200).json({ message: 'Deleted todo', todos: todos });
});
// ---------------------------------------------------------------------
exports.default = router;
