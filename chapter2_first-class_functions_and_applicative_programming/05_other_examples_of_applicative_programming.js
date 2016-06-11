var _ = require('../node_modules/underscore/underscore-min.js');

var nums = [100, 2, 25];

function div(x, y) { return x / y };

// FUNCTION CALLS:
// divides starting with the first index value ((100 / 2) / 25)
// console.log(_.reduce(nums, div));
// 2

// divides starting from the last index value ((25 / 2) / 100)
// console.log(_.reduceRight(nums, div));
// 0.125

// returns the first value that passes a truth test 
// console.log( _.find(["a", "b", 3, "d", 300], _.isNumber) );
// 3

// Returns the values in list without the elements that the truth test passes
// this is the opposite of filter
// console.log( _.reject(["a", "b", 3, "d", 300], _.isNumber) );
// [ 'a', 'b', 'd' ]

// checks if all values are a number
// console.log( _.all([1, 2, 3, 4], _.isNumber) );
// true

// checks if any values are a string
// console.log( _.any([1, 2, "c", 4], _.isString) );
// true