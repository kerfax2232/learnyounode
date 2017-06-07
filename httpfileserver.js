/* The official solution differs only slightly.  The key difference is that after the createServer() method is called, 
the writeHead() method is called inside of a callback function that is passed to the createServer() method as an argument.  
The data that is written to the head is the http success code (200), as well as a JSON object which contains the content 
type.  This really is the best practice.  If you wanted to you could take this a step further and also write the content 
length the the response head by using the length() method to calculate the length of your data.
*/
var http = require('http')
var fs = require('fs')
 
var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })
 
  fs.createReadStream(process.argv[3]).pipe(res)
})
 
server.listen(Number(process.argv[2]))

/* Solution from blog writer.  But this also includes a write-up describing
most of the solution.

The solution I came up with is very similar to the official solution.  I am passing the http and fs modules to the variables http and fs.  
In addition, I am passing the first and second arguments (process.argv[2] and process.argv[3]) to my program to the variables port and 
file.  It is not necessary to pass either arguments to a variable.  However, I find that it is helpful for bringing context and readability to my program by naming the purposes of those arguments.

After declaring my variables, I am using the http.createServer() method and passing a callback function as an argument.  The callback function takes two arguments called request and response.  
Inside of my callback function, I am using the fs.createReadStream() method to to stream my file to memory.  Then I am passing that stream to the response object of my callback function with 
the pipe() method.  Finally, I am listening on the port that is passed to my program via process.argv[3] with the http.listen() method.  Rather than calling method below createServer(), I am 
appending it to the end of the http.createServer method with the signature http.createServer().listen().  Inside of the listen() method, I am also passing a callback function as an argument.  
When a connection is made, my callback function logs the url of my server to the console and tells the user that the server is listening.

It is worth mentioning that I often times see folks placing the ‘server is listening’ message outside of a callback function.  As far as I know, this is not the correct way to go about it 
because the server is listening message may be logged to the console before the server is actually listening.  It is best to place this message in a callback so that your end user knows 
that the server is actually listening.
*/

/*
var http = require('http')
var fs = require('fs')
 
var port = process.argv[2]
var file = process.argv[3]
 
http.createServer(function (request, response) {
  fs.createReadStream(file).pipe(response)
}).listen(+port, function () {
  console.log('Server listening on http://localhost:%s', port)
})
*/

