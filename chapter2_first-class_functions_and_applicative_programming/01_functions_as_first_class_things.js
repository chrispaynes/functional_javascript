var _ = require('../node_modules/underscore/underscore-min.js');

// function stored in a variable
var fortytwo = function() {
  return 42
};

// function stored in an array slot
var fortytwosA = [42, function() { return 42}];

// function stored in an object field
var fortytwosB = {number: 42, fun: function() { return 42 }};


// HIGHER-ORDER FUNCTIONS
// take a function as an argument
// return a function as a result

// addition with functions
var sum = 42 + (function() { return 42 })();

// a function passed into a function
// the n argument holds a number
// the f argument holds a function
// adds n to the value return from calling f
function weirdAdd(n, f) { return n + f() };


// FUNCTION CALLS:
// _.each(["whiskey", "tango", "foxtrot"], function(word){
//   console.log(word.charAt(0).toUpperCase() + word.substr(1));
// });
// Whiskey
// Tango
// Foxtrot

// console.log( fortytwo() );
// 42

// console.log( fortytwosA[1]() );
// 42

// console.log( fortytwosB.fun() );
// 42

// console.log( sum );
// 84

// console.log( weirdAdd(42, function() {return 42} ));
// 84