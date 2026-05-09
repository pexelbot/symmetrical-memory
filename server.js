const express = require('express');
const app = express();

const todosRoutes = require('./routes/todos');

app.use(express.json());

app.use('/api/todos', todosRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
