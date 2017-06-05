/*

Regarding line 21:
the complexity below is to handle multiple data types

process.argv takes arguments in console returning an array

reduce is a function to initiate a callback, see array.prototype.reduce method

a = input 1, b = input 2, c = result

*/

/*
everything is set to >=2, because index[0] = path to node,
index[1]= path to program.  this would change if accessing something
other than process.argv, which is taking console arguments.  This
needs further understanding/comprehension
*/

var sum = process.argv.reduce(function (a, b, c) { //
  if (c >= 2 && !isNaN(b)) { // if c is greater than or equal to to and not not a number
    return +a + +b // return sum of a and b + symbol in a and b turns a and b into numbers from strings
  } else if (c >= 2) { //if c is greater than 2 but not a number
     return +a + 0; //returns a + 0, a must be 1 or 0
  } else {
     return 0; // only option left is 0
  }
})
 
console.log(sum)