import { addTodo } from "../../data.js";
export function todoPostHander(req, res) {
    const text = req.body.text;
    const addedTodo = addTodo(text);
    res.json({ message: "Todo added!", todo: addedTodo });
}
