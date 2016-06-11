var _ = require('../node_modules/underscore/underscore-min.js');

// predicate function (returns TRUE or FALSE)
function lessOrEqual(x, y) {
  return x <= y;
}

// higher-order function that takes predicate result and converts to -1, 1, or 0
function comparator(pred) {
  return function(x, y) {
    if (pred(x, y))
      return -1;
    else if (pred(y, x))
      return 1;
    else
      return 0;
  };
};

// FUNCTION CALLS:
// console.log([-108, -6, 100, 1, 0, 10, -1, -2, -1].sort(comparator(lessOrEqual)));
// [-108, -6, -2, -1, -1, 0, 1, 10, 100]

// JavaScript default Array.sort() method
// take note of the incorrect sort
// console.log([-108, -6, 100, 1, 0, 10, -1, -2, -1].sort());
// [-1, -1, -108, -2, -6, 0, 1, 10, 100]