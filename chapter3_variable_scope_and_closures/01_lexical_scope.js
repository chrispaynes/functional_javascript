var _ = require('../node_modules/underscore/underscore-min.js');

// Outer/Global
aVariable = "Outer Global Scope";

// Middle
function afun(){
  var aVariable = "Middle Scope"

// Inner
// Variable lookup begins here
  return _.map([1, 2, 3], function(e) {
    var aVariable = "Inner Scope";

    return [aVariable, e].join(" ");
  });
}

// FUNCTION CALLS:
// console.log( afun() );
// console.log( afun );