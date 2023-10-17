function decreasingSum(integer) {
   if(integer === 1){
      return integer;
   } else {
      //decreasingSum function again
     // return integer + (integer-1);
      //return integer + (decreasingSum(integer));
      return integer + (decreasingSum(integer-1));
      //return decreasingSum(integer-1);
   }
}

console.log(decreasingSum(5));
