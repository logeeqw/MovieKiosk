/**
 * @author Logee, Quinn
 * @version 0.01
 *@summary rates, averages ratings, and sorts movies
 * @todo nothing
 */

const PROMPT = require(`readline-sync`);
let numRatings, avgRating, totalRating, rateMovie = [], movies = [], chooseMovie, rating;
let rankMovie = [];
let continueResponse;
let i = 0;
const MAX_RATING = 10, MIN_RATING = 0, RATING_INCREMENT = 1;


/**
 * @method
 * @desc The dispatch method for the program
 * @return (null)
 */
function main() {
    numRatings = 2;
    setContinueResponse();
    while (continueResponse === 1) {
        setChooseMovie();
      /*  setHappyDeathDay();
        setColdPursuit();
        setTheUpside();*/
        // setRateMovie();
        // setTitle();
        setContinueResponse();
    }
}

main();

/**
 * @method
 * @desc continue Response mutator
 * @returns null
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? (0=no, 1=yes): `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? (0=no, 1=yes): `));
        }
    } else {
        continueResponse = 1;
    }
}

function setChooseMovie() {
    for (/*let i = 0;*/ i < numRatings; i++;)
        chooseMovie[i] = [];
    while (chooseMovie !== null) {
        chooseMovie = Number(PROMPT.question(`\nWhat would you like to do? \n1. Rate: Happy Death Day 2U
2. Rate: Cold Pursuit \n3. Rate: The Upside \n4. Choose a new movie to rate \n5. Rank movies \n`));
        if (chooseMovie = 1) {
            chooseMovie[i][0] = PROMPT.question(`Please enter a rating for Happy Death Day 2U (1-10): `);
            if (chooseMovie < MIN_RATING || chooseMovie > MAX_RATING) {
                console.log(`${rating} is invalid. Please try again.`);
            }
            while (chooseMovie[i][0] < MAX_RATING && chooseMovie[i][0] > MIN_RATING) {
                chooseMovie[i][1] = chooseMovie[i][0];
                chooseMovie[i][1] = RATING_INCREMENT + numRatings;
            }
            break;
        }
    }
}



         if (chooseMovie = 2) {
            setColdPursuit();
        }
        else if (chooseMovie = 3) {
            setTheUpside();
        }
        else if (chooseMovie = 4) {
            setNewMovie();
        }



function setHappyDeathDay() {
    rating = PROMPT.question(`Please enter a rating for Happy Death Day 2U (1-10): `);
    if (chooseMovie < MIN_RATING || chooseMovie > MAX_RATING) {
        console.log(`${rating} is invalid. Please try again.`);
    }
}

function setColdPursuit() {
    console.log(`work please`);
    rating = PROMPT.question(`Please enter a rating for Cold Pursuit (1-10): `);
    if (chooseMovie < MIN_RATING || chooseMovie > MAX_RATING) {
        console.log(`${rating} is invalid. Please try again.`);
    }
}

function setTheUpside() {
    rating = PROMPT.question(`Please enter a rating for The Upside (1-10): `);
    if (chooseMovie < MIN_RATING || chooseMovie > MAX_RATING) {
        console.log(`${rating} is invalid. Please try again.`);
    }
}

function setNewMovie() {
    let movieTitle;
    movieTitle = PROMPT.question(`Please enter a movie title: `);
    rating = PROMPT.question(`Please enter a rating for ${movieTitle} (1-10): `);
    if ( chooseMovie <MIN_RATING || chooseMovie> MAX_RATING) {
        console.log(`${rating} is invalid. Please try again.`);
    }
}

function setAvgRating() {
    avgRating = rating * numRatings / numRatings
}

/**
 * @method
 * @desc sets and displays movie data
 * @returns null
 */
/*function setMovieData() {
    console.log(`${movieTitle} has ${numRatings} rating(s)
    \nThe average rating for ${movieTitle} is ${avgRating}
    \nThe total rating for ${movieTitle} is ${totalRating}
    \nThis movie is ranked ${sortMovie} in the theater`)
}*/

/**
 * @method
 * @desc lets the customer rate the movie
 * @returns null
 */
/*function setRateMovie() {
    console.log(`set rate movie`);
    const MAX_RATING = 10, MIN_RATING = 0;
    for (let i = 0; i < numRatings; i++) {
        movies[i] = [];
        console.log(`\nMovies ${i + 1}:`);
        while (! movies[i][0] || !/^[a-zA-Z -]{1,30}$/.test(movies[i][0])) {
            movies[i][0] = PROMPT.question(`Please enter movie title: `);
            if (! /^[a-zA-Z -]{1,30}$/.test(movies[i][0])) {
                console.log(`${movies[i][0]} is invalid. Please try again.`);
            }
        }
        while (! movies[i][1] || movies[i][1] <MIN_RATING || movies[i][1] > MAX_RATING) {
            movies[i][1] = PROMPT.question(`Please enter a rating for this movie (1-10): `);
            if ( movies[i][1] <MIN_RATING || movies[i][1] > MAX_RATING) {
                console.log(`${movies[i][1]} is invalid. Please try again.`);
            }
        }
        // break;
        while (movies[i][2] !== null){
            movies[i][1] ++;
        console.log(`${movies[i][0]} has ${movies[i][2]} ratings`)
        }
       /!* while (movies[i][3] !== null){
            movies[i][3] = (movies[i][1]++) /movies[i][2];
            console.log(`The average rating for ${movies[i][0]} is ${movies[i][3]}` )
        }*!/
}}*/

/*

function setNum() {
 console.log(`Penis`)
}*/
