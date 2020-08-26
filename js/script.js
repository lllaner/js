"use strict";

const numberOfFilms = +prompt('how meny films do you have whatched?','');

const personalmovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('The last film',''),
      b = +prompt('rate of the film',''),
      c = prompt('The last film',''),
      d = +prompt('rate of the film','');

personalmovieDB.movies[a] = b;
personalmovieDB.movies[c] = d;

console.log(personalmovieDB);
