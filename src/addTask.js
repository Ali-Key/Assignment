const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Generate a random ID between 0 and 999
const randomId = Math.floor(Math.random() * 1000);

function addTask() {
    const pathData = './data.json';
  // Check if the data.json file exists
  if (fs.existsSync(pathData)) {
    // Read the data from the file
    fs.readFile(pathData, "utf8", (err, data) => {
      // Handle any error while reading the file
      if (err) {
        console.log("Error reading file:", err);
      } else {
        // Check if data exists in the file
        if (!data) {
          console.log("File is empty!");
        } else {
          // Prompt the user for the taskName
          rl.question("Enter taskName: ", (taskName) => {
            // Parse the JSON data
            const todos = JSON.parse(data);

            // Add the new task to the todos array with a random ID
            const newTask = {
              id: randomId,
              task: taskName,
            };
            todos.push(newTask);

            // Write the updated data back to the file
            fs.writeFile(
                pathData,
              JSON.stringify(todos, null, 2),
              (err) => {
                if (err) {
                  console.log("Error writing to file:", err);
                } else {
                  console.log("Task successfully added:", newTask);
                }
              }
            );
          });
        }
      }
    });
  } else {
    console.log("data.json file not found!");
  }
}

module.exports = {
  addTask,
};
