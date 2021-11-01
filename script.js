'use strict';
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt ('Один из последних просмотренных фильмов', ''),
      b = prompt ('Оцените его', ''),
      c = prompt ('Один из последних просмотренных фильмов', ''),
      d = prompt ('Оцените его', '');

personalMovieDB.movies[a] = b;      
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);