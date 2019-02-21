/**
 * @author Logee, Quinn
 * @version 0.01
 *@summary rates, averages ratings, and sorts movies
 * @todo nothing
 */

"use strict";
const PROMPT = require(`readline-sync`);
const IO = require('fs');  // For file I/O

let continueResponse;
let numRatings, menuChoice, HDDRating, CPRating, TURating, title, NMRating, HDDAvg, CPAvg, TUAvg;
let HDDNum = 0, CPNum = 0, TUNum = 0, NMNum = 0;
let ratings = [];
const MIN_RATING = 1, MAX_RATING = 5;

/**
 * @method
 * @desc The dispatch method for the program
 * @return (null)
 */
function  main(){
    setContinueResponse();
    while (continueResponse === 1) {
        setMenuChoice();
        switch (menuChoice) {
            case 1:setHappyDeathDay();
                break;
            case 2: setColdPursuit();
                break;
            case 3:  setTheUpside();
                break;
            case 4: setNewMovie();
                break;
            case 5: rankMovies();
                break;
        }
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
 * @desc pushes data to be saved
 * @returns null
 */
function loadRatings() {
    let ratingsFile = IO.readFileSync(`data/movie-data.csv`, 'utf8');
    let lines = ratingsFile.toString().split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
        ratings.push(lines[i].toString().split(/,/));
    }
}

/**
 * @method
 * @desc presents a menu to the customer
 * @returns null
 */
function setMenuChoice() {
    menuChoice = -1;
    while (menuChoice !== 1 && menuChoice !== 2 && menuChoice !== 3 && menuChoice !== 4 && menuChoice !== 5) {
        menuChoice = Number(PROMPT.question(
            `\tWhat would you like to do?
            \t\t1) Rate: Happy Death Day 2U
            \t\t2) Rate: Cold Pursuit
            \t\t3) Rate: The Upside
            \t\t4) Choose a new movie
            \t\t5) Rank Movies `
        ));
    }
}

function setHappyDeathDay() {
        HDDRating = PROMPT.question(`Please enter a rating for Happy Death Day 2U (1-5): `);
        HDDNum++;
        console.log(`${HDDNum}`);
    while (HDDRating !== null && HDDRating < MIN_RATING || HDDRating > MAX_RATING) {
        console.log(`${HDDRating} is invalid. Please try again.`);
        HDDRating = PROMPT.question(`Please enter a rating for Happy Death Day 2U (1-5): `);
    }
}

function setColdPursuit() {
        CPRating = PROMPT.question(`Please enter a rating for Cold Pursuit (1-5): `);
        CPNum++;
    while (CPRating !== null && CPRating < MIN_RATING || CPRating > MAX_RATING) {
        console.log(`${CPRating} is invalid. Please try again.`);
        CPRating = PROMPT.question(`Please enter a rating for Cold Pursuit (1-5): `);
    }
}

function setTheUpside() {
        TURating = PROMPT.question(`Please enter a rating for The Upside (1-5): `);
        TUNum++;
    while (TURating !== null && TURating < MIN_RATING ||TURating > MAX_RATING) {
        console.log(`${TURating} is invalid. Please try again.`);
        TURating = PROMPT.question(`Please enter a rating for The Upside (1-5): `);
    }
}

/*
function setAvgHDD() {
    HDDAvg =  / HDDNum;
}

function setAvgCP() {
    CPAvg = / CPNum;
}

function setAvgTU() {
    TUAvg = / TUNum;
}*/

function setNewMovie() {
    title = PROMPT.question(`\nPlease enter a movie title: `);
    NMRating = PROMPT.question(`\nPlease enter a rating for ${title} (1-5): `);
    NMNum++;
    while (NMRating !== null && NMRating < MIN_RATING ||NMRating > MAX_RATING) {
        console.log(`${NMRating} is invalid. Please try again.`);
        NMRating = PROMPT.question(`Please enter a rating for The Upside (1-5): `);
    }
}

function rankMovies() {
    if (HDDAvg > CPAvg && CPAvg > TUAvg){
        console.log(`\nHappy Death Day 2U- Avg: ${HDDAvg}\nCold Pursuit- Avg: ${CPAvg}\nThe Upside- Avg ${TUAvg}`);
    }
    else if (HDDAvg > TUAvg && TUAvg > CPAvg) {
        console.log(`\nHappy Death Day 2U- Avg: ${HDDAvg}\nThe Upside- Avg ${TUAvg}\nCold Pursuit- Avg: ${CPAvg}`);
    }
    else if (CPAvg > HDDAvg && HDDAvg > TUAvg){
        console.log(`\nCold Pursuit- Avg: ${CPAvg}\nHappy Death Day 2U- Avg: ${HDDAvg}\nThe Upside- Avg ${TUAvg}`);
    }
    else if (CPAvg > TUAvg && TUAvg > HDDAvg){
        console.log(`\nCold Pursuit- Avg: ${CPAvg}\nThe Upside- Avg ${TUAvg}\nHappy Death Day 2U- Avg: ${HDDAvg}`);
    }
    else if (TUAvg > CPAvg && CPAvg > HDDAvg){
        console.log(`\nThe Upside- Avg ${TUAvg}\nCold Pursuit- Avg: ${CPAvg}\nHappy Death Day 2U- Avg: ${HDDAvg}`);
    }
    else if (TUAvg > HDDAvg && HDDAvg > CPAvg){
        console.log(`\nThe Upside- Avg ${TUAvg}\nHappy Death Day 2U- Avg: ${HDDAvg}\nCold Pursuit- Avg: ${CPAvg}`);
    }
}