var _ = require('../node_modules/underscore/underscore-min.js');

function complement(pred) {
  return function() {
    return !pred.apply(null, _.toArray(arguments));
  };
}

function isEven(n) {
  return (n%2) === 0
}

var isOdd = complement(isEven);

// pattern to use captured variables as private data
var pingpong = (function() {
  var privateVar = 0;

  return {
    inc: function(n) {
      return privateVar += n;
    },
    dec: function(n) {
      return privateVar -= n;
    }
  };
})();

// will not have access to privateVar
pingpong.div = function(n) {
  return privateVar / n;
};

// FUNCTION CALLS:

// console.log( isOdd(2) );
// false

// console.log( isOdd(3) );
// true

// console.log( pingpong.inc(10) );
// 10

// console.log( pingpong.dec(7) );
// 3

// console.log( pingpong.div(3) );
// ReferenceError: privateVar is not defined