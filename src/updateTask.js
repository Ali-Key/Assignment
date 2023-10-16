const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function updateTask() {
    const PathData = './data.json'
    if (fs.existsSync(PathData)) {

        fs.readFile(PathData, 'utf8', (err, data) => {
            if (err) {
                console.log('Error From ReadFile ');
            } else {
                if (!data) {
                    console.log('Data Not Found  ');
                } else {
                    rl.question('Enter taskId ? : ', (taskId) => {

                        rl.question('Enter taskName ? : ', (taskName) => {

                            const todos = JSON.parse(data);

                            const updateTask = todos.map(todo => {
                                if (todo.id == Number(taskId)) {
                                    return {
                                        ...todo,
                                        task: taskName
                                    }
                                }

                                return todo;

                            });
                            fs.writeFile(PathData, JSON.stringify(updateTask, null, 2), (err) => {
                                if (err) {
                                    console.log('Error Writting File  ', err);
                                } else {
                                    console.log('Successfully updated task  ');
                                }

                            })
                            console.log('updateTask', update_todos);
                        })

                    })
                }
            }
        })

    } else {
        console.log(' not found  ');
    }
}

module.exports = {
    updateTask
}