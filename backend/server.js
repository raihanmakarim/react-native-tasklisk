const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];
let nextId = 1;

// Create a new task
app.post('/tasks', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).send({ code: 'error', message: 'Task is required' });
  }
  const newTask = { id: nextId++, task };
  tasks.push(newTask);
  res.status(201).send({ code: 'success', message: 'Task created', payload: newTask });
});

// Get all tasks
app.get('/tasks', (req, res) => {
  res.send({ code: 'success', message: 'Tasks retrieved', payload: tasks });
});

// Update a task
app.put('/tasks', (req, res) => {
  const { id, task } = req.body;
  const taskIndex = tasks.findIndex(t => t.id === id);
  if (taskIndex === -1) {
    return res.status(404).send({ code: 'error', message: 'Task not found' });
  }
  tasks[taskIndex].task = task;
  res.send({ code: 'success', message: 'Task updated', payload: tasks[taskIndex] });
});

// Delete a task
app.delete('/tasks', (req, res) => {
    const { id } = req.body;
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) {
      return res.status(404).send({ code: 'error', message: 'Task not found' });
    }
    const deletedTask = tasks.splice(taskIndex, 1)[0]; // Extract the deleted task object
    res.send({ code: 'success', message: 'Task deleted', payload: deletedTask });
  });



app.listen(port, () => {
  console.log(`Task app listening at http://localhost:${port}`);
});
