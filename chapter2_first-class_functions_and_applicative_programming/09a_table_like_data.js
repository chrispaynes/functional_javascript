var _ = require('../node_modules/underscore/underscore-min.js');

var library = [{title: "SICP", isbn: "0262010771", ed: 1},
               {title: "SICP", isbn: "0262510871", ed: 2},
               {title: "Joy of Clojure", isbn: "1935182641", ed: 1}];

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

// similar to SQL's "SELECT key FROM table"
// project() mimics the PROJECT statement from relational algebra
// uses _.pick on each array object to extract whitelisted keys
// creates a new object to retain the table abstraction
function project(table, keys) {
  return _.map(table, function(obj) {
    return _.pick.apply(null, construct(obj, keys));
  });
};

var editionResults = project(library, ["title", "isbn"]);

var isbnResults = project(library, ["isbn"])

// FUNCTION CALLS
// returns an array of strings instead of initial table abstraction
// console.log( _.pluck(library, "title") );
// [ 'SICP', 'SICP', 'Joy of Clojure' ]

// console.log( editionResults );
/*
[ { title: 'SICP', isbn: '0262010771' },
  { title: 'SICP', isbn: '0262510871' },
  { title: 'Joy of Clojure', isbn: '1935182641' } ]
*/

// console.log( isbnResults );
/*
[ { isbn: '0262010771' },
  { isbn: '0262510871' },
  { isbn: '1935182641' } ]
*/