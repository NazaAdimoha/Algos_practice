'use strict';

// Given an array of positive integers representing the values of coins in your possession,
// write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create.
// The given coins can have any positive integer value and aren't necessarily unique
// (i.e., you can have multiple coins of the same value).
// For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4.
// If you're given no coins, the minimum amount of change that you can't create is 1.


// const arr = [];


// function minAMountOfChange(arr){
// //i want to sort the array of coins
//     const arr1 = arr.sort((a,b) => a - b);
//     // console.log(arr1);

// //i want to create a variable for change already created, since will increment it
// let changeCreated = 0;
// //loop through the array to check if the elements in the array is greater than the variable change to be created

// arr1.forEach(element => {
    
//     if(element > changeCreated + 1){
//         return changeCreated + 1;
//     } else {
//     changeCreated += element
//     }
// });

// return changeCreated + 1;
// }


// function minAMountOfChange(array) {
//     array.sort((a,b) => a - b);
    
//     let change = 0;
//     array.forEach(el => {
//         let count = change + 1;
//         if (el > count){
//             return count
//         }else {

//         }
//     })

// }

// console.log(minAMountOfChange([2,5,1]));

