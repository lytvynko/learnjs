'use strict';
let numberOfFilms;

function start () {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
    console.log ('Просмотрено мало фильмов');
  } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
    console.log ('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log ('Вы киноман');
  } else {
    console.log ('Произошла ошибка');
  }
}
detectPersonalLevel();

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();

function showMyDB() {
  switch(personalMovieDB.privat) {
    case false:
      console.log(personalMovieDB);
      break;
    default:
      console.log('Data Base is Private')
  }
}
showMyDB();

function first() {
  return 5;
}
function second (callback) {
  return 10;
  callback();
}

first();
second(first);