var http = require('http') // requires http node
 
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8') // sets encoding
  response.on('data', console.log) // log console data
  response.on('error', console.error) // log console error
}).on('error', console.error)

/* ** Below allows for https get request
var http = require('http')
var https = require('https')
 
var url = process.argv[2]
var prefix = url.substring(0,8)
 
if (prefix === 'https://'){
  https.get(url, function (response) {
    response.on('data', function (data) {
      console.log(data.toString());
    })
  })
} else {
  http.get(url, function (response) {
    response.on('data', function (data) {
      console.log(data.toString());
    })
  })
}
*/