#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const characters = JSON.parse(body).characters;

  // Function to fetch and print each character in order
  const fetchCharacter = (index) => {
    if (index >= characters.length) return;

    request(characters[index], (err, res, charBody) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(JSON.parse(charBody).name);
      fetchCharacter(index + 1);
    });
  };

  fetchCharacter(0); // start the recursive fetch
});

