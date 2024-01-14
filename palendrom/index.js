'use strict';
// CHALLENGE: find the number of possible palindromes in the given string
// 'My madam, Hannah loves to teach civic education to 200 level students in the university'

//input strings in an aray
const arr = 'My madam Hannah loves to teach civic education to 200 level students in the university';

// console.log(arr.toString().split(''));
function noOfPalindrome(arr) {
    let count = 0;

    let newArr = arr.toLowerCase().split(' ');
    
    for (let i = 0; i < newArr.length; i++){
        if(newArr[i] === (newArr[i].split('').reverse()).join('')){
            console.log(count++);
        } 
    }
    return count;
}

console.log(noOfPalindrome(arr));