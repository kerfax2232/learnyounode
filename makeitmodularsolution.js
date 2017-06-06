// ** This file is used for getting the solution, but uses information in another file
var filterFn = require('./makeitmodular.js') //require makeitmodular.js file with function
var dir = process.argv[2]
var filterStr = process.argv[3]
 
filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)
 
  list.forEach(function (file) {
    console.log(file)
  })
})