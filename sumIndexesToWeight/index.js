'use strict';

// Problem: Given the array arr, find and return two indices of the array that add up to weight
// or return -1 if there is no combination that adds up to weight

function findSum (arr, weight){
    const arr1 = arr;
    for(let i = 0; i < arr1.length - 1; i++){
        for(let j = (i + 1); j < arr1.length; j++){
            if(arr1[i] + arr1[j] === weight){
                return [i, j];
            }
        }
    }
    return -1
}

console.log(findSum([1,2,3,4,5], 9));