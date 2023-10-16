const fs = require('fs');

function displayTasks() {
    const pathData = './data.json';
  // Check if the file exists
  if (fs.existsSync()) {
    // Read the file asynchronously with UTF-8 encoding
    fs.readFile(pathData, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err); // Log the error with console.error for better visibility
      } else {
        console.log('Data:', data); // Display the data from the file
      }
    });
  } else {
    console.log('File not found!'); // Display a clear message if the file doesn't exist
  }
}

module.exports = {
  displayTasks
};