var _ = require('../node_modules/underscore/underscore-min.js');

var library = [{title: "SICP", isbn: "0262010771", ed: 1},
               {title: "SICP", isbn: "0262510871", ed: 2},
               {title: "Joy of Clojure", isbn: "1935182641", ed: 1}];

// determines if x is not null and therefore exists
function existy(x){
  return x != null 
}

// determines if x is not false and exists
function truthy(x){
  return (x !== false) && existy(x);
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

// renames a key with a new name
function rename(obj, newNames) {
  return _.reduce(newNames, function(o, nu, old) {
    if(_.has(obj, old)) {
      o[nu] = obj[old];
      return o;
    }
    else
      return o;
  },
  _.omit.apply(null, construct(obj, _.keys(newNames))));
};

// renames a key with a new name
// retains the table abstration
function as(table, newNames) {
  return _.map(table, function(obj) {
    return rename(obj, newNames);
  });
};

// takes a function acting as a predicate against each table object
// when the object is falsey, it is disregarded
function restrict(table, pred) {
  return _.reduce(table, function(newTable, obj) {
    if(truthy(pred(obj)))
      return newTable;
    else
      return _.without(newTable, obj);
  }, table);
};


// FUNCTION CALLS:
// console.log( rename({a: 1, b: 2}, {"a": "AAA"}) );
// { b: 2, AAA: 1 }

// console.log( as(library, {ed: "edition"}) );
/*
[ { title: 'SICP', isbn: '0262010771', edition: 1 },
  { title: 'SICP', isbn: '0262510871', edition: 2 },
  { title: 'Joy of Clojure', isbn: '1935182641', edition: 1 } ]
*/

// project() and as() both work against the same table abstraction
// this chains the functions together to create a SQL statement
// console.log( project(as(library, {ed: "edition"}), ["edition"]));
// [ { edition: 1 }, { edition: 2 }, { edition: 1 } ]

/*console.log( restrict(library, function(book) {
                return book.ed > 1;
             })
);*/
// [ { title: 'SICP', isbn: '0262510871', ed: 2 } ]

// creates a "edition" alias for "ed" key
// searches the library for book editions greater than 1
/*console.log( restrict(
              project(
                as(library, {ed: "edition"}),
                ["title", "isbn", "edition"]),
              function(book) {
                return book.edition > 1;
              })
);*/
// [ { title: 'SICP', isbn: '0262510871', edition: 2 } ]
