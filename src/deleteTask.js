const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function deleteTask() {
    const pathData = './data.json';
  if (fs.existsSync(pathData)) {
    fs.readFile(pathData, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
      } else {
        if (!data) {
          console.log('Data not found.');
        } else {
          const todos = JSON.parse(data);

          rl.question('Enter the taskId to delete: ', (taskId) => {
            const updatedDataJson = todos.filter(task => task.id != Number(taskId));

            if (todos.length === updatedDataJson.length) {
              console.log('Task not found or already deleted.');
            } else {
              const updatedData = JSON.stringify(updatedDataJson, null, 2);

              fs.writeFile(pathData, updatedData, (err) => {
                if (err) {
                  console.error('Error writing to the file:', err);
                } else {
                  console.log('Successfully deleted task:' , updatedDataJson);
                }
              });
            }
          });
        }
      }
    });
  } else {
    console.log('File not found!');
  }
}

module.exports = {
  deleteTask
};