var _ = require('../node_modules/underscore/underscore-min.js');

var people = [{name: "Rick", age: 30}, {name: "Jaka", age: 24}];

// _.sortBy(list, iteratee, [context]) 
// returns a list copy ranked in ascending order
// the order is determined after running each value through iteratee.
var sort = _.sortBy(people, function(p) { return p.age });


var albums = [{title: "Sabbath Bloody Sabbath", genre: "Metal"},
              {title: "Sainthood", genre: "Indie"},
              {title: "Rust in Peace", genre: "Metal"}];

// _.groupBy(list, iteratee, [context]) 
// returns a list copy, grouped based the iteratee
var group = _.groupBy(albums, function(a) { return a.genre });


// countBy_.countBy(list, iteratee, [context]) 
// sorts a list into groups and returns a count for the number of objects in each group.
// similar to groupBy, but instead of returning a list of values,
// returns a count for the number of values in that group.
var count = _.countBy(albums, function(a) { return a.genre });


// FUNCTION CALLS
// console.log( sort );
// [ { name: 'Jaka', age: 24 }, { name: 'Rick', age: 30 } ]

// console.log ( group );
/*
{ Metal: 
   [ { title: 'Sabbath Bloody Sabbath', genre: 'Metal' },
     { title: 'Rust in Peace', genre: 'Metal' } ],
  Indie: [ { title: 'Sainthood', genre: 'Indie' } ] }
*/

// console.log ( count );
// { Metal: 2, Indie: 1 }