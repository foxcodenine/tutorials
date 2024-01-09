import express from 'express';
import todosRoutes from './routes/todosRoutes';

// ---------------------------------------------------------------------

const app = express();

// ---------------------------------------------------------------------
// Used to parse JSON bodies
app.use(express.json()); 

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// This line is not needed if you're using Express 4.16.0 or higher
// app.use(bodyParser.json());

// ---------------------------------------------------------------------

app.use(todosRoutes);

app.listen(3000);
