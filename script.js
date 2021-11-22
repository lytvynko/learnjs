'use strict';

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
      console.log ('Просмотрено мало фильмов');
    } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
      console.log ('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
      console.log ('Вы киноман');
    } else {
      console.log ('Произошла ошибка');
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 4; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
      if (genre == null || genre == '') {
        console.log('Вы ввели некорректные данные или не ввели их вообще');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
      
    } 
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`под номером ${i + 1} жанр ${item} `)
    })
  },
  showMyDB: function() {
    switch(personalMovieDB.privat) {
      case false:
        console.log(personalMovieDB);
        break;
      default:
        console.log('Data Base is Private')
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }

  }
};

