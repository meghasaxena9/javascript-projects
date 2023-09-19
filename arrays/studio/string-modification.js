const input = require('readline-sync');

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str = "LaunchCode";
str1 = str.split("");
console.log(str1);
str2LAU = str1.slice(0,3);
console.log (str2LAU);
str1 = str1.splice(3,11);
console.log (str1);
str4 = str1.concat(str2LAU);
console.log(str4);
str5 = str4.join("");
console.log (str5);

console.log(`Original string ${str}, modified string ${str5}`);
//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let userinput;
userinput = input.question ("Enter number of letters to relocate to end of string\n");
if (userinput > str.length){
    userinput = 3;
}

let str11;
let str44;
let srt55;
str11 = str.split("");
struser = str11.slice(0,userinput);
str11 = str11.splice(userinput,11);
console.log (str11);
str44 = str11.concat(struser);
console.log(str44);
str55 = str44.join("");
console.log (str55);

