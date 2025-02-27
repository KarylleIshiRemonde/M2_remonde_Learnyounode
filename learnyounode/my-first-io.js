const fs = require('fs');

// Read file path from command-line arguments
const filePath = process.argv[2];

// Read the file synchronously and convert to string
const fileContent = fs.readFileSync(filePath, 'utf8');

// Count the number of newline characters
const lineCount = fileContent.split('\n').length - 1;

// Print the result
console.log(lineCount);
