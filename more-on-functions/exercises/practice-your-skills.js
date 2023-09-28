let arr = ['Elocution', 21, 'Clean teeth', 100];
let practice = function(myArg) {
   if (typeof myArg === "number") {
      return myArg * 3;
   } else if (typeof myArg === "string") {
      return "ARRR!";
   } else {
      return myArg;
   }

}

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/



let trippleNumbers = function (n){
return n*3
};
let trippled = arr.map(trippleNumbers);
console.log (arr);
console.log (trippled);
