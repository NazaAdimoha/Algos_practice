"use strict";
//ArrayPacking
// Given an array of 2k integers (for some integer k, which will be betwen 0 and 5 inclusive),
// perform the following operations until the array contains only one element:
// On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.

// Example

// For arr = [1, 2, 3, 4, 5, 6, 7, 8], the output should be 186.

// We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

const integers = [1, 2, 3, 4, 5, 6, 7, 8];

function reduceArray(integers) {
  //slice the integers to get a copy  
  let arr = integers.slice();
  let loopCounter = 0;

  while (arr.length > 1) {
      if(loopCounter % 2 === 0) {
        arr = addIterables(arr);
      } else {
          arr = multiplyIterables(arr);
      }
    loopCounter++
  }

  return arr;
}
console.log(reduceArray(integers));

//create a function to sum the iterables
function addIterables(arr) {
  const addArr = [];
  //i want to run a forloop on my arr
  for (let i = 0; i < arr.length; i += 2) {
    addArr.push(arr[i] + arr[i + 1]);
  }
  return addArr;
}

//create a function to multiply the iterables
function multiplyIterables(arr) {
  const multiplyArr = [];
  //i want to run a forloop on my arr
  for (let i = 0; i < arr.length; i += 2) {
    multiplyArr.push(arr[i] * arr[i + 1]);
  }
  return multiplyArr;
}
