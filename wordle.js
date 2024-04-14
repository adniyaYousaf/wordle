import chalk from 'chalk';
import words from "./words.json" assert {type: "json"};
import promptSync from "prompt-sync";
const prompt = promptSync();
let count = 6;
let str = "";
let guess;
let isGuess = false;

const choseRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const pickRandomWord = words[randomIndex];
    return pickRandomWord;
}

let word = choseRandomWord();

const outputFeedback = () => {
    for (let index = 0; index < guess.length; index++) {
        if (word[index] === guess[index]) {
            str = str + chalk.bgGreen(guess[index]);
        } else if (word.includes(guess[index])) {
            str = str + chalk.bgYellow(guess[index]);
        } else {
            str = str + chalk.bgGray(guess[index]);
        }
    }

    return str;
}


while (count > 0 && !isGuess) {
    guess = prompt("Guess a word: ");


    if (guess.length !== 5) {
        console.log("Your guess word should be 5 characters long, Try again!");
        str = "";
    } else {
        const output = outputFeedback();
        console.log(output);


        if (word == guess) {
            isGuess = true;
            console.log("Congratulations, You guessed the right word.");
        } else if (word != guess) {
            str = "";
            count--;
            console.log(`You have ${count} guess(es) left!`);

        }
    }

 
}
console.log(`The Word was ${chalk.bgGreenBright(word)}!!`);
