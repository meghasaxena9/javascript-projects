<<<<<<< HEAD
//Create an anonymous function and set it equal to a variable.


/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
//

let aVar = function(myNumb) {
   if (typeof myNumb === "number") {
      return myNumb * 3;

   }
   else if (typeof myNumb === "string") {
      return myNumb = "ARR";
   } else {
      return myNumb;
   }
}
console.log(aVar("yes"));
=======
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
>>>>>>> a67465628fb073e48f10c79d3333f89fff662e32

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/


<<<<<<< HEAD
let arr = ['Elocution', 21, 'Clean teeth', 100];
let newArr = function(n) {
   for (i=o; i< arr.length; i++){
      if (typeof n === "number") {
         return n * 3;

      }
      else{
         return "ARR";
      }
   }
}
=======

let trippleNumbers = function (n){
return n*3
};
let trippled = arr.map(trippleNumbers);
console.log (arr);
console.log (trippled);
>>>>>>> a67465628fb073e48f10c79d3333f89fff662e32