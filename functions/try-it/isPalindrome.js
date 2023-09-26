/*function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}*/
/*function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}*/
/*function isPalindrome(str) {

   let reversed = '';

   for (let i = 0; i < str.length; i++) {
       reversed = str[i] + reversed;
   }

   return reversed === str;
}*/
/*function reverse(str) {
   let reversed = '';

   for (let i = 0; i < str.length; i++) {
       reversed = str[i] + reversed;
   }
   return reversed;
}

function isPalindrome(str) {
   return reverse(str) === str;
}
function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
}

console.log(a);*/

let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(43));
