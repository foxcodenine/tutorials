import express from "express";
import todoHander from "../handlers/todoHandlers.js";
// ---------------------------------------------------------------------

const router = express.Router();

// ---------------------------------------------------------------------

router.post('/todos', todoHander.store);
router.get('/todos', todoHander.index);
router.get('/todos/:id', todoHander.get);
router.patch('/todos/:id', todoHander.update);
router.delete('/todos/:id', todoHander.remove);

// ---------------------------------------------------------------------

export default router;