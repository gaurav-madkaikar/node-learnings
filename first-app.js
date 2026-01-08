// Import file system module and store it in a variable
// This module allows you to work with the file system on your computer
const fs = require('fs');

// Write the given string to a file named hello.txt
// If the file does not exist, it will be created
// If the file already exists, it will be overwritten
fs.writeFileSync('hello.txt', 'Hello from Node.js!');