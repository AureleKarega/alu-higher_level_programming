#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const wedgeId = '18';

// Make GET request to the films API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  const films = data.results;

  // Count how many films include character ID 18
  const count = films.filter(film =>
    film.characters.some(url => url.includes(`/people/${wedgeId}/`))
  ).length;

  console.log(count);
});

