/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie{
    constructor(title, director, budget){
        this.movieTitle = title;
        this.movieDirector = director;
        this.movieBudget = +budget;
    }
    wasExpensive() {
        if(this.movieBudget > 1e8){
            return true;
        } else {
            return false;
        }
    }
}

// testing
// const newMovie = new Movie(`Avatar`, `Cameron`, 25e7);
// console.log(newMovie.wasExpensive());