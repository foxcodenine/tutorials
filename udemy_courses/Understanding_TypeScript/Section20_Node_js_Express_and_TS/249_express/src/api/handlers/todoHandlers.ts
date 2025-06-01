import { type NextFunction, type Request, type Response } from "express";
import { addTodo, getTodo, getTodos, removeTodo, updateTodo } from "../../data.js";
import { HttpError } from "../../HttpError.js";

// ---------------------------------------------------------------------

// List all todos
function index(req: Request, res: Response, next: NextFunction) {
    try {
        const todos = getTodos();
        res.json({ todos });
    } catch (err) {
        next(err);
    }
}

// ---------------------------------------------------------------------

// Add a new todo
function store(req: Request, res: Response, next: NextFunction) {
    try {
        const text = req.body.text;
        // Validate input
        if (!text || typeof text !== "string" || text.trim() === "") {
            throw new HttpError("Field 'text' is required.", 400);
        }
        const addedTodo = addTodo(text.trim());
        res.json({ message: "Todo added!", todo: addedTodo });
    } catch (err) {
        next(err);
    }
}

// ---------------------------------------------------------------------

// Get a single todo by ID
function get(req: Request, res: Response, next: NextFunction) {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw new HttpError("Invalid ID.", 400);
        }
        const todo = getTodo(id);

        if (!todo) {
            throw new HttpError("Todo not found!", 404);
        }
        res.json({ todo });
    } catch (err) {
        next(err);
    }
}

// ---------------------------------------------------------------------

// Update a todo by ID
function update(req: Request, res: Response, next: NextFunction) {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw new HttpError("Invalid ID.", 400);
        }
        if (!getTodo(id)) {
            throw new HttpError("Todo not found!", 404);
        }
        const text = req.body.text;
        // Validate input
        if (!text || typeof text !== "string" || text.trim() === "") {
            throw new HttpError("Field 'text' is required to update todo.", 400);
        }
        const todo = updateTodo(id, text.trim());
        res.json({ todo, message: "Todo updated" });
    } catch (err) {
        next(err);
    }
}

// ---------------------------------------------------------------------

// Delete a todo by ID
function remove(req: Request, res: Response, next: NextFunction) {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw new HttpError("Invalid ID.", 400);
        }
        if (!getTodo(id)) {
            throw new HttpError("Todo not found!", 404);
        }
        removeTodo(id);
        res.json({ message: "Todo has been deleted" });
    } catch (err) {
        next(err);
    }
}

// ---------------------------------------------------------------------

export default {
    store,
    index,
    get,
    update,
    remove
}
