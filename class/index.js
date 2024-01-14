'use strict';

// function identifier() {
//   throw Error('1');
// }
// (function (parameter) {
// })(); // IIFE - Immediately Invoked Function Expression
this; // context
arguments;
// function foo() {
//   console.log(arguments);
//   console.log(arguments[0]);
// }
function foo(parameterSomething, ...args) {
  console.log(args);
}
foo(1, 2, 3, 4, 5);
// Addition
function addition(...numbers) {}
function myFunc(param1) {
  param1();
}
function log() {
  return 1;
}
const a = function () {}
myFunc(log);
myFunc(() => {});
myFunc(a);
myFunc(log());