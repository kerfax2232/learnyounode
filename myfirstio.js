var fs = require('fs') // requires file sync (fs) module 
       
var contents = fs.readFileSync(process.argv[2]) //contents = reads files, takes argument from console.  see babysteps.js notes for process.argv[2]
var lines = contents.toString().split('\n').length - 1 // We can convert the contents of that buffer object to a string with the toString() method.  From there we can use the split() method to split the string at each new line (‘\n’) and get the length with .length.  Because our file will not will not have a new line delimiter at the end of the last line, we will end up with one extra new line in our count.  But we can just subtract one from our final value to get the correct count.
console.log(lines) // logs the var lines
