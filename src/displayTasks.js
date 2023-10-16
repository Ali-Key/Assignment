const fs = require('fs');

function deleteTask() {
  const PathData = './data.json'
    //sure if file exist or not exist
    if (fs.existsSync(PathData)) {

        //reading file as non-blocking
        fs.readFile(PathData, 'utf8', (err, data) => {
            // error handling
            if (err) {
                console.log('Error reading ', err);
            } else {
                console.log('data', data);
            }
        })
    } else {
        console.log('not found ! ');
    }
}
module.exports = {
    deleteTask
}