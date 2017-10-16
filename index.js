/*var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 80))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var a='bartosz';
  a=a.substr(1,3);
  var b='<html><head><title>dasdas</title></head><body>Hello World!'+a+' xd</body></html>';
  response.send(b);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
*/

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
