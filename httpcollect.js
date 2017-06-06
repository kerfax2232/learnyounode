/* In the official solution, the buffer list (bl) module is used.  The response from 
the GET request is piped to the bl method using the .pipe() method.  The buffer list 
accepts a callback as an argument and exposes the data in the buffer object with the 
main node buffer object.  It is not necessary to use buffer list module to complete this task.  
However, it is worth knowing about because the buffer list module includes a number of useful 
prototype methods in its API such as bl.get() which returns bytes at the specified index and bl.slice() 
which returns a new buffer object with bytes in the specified range.  These methods are useful for manipulating 
buffer streams.  To learn more about the buffer list module, refer to the module API documentation on getHub.
 
 *** Unable to use this as "bl" module can't be found.  All online forums say npm isn't installed,
 but it does show up using npm -v and can confirm nodejs is working.  :. I'm using the alternate solution
 this problem as I'm unable to find the answer to this problem.  I've also tried manually installing
 with npm install bufferlist, but to no avail

var http = require('http')
var bl = require('bl') // bl node = buffer list
 
http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err) // returns console log error
    data = data.toString() // converts data to string
    console.log(data.length)
    console.log(data)
  }))
})
*/

/* The alternate solution adds the response body to the body variable 
when a data event occurs.  When the response.on(‘end’) method encounters 
the end event, the body and the length of the body are logged to the console.

*** See note above this comma'd out section for why this solution is used.
*/
var http = require('http')
var url = process.argv[2]
var body = ''
 
http.get(url, function (response) {
  response.on('data', function (chunk) {
    body += chunk
  })
  response.on('end', function () {
    console.log(body.length)
    console.log(body)
  })
})