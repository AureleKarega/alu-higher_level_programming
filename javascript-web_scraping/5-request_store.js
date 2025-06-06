#!/usr/bin/node

const request = require('request');
const fs = require('fs');

// Get URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make GET request and write to file
request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  fs.writeFile(filePath, body, 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  });
});

