const readline = require('readline');
const { addTask } = require('./addTask');
const { displayTasks } = require('./displayTasks.js');
const { deleteTask } = require('./deleteTask.js');
const { updateTask } = require('./updateTask');

// Create a readline interface for user input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to handle user operations
function operation() {
  // Prompt the user to enter an action (add, display, update, delete)
  rl.question("Enter the action you want to perform (add, display, update, delete): ", (action) => {
    // Normalize the user's input to lowercase for case-insensitive comparison
    const normalizedAction = action.toLowerCase();

    // Based on the user's action, call the corresponding function or display an error message
    switch (normalizedAction) {
      case 'add':
        addTask(); // Call the function to add a task
        break;
      case 'display':
        displayTasks(); // Call the function to display tasks
        break;
      case 'update':
        updateTask(); // Call the function to update a task
        break;
      case 'delete':
        deleteTask(); // Call the function to delete a task
        break;
      default:
        console.log('Invalid operation. Please enter a valid action.'); // Display an error message for invalid actions
    }

  });
}

operation(); // Start the operation by calling the operation function