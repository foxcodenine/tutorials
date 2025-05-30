import express from "express";
import { todoPostHander } from "../handlers/todoHandlers.js";
// ---------------------------------------------------------------------
const router = express.Router();
// ---------------------------------------------------------------------
router.post('/todos', todoPostHander);
// ---------------------------------------------------------------------
export default router;
