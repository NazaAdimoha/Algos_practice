'use strict';

// Given an array of n elements that contains elements from 0 to n-1,
// with any of these numbers appearing any number of times.
// Find these repeating numbers in O(n)
// and using only constant memory space.  

// [1, 2, 3, 6, 3, 6, 1] //input
// [1,3,6] // output

let input = [1, 2, 3, 6, 3, 6, 1];

function storeRepeatedValues (input) {
 
    let sortRepeated = input.sort((a, b) => a.input - b.input);

    return sortRepeated.filter((value, index) => input.indexOf(value) !== index);

}

console.log(storeRepeatedValues(input));



function rev (){
    let str = 'I am a Decadev';
    let splittedString = str.split('').reverse().join('')
    return splittedString;
    // console.log(splittedString);
}

console.log(rev());