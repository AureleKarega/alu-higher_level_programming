#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(url, (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }

  const filmData = JSON.parse(body);
  const characters = filmData.characters;

  const printCharactersInOrder = (index) => {
    if (index >= characters.length) return;

    request(characters[index], (error, response, charBody) => {
      if (error) {
        console.error(error);
        return;
      }

      const characterName = JSON.parse(charBody).name;
      console.log(characterName);
      printCharactersInOrder(index + 1);
    });
  };

  printCharactersInOrder(0);
});

