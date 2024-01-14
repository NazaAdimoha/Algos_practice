"use strict";

// PROBLEM 2

//  Given an integer array and a window of size w, find the current maximum value in the window as it slides through the entire array.

//  Note: If the window size is greater than the array size, we will consider the entire array as a single window.

// Sample input#
// nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// window_size = 3
// Expected output#
// [3, 4, 5, 6, 7, 8, 9, 10]

function findMaxSlidingWindow(nums, windowSize) {
  let result = [];
  //Write your code

  // check if its an empty array
  if (nums.length === 0) {
    return result;
  }
  // check if the window size is greater than the array size
  if (windowSize > nums.length) {
    windowSize = nums.length;
  }

  // Initialize an empty array to store their index
  let window = [];
  // find out max for first window by looping through using the window size
  for (let i = 0; i < windowSize; i++) {
    // for every element, remove the previous smaller element from the window
    while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
      window.pop();
    }
    // Add current element at the back of the queue
    window.push(i);
  }
  // Appending the largest element in the window to the result
  result.push(nums[window[0]]);
  for (let i = windowSize; i < nums.length; i++) {
    // remove all numbers that are smaller than current number
    // from the tail of list
    while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
      window.pop();
    }
    // Remove first index from the window deque if
    // it doesn't fall in the current window anymore
    if (window.length > 0 && window[0] <= i - windowSize) {
      window.shift();
    }
    // Add current element at the back of the queue
    window.push(i);
    result.push(nums[window[0]]);
  }

  return result;
}
console.log(findMaxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
