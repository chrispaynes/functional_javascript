var _ = require('../node_modules/underscore/underscore-min.js');

// MAP, REDUCE, FILTER

var nums = [1, 2, 3, 4, 5];

// maps over each array element and multiplies it by 2
function doubleAll(array) {
  return _.map(array, function(n) {
    return n * 2
  });
}

// creates the sum of all numbers and divides by the number of array elements
function average(array) {
  var sum = _.reduce(array, function(a, b) { return a + b});
  return sum / _.size(array);
}

// filters out odd values
function onlyEven(array) {
  return _.filter(array, function(n) {
    return (n%2) === 0;
  });
}

// FUNCTION CALLS:
// console.log( doubleAll(nums) );
// [ 2, 4, 6, 8, 10 ]

// console.log( average(nums) );
// 3

// console.log( onlyEven(nums) );
// [ 2, 4 ]