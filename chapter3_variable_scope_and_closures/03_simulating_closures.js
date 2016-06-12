var _ = require('../node_modules/underscore/underscore-min.js');

// the anonymous function captures whatWasTheLocal()'s captured variable
function whatWasTheLocal() {
  var captured = "local variable";

  return function() {
    return "Here is the " + captured;
  }
}

var reportLocal = whatWasTheLocal();

// takes a scaling factor
// returns a function that maps over a collection of numbers
// multiplies each number by the factor
function createScaleFunction(factorArgument) {
  return function(v) {
    return _.map(v, function(n) {
      return (n * factorArgument);
    });
  };
}

var scale10 = createScaleFunction(10);

// simulates a closure by binding outer function's arguments to "this"
function createWeirdScaleFunction(factorArgument) {
  return function(v) {
    this["factorArgument"] = factorArgument;
    var captures = this;

    return _.map(v, _.bind(function(n) {
      return (n * this["factorArgument"]);
    }, captures));
  };
}

var scale20 = createWeirdScaleFunction(20);

// FUNCTION CALLS
console.log( reportLocal()  );
// Here is the local variable

console.log( scale10([1, 2, 3]) );
// [ 10, 20, 30 ]

console.log( scale20([1, 2, 3]) );
// [ 20, 40, 60 ]