import { addTodo, getTodo, getTodos, removeTodo, updateTodo } from "../../data.js";
import { HttpError } from "../../HttpError.js";
// ---------------------------------------------------------------------
function index(req, res) {
    const todos = getTodos();
    res.json({ todos });
}
// ---------------------------------------------------------------------
function store(req, res) {
    const text = req.body.text;
    const addedTodo = addTodo(text);
    res.json({ message: "Todo added!", todo: addedTodo });
}
// ---------------------------------------------------------------------
export function get(req, res, next) {
    try {
        const id = Number(req.params.id);
        const todo = getTodo(id);
        if (!todo) {
            // Throw an error instead of responding directly
            throw new HttpError("Todo not found!", 404);
        }
        res.json({ todo });
    }
    catch (err) {
        next(err); // Forward to global error middleware
    }
}
// ---------------------------------------------------------------------
export function update(req, res, next) {
    try {
        const id = Number(req.params.id);
        if (!getTodo(id)) {
            // Throw an error instead of responding directly
            throw new HttpError("Todo not found!", 404);
        }
        const message = "Todo updated";
        const todo = updateTodo(id, req.body.text);
        res.json({ todo, message });
    }
    catch (err) {
        next(err); // Forward to global error middleware
    }
}
// ---------------------------------------------------------------------
export function remove(req, res, next) {
    try {
        const id = Number(req.params.id);
        if (!getTodo(id)) {
            // Throw an error instead of responding directly
            throw new HttpError("Todo not found!", 404);
        }
        removeTodo(id);
        res.json({ message: "Todo has been deleted" });
    }
    catch (err) {
        next(err); // Forward to global error middleware
    }
}
// ---------------------------------------------------------------------
export default {
    store,
    index,
    get,
    update,
    remove
};
