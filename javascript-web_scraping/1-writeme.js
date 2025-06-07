#!/usr/bin/node

const fs = require('fs');

// Get arguments from command line
const filePath = process.argv[2];
const content = process.argv[3];

// Write to the file using UTF-8 encoding
fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.log(err);
  }
});

