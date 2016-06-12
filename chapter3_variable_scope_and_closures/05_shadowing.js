var _ = require('../node_modules/underscore/underscore-min.js');

var shadowed = 55;

function argShadow(shadowed) {
  return ["Value is", shadowed].join(" ");
}

function varShadow(shadowed) {
  var shadowed = 4320000;
  return ["Value is", shadowed].join(" ");
}

// FUNCTION CALLS:

// 108 overrides argShadow()'s shadowed argument
// console.log( argShadow(108) );
// Value is 108

// console.log( argShadow() );
// Value is 

// console.log( varShadow() );
// Value is 4320000

// shadow is declared in the function scope
// any argument placed in varShadow() is overriden within the function scope
// console.log( varShadow(1234) );
// Value is 4320000