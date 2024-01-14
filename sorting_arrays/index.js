'use strict';

const obj = [
    {myName: 'Naza', age: 35},
    {myName: 'Adam', age: 12},
    {myName: 'Eve', age: 16},
    {myName: 'Adam', age: 12},
    {myName: 'Eve', age: 16}
];

obj.sort((myName, age) => {
    return myName.age - age.age
});

obj.forEach((e) => {
    console.log(`Name: ${e.myName}, Age: ${e.age}`);
})