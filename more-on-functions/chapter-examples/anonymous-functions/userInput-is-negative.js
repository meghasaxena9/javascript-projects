const input = require('readline-sync');
let userInput = input.question("Please enter a number:");
<<<<<<< HEAD
//let logger = function(errorMsg) {
  //console.log("ERROR: " + errorMsg);
//};
//if (userInput < 0) {
  // ______("Invalid input");
//}

// Fill in the blank in line 7 (then uncomment it) so that it logs an error message if userInput is negative.
let logger = function(errorMsg) {
  console.log("ERROR: " + errorMsg)
};

userInput = -1;
if (userInput < 0) {
  console.log(logger("Invalid input"));
}
//console.log ("end of program");
=======
let logger = function(errorMsg) {
  console.log("ERROR: " + errorMsg);
};
if (userInput < 0) {
  // ______("Invalid input");
}

// Fill in the blank in line 7 (then uncomment it) so that it logs an error message if userInput is negative.
>>>>>>> a67465628fb073e48f10c79d3333f89fff662e32
