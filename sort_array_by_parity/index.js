"use strict";

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// Return any array that satisfies this condition.

function sortArrayByParity(nums) {
  const even = [];
  const oddNumber = [];
  const addOddAndEven = [];

  //write a for loop to loop through the array of numbers nums
  for (let i = 0; i < nums.length; i++) {
    // write a condition that checks for even numbers
    if (nums[i] % 2 === 0) {
      even.push(nums[i]);
      console.log(even);
    } 

    if (nums[i] % 2 === 1){
        oddNumber.push(nums[i])
        console.log(oddNumber);
    }

    
  }
  addOddAndEven.push(even.concat(oddNumber));
  return addOddAndEven;
}

console.log(sortArrayByParity([3, 1, 2, 4]));
