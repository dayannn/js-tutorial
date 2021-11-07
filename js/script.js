"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        this.numberOfFilms = +prompt("How many movies have you watched?");

        while (this.numberOfFilms == '' || this.numberOfFilms == null || isNaN(this.numberOfFilms)) {
            this.numberOfFilms = +prompt("How many movies have you watched?");
        }
    },

    rememberMyFilms: function () {
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
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Not much, meh');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You\'re an ordinary viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log("You're a cinemaholic");
        } else {
            console.log('Error');
        }
    },

    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Your favourite genre #${i + 1} ?`);
            if (genre == null || genre == '') {
                i--;
                continue;
            }
            personalMovieDB.genres[i] = genre;
        }

        this.genres.forEach((g, i) => console.log(`Favourite genre #${i+1} is ${g}`));
    },

    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    }

};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();