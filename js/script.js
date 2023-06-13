'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
      mark = prompt('На сколько оцените его?', ''),
      lastFilm2 = prompt('Один из последних просмотренных фильмов?', ''),
      mark2 = prompt('На сколько оцените его?', '')

personalMovieDB.movies = {
    lastFilm: mark,
    lastFilm2: mark2
}
// personalMovieDB.movies[lastFilm2] = mark2

console.log(personalMovieDB)
console.log(lastFilm)