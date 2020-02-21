/*
  Write a guessing game where the user has to guess a secret number.
  After every guess the program tells the user whether their number was too
  large or too small. At the end the number of tries needed should be printed.
  It counts only as one try if they input the same number multiple times consecutively.
*/

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let max = 100;
let randomNumber = getRandomInt(0, max); // tej ktorej szukamy
let guess = getRandomInt(0, max); // zgaduje komputer
let tries = new Set();

while (guess !== randomNumber) {
  if (guess > randomNumber) {
    guess = getRandomInt(0, guess);
  } else {
    guess = getRandomInt(guess, max);
  }
  tries.add(guess);
  console.log(guess);
}

let count = Array.from(tries).length;
console.log(`Proby: ${count}`);
console.log(`Trafiony! ${guess}`);
