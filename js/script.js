"use strict";

let numberOfFilms;

function start() {
     numberOfFilms = +prompt("How many movies have you watched?");

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies have you watched?");
     }
}


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Name a recently watched movie', ''),
              b = prompt('How would you rate it?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Not much, meh');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You\'re an ordinary viewer');
    } else if (personalMovieDB.count >= 30) {
        console.log("You're a cinemaholic");
    } else {
        console.log('Error');
    }
}

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genre = prompt(`Your favourite genre #${i+1} ?`);
        personalMovieDB.genres[i] = genre;
     }
}

start();

rememberMyFilms();

detectPersonalLevel();

writeYourGenres();

showMyDB();