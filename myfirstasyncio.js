// uses asynchronous setup.  Using callback.  Visit https://github.com/maxogden/art-of-node for info on asynchronous
// async is key component of javascript, do read that article
// alternate of async are promises.  learn more here: http://joecreager.com/what-pinky-and-the-brain-can-teach-us-about-promises-and-currys/

var fs = require('fs')  
var file = process.argv[2]  // creates argument from console as var file
  
fs.readFile(file, function (err, contents) {  
  // fs.readFile(file, 'utf8', callback) can also be used  
  var lines = contents.toString().split('\n').length - 1  
  console.log(lines)  
})

/*
*** This is an alternative solution to avoid "callback hell".  It creates
separates functions over multiple functions.

var fs = require('fs')
var lines = undefined
 
function getLines(callback) {
  fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
    lines = fileContents.split('\n').length - 1
    callback()
  })
}
 
function logLines() {
  console.log(lines)
}
 
function magicNumber() {
  var number = +process.argv[3]
  if (lines >= number){
    console.log('This file has '+number+ ' or more lines')
  } else {
    console.log('This file does not have '+number+' or more lines')
  }
}
 
getLines(logLines)
getLines(magicNumber)
*/