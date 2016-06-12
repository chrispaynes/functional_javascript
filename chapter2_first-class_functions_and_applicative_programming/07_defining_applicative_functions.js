var _ = require('../node_modules/underscore/underscore-min.js');

// determines if x is not null and therefore exists
function existy(x){
  return x != null 
}

// designates the first array as the "head"
// if the head exists, it is concatenated with the remaining arguments
function cat() {
  var head = _.first(arguments);
  if (existy(head))
    return head.concat.apply(head, _.rest(arguments));
  else
    return [];
}

// combines the head and tail into one array
function construct(head, tail) {
  return cat([head], _.toArray(tail));
}

// calls cat() on each collection element
// concats into a list
function mapcat(fun, coll) {
  return cat.apply(null, _.map(coll, fun));
}

// removes the trailing comma from the collection
function butLast(coll) {
  return _.toArray(coll).slice(0, -1);
}
// inserts the "inter" argument between the collection item
function interpose(inter, coll) {
  return butLast(mapcat(function(e) {
    return construct(e, [inter]);
  },
  coll));
}

// FUNCTION CALLS:
// console.log( cat([1,2,3], [4,5], [6,7,8]));
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// console.log( construct(42, [1, 2, 3]) );
// [ 42, 1, 2, 3 ]

// take note of the extraneous trailing comma
// console.log( mapcat(function(e) {
  // return construct(e, [","]);
// }, [1,2,3]) );
// [ 1, ',', 2, ',', 3, ',' ]

// console.log( interpose(",", [1, 2, 3]) );