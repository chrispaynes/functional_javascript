var _ = require('../node_modules/underscore/underscore-min.js');

// abstracted error, information, and warning functions
function fail(thing) {
  throw new Error(thing);
}

function warn(thing) {
  console.log(["WARNING:", thing].join(" "));
}

function note(thing) {
  console.log(["NOTE:", thing].join(" "));
}

// main function
function parseAge(age) {
  if (!_.isString(age)) fail("Expecting a string");
  var a;

  note("Attempting to parse an age");
  a = parseInt(age, 10);

  if (_.isNaN(a)) {
    warn(["Could not parse age:", age].join(" "));
    a = 0;
  }

  return a;
}


// FUNCTION CALLS:
// console.log(parseAge("50"));
// NOTE: Attempting to parse an age
// 50

// console.log(parseAge("50.50"));
// NOTE: Attempting to parse an age
// 50

// console.log(parseAge(50));
// Uncaught Error: Expecting a string