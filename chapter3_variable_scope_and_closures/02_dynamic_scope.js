var _ = require('../node_modules/underscore/underscore-min.js');

// global hash map
var globals = { "a": [1], "b":[2] };

function makeBindFun(resolver) {
  return function(k, v) {
    var stack = globals[k] || [];
    globals[k] = resolver(stack, v);
    return globals;
  };
}

// takes a key/value pair and pushes the value onto the global bindings map
// the value is placed at the slot associated with it's key
var stackBinder = makeBindFun(function(stack, v) {
  stack.push(v);
  return stack;
});

// pops the last value binding off the stack associated with a name
var stackUnbinder = makeBindFun(function(stack) {
  stack.pop();
  return stack;
})

// looks up bound values
var dynamicLookup = function(k) {
  var slot = globals[k] || [];
  return _.last(slot);
};

var target = {name: "the right value",
              aux: function() { return this.name },
              act: function() { return this.aux(); }};

// FUNCTION CALLS;
// console.log( stackBinder("c", 3) );
// { a: [ 1 ], b: [ 2 ], c: [ 3 ] }

// console.log( dynamicLookup("b"), globals );
// 2
// { a: [ 1 ], b: [ 2 ], c: [ 3 ] }

// console.log( stackBinder("a", "*") );
// { a: [ 1, '*' ], b: [ 2 ], c: [ 3 ] }

// returns the "last" value in the stack
// console.log( dynamicLookup("a"), globals );
// *
// { a: [ 1, '*' ], b: [ 2 ], c: [ 3 ] }

// to retrieve previous global values, unbind the latest stack bind
// console.log( stackUnbinder("a") && dynamicLookup("a") );
// 1

// console.log( target.act.call("wat") );
// TypeError: this.aux is not a function

// _.bindAll(object, *methodNames) 
// Binds multiple methods to an object
// After binding, methods run within the lexical scope of the object
// console.log( _.bindAll(target, "aux", "act") );
/*
{ name: 'the right value',
  aux: [Function: bound ],
  act: [Function: bound ] }
*/

// console.log( target.act.call("wat") );
// the right value