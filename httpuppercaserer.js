/* For this lesson we need to create an HTTP server that only accepts POST requests.  The POST body should be converted to an uppercase string and returned to the client via the server response.  Like the previous lessons, the server should listen on the port provided as the first argument to the program (process.argv[2]).

In the previous lesson we learned a little bit about piping and streaming.  Although it is not required, the use of the request and response streaming APIs will make this lesson much easier.  In addition the, we can use node modules to help us, such as through2-map, which can be used to transform stream data.
*/

var http = require('http')
var map = require('through2-map')
 
var port = process.argv[2]
 
http.createServer(function (request, response) {
  // check to see if request method is POST
  if (request.method === 'POST') {
    // write request status and content type to resposne head
    response.writeHead(200, {'Content-Type': 'text/plain'})
    // stream request to through2-map with pipe()
    request.pipe(map(function (chunk) {
      // convert request to uppercase string
      return chunk.toString().toUpperCase()
      // stream result to response with pipe()
    })).pipe(response)
  } else {
    // write method not allowed error to response header if method not POST
    response.writeHead(405)
  }
}).listen(+port, function () {
  console.log('Server listening on http://localhost:%s', port)
})

/* In the solution above, we are  assigning the http and through2-map modules to the variables http and map.  We are also assigning the first argument to our program to the variable port.

Next, we a create a server and pass a callback function which accepts a request and response as arguments.  Inside of our callback, we are checking to see if the method of the request (request.method) sent to our server is equal to POST.  If it is, we are writing status 200 and the content type to the response head and piping the request to the map() method.

The map() method is passed a callback which accepts chunk as an argument.  Inside of this callback are returning the value of our chuck, which is converted to an uppercase string with the toString() and toUpperCase() methods.  Then we are pining the returned value to the response with the pipe() method.

If the request method is not equal to POST, we are writing status 405 to the response head.  Error code 405 is the error code used if a method is not allowed, such as GET.

Finally, we are listening for the port passed as the first argument to the program, coercing the port to a number using the unary + operator, and logging the server location to the console.

For comparison, the official solution is pasted below.
*/

/*
var http = require('http')
var map = require('through2-map')
 
var server = http.createServer(function (req, res) {
 if (req.method != 'POST')
   return res.end('send me a POST\n')
 
 req.pipe(map(function (chunk) {
   return chunk.toString().toUpperCase()
 })).pipe(res)
})
 
server.listen(Number(process.argv[2]))
*/