/**
 * @author Logee, Quinn
 * @version 0.01
 *@summary rates, averages ratings, and sorts movies
 * @todo nothing
 */

const PROMPT = require(`readline-sync`);
let movieTitle;
let numRatings, avgRating, totalRating, rateMovie = [], movies = [];
let rankMovie = [];
let continueResponse;


/**
 * @method
 * @desc The dispatch method for the program
 * @return (null)
 */
function main() {
    setContinueResponse();
    while (continueResponse === 1) {
        setRateMovie();
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
function setRateMovie() {
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
        while (movies[i][2] !== null){
            movies[i][1] ++;
        console.log(`${movies[i][0]} has ${movies[i][2]} ratings`)
        }
        while (movies[i][3] !== null){
            movies[i][3] = (movies[i][1] ++) /movies[i][2];
            console.log(`The average rating for ${movies[i][0]} is ${movies[i][3]}` )
        }
}}

/*function setTitle() {
    movieTitle = PROMPT.question(`Please enter movie title: `);
}*/