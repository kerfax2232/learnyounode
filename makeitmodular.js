// ** This file lays the info out for the solution file for make it modular module in LYN
var fs = require('fs')
var path = require('path')
 
module.exports = function (dir, filterStr, callback) {
 
  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)
 
    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })
 
    callback(null, list)
  })
}