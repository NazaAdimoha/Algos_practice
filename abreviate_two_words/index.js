"use strict";

//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function abrevName(myName) {
    const abrevLetter = [];
    //convert to uppercase letters
    const str = myName.toUpperCase();
    
    //i will split the string
    const newStr = str.split('');
    console.log(newStr);

    abrevLetter.push(newStr[0]);

    //i want to get the second abreviation letter

    // i am looping through the newStr
    for (let i = 0; i < newStr.length; i++){
        if (newStr[i] == ' '){
            const secondLetterAbrev =  newStr[i + 1];
            // console.log(secondLetterAbrev);
            abrevLetter.push(secondLetterAbrev);
        }
        
    }
    return abrevLetter.join('.');
}


console.log(abrevName(("Adimoha Naza")));

// let str = myName.split(' ')
// let res = `${str[0][0]}.${str[1][0]}`
// return res.toUpperCase();

// return `${myName.split(myName.indexOf(''))[0][0]}.`