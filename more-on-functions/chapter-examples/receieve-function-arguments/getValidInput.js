const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
<<<<<<< HEAD
let startsWithA = function(word) {
  return (word.slice(0, 1).toLowerCase() === "a");
}
console.log(getValidInput("Enter a word that starts with a:", startsWithA));

// TODO 2: write a validator 
// that ensures input is a vowel
let isVowel = function(n) {
  vowelArray = ["a", "e", "i", "o", "u", "y"]
  return (vowelArray.includes(n.toLowerCase()));
};
console.log(getValidInput("Enter a vowel: ", isVowel));
=======

// TODO 2: write a validator 
// that ensures input is a vowel
>>>>>>> a67465628fb073e48f10c79d3333f89fff662e32

// Be sure to test your code!