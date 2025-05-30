import { Request, Response } from "express";
import { addTodo } from "../../data.js";

export function todoPostHander(req: Request, res: Response) {

    const text = req.body.text;


    const addedTodo = addTodo(text);

    res.json({message: "Todo added!", todo: addedTodo});
}