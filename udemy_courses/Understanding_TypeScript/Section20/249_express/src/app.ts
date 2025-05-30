import { createServer } from "node:http";
import express from "express";
import todoRouter from "./api/routes/todoRouter.js";

const app = express();

app.use(express.json());

app.use(todoRouter);

app.listen(3000)