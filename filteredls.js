var fs = require('fs')
var path = require('path') // node module for paths
 
var folder = process.argv[2]
var ext = '.' + process.argv[3] // need clarification on process.argv[3].  though i think it has to do with file extensions?
 
fs.readdir(folder, function (err, files) { // err = error
  if (err) return console.error(err) // if error is produced, return error to console
  files.forEach(function(file) { 
      if (path.extname(file) === ext) {
          console.log(file) //if path of file = ext variable, log file)
      }
  })
})

/*

***This makes the above more reusable***

var fs = require('fs')
var path = require('path')
 
var dir = process.argv[2]
var filterStr = process.argv[3]
 
function getFiles(dir, filterStr, callback) {
 
  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)
 
    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })
 
    callback(null, list)
  })
}
 
getFiles(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)
 
  list.forEach(function (file) {
    console.log(file)
  })
})
--- Explanation ---
In the solution above, the file system module is passed to the variable fs, and the path module to path.  Then the third and fourth index of the argv property of the process object are assigned to variables, just like the official solution.  Instead of calling the fs.readdir() method directly, A function called getFiles() with the fs.readdir() method inside of it is declared.

The getFiles() function accepts a directory (dir), filter string (filterStr), and a callback function as arguments.  Inside of getFiles(), the fs.readdir() method is called with the variable ‘dir’ and a callback as arguments.  The callback accepts error (err), and list as arguments.  One way to think of this is that the fs.readdir) method will call the callback function when it is done and give it a list.

Inside of the callback the filter() method is used to pass the value of list.filter() the list variable.  The filter() method accepts a callback function as an argument.  The callback accepts file as an argument.  Inside of the callback function, The file is returned to the list variable by checking to see if the file extension is equal to filterStr with the path.extname() method.

Additionally, inside of the callback that fs.readdir() is passed to, the callback is called and passed ‘null’ and the ‘list’ variable.  This is what passes the contents of the list when getFiles is called.

After getFiles() function is declared, it is called it and passed the arguments ‘dir’, ‘filterStr’, and a callback.  The callback function accepts ‘err’ and ‘list’ as arguments.  Inside of the callback errors are checked for and returned if the statement evaluates to true.  The forEach() method is used to loop through the list and passed a callback function to the forEach() method.  Inside of the callback a file from our list variable is passed as an argument and then the contents of the file variable, which has our filename, is printed to the console with the console.log() method.
*/