import express from "express";
import todoRouter from "./api/routes/todoRouter.js";
import { HttpError } from "./HttpError.js";
// ---------------------------------------------------------------------
const app = express();
app.use(express.json());
app.use(todoRouter);
app.use((err, req, res, next) => {
    const statusCode = err instanceof HttpError ? err.statusCode : 500;
    const message = err.message || "Something went wrong";
    res.status(statusCode).json({ error: message });
});
app.listen(3000);
