const fs = require('fs');
const readline = require('readline');

function addTodo() {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// Prompt for taskId
rl.question('Enter taskId: ', (taskId) => {
// Prompt for taskName
rl.question('Enter taskName: ', (taskName) => {
const todo = { id: Number(taskId), task: taskName };
scheme

  // Read the data from the file
  fs.readFile('./todoData.json', 'utf8', (err, data) => {
    if (err) {
      console.log('Error reading data:', err);
      rl.close();
      return;
    }

    const todos = JSON.parse(data);
    todos.push(todo);

    // Write the updated data back to the file
    fs.writeFile('./todoData.json', JSON.stringify(todos), (err) => {
      if (err) {
        console.log('Error writing to file:', err);
      } else {
        console.log('Task added successfully ');
      }

      rl.close();
    });
    

  });
});

});
}

module.exports = {
addTodo
};