var _ = require('../node_modules/underscore/underscore-min.js');

// determines if x is not null and therefore exists
function existy(x){
  return x != null 
}

// determines if x is not false and exists
function truthy(x){
  return (x !== false) && existy(x);
}

// FUNCTION CALLS:
// console.log( existy(null) );
// false

// console.log( existy(undefined) );
// false

// console.log( existy({}.notHere) );
// false

// console.log( existy((function(){})()) );
// false

// console.log( existy(0) );
// true

// console.log( existy(false) );
// true

// console.log( truthy(null) );
// false

// console.log( truthy(123) );
// true

// console.log( truthy(false) );
// false

// console.log( truthy(undefined) );
// false

// console.log( truthy(" ") );
// true