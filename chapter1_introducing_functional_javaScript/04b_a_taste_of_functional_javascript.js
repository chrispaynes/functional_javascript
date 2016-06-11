var _ = require('../node_modules/underscore/underscore-min.js');

// determines if x is not null and therefore exists
function existy(x){
  return x != null 
}

// determines if x is not false and exists
function truthy(x){
  return (x !== false) && existy(x);
}

// creates a condition statements that executes an action on truthy
function doWhen(cond, action){
  if(truthy(cond))
    return action();
  else
    return undefined;
}

// Invokes the "name" argument as a function if a function exists with a matching name
// uses existy() to execute conditionally
function executeIfHasField(target, name){
  return doWhen(existy(target[name]), function(){
    var result = _.result(target, name);
    console.log(["The result is", result].join(" "));
    return result;
  });
}

// FUNCTION CALLS:
// executeIfHasField([1, 2, 3], "reverse");
// The result is 3,2,1

// executeIfHasField({foo: 42}, "foo");
// The result is 42

// executeIfHasField([1, 2, 3], "notHere");
// undefined

// console.log( [null, undefined, 1, 2, false].map(existy) );
// [ false, false, true, true, true ]

// console.log( [null, undefined, 1, 2, false].map(truthy) );
// [ false, false, true, true, false ]

// function loop(){
//   let list = [1,2,3,4,5,6,7,8,9,10];
//   for(i in list){
//     console.log(list[i]);
//   }
// }
// console.log(loop());