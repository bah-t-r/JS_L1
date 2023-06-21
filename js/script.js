/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms

function start() {
    while(!numberOfFilms || numberOfFilms < 0) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
}
// start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '')

        if(a && b && a.length < 5) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
// rememberMyFilms()

function detectPersonalLevel() {
    if(personalMovieDB.count > 0 && personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов")
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель")
    } else if(personalMovieDB.count > 30) {
        alert("Вы киноман")
    } else {
        alert("Произошла ошибка")
    }
}
// detectPersonalLevel()

function showMyDB(hidden) {
    if(!hidden) console.log(personalMovieDB)
}
showMyDB(personalMovieDB.privat)

function writeYourGenres(hidden) {
    for (let i = 0; i < 3; i++) {
        hidden[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`)
    }
}
writeYourGenres(personalMovieDB.genres)