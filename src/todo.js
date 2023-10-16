const readline = require('readline');
const {displayTask} = require('./displayTasks')
const { addTask } = require('./addTask');
const {updateTask} = require ('./updateTask')
const {deleteTask} = require('./deleteTask')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



rl.question("Enter The Action Do You Want ( display all , add ,  update , delete )? : ", (input) => {
    if (input.toLowerCase() == 'display ') {
        displayTask();
    } else if (input.toLowerCase() == 'add') {
        addTask();
    } else if (input.toLowerCase() == 'update') {
        updateTask();
    } else if (input.toLowerCase() == 'delete') {
        deleteTask();
    } else {
        console.log('Invalid input type of opretion');
    }
})