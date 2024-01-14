"use strict";

// An ATM only has 100, 50 and 20 dollar bills (USD) available to be dispensed.
// Given an amount between 40 and 10000 dollars (inclusive)
// and assuming that the ATM wants to use as few bills as possible,
// determinate the minimal number of 100, 50 and 20 dollar bills the ATM needs to dispense (in that order)
// Here is the specification for the withdraw method you'll complete

//Declare dispensible dollar notes
let hundredDollarNotes = 0;
let fiftyDollarNotes = 0;
let twentyDollarNotes = 0;
// console.log(hundredDollarNotes)
function withdraw(amount){
    if (amount >= 40 && amount <= 10000){
        
        if (amount >= 100){
            //getting multiples of 50-100
            while(amount >= 150 || amount == 100){
                amount = amount - 100;
                hundredDollarNotes += 1;
            }
        }
        if (amount >= 50){
            //getting multiples of 20-50
            while(amount >= 80 || amount == 50){
                amount -= 50;
                fiftyDollarNotes += 1;
            }
        } if( amount >=20){
            while(amount >= 20){
                amount -= 20;
                twentyDollarNotes += 1;
            }
        }

        
    }

    return [hundredDollarNotes, fiftyDollarNotes, twentyDollarNotes];
    
}

console.log(withdraw(150));