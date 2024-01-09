"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todosRoutes_1 = __importDefault(require("./routes/todosRoutes"));
// ---------------------------------------------------------------------
const app = (0, express_1.default)();
// ---------------------------------------------------------------------
// Used to parse JSON bodies
app.use(express_1.default.json());
// Parse URL-encoded bodies
app.use(express_1.default.urlencoded({ extended: true }));
// This line is not needed if you're using Express 4.16.0 or higher
// app.use(bodyParser.json());
// ---------------------------------------------------------------------
app.use(todosRoutes_1.default);
app.listen(3000);
