const todos = require('../data/todos');

exports.getAll = (req, res) => {
  res.json(todos);
};

exports.create = (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    title: req.body.title,
    done: false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
};

exports.toggle = (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);

  if (!todo) return res.status(404).json({ message: "Not found" });

  todo.done = !todo.done;
  res.json(todo);
};
