//Sample arrays for testing:
//let nums1 = [5, 10, 2, 42];
//let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
//let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
arr1 = [];
arr2 = [];
idx = 0;
idx1 = 0;
k = 0;
function findMaximumValue(maxarr1){
 
  max = maxarr1[0];
  let j = 0;
  for (i = 0; i < maxarr1.length; i++){
  if (Number(maxarr1[i]) > Number(max)){
 // console.log(`min - ${min} | minarr ${minarr1[i]}`);
      min = maxarr1[i];
      j = i;
  }
 // else {
 //     console.log("compare fail");
 // }
  }
//  console.log("j" + j);
return [max, j];
}

//console.log(findMinimumValue(nums1));
console.log(nums3);
while (nums3.length > 0) {
//console.log(nums1.length);
arr2 = findMaximumValue(nums3);
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

//Sort each array in ascending order.

//Sort each array in decending order.
