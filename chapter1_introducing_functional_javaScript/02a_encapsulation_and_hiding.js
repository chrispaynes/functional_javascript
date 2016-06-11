var _ = require('../node_modules/underscore/underscore-min.js');

var letters = ["a", "b", "c"];

// abstracted error functions
function fail(thing) {
  throw new Error(thing);
}

// abstracts checking if data is a string or array
function isIndexed(data){
  return _.isArray(data) || _.isString(data);
}

// astracts returning an argument's second index value
function second(a){
  return nth(a, 1);
}

// main function
function nth(a, index){
  if(!_.isNumber(index)) fail("Expected a number as the index");
  if(!isIndexed(a)) fail("Not supported on non-indexed type");
  if((index < 0) || (index > a.length - 1))
    fail("Index value is out of bounds");

  return a[index];
}

// FUNCTION CALLS:
// console.log(second(["a", "b"]));
// // b

// console.log(second("fogus"));
// // o

// console.log(second({}));
// // Uncaught Error: Not supported on non-indexed type

// console.log(nth(letters, 1));
// // b

// console.log(nth("abc", 0));
// // a

// console.log(nth({}, 2));
// // Uncaught Error: Not supported on non-indexed type

// console.log(nth(letters, 4000));
// // Uncaught Error: Index value is out of bounds

// console.log(nth(letters, "aaa"));
// // Uncaught Error: Expected a number as the index