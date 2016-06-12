var _ = require('../node_modules/underscore/underscore-min.js');

// performs addition
// the inner function never declares captureArgument so it return its original captureArgument
function makeAdder(captureArgument) {
  return function(free) {
    return free + captureArgument;
  };
}

// returns its own unique instance of captureArgument
var add10 = makeAdder(10);

// returns its own unique instance of captureArgument
var add1024 = makeAdder(1024);

// creates the sum of all numbers and divides by the number of array elements
function average(array) {
  var sum = _.reduce(array, function(a, b) { return a + b});
  return sum / _.size(array);
}

// captures and returns a function
// calcuates the average of a value and the result of passing it to the caputure function
function averageDamp(functionArgument) {
  return function(n) {
    return average([n, functionArgument(n)]);
  }
}

// passes a function to averageDamp()'s functionArgument
// returns averageSq()'s argument multiplied by itself
var averageSq = averageDamp(function(n) { return n * n });

// FUNCTION CALLS

// add10()'s argument is retained and is passed as the "free" argument in makeAdder()'s inner anonymous function
// console.log( add10(32) );
// 42 

// console.log( add1024(11) );
// 1035

// console.log( add10(98) );
// 108

// console.log( averageSq(10) );
// 55