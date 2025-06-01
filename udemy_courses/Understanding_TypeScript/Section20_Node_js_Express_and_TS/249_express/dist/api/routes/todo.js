import exporess from "express";
import { todoPostHander } from "../handlers/todoHandlers.js";
// ---------------------------------------------------------------------
const router = exporess.Router();
// ---------------------------------------------------------------------
router.post('/todos', todoPostHander);
