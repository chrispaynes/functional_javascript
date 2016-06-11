var _ = require('../node_modules/underscore/underscore-min.js');

// returns a method chain
// Invokes interceptor with the object, and then returns object.
// taps into the method chain to perform operations on intermediate results within the chain.
function lyricSegment(n) {
  return _.chain([])
    .push(n + " bottles of beer on the wall")
    .push(n + " bottles of beer")
    .push("Take one down, pass it around")
    .tap(function(lyrics) {
      if (n > 1)
        lyrics.push((n - 1) + " bottles of beer on the wall.");
      else
        lyrics.push("No more bottles of beer on the wall!");
    })
  .value();
}

// range_.range([start], stop, [step]) 
// creates flexibly-numbered lists of integers
// decrements by 1 from 5 to 0
// assembles the verse using the current interger value 
function song(start, end, lyricGen){
  return _.reduce(_.range(start, end, -1),
    function(acc, n) {
      return acc.concat(lyricGen(n));
    }, []);
}

// FUNCTION CALLS:
// console.log( lyricSegment(9) );
/*[ '9 bottles of beer on the wall',
  '9 bottles of beer',
  'Take one down, pass it around',
  '8 bottles of beer on the wall.' ]*/

// console.log( song(5, 0, lyricSegment) );
/*[ '5 bottles of beer on the wall',
  '5 bottles of beer',
  'Take one down, pass it around',
  '4 bottles of beer on the wall.',
  '4 bottles of beer on the wall',
  '4 bottles of beer',
  'Take one down, pass it around',
  '3 bottles of beer on the wall.',
  '3 bottles of beer on the wall',
  '3 bottles of beer',
  'Take one down, pass it around',
  '2 bottles of beer on the wall.',
  '2 bottles of beer on the wall',
  '2 bottles of beer',
  'Take one down, pass it around',
  '1 bottles of beer on the wall.',
  '1 bottles of beer on the wall',
  '1 bottles of beer',
  'Take one down, pass it around',
  'No more bottles of beer on the wall!' ] */