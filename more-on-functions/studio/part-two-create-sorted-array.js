<<<<<<< HEAD
/*
=======
>>>>>>> a67465628fb073e48f10c79d3333f89fff662e32
function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}
<<<<<<< HEAD
*/
//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
arr1 = [];
arr2 = [];
idx = 0;
idx1 = 0;
k = 0;
function findMinimumValue(minarr1){
 
  min = minarr1[0];
  let j = 0;
  for (i = 0; i < minarr1.length; i++){
  if (Number(minarr1[i]) < Number(min)){
 // console.log(`min - ${min} | minarr ${minarr1[i]}`);
      min = minarr1[i];
      j = i;
  }
 // else {
 //     console.log("compare fail");
 // }
  }
//  console.log("j" + j);
return [min, j];
}

//console.log(findMinimumValue(nums1));
console.log(nums3);
while (nums3.length > 0) {
//console.log(nums1.length);
arr2 = findMinimumValue(nums3);
arr1.push(arr2[0]);
//console.log(arr1);

idx1 = arr2[1];
//console.log(idx1);

nums3.splice(idx1, 1);
//console.log(nums1);
//console.log(nums1.length);
//k++;
//console.log("k" + k);
}

console.log (arr1);
=======

>>>>>>> a67465628fb073e48f10c79d3333f89fff662e32
//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

<<<<<<< HEAD
=======
//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
>>>>>>> a67465628fb073e48f10c79d3333f89fff662e32
