'use strict';
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt ('Один из последних просмотренных фильмов', ''),
      b = prompt ('Оцените его', '');

//проверяем условие (&& - и, || или, != не равно)      
  if (a != '' && a.length < 50 && a != null && b != '' && b.length < 50 && b != null) {
    personalMovieDB.movies[a] = b;
    console.log ('Done');
  } 
  else {
    i--; // откатываем цикл на одну итерацию назад;
    console.log ('Error');
  }
}

console.log (personalMovieDB);

if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
  console.log ('Просмотрено мало фильмов');
} else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
  console.log ('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  console.log ('Вы киноман');
} else {
  console.log ('Произошла ошибка');
}