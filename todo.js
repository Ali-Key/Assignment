const readline = require('readline');
const { display } = require('./displayAll');
const { addTodo } = require('./addTodo');
const { updateTodo } = require('./updateTodo');
const { deleteTodo } = require('./deleteTodo');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// Prompt for the action to perform
rl.question("Enter the action you want to perform (add, display, update, delete): ", (input) => {
const action = input.toLowerCase();
arduino

switch (action) {
    case 'add':
        addTodo();
        break;
    case 'display':
        display();
        break;
    case 'update':
        updateTodo();
        break;
    case 'delete':
        deleteTodo();
        break;
    default:
        console.log('Invalid action entered for update operation');
    }

rl.close();
});