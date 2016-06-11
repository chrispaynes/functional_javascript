var _ = require('../node_modules/underscore/underscore-min.js');


// abstracts checking if data is a string or array
function isIndexed(data){
  return _.isArray(data) || _.isString(data);
}

// returns an array's specific index location
function nth(a, index){
  if(!_.isNumber(index)) fail("Expected a number as the index");
  if(!isIndexed(a)) fail("Not supported on non-indexed type");
  if((index < 0) || (index > a.length - 1))
    fail("Index value is out of bounds");

  return a[index];
}


// reduces a list of values into a nested array.
// adds a newline for every "\n"
function lameCSV(str){
  return _.reduce(str.split("\n"), function(table, row) {
    table.push(_.map(row.split(","), function(c) {
      return c.trim()}));
    return table;
  }, []);
};


var peopleTable = lameCSV("name,age,hair\nMerble,35,red\nBob,64,blonde");

// Returns the rest of the elements in an array.
// returns the first array element (the names)
function selectNames(table){
  return _.rest(_.map(table, _.first));
}

// returns the second array element (the ages)
function selectAges(table){
  return _.rest(_.map(table, 1));
}

// returns each row's third array element (hair color)
function selectHairColor(table){
  return _.rest(_.map(table, function(row){
    return nth(row, 2);
  }));
}

// Merges each array's values with the values at the corresponding index position.
// Useful when combining separate data sources with matching array indexes.
var mergeResults = _.zip;

// FUNCTION CALLS:
// console.log( peopleTable );
// [ [ 'name', 'age', 'hair' ],
//   [ 'Merble', '35', 'red' ],
//   [ 'Bob', '64', 'blonde' ] ]

// console.log( selectNames(peopleTable) );
// [ 'Merble', 'Bob' ]

// console.log( selectAges(peopleTable) );
// [ '35', '64' ]

// console.log( selectHairColor(peopleTable) );
// [ 'red', 'blonde' ]

// console.log( mergeResults(selectNames(peopleTable), selectAges(peopleTable)) );
// [ [ 'Merble', '35' ], [ 'Bob', '64' ] ]