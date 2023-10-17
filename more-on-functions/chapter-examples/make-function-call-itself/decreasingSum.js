function decreasingSum(integer) {
<<<<<<< HEAD
   if(integer === 1){
      return integer;
   } else {
      //decreasingSum function again
     // return integer + (integer-1);
      //return integer + (decreasingSum(integer));
      return integer + (decreasingSum(integer-1));
      //return decreasingSum(integer-1);
=======
   if (integer === 1){
      return integer;
   } else {
      //call decreasingSum function again
>>>>>>> a67465628fb073e48f10c79d3333f89fff662e32
   }
}

console.log(decreasingSum(5));
