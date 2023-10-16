const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function updateTask() {
    const pathData = './data.json';
  // Check if the file exists
  if (fs.existsSync(pathData)) {
    // Read the file asynchronously with UTF-8 encoding
    fs.readFile(pathData, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
      } else {
        // Handle data from the file
        if (!data) {
          console.log('Data not found.'); // Display a message if data is empty
        } else {
          rl.question('Enter the taskId: ', (taskId) => {
            rl.question('Enter the new taskName: ', (taskName) => {
              const todos = JSON.parse(data);

              // Update the task with the provided taskId
              const updatedTodos = todos.map(todo => {
                if (todo.id == Number(taskId)) {
                  return {
                    ...todo,
                    task: taskName
                  };
                }
                return todo;
              });

              // Write the updated data back to the file
              fs.writeFile(pathData, JSON.stringify(updatedTodos, null, 2), (err) => {
                if (err) {
                  console.error('Error writing to the file:', err);
                } else {
                  console.log('Successfully updated task:', updatedTodos);
                }
              });
            });
          });
        }
      }
    });
  } else {
    console.log('File not found!'); // Display a clear message if the file doesn't exist
  }
}

module.exports = {
  updateTask
};