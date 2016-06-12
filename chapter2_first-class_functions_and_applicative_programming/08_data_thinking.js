var _ = require('../node_modules/underscore/underscore-min.js');

var zombie = {name: "Bub", film: "Day of the Dead"};
var collection = [{title: "Chton", author: "Anthony"},
                  {title: "Grendel", author: "Gardner"},
                  {title: "After Dark"}];

var library = [{title: "SICP", isbn: "0262010771", ed: 1},
               {title: "SICP", isbn: "0262510871", ed: 2},
               {title: "Joy of Clojure", isbn: "1935182641", ed: 1}];

var person = {name: "Romy", token: "j384jls9", password: "underscore"};

// filters an object's blacklisted key/value pairs
var info = _.omit(person, "token", "password");

// filters an object's to only reveal whitelisted key/value pairs
var creds = _.pick(person, "token", "password")

// FUNCTION CALLS:
// returns the argument's keys
// console.log( _.keys(zombie) );
// [ 'name', 'film' ]

// returns the argument's values
// console.log( _.values(zombie) );
// [ 'Bub', 'Day of the Dead' ]

// extracts a list of property values, based on a property name.
// console.log( _.pluck(collection, "author"));
// [ 'Anthony', 'Gardner', undefined ]

// returns arrays containing key/value pairs
// console.log( _.pairs(zombie) );
// [ [ 'name', 'Bub' ], [ 'film', 'Day of the Dead' ] ]

// uses sequential construction to reassemble a nested key/value array pairs
// console.log( _.object(_.map(_.pairs(zombie), function(pair) {
//   return [pair[0].toUpperCase(), pair[1]];
// })) );
// { NAME: 'Bub', FILM: 'Day of the Dead' }

// flips the key/value pairs
// console.log( _.invert(zombie) );
// { Bub: 'name', 'Day of the Dead': 'film' }

// plucks a value from a list and inserts a property into a key
// console.log( _.pluck(_.map([{title: "Chton", author: "Anthony"},
                    //         {title: "Grendel", author: "Gardner"},
                    //         {title: "After Dark"}],
                    //         function(obj) {
                    //           return _.defaults(obj, {author: "New Author"})
                    //         }),
                    // "author") );

// console.log( info );
// { name: 'Romy' }

// console.log( creds );
// { token: 'j384jls9', password: 'underscore' }

// searches a list and returns the first value that matches all key-value pairs listed in properties.
// console.log( _.findWhere(library, {title: "SICP", ed: 2}) );
// { title: 'SICP', isbn: '0262510871', ed: 2 }

// searches a list and returns an array of all values matches matching all key-value pairs listed in properties.
// console.log( _.where(library, {title: "SICP"}));
/*
[ { title: 'SICP', isbn: '0262010771', ed: 1 },
  { title: 'SICP', isbn: '0262510871', ed: 2 } ]
  */