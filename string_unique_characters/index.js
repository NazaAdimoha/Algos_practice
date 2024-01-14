//write a program to determine if a string contains unique characters... 
//Return true if it does, and return false, if it doesnt...
//The string may contain one of any of the 128 ASCII characters.

const hasUniqueCharacters = s => {
    let uniqueValues = "";
    let str = s.toLowerCase().split("").join();

    for (let i = 0; i < str.lenght; i++){
        if(uniqueValues.includes(str[i]) === false){
            return true;
        } else {
            return false;
        }
    }

    return true;
}

console.log(hasUniqueCharacters("abcdeffg"));

// let num =  "1,715.16";
// let num2 = num.split(',').join('');
// console.log(num2);








