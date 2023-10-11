const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function updateTodo() {
const dataPath = './todoData.json';

// Check if the data file exists
if (!fs.existsSync(dataPath)) {
console.error('Error: Data file not found');
return;
}

// Read the data from the file
fs.readFile(dataPath, 'utf8', (err, data) => {
if (err) {
console.error('Error reading data:', err);
rl.close();
return;
}
javascript

const todos = JSON.parse(data);

// Prompt for taskId and taskName
rl.question('Enter taskId: ', (taskId) => {
  rl.question('Enter taskName: ', (taskName) => {
    // Update the task with taskId and taskName
    const updatedTodos = todos.map(todo => {
      return todo.id === Number(taskId) ? { ...todo, task: taskName } : todo;
    });

    // Write the updated data back to the file
    fs.writeFile(dataPath, JSON.stringify(updatedTodos), (err) => {
      if (err) {
        console.error('Error updating task:', err);
      } else {
        console.log('Task updated successfully');
      }

      rl.close();
    });
  });
});

});
}

module.exports = {
updateTodo
};