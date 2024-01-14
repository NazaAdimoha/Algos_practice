'use strict';

const numbersArr = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
// First of i will create a an object of the numbers equivalent
const converter = {
    1 : "I",
    4 : "IV",
    5 : "V",
    9: "IX",
    10 : "X",
    40: "XL",
    50 : "L",
    90 : "XC",
    100 : "C",
    400 : "CD",
    500 : "D",
    900 : "CM",
    1000 : "M"

}

function convertToRomanNumerals (num){
    let output = '';
    let i = 0;
    while (num > 0) {
        const subtract = numbersArr[i];
        if (subtract > num){
            i++;
        } else {
            num -=
        }
    }

    return
}

console.log(convertToRomanNumerals(36));