'use strict'

// Array Of Products
//Write a function that takes in a non-empty array of integers and returns an array of the same length,
// where each element in the output array is equal to the product of every other number in the input array.
//In other words, the value at output[i] is equal to the product of every number in the input array other than input[i].

// Sample Input
// [8, 40, 10, 20]
// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 x 4 x 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4


function arrayOfProducts(array) {
    const outputArr = [];
    let product = 1;
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length; j++){
          if(array[i] != array[j]){
            product = product * array[j];
          }
      }
      outputArr.push(product);
      product = 1
    }
    
    return outputArr;
  }

  console.log(arrayOfProducts([1,8,6,2,4]));

  //or 

  function arrayProducts(numbers){
    //I will map through numbers 
    return numbers.map(number => numbers.reduce((a,b) => a * b) / number)
  }

  console.log(arrayProducts([1,8,6,2,4]));