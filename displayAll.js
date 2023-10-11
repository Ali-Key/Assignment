const fs = require('fs');

/**

    Reads and displays the contents of the data.json file, if it exists.
    */
    function displayAll() {
    const dataPath = './todoData.json';

// Check if the data.json file exists
if (fs.existsSync(dataPath)) {
// Read the file
fs.readFile(dataPath, 'utf8', (err, data) => {
if (err) {
console.error('Error reading the file:', err); // Log the error if reading fails
return;
}

  console.log('File contents:', data); // Display the file contents
});

} else {
console.log('The "data.json" file does not exist.'); // Display a message if the file does not exist
}
}

module.exports = {
displayAll
};