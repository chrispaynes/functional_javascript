var _ = require('../node_modules/underscore/underscore-min.js');

// returns an object's value
function plucker(fieldArgument) {
  return function(obj) {
    return (obj && obj[fieldArgument]);
  };
}

// this becomes the fieldArguments()'s inner anonymous function's "obj" argument
var best = {title: "Infinite Jest", author: "DFW"};

// passes "title" as plucker()'s fieldArgument
var getTitle = plucker("title");

// this becomes the fieldArguments()'s inner anonymous function's "obj" argument
var books = [{title: "Chthon"}, {stars: 5}, {title: "Botchan"}];

// returns books[2]
var third = plucker(2);

// FUNCTION CALLS:

// console.log( getTitle(best) );
// Infinite Jest

// console.log( third(books) );
// { title: 'Botchan' }

// filters out the books, and grabs the book titles
// console.log( _.filter(books, getTitle) );
// [ { title: 'Chthon' }, { title: 'Botchan' } ]