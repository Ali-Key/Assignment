const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function deleteTask() {
    const PathData = './data.json'

    // handle if file exist or not exist
    if (fs.existsSync(PathData)) {

        //reading file as non-blocking
        fs.readFile(PathData, 'utf8', (err, data) => {
            if (err) {
                console.log('Error From Reading File ! ', err);
            } else {

                // handle data json from the file
                if (!data) {
                    console.log('Data Not Found !  ');
                } else {

                    // convert data json into the format data
                    const todos = JSON.parse(data);

                    // take from the user id to delete task
                    rl.question('Enter taskId  ? : ', (taskId) => {
                        const dataJson = todos.filter(task => task.id != Number(taskId))

                        // handle if my todos data length equals to dataJson length
                        if (todos.length === dataJson.length) {

                            console.log('todos is empty !  ', todos.length);

                        } else {

                            fs.writeFile(PathData, JSON.stringify(dataJson, null, 2), (err) => {

                                if (err) {
                                    console.log('Error From  Writen File : ' + err);
                                } else {
                                    console.log('Successfully deleted task  ', dataJson);
                                }

                            })

                        }

                    })

                }

            }
        })
    } else {
        console.log(' Not fonud ! ');
    }
}

module.exports = {
    deleteTask
}