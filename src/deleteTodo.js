const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function deleteTodo() {
const dataPath = '../json/todoData.json';

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

// Prompt for taskId
rl.question('Enter taskId: ', (taskId) => {
  // Filter out the task with the given taskId
  const filteredTodos = todos.filter(task => task.id != taskId);

  // Check if the task was found
  if (todos.length === filteredTodos.length) {
    console.log('Task not found');
  } else {
    // Write the updated data back to the file
    fs.writeFile(dataPath, JSON.stringify(filteredTodos), (err) => {
      if (err) {
        console.error('Error writing file: ', err);
      } else {
        console.log('Task deleted successfully');
      }

      rl.close();
    });
  }
});

});
}

module.exports = {
deleteTodo
};